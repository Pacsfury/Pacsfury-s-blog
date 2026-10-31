export const BLOGS = [
    {
        "id":"c-will-not-die",
        "title": "Why C Won't Die",
        "date": "2026-10-31",
        "tags": ["Long Text", "Not that long"],
        "content": `
            <p>In recent years, a lot of new programming languages have been made as a "replacement for C". In this post, I want to share my point of view on the topic.</p>

            <h2>But what are the alternatives?</h2>

            <p>There have been a lot of alternatives to C, all of them trying to fix a specific part of it. The most famous ones are:</p>
            <ul>
            <li><strong>Rust</strong>: Wants to fix memory safety without a garbage collector.</li>
            <li><strong>Zig</strong>: Wants to be simple and transparent about what it does.</li>
            <li><strong>Go</strong>: A modern alternative for systems and networked services. It trades absolute bare-metal control for a garbage collector and powerful built-in concurrency.</li>
            </ul>

            <p>There are some more, like C3, Nim, or D.</p>

            <h2>Which has more potential?</h2>

            <p>Right now, the most famous one is, without a doubt, Rust. It uses a unique <em>borrow checker</em> tracking system to guarantee compile-time memory safety.</p>

            <p>It has, though, a pretty steep learning curve if you are coming from C/C++, because there are so many new things to learn and understand about memory safety that C just <em>doesn't have</em>.</p>

            <p>Zig has also become really popular, as has Go, but this last one is used more for backend and concurrent systems than low-level programming like Rust.</p>

            <h2>But then, why won't C die?</h2>

            <p>Rust is safer, and Zig has a built-in C compiler. This seems like the end of the C programming language. But I think not.</p>

            <p>C is the foundation of all modern software. Most AI frameworks are used in Python, which is written in C. The same goes for the Linux kernel and a lot of other kernels, operating systems, and languages.</p>

            <p>And for the future? C will still be needed. Sometimes we need speed, but also a freedom that Rust does not give (let me decide how I want my enums!), or a simplicity that neither Rust nor Zig truly has.</p>

            <h2>Greenfield vs. Legacy: The Reality of Software</h2>

            <p>It is easy to start a new project in Rust or Zig today and praise its advantages. However, rewriting billions of lines of existing C code is economically and practically impossible.</p> 

            <p>Companies prefer to maintain stable, decade-old C codebases rather than risk introducing new bugs during a rewrite. This means that even if no one wrote a single new line of C from today onwards, C developers would still be needed for the next 30 to 40 years just to maintain the infrastructure of the world.</p>

            <h2>The Universal Language of Software</h2>

            <p>There is another reason C won't die: its ABI (Application Binary Interface). Almost every modern programming language—including Rust, Python, and Go—knows how to talk to C code out of the box.</p> 

            <p>C is the "lingua franca" of computing. If you want to connect two different systems, you usually do it through a C interface. Ironically, to be successful, newcomers like Zig and Rust have to spend a lot of effort being backward-compatible with C. C doesn't need to adapt to them; they must adapt to C.</p>

            <h2>Conclusion: Evolution, Not Extinction</h2>

            <p>In the end, languages like Rust or Zig won't kill C; they will coexist with it. C will remain the bedrock of legacy systems, compilers, and ultra-low-level hardware, while newer languages will be used to build the secure, high-performance layers on top of it. C isn't dying; its role is just evolving from "the only systems language" to "the foundation of all systems."</p>

        
        `
    },
    {
        "id": "adding-tags",
        "title": "Adding Tags",
        "date": "2026-10-12",
        "tags": ["Announcement"],
        "content": `
            <sub>Adding tags to blog entries</sub>
            <p>As I announced in the last long text, I was planning to add <i>tags</i> to every blog entry. In this short announcement, I will explain the current tags and what they are in a FAQ section.</p>

const text = await fetch('./blogs.json')
const blog_content = await text.json()

const blogs = blog_content.blogs

console.log("Content:")
console.log(blog_content)

console.log("Blogs:")
console.log(blogs)

export const BLOGS = blogs
