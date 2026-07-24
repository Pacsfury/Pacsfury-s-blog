export const BLOGS = [
    {
        "title": "What I learned with Gravel",
        "date": "2026-07-24",
        "content": `
            <p>In the last blog, I talked about how the first Gravel release went. Now, after some new releases, I look back to see what I learned from Gravel.</p>

            <h2>About Coding</h2>
            <p>Coding may be where I have learned the most, as I have learned the base of the C programming language, as well as optimizations and better logic and problem solving.</p>
            <p>But despite all the learning made with C itself, I also continued my path to understanding what is being done under the hood, which gave me a truly useful lesson on not just how programming languages work, but also about how to expand and design them properly.</p>

            <h2>About Contributing</h2>
            <p>Right now, Gravel has 4 contributors and 5 forks. Even though the PRs aren't continuous, dealing with these is a skill worth having.</p>
            <p>I have received pull requests on other repositories, and they are not that difficult to handle. Just check if it's correct and merge. But there is a key detail missing here: you need PRs to come. This is why I created a lot of issues, and especially the first day, it seemed to work pretty well.</p>
            <p>After receiving some PRs, the cool thing is making sure that these are ok, as I found some PRs that were editing a wrong file, for example. But after that, having (and being) collaborators is a really cool and needed experience.</p>
            <h2>About Languages</h2>
            <p>For this project, I needed a lot of ideas to come over. I needed to learn from how compilers work internally to how a programming language changes the result's shape.</p>
            <p>For this last reason, I spent a lot of time thinking about what I didn't like about other languages: difficult to add libraries, too slow, too complex... and from all these ideas, the first Gravel prototypes came, and after some days or weeks of writing Gravel on paper, I decided to finally open the editor and code it. But I needed to decide one last thing: what programming language to use.</p>
            <p>Before Gravel, I made some programming languages, but all of these had the same quirks: were made in Python, so they were slow, they used <code>.startswith</code>, so they were difficult to maintain, and the syntax was hence complex and strange. For these reasons, I decided to use a low level language, while at that moment I was just learning to code in C. So I decided to use that language to learn more about it, as at that moment I had just started with some basic pointer theory.</p>
            <p>Even though the final product was in C, the first basic prototype I coded was in Python, just to test the syntax.</p>

        `
    },
    {
        "title": "Releasing first version of Gravel",
        "date": "2026-07-01",
        "content": `
            <h2>The Objective</h2>
            <p>With Gravel I wanted to make a fast and reliable programming language, while also being
            clean and powerful. Simple but concise and consistent syntax all across the language.</p>
            <p>I wanted Gravel to be my programming language, the one that adapts to me and to everyone,
            making programming things easier for people.</p>
            
            <h2>What Worked</h2>
            <p>Today I released the first version. A small, but crucial one. The first line can now go 
            from tokenization to LLVM.</p>
            <p>What worked is easy: making LLVM output a single character, using <code>scho</code>. After
            some debugging, it came out perfectly as expected.</p>
            <p>Also, you can now use a provisional syntax for creating variables, which will be later 
            used when Gravel compiles files, not a line.</p>
            
            <h2>What Failed</h2>
            <p>Since the first day, Gravel has been challenging. But the level of difficulty increased when 
            I found several bugs during scho implementation.</p>
            <p>First of all, I didn't do a pull, so some old changes I was being supported by, really 
            weren't there. This caused bugs such as using scho as a name and not as a keyword.</p>
            <p>After this small incident was fixed, I continued the implementation, until I realized that 
            the character wasn't converted to an integer, which is crucial for LLVM.</p>
            <p>I didn't know what happened when I used wrong syntax, and I tried without knowing. It was 
            strangely freezing, no output, no "done". I really spent some minutes trying to figure out what 
            was happening there.</p>
            <p>Also, I found some linker errors, but these were easier as I just needed to close the 
            terminal.</p>
            
            <h2>What Would I Have Changed</h2>
            <p>From the start, I would now put a better debugging system. This would have saved me from some
            struggles.</p>
            <p>I would have made better token management, creating TOKEN and KW instead of just 
            TOKEN.</p>
            <p>Also, I would have liked to improve error messages to make the creation process more 
            enjoyable.</p>
            <p>Not doing changes from GitHub directly would have really helped me. Also, from the first 
            moment I would have a dev branch instead of creating it mid development, making creation and 
            development easier.</p>
            
            <h2>What's Coming Now</h2>
            <p>This is a small roadmap of what I'm planning to implement on new releases.</p>
            <p>First, I want the compiler to read a file and tokenize the file instead of having a single
            <code>tokenize</code> function.</p>
            <p>I need to make support for actual variables, as the actual syntax is temporary and not the 
            wanted one.</p>
            <p>Right now, the LLVM file always has what is necessary for executing scho. In next updates I 
            will make it so that it's only added once and if and where needed.</p>
            <p>Finally, next updates will include more features and optimizations.</p>

        `
    },
    {
        "title": "Why AI will (not) kill developers",
        "date": "2026-06-28",
        "content": `
            <p>A lot of people are currently claiming that you shouldn't code, because AI can code better and programmers and developers will no longer be needed. In this blog, I will explain to you my opinion about this, and try to convince you that coding is still worth it.</p>
            <h2>"AI will code faster and better than most developers"</h2>
            <p>Maybe AI can create a "guess the number" game for you, but AI can't create new software nor ideas. AI is only good at copying. This will make programming necessary, but deleting the necessity to memorize repetitive or standard code blocks, letting programmers create better products.</p>
            <h2>"With AI, human programming will die"</h2>
            <p>No it won't. As Microsoft's CEO, Satya Nadella, said "Just as Excel made anyone an analyst, AI makes anyone a developer", saying that AI makes basic creation easier, but also helps creating more difficult applications on real-world projects. He emphasizes that it's important to know how to prompt and know the terminology and logic under the hood to lead to better AI responses, always with the needed human revision.</p>
            <p>Google's CEO, Sundar Pichai, said "Our engineers are orchestrating fully autonomous digital task forces, firing off agents, and accomplishing incredible things", stating that Google's programmers are increasingly AI code revisors and problem-solvers more than typers, making the whole project more enjoyable.</p>
            <p>As we have seen, multiple important people agree that AI won't kill programmers, and just for an example, when Google Translate came out, book translators didn't disappear, and when calculators were invented, mathematicians, instead of vanishing, did better things as they no longer had to do calculations themselves.</p>
            <h2>"Why you should start learning to code today"</h2>
            <p>If you think that learning to code now is a waste of time, you are completely wrong. Coding is not just about typing lines of code, it is about logic and problem-solving. AI can give you answers, but you need to know what questions to ask. Learning to program today will give you the superpower to control AI instead of being controlled by it.</p>
            <p>NVIDIA's CEO, Jensen Huang, recently said "We have closed the technology divide. Everyone is a programmer now. You just have to say something to the computer", meaning that the barrier to entry is lower than ever. This doesn't mean developers are useless, it means that you can bring your ideas to life much faster without wasting months learning basic syntax.</p>
            <h2>Conclusion</h2>
            <p>In conclusion, AI is not an enemy, it is the best assistant a developer can have. Programmers who use AI will replace programmers who don't. So don't hesitate and start your coding journey today, because the future of software creation is brighter than ever, and humans will always be the ones driving the innovation.</p>
            `
    },
    {
        "title": "How Do Computers Work? pt 1",
        "date": "2026-06-27",
        "content": `
            <p>I have created two computers so far, and I think it's a good idea to explain how they work under the hood, as they are quite simple.</p>
            <h2>ALU and Registers</h2>
            <sub>Operations and small memory</sub>
            <p>ALU (Arithmetic-Logic Unit) is designed to do all types of operations (sum, xor, and, etc.), usually using registers. Registers are small units of memory. To write to a register, usually an operation (like <code>mov</code> or <code>ldi</code>) is used to save a value, or perform an operation, as results are saved in registers.</p>
            <h2>Ports</h2>
            <sub>Where the coolness begins</sub>
            <p>I know I'm skipping some parts, but ports are the best part of computers. They let you communicate with other devices (such as a screen or mouse), making a computer more than a calculator or a memory changing machine.</p>
            <p>You can write to ports or read to a register, and by doing this, you can draw pixels, detect a mouse click, and whatever you want!</p>
            <p>That's all for the first post! If you liked it I will make part 2, with an interactive computer to understand how they work!</p>
        `
    },
    {
        "title": "Hello, World!",
        "date": "2026-06-26",
        "content": `
            <p>Welcome to my first blog! On this webpage, I will be putting different ideas, post-mortems, projects, etc. This will be my place to talk about my ideas.</p>
            <h2>How does this work?</h2>
            <sub>The engine behind the scenes</sub>
            <p>This webpage is built entirely on vanilla HTML, CSS and JS. In the <code>blogs.js</code> file you can see all my blogs. <code>menu.js</code> is the one that shows and manages the blogs in the menu.</p>
            <p>The blog content is put inside an iframe, so expect some interactive things down here!</p>
            <h2>Why and what</h2>
            <p>I'm building this because I want a place to explain my ideas easily and write about what I do.</p>
            <p>As I said, here I will put ideas, conclusions, examples, demonstrations and various content.</p>
        `
    }
];