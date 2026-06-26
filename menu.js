import { BLOGS } from './blogs.js';

const iframeStyles = `
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background-color: #090d16;
            color: #94a3b8;
            line-height: 1.7;
            padding: 2.5rem;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
        }
        h2 {
            font-size: 1.6rem;
            font-weight: 700;
            color: #c084fc;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(139, 92, 246, 0.15);
            padding-bottom: 0.5rem;
        }
        sub {
            font-size: 0.85rem;
            color: #60a5fa;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 600;
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
            background-color: rgba(139, 92, 246, 0.15);
            color: #e9d5ff;
            padding: 0.15rem 0.35rem;
            border-radius: 6px;
            font-size: 0.9em;
            border: 1px solid rgba(139, 92, 246, 0.25);
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
