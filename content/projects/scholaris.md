+++
title = "Scholaris"
date = "2022-01-05T19:10:37-05:00"
author = "ksam"
authorTwitter = "" #do not include @
cover = ""
tags = ["python", "cli"]
keywords = []
description = ""
showFullContent = false
readingTime = false
weight = 4
+++

## Summary

- Developed a simple CLI application to get my grade information from an API and calculate different grades

## Background

In my senior year of high school, my school district changed their grade displaying system. The new one was less than ideal and old apps to calculate and display grade information no longer worked. When I found out that the new system had an API, I decided to make my own version.

## Implementation

I had just learned about [Rich](https://github.com/Textualize/rich) and wanted to {{< sidenote text="try it out" id="try-it-out" >}} Rich is amazing to use. If you haven't tried it out, I recommend you do! {{</sidenote>}} so I used that to make the CLI. I used the StudentVue library to get grade data.

The main functionality I wanted to implement was modifying the grades of current assignment and being able to add future assignments and see what my grade would be. It was fairly easy to do us and thanks to Rich's color support, I was able to make using it clear.

## Links

- [GitHub](https://github.com/kandasamyc/scholaris)
