
import json
import os
import subprocess
import sys
import tempfile
from datetime import date
from pathlib import Path

import markdown

# guard clauses
if len(sys.argv) < 2:
    print("No file specified — please specify a file to transpile."); sys.exit(1)


def read_blogs():
    with open("blogs.json", "r") as r:
        return json.load(r)


def write_to_blogs(blogs):
    with open("blogs.json", "w") as w:
        json.dump(blogs, w, indent=2)

def blogs_has_post(post_id):
    return any(b["id"] == post_id for b in read_blogs()["blogs"])

def remove_post(post_id):
    blogs_content = read_blogs()

    # ask for confirmation if the post exists
    if blogs_has_post(post_id):
        confirmation = input(f"Are you sure you want to remove {post_id}? [Y/n] ").lower()
        if confirmation not in ["y", ""]:
            sys.exit(1)

    kept = [b for b in blogs_content["blogs"] if b["id"] != post_id]
    removed = len(blogs_content["blogs"]) - len(kept)

    if removed:
        blogs_content["blogs"] = kept
        write_to_blogs(blogs_content)
        return True
    else:
        return False


# blogger remove <post>
if len(sys.argv) == 3 and sys.argv[1] == "remove":
    if remove_post(sys.argv[2]):
        print("Successfully removed post. Remember to commit your changes!")
        sys.exit(0)
    else:
        print("No post with that ID exists — "
              "consider checking your spelling, and remember this searches by ID, not title.")
        sys.exit(1)

if len(sys.argv) == 2 and sys.argv[1] == "remove":
    print("Please specify a post ID to remove.")


# opens up a text editor so the user can edit the given text — to be used in edit_post
def open_in_editor(text):
    editor = os.environ.get("EDITOR", "nano")  # respect $EDITOR, fall back to nano

    with tempfile.NamedTemporaryFile(suffix=".tmp", mode="w", delete=False) as f:
        f.write(text)
        tmp_path = f.name

    try:
        subprocess.run([editor, tmp_path], check=True)
        with open(tmp_path) as f:
            return f.read()
    finally:
        os.unlink(tmp_path)


# edit the contents of a given post
def edit_post(post_id):
    if not blogs_has_post(post_id):
        print(f"No post with ID {post_id} exists. Remember that we search by ID, not title.")
        sys.exit(1)

    blogs_content = read_blogs()
    target_post = next(b for b in blogs_content["blogs"] if b["id"] == post_id)

    original_content = target_post["content"]

    new_content = open_in_editor(original_content)

    # write new_content to the post and whatnot
    target_post["content"] = new_content
    write_to_blogs(blogs_content)

    print("Successfully edited the post! Remember to commit your changes!")


if len(sys.argv) == 3 and sys.argv[1] == "edit":
    edit_post(sys.argv[2])
    sys.exit(0)

given_file = sys.argv[1]


if not os.path.exists(given_file):
    print(f"File {given_file} does not exist."); sys.exit(1)

if os.path.getsize(given_file) == 0:
    print(f"File {given_file} is empty."); sys.exit(1)

# if extension isn't .md
# we let the user choose to keep going, however, because extensions are just a construct.
if not Path(given_file).suffix == ".md":
    print("Looks like you didn't pass in a markdown file."
          "Are you sure you want to use this file? File: ", given_file)
    if input("Are you sure? [y/n] ") != "y":
        sys.exit(1)


# markdown to html
def get_html(file):
    return markdown.markdown(open(file).read())


# if not being run in the right directory
if not os.path.exists("blogs.json"):
    print("Blogger is intended to be ran in the blogs directory."
        "Please cd into that directory and then rerun Blogger.")


def get_id_from_title(title):
    return "-".join(title.lower().split())


# gather information
given_title = input("What would you like to title this post?\n~> ")
# todo: add a way to skip this; attach no tags
tags  = input("List the tags you would like to attach, separated by a comma.\n~> ")

# gather or source all data needed for a post
date = date.today().strftime('%Y-%m-%d')
post_id = get_id_from_title(given_title)
content = get_html(given_file)
tags = tags.split(",")
tags = [tag.capitalize().strip() for tag in tags]

post = {
    "id": post_id,
    "title": given_title,
    "date": date,
    "tags": tags,
    "content": content
}

# read
blogs_content = read_blogs()

# append post to the blogs array
blogs = blogs_content["blogs"]

# check for a duplicate post
if any(b["id"] == post_id for b in blogs):
    print("Looks like you're trying to upload a duplicate post.")
    print("A post with that ID already exists.")
    sys.exit(1)

blogs.insert(0, post)

# write
write_to_blogs(blogs_content)


print("Successfully uploaded post!"
      "The next steps are to run `git add .`, `git commit -m 'added post'`, and `git push`")
