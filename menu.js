import { BLOGS } from './blogs.js';

const tagClasses = {
    'Long Text': 'blog-tag-long-text',
    'Gravel': 'blog-tag-gravel',
    'Not that long': 'blog-tag-not-that-long',
    'Announcement': 'blog-tag-announcement'
};

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
        details {
            background: #fcfcf8;
            border: 3px solid #0f172a;
            box-shadow: 5px 5px 0px #0f172a;
            margin-top: 1rem;
            transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        details[open] {
            transform: translate(2px, 2px);
            box-shadow: 3px 3px 0px #0f172a;
        }
        summary {
            padding: 1rem;
            font-weight: 800;
            font-size: 1.1rem;
            cursor: pointer;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid transparent;
            background: #fcfcf8;
            transition: background 0.1s ease;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        summary:hover {
            background: #facc15;
        }
        details[open] summary {
            border-bottom: 3px solid #0f172a;
            background: #ffffff;
        }
        summary::after {
            content: '+';
            font-size: 1.3rem;
            font-weight: 900;
            background: #ffffff;
            border: 2px solid #0f172a;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 0px #0f172a;
        }
        summary:hover::after {
            background: #ffffff;
        }
        details[open] summary::after {
            content: '−';
            background: #facc15;
        }
        .details-content {
            padding: 1.25rem;
            background: #ffffff;
            font-size: 1rem;
            color: #0f172a;
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

function init() {
    const container = document.getElementById('blog-container');
    const searchContainer = document.getElementById('search-container');

    function setBlogInUrl(blogId) {
        const url = new URL(window.location.href);

        if (blogId) {
            url.searchParams.set('blog', blogId);
        } else {
            url.searchParams.delete('blog');
        }

        window.history.replaceState(null, '', url);
    }

    function renderFeed() {
        searchContainer.hidden = false;
        container.innerHTML = '';

        BLOGS.forEach(blog => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';

            postElement.innerHTML = `
                <h1 class="blog-title">${blog.title || 'No title'}</h1>
                <p class="blog-date">${blog.date || 'No date'}</p>
            `;

            const tagsElement = document.createElement('div');
            tagsElement.className = 'blog-tags';
            tagsElement.setAttribute('aria-label', 'Tags');
            blog.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = `blog-tag ${tagClasses[tag] || ''}`;
                tagElement.textContent = tag;
                tagsElement.appendChild(tagElement);
            });
            postElement.appendChild(tagsElement);

            postElement.addEventListener('click', () => {
                renderBlog(blog);
            });

            container.appendChild(postElement);
        });
    }

    function renderBlog(blog, updateUrl = true) {
        if (updateUrl) {
            setBlogInUrl(blog.id);
        }

        searchContainer.hidden = true;
        container.innerHTML = '';

        const backButton = document.createElement('div');
        backButton.className = 'back-link';
        backButton.innerHTML = '&larr; Back to Articles';
        backButton.addEventListener('click', () => {
            setBlogInUrl(null);
            renderFeed();
        });

        const shareButton = document.createElement('button');
        shareButton.className = 'share-button';
        shareButton.type = 'button';
        shareButton.textContent = 'Share';

        const shareStatus = document.createElement('span');
        shareStatus.className = 'share-status';
        shareStatus.setAttribute('aria-live', 'polite');

        shareButton.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: blog.title,
                        url: window.location.href
                    });
                    shareStatus.textContent = 'Shared!';
                } else {
                    await navigator.clipboard.writeText(window.location.href);
                    shareStatus.textContent = 'Link copied!';
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    shareStatus.textContent = 'Could not share this link.';
                }
            }
        });

        const actions = document.createElement('div');
        actions.className = 'blog-actions';
        actions.append(backButton, shareButton, shareStatus);

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
        container.appendChild(actions);
        container.appendChild(wrapper);
    }

    const requestedBlogId = new URLSearchParams(window.location.search).get('blog');
    const requestedBlog = BLOGS.find(blog => blog.id === requestedBlogId);

    if (requestedBlog) {
        renderBlog(requestedBlog, false);
    } else {
        renderFeed();
    }


    // the user can either click the button or press enter to search for posts
    const searchForPosts = (tag) => {
        const posts = [...document.querySelectorAll('#blog-container .blog-post')]

        posts.forEach(post => {
            const tagsText = post.querySelector('.blog-tags')?.textContent.toLowerCase() ?? ''
            const isMatch = tagsText.includes(tag)

            // display posts with a matching tag; hide others
            post.style.display = isMatch ? 'block' : 'none'
        });
    }

    // search for posts
    document.getElementById('search-button').addEventListener('click', () => {
        const tagInput = document.getElementById('search-input').value.trim().toLowerCase()
        searchForPosts(tagInput)
    });

    // press enter
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const tagInput = document.getElementById('search-input').value.trim().toLowerCase()
            searchForPosts(tagInput)
        }
    })

    // reset the view after searching
    document.getElementById('reset-view').addEventListener('click', () => {
        document.getElementById('search-input').value = '' // clear text field
        renderFeed() // re-render all posts
    })

    // read a random post
    document.getElementById('random-post').addEventListener('click', () => {
        const posts = [...document.querySelectorAll('#blog-container .blog-post')]
        const randomPost = posts[Math.floor(Math.random() * posts.length)]

        // see the post's content
        randomPost.click()
    })
}

if (document.readyState === 'loading') {
    // DOM hasn't finished parsing yet — the event is still coming
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM already finished parsing (we arrived late because of the fetch)
    init();
}
