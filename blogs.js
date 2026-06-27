export const BLOGS = [
    {
        "title": "How Do Compuers Work? pt 1",
        "date": "2026-06-27",
        "content": `
            <p>I have created two computers so far, and I think it's a good idea to explain how they work under the hood, as they are quite simple.</p>
            <h2>ALU and Registers</h2>
            <sub>Operations and small memory</sub>
            <p>ALU (Arithmethic-Logical Unit) is designed to do all types of operation (sum, xor, and, etc), usually using registers. Registers are small units of memory. To write at register, usually a operation (like <code>mov</code> or <code>ldi</code>) to save a value, or an operation, as results are saved on registers.</p>
            <h2>Ports</h2>
            <sub>Where the coolness begin</sub>
            <p>I know I'm skipping some parts, but ports are the best part of compuerts. It lets you communicate with other devices (as screen or mouse), making a compuer more than a calculator or a memory changing machine.</p>
            <p>You can write at ports or read to a register, and making this, you can draw pixels, detect a mouse click, and whatever you want!</p>
            <p>That's all for first post! If you liked it I will make part 2, with a interactive computer to understand how they work!</p>
        `
    },
    {
        "title": "Hello, World!",
        "date": "2026-06-26",
        "content": `
            <p>Welcome to my first blog! In this webpage, I will be putting different ideas, post-mortems, projects, etc. This will be my place to talk about my ideas.</p>
            <h2>How does this work?</h2>
            <sub>The engine behind the scenes</sub>
            <p>This webpage is built entirely on vanilla HTML, CSS and JS. In the <code>blogs.js</code> file you can see all my blogs. <code>menu.js</code> is the one that shows and manages the blogs in the menu.</p>
            <p>The blog content is put inside an Iframe, so expect some interactive things down here!</p>
            <h2>Why and what</h2>
            <p>I'm building this because I want a place to explain my ideas easily and write about what I do.</p>
            <p>As I said, here I will put ideas, conclutions, examples, demonstrations and various content.</p>
        `
    }
];
