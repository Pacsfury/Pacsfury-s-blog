# Pacsfury's blog
---

## The idea
This is a special repo for me. 

It's my place to write, explain and think. Here, I want to put my ideas, results, demonstrations, interactive content, etc.

Just a sandbox for me.

## The engine
The engine is completely vanilla:
+ 🔴 HTML
+ 🔵 CSS
+ 🟡 JS, no frameworks

The file `menu.js` searches all blogs, displays and shows the content when you click the card.
Each blog has a stable `id` in `blogs.js`. Open a blog directly by adding its ID to the URL, for example `menu.html?blog=adding-tags` or `menu.html?blog=art-better-uix`.

```
main/
| README.md   => Explanation of the project
| blogs.js    => Includes all the blogs data
| menu.html   => Main menu, where all blogs are shown
| menu.js     => Menu logic: reads `blogs.js` and puts the cards in `menu.html`
| style.css   => Style for the blogs
```

More info in the `Hello, World!` post.

## How to open
To open my blogs, use Github Pages or a Live Server (don't use `file://` for CORS restrictions, as `menu.js` imports from `blogs.js`).

## Contributing

Feel free to make a pull request using this pipeline:
1. Fork this repository
2. Create a branch (`git checkout feature/cool`)
3. Push all changes to the branch
4. Do a pull request to this repository

# Blogger

Blogger is an interface created to make hosting static blogs easier. You can find more information inside `blogger.md`

