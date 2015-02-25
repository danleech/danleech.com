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

- This site has **<span class="separate-thousands">{{ postsCount }}</span>** posts (**<span class="separate-thousands">{{ articlesCount }}</span>** articles and **<span class="separate-thousands">{{ linkPostsCount }}</span>** link posts) and **<span class="separate-thousands">{{ pagesCount }}</span>** pages.
- Posts contain a total of **<span class="separate-thousands">{{ postsWordCount }}</span>** words.
- That’s an average of **<span class="separate-thousands">{{ averageWordCount }}</span>** words per post.
- The longest post is **<span class="separate-thousands">{{ longestWordCount }}</span>** words.

Get the Liquid markup that generates these stats on [GitHub](https://raw.githubusercontent.com/danleech/danleech.com/gh-pages/projects/jekyll-stats/index.md).