import blogsData from '../data/blogs';

/**
 * Get all blog articles
 * @returns {Array} Array of all blog articles
 */
export const getAllBlogs = () => {
  return blogsData.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
};

/**
 * Get a blog article by slug
 * @param {string} slug - The blog slug
 * @returns {Object|null} Blog article or null if not found
 */
export const getBlogBySlug = (slug) => {
  return blogsData.find(blog => blog.slug === slug) || null;
};

/**
 * Get featured blog articles
 * @returns {Array} Array of featured blog articles
 */
export const getFeaturedBlogs = () => {
  return blogsData.filter(blog => blog.featured);
};

/**
 * Get blogs by category
 * @param {string} category - The category to filter by
 * @returns {Array} Array of blog articles in the specified category
 */
export const getBlogsByCategory = (category) => {
  return blogsData.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
};

/**
 * Get blogs by tag
 * @param {string} tag - The tag to filter by
 * @returns {Array} Array of blog articles with the specified tag
 */
export const getBlogsByTag = (tag) => {
  return blogsData.filter(blog => blog.tags.includes(tag));
};

/**
 * Get all unique categories
 * @returns {Array} Array of unique categories
 */
export const getAllCategories = () => {
  const categories = blogsData.map(blog => blog.category);
  return [...new Set(categories)];
};

/**
 * Get all unique tags
 * @returns {Array} Array of unique tags
 */
export const getAllTags = () => {
  const tags = blogsData.flatMap(blog => blog.tags);
  return [...new Set(tags)];
};

/**
 * Get recent blog articles
 * @param {number} limit - Number of recent articles to return (default: 3)
 * @returns {Array} Array of recent blog articles
 */
export const getRecentBlogs = (limit = 3) => {
  return getAllBlogs().slice(0, limit);
};

/**
 * Search blogs by title, excerpt, or content
 * @param {string} query - Search query
 * @returns {Array} Array of matching blog articles
 */
export const searchBlogs = (query) => {
  const searchTerm = query.toLowerCase();
  return blogsData.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.excerpt.toLowerCase().includes(searchTerm) ||
    blog.content.toLowerCase().includes(searchTerm) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

/**
 * Format date for display
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}; 