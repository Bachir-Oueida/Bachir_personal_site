// Content Parser Utility for Easy Blog Management
// This utility helps you easily add blog content with images

export const parseContent = (rawContent) => {
  // Convert plain text content to proper HTML with image handling
  let content = rawContent;
  
  // Handle image placeholders like "image-name.jpg" and convert them to proper img tags
  content = content.replace(
    /([a-zA-Z0-9-_]+\.(jpg|jpeg|png|gif|webp))/g,
    '<img src="/images/$1" alt="Blog image" class="blog-content-image" />'
  );
  
  // Handle image placeholders with descriptions like "image-name.jpg - Description"
  content = content.replace(
    /([a-zA-Z0-9-_]+\.(jpg|jpeg|png|gif|webp))\s*-\s*([^\n]+)/g,
    '<img src="/images/$1" alt="$3" class="blog-content-image" /><p class="image-caption">$3</p>'
  );
  
  // Convert plain text paragraphs to HTML paragraphs
  content = content.replace(/\n\n/g, '</p><p>');
  
  // Wrap content in paragraph tags if not already wrapped
  if (!content.startsWith('<')) {
    content = `<p>${content}</p>`;
  }
  
  // Clean up any double paragraph tags
  content = content.replace(/<\/p><p><\/p>/g, '</p>');
  
  return content;
};

// Helper function to create a new blog post easily
export const createBlogPost = ({
  title,
  excerpt,
  rawContent,
  image = "/images/default-blog.jpg",
  author = "Bachir Oueida",
  category = "Luxury Real Estate",
  tags = [],
  featured = false,
  readTime = "3 min read"
}) => {
  // Auto-generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
  
  // Parse the content
  const content = parseContent(rawContent);
  
  // Auto-generate read time based on content length
  const wordCount = rawContent.split(/\s+/).length;
  const estimatedReadTime = Math.ceil(wordCount / 200); // Average 200 words per minute
  
  return {
    id: Date.now(), // Auto-generate ID
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    publishedDate: new Date().toISOString().split('T')[0], // Today's date
    category,
    tags,
    featured,
    readTime: readTime || `${estimatedReadTime} min read`
  };
};

// Template for quick blog creation
export const blogTemplate = `
// Quick Blog Template - Copy and paste this, then fill in the details:

const newBlog = createBlogPost({
  title: "YOUR BLOG TITLE HERE",
  excerpt: "A brief description of your blog post that will appear in previews.",
  rawContent: \`
    Your blog content goes here. You can write in plain text and it will be converted to HTML automatically.
    
    To add images, simply write the image filename like this: your-image.jpg
    Or with a caption: your-image.jpg - This is the image caption
    
    You can also use HTML directly if needed:
    <h2>Subheading</h2>
    <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
    
    Add more paragraphs by leaving blank lines between them.
    
    For lists:
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  \`,
  image: "/images/your-featured-image.jpg", // Featured image for the blog
  category: "Luxury Sales", // Category: Luxury Sales, Market Analysis, Investment Guide, etc.
  tags: ["Tag1", "Tag2", "Tag3"], // Relevant tags
  featured: true, // Set to true to feature this blog
  readTime: "5 min read" // Optional, will auto-calculate if not provided
});
`; 