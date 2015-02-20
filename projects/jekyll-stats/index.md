---
title: "Jekyll Stats"
layout: page
---

{% assign getPosts = site.posts %}
{% assign getLinkPosts = site.posts | where:"linkpost","true" %}
{% assign getPages = site.pages | where:"layout","page" %}

{% assign postsCount = getPosts.size %}
{% assign linkPostsCount = getLinkPosts.size %}
{% assign articlesCount = postsCount | minus: linkPostsCount %}
{% assign pagesCount = getPages.size %}

{% assign postsWordCount = 0 %}
{% assign longestWordCount = 0 %}
{% for posts in getPosts %}
    {% assign postWordCount = posts.content | number_of_words %}
    {% assign postsWordCount = postsWordCount | plus:postWordCount %}
    {% if postWordCount > longestWordCount %}
        {% assign longestWordCount = postWordCount %}
    {% endif %}
{% endfor %}

{% assign averageWordCount = postsWordCount | divided_by:postsCount %}

- This site has **{{ postsCount }}** posts (**{{ articlesCount }}** articles and **{{ linkPostsCount }}** link posts) and **{{ pagesCount }}** pages.
- Posts contain a total of **{{ postsWordCount }}** words.
- That’s an average of **{{ averageWordCount }}** words per post.
- The longest post is **{{ longestWordCount }}** words.

Get the liquid markup that generates these stats on [GitHub](https://raw.githubusercontent.com/danleech/danleech.com/gh-pages/projects/jekyll-stats/index.md).