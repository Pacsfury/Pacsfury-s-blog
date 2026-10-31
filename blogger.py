
import markdown
import sys
import os
from datetime import date
from pathlib import Path
import json

# guard clauses
if len(sys.argv) < 2:
    print("No file specified — please specify a file to transpile."); sys.exit(1)

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
# todo add a way to skip this; attach no tags
tags  = input("List the tags you would like to attach, separated by a comma.\n~> ")

date = date.today().strftime('%Y-%m-%d')
post_id = get_id_from_title(given_title)
content = get_html(given_file)
tags = tags.split(",")
tags = [tag.capitalize() for tag in tags]

post = {
    "id": post_id,
    "title": given_title,
    "date": date,
    "tags": tags,
    "content": content
}

print("Post:")
print(post)

# append post to blogs

# read
with open("blogs.json", "r") as f:
    blogs_content = json.load(f)

# append post to the blogs array
blogs = blogs_content["blogs"]

# check for a duplicate post
for blog in blogs:
    if blog["id"] == post_id:
        print("Looks like you're trying to upload a duplicate post.")
        print("A post with that ID already exists.")
        sys.exit(1)

blogs.append(post)

# # write
with open("blogs.json", "w") as f:
    json.dump(blogs_content, f, indent=2)


print("Successfully uploaded post!"
      "The next steps are to run `git add .`, `git commit -m 'added post'`, and `git push`")
