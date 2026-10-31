const text = await fetch('./blogs.json')
const blog_content = await text.json()

const blogs = blog_content.blogs

console.log("Content:")
console.log(blog_content)

console.log("Blogs:")
console.log(blogs)

export const BLOGS = blogs
