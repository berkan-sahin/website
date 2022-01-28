---
title: "A Fresh Start (or How I Learned to Stop Worrying and Love Hugo)"
date: 2022-01-24T13:41:19+03:00
draft: false
---

If you remember the old version of `bsahin.xyz`, you probably remember a blogpost titled `Webpage Generation for Lazy People`, which was essentially a tutorial for using [pandoc](https://pandoc.org) to generate standalone webpages from a markdown file. While my old website consisting of a few "lazily generated" pages and some handwritten HTML received compliments on its use of `duck.gif`, I felt that the website would become convoluted as I added more and more pages. And frankly, I became even lazier so I didn't want to edit `index.html` by hand every time I added some content.

So I started looking for a static site generator. I had some criteria for picking one, which were:
- It must support a variety of file formats. While I mostly use markdown, I prefer to write longer pages using org-mode. There are a few places where I resort to plain HTML as well (namely the letter grade calculators).
- It must be easily customizable. I don't want to give up the now-iconic `texture.jpg` and I want my homepage to be more than a list of blog entries (and it should contain `duck.gif` of course!).
- Supporting multilingual sites would be a nice bonus, as I plan to have articles in both English and Turkish at some point.

I narrowed the possible SSGs down to Hugo and Jekyll. I ended up going with Hugo because it supported org-mode and seemed easier to use and configure. Since there wasn't much content in my old website to begin with, I decided to start from scratch (I did import [the final calculators](/finals), no worries there.). Once I finish the about section and configure a CI/CD pipeline to deploy the website for every commit in `master`, the new `bsahin.xyz` will be complete. Hopefully this will get me to write more often.
