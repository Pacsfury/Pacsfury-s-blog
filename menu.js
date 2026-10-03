import { BLOGS } from './blogs.js';

const iframeStyles = `
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background-color: #ffffff;
            color: #0f172a;
            line-height: 1.7;
            padding: 2.5rem;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: #0f172a;
            letter-spacing: -0.02em;
        }
        h2 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #0f172a;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            border-bottom: 4px solid #facc15;
            padding-bottom: 0.3rem;
            display: inline-block;
        }
        h3 {
            font-size: 1.3rem;
            font-weight: 800;
            color: #0f172a;
            margin-top: 1.75rem;
            margin-bottom: 0.75rem;
        }
        sub {
            font-size: 0.85rem;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 700;
            display: block;
            margin-top: -0.5rem;
            margin-bottom: 1.5rem;
        }
        p {
            margin-bottom: 1.5rem;
            font-size: 1.05rem;
        }
        code {
            font-family: 'Fira Code', Consolas, Monaco, monospace;
            background-color: #facc15;
            color: #0f172a;
            padding: 0.2rem 0.4rem;
            border-radius: 0px;
            font-size: 0.9em;
            font-weight: 600;
            border: 2px solid #0f172a;
        }
        blockquote {
            background: #f8fafc;
            border: 3px solid #0f172a;
            box-shadow: 4px 4px 0px #facc15;
            padding: 1.25rem;
            margin: 1.5rem 0;
            font-style: italic;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 1.5rem auto;
            border: 3px solid #0f172a;
            border-radius: 0px;
            box-shadow: 6px 6px 0px #facc15;
        }
    </style>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('blog-container');

    function renderFeed() {
        container.innerHTML = '';

        BLOGS.forEach(blog => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';

            postElement.innerHTML = `
                <h1 class="blog-title">${blog.title || 'No title'}</h1>
                <p class="blog-date">${blog.date || 'No date'}</p>
            `;

            postElement.addEventListener('click', () => {
                container.innerHTML = '';

                const backButton = document.createElement('div');
                backButton.className = 'back-link';
                backButton.innerHTML = '&larr; Back to Articles';
                backButton.addEventListener('click', renderFeed);

                const wrapper = document.createElement('div');
                wrapper.className = 'iframe-wrapper';

                const content = document.createElement("iframe");
                
                content.srcdoc = `
                    <!DOCTYPE html>
                    <html>
                    <head>${iframeStyles}</head>
                    <body>
                        <h1>${blog.title || 'No title'}</h1>
                        ${blog.content || ''}
                    </body>
                    </html>
                `;

                wrapper.appendChild(content);
                container.appendChild(backButton);
                container.appendChild(wrapper);
            });

            container.appendChild(postElement);
        });
    }

    renderFeed();
});
