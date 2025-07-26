// Content Scraper and Formatter Utility
// This utility helps you easily copy content from other websites and format it beautifully

export const formatCopiedContent = (rawContent) => {
  let content = rawContent;
  
  // Clean up common issues from copied content
  content = content
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove common website artifacts
    .replace(/Share this article|Read more|Continue reading|Advertisement|Ad/g, '')
    // Clean up line breaks
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
  
  return content;
};

export const extractImagesFromContent = (content) => {
  // Find image URLs in the content
  const imageRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/gi;
  const images = [];
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    images.push({
      url: match[1],
      filename: match[1].split('/').pop()
    });
  }
  
  return images;
};

export const createBlogFromCopiedContent = ({
  title,
  excerpt,
  rawContent,
  sourceUrl = '',
  image = "/images/default-blog.jpg",
  author = "Bachir Oueida",
  category = "Luxury Real Estate",
  tags = [],
  featured = false
}) => {
  // Format the content
  let content = formatCopiedContent(rawContent);
  
  // Auto-generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
  
  // Extract and process images
  const images = extractImagesFromContent(content);
  
  // Convert content to proper HTML
  content = convertToHTML(content, images);
  
  // Auto-generate read time
  const wordCount = rawContent.split(/\s+/).length;
  const estimatedReadTime = Math.ceil(wordCount / 200);
  
  return {
    id: Date.now(),
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    publishedDate: new Date().toISOString().split('T')[0],
    category,
    tags,
    featured,
    readTime: `${estimatedReadTime} min read`,
    sourceUrl
  };
};

const convertToHTML = (content, images) => {
  let html = content;
  
  // Convert paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  
  // Wrap in paragraph tags
  if (!html.startsWith('<')) {
    html = `<p>${html}</p>`;
  }
  
  // Add proper headings
  html = html.replace(/^(.*?)\n/g, '<h2>$1</h2>\n');
  
  // Add image placeholders for extracted images
  images.forEach((img, index) => {
    const placeholder = `[IMAGE_${index + 1}]`;
    html = html.replace(placeholder, 
      `<img src="${img.url}" alt="Blog image ${index + 1}" class="blog-content-image" />
      <p class="image-caption">Image from source</p>`
    );
  });
  
  // Clean up any double tags
  html = html.replace(/<\/p><p><\/p>/g, '</p>');
  
  return html;
};

// Template for copying content from websites
export const copyContentTemplate = `
// ========================================
// COPY CONTENT FROM WEBSITE TEMPLATE
// ========================================
//
// 1. Go to the website you want to copy from
// 2. Select all the content (Ctrl+A or Cmd+A)
// 3. Copy it (Ctrl+C or Cmd+C)
// 4. Paste it in the rawContent field below
// 5. The system will automatically format it beautifully!
//
// Example:
const newBlog = createBlogFromCopiedContent({
  title: "LUXURY PENTHOUSE SOLD FOR RECORD PRICE",
  excerpt: "Brief description of the article",
  rawContent: \`
    [PASTE YOUR COPIED CONTENT HERE]
    
    The system will automatically:
    - Format paragraphs properly
    - Handle images with captions
    - Apply beautiful styling
    - Generate proper HTML structure
  \`,
  sourceUrl: "https://original-website.com/article", // Optional: credit the source
  image: "/images/your-featured-image.jpg",
  category: "Luxury Sales",
  tags: ["Luxury", "Record Sale", "Penthouse"],
  featured: true
});

// Then add to blogsData array:
// blogsData.push(newBlog);
// ========================================
`;

// Quick formatting helpers
export const quickFormat = {
  // Format a simple text article
  text: (content) => {
    return content
      .split('\n\n')
      .map(para => `<p>${para.trim()}</p>`)
      .join('\n');
  },
  
  // Format with images
  withImages: (content, images) => {
    let formatted = content;
    images.forEach((img, index) => {
      formatted += 
        `<img src="${img.url}" alt="${img.alt || 'Blog image'}" class="blog-content-image" />
        <p class="image-caption">${img.caption || ''}</p>`;
    });
    return formatted;
  },
  
  // Format with headings
  withHeadings: (content) => {
    return content
      .replace(/^([A-Z][^.!?]*[.!?])\n/g, '<h2>$1</h2>\n')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<h2>)/, '<p>')
      .replace(/([^>])$/, '$1</p>');
  }
}; 