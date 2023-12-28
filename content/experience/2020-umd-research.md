+++
title = "UMD Research Internship"
date = "2022-01-05T19:11:27-05:00"
dateRange = "Summer 2020"
author = "ksam"
authorTwitter = "" #do not include @
cover = ""
tags = ["research", "machine-learing", "internship", "latex", "python", "combinatorics"]
keywords = []
description = "A research internship I did on combinatorics and machine learning."
showFullContent = false
readingTime = false
weight = 4
+++

## Summary

- Researched the use of reinforcement learning algorithms with Ramsey Games under Dr. William Gasarch
- Developed an implementation of reinforcement learning algorithms in Python with PyTorch
- Worked with a team to study the use of reinforcement learning in other game variants

## Research

Over the summer of 2020, I interned under Dr. William Gasarch at the University of Maryland. Despite being a high school student, I worked with others in the REU-CAAR program on combinatorics and machine learning. I focused on Ramsey numbers and games and applying various forms of machine learning to them.

Ramsey numbers describe the minimum size of a graph in which it cannot have a clique of a certain size where the edges are all the same color. We know the first few Ramsey numbers, but they grow in complexity very rapidly. Proofs can be convoluted and complex, but would it be possible to train machine learning models to prove them for us? Ramsey games involve two agents who color edges on a graph in turns to create a clique of a certain size. If a clique can be created, then the graph's size is not a Ramsey number for the given clique size. Therefore, if we train machine learning models to play these games and have them play them on different graphs, we may be able to rule out certain Ramsey numbers. I focused on the first step: is it possible to train machine learning models to play these games and which type is the most efficient?

Using pytorch in python, I created 4 different types of models: Monte Carlo Tree Search, Tabular Q-Learning, Deep Q-Learning, and Graph Neural Networks. Using networkx, I developed an implementation of Ramsey games and trained these models to play Ramsey games. I evaluated their performance on multiple metrics: the number of moves, win rate, mean time taken to make a move, memory used, average loss.

After performing the tests, I analyzed the results. Using XeTeX, I wrote a paper describing my research, methods, results, and conclusions. I created plots and figures using matplotlib. I also created a presentation and poster, both in LaTeX, using Beamer. This was my first project using LaTeX and I really enjoyed it. Despite a bit of a steep learning curve and setup, it produced professional and clean looking results and I didn't have to worry about formatting as much. I presented the presentation to my school in January of 2021, and my poster at ScienceMontgomery, where I was awarded an Honorable Mention in the CS category.

## Links

- [Paper](/files/umd-research-paper.pdf)
- [Presentation](/files/umd-research-presentation.pdf)
- [Poster](/files/umd-research-poster.pdf)
