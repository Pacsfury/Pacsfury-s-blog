# Blogger

Blogger is an interface to make blogging without a server easier.
Before the advent of Blogger, we were writing raw JSON and HTML — as you could guess, that sucked.

Blogger allows you to write your posts in Markdown
and have them automatically converted to HTML and added to a JSON file.

To use Blogger, make sure you're in the blogs directory and then run:
```shell
python blogger.py <markdown file>
```

(If you're running macOS or a GNU/Linux distro then you might use `python3` instead of `python`)

Blogger will then ask you two questions and then you'll have a new post uploaded.
Naturally, if you're using GitHub Pages, you'll still have to commit/push the changes.