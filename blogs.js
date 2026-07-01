export const BLOGS = [
    {
        "title": "Releasing first version of Gravel",
        "date": "2026-07-01",
        "content": `
            <h2>The Objective</h2>
            <p>With Gravel I wanted to make a fast and reliable programming language, while also being
            clean and powerful. Simple but conscise and consistent syntax all across the language.</p>
            <p>I wanted Gravel to be my programming language, the one that adapts to me and to everyone,
            making programming things easier for people.</p>
            
            <h2>What Worked</h2>
            <p>Today I released the first version. A small, but crucial one. The first line can now go 
            from tokeniation to LLVM.</p>
            <p>What worked is easy: making LLVM output a single character, using <code>scho</code>. After
            some debugging, it came out perfectly as expected.</p>
            <p>Also, you can now use a provisional syntax for creating variables, which will be later 
            used when Gravel compiles files, not a line.</p>
            
            <h2>What Failed</h2>
            <p>Since first day, Gravel has been challenging. But the level of difficulty increased when 
            found several bugs during scho implementation.</p>
            <p>First of all, I didn't do a pull, so some old changes I was being supported by, really 
            weren't there. This caused bugs such using scho as a name and not as a keyword.</p>
            <p>After this small incident fixed, I continued the implementation, until I realized that 
            the character wasn't converted to an integer, which is crucial for LLVM.</p>
            <p>I didn't know what happened when used wrong syntax, and I tried without knowing. It was 
            strangely freezing, no output, no "done". I really spent some minutes trying to figure out 
            was happening there.</p>
            <p>Also, I found some linker errors, but these were easier as I just needed to close the 
            terminal.</p>
            
            <h2>What Would I Have Changed</h2>
            <p>From the start, I would now put a better debugging system. This would have avoided me some
            struggles.</p>
            <p> would have made better token management, creating TOKEN and KW instead of just 
            TOKEN.</p>
            <p>Also, I would have liked to improve errors messages to make creation process more 
            enjoyable.</p>
            <p>Not doing changes from Github directly would have really helped me. Also, from the first 
            moment I would have a dev branch instead of creating it mid development, making creation and 
            development easier.</p>
            
            <h2>What's Coming Now</h2>
            <p>This is a small roadmap of what I'm plannign to implement on new releases.</p>
            <p>First, I want the compiler to read a file and tokenize the file instead of having a single
            <code>tokenize</code> function.</p>
            <p>I need to make support for actual variables, as the actual syntax is temporal and not the 
            wanted one.</p>
            <p>Right now, the LLVM file always has the necessary for executing scho. In next updates I 
            will make that it's only added once and if and where needed.</p>
            <p>Finally, next updates will include more features and optimitzations.</p>

        `
    },
    {
        "title": "Why AI will (not) kill developers",
        "date": "2026-06-28",
        "content": `
            <p>A lot of people is currently claiming that you shouldn't code, because AI can code better and programmers and developers will be no longer needed. In this blog, I will explain you my opinion obout this, and try to convinde you that coding is still worth it.</p>
            <h2>"AI will code faster and better than most developers"</h2>
            <p>Maybe AI can create you a "guess the number" game, but AI can't create new software nor ideas. AI is only good at copying. This will make programming encessary, but deleting the necessity to memorize repetitive or standard code blocks, letting programmers create better products.</p>
            <h2>"With AI, human programming will die"</h2>
            <p>No it won't. As Microsoft's CEO, Satya Nadella, said "Just as Excel made anyone an analyst, AI makes anyone a developer", saying that AI makes basic creation easier, but also helps creating more difficult applications on real-world projects. He emphatizes that it's important to know how to prompt and know the terminology and logic under the hood to lead to better AI responses, always with the needed human revision.</p>
            <p>Google's CEO, Sundar Pichai, said "Our engineers are orchestrating fully autonomous digital task forces, firing off agents, and accomplishing incredible things", stating that Google's programmers every time are more AI code revisors and problem-solvers more than typers, making the whole project mroe enjoyable.</p>
            <p>As we have seen, multiple important people agree that AI won't kill programmers, and just for an example, when Google translator went out, book translators didn't disappear, and when calculators where invented, mathematicians, instead of vanishing, they did better things as no longer had to do calculations themselves.</p>
            <h2>"Why you should start learning to code today"</h2>
            <p>If you think that learning to code now is a waste of time, you are completely wrong. Coding is not just about typing lines of code, it is about logic and problem-solving. AI can give you answers, but you need to know what questions to ask. Learning to program today will give you the superpower to control AI instead of being controlled by it.</p>
            <p>NVIDIA's CEO, Jensen Huang, recently said "We have closed the technology divide. Everyone is a programmer now. You just have to say something to the computer", meaning that the barrier to entry is lower than ever. This doesn't mean developers are useless, it means that you can bring your ideas to life much faster without wasting months learning basic syntax.</p>
            <h2>Conclusion</h2>
            <p>In conclusion, AI is not an enemy, it is the best assistant a developer can have. Programmers who use AI will replace programmers who don't. So don't hesitate and start your coding journey today, because the future of software creation is brighter than ever, and humans will always be the ones driving the innovation.</p>
            `
    },
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
