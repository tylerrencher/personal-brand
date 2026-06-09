---
title: "Code Review: Bottleneck or Seatbelt?"
description:
  "AI lets developers produce more code than any team can review. I propose a human-guided process
  that keeps the seatbelt and reduces the bottleneck."
date: "June 8 2026"
draft: false
---

Your developers are producing so much more code now thanks to Claude Code and Codex! How much is
making it to production? Do you know? Some companies are finding that the number is
[negative, not positive](https://www.faros.ai/blog/ai-software-engineering).

Code review is a seatbelt or a bottleneck depending on who you ask. A couple of years ago, if you
asked a senior developer who'd been burned by a production incident that a review would have caught,
they would say it's a seatbelt. Ask that same developer now that they're buried in reviews, and it's
a bottleneck. Both views are right. The question is how do you keep the seatbelt?

## There's Just So Much Code

Overbuilding and adding complexity has always been a problem in software. It is generally easy to do
and easy to modify. Not like a house where changes can get pretty complicated and obviously
expensive. AI makes it even easier to "future proof" a feature. When planning, it actively pushes
you to continue adding features and capabilities. Who can resist that?

More features and more complexity means more code to review. Either in the form of more reviews, or
larger reviews. No matter what, AI enabled engineers will find the team's code review capacity very
fast. One of two things will happen, code review quality will drop to zero, or senior devs will do
nothing but review code and find a new job.

This happened to me at CrowdStrike. Once we got Claude Code, the volume of code that was being
produced increased dramatically. One developer swamped the entire team. I'm not saying that it was
poor quality, but it was a lot of code. And it all had to be reviewed to the high standard that we
were used to. I spent a week doing almost nothing but review code. It wasn't fun. So, should you do
code review at all, or change what it means to review code?

## Is Code Review Even Helpful?

Blasphemy, I know, but these kinds of questions often lead to enlightenment. It forced me to
consider what code review actually does. There was once a time before ubiquitous code review. That's
how it was right at the beginning of my career. Right-click-deploy for production was the norm. That
was the original YOLO. CI/CD what?

You would call a senior developer to go over the more sticky things, but it was common to do a
whiteboard session prior to feature development and then have a few conversations during
implementation. Then code went out to test and then production. The Senior+ developers talked to
each other if they talked to anyone at all. Everywhere is different, but that's how it was for me.
Rigorous code review started when I was about 6 years into my career at Microsoft.

Did we ship fewer bugs? Yes. Did we have a never ending number of arguments over literally
everything? Also yes. The best outcomes for the health of the codebase were the conversations that
we had around maintainability, test coverage, API consistency, data usage patterns, and problem
solving.

## Does the Code Even Matter Now?

I have seen AI code reviews catch most of the lower level problems that I've traditionally argued
with my coworkers over. Golang is great because it is so opinionated that there is much less to
argue about. Teams can have that experience with other languages by defining style standards and
configuring tools to enforce them. If you eliminate those issues and the AI can do a pretty good job
of not producing obvious bugs, then how much does the code really matter? Do humans need to keep
doing line-by-line code reviews like we are all used to? I say no for general code. Life and safety,
core calculations, and concurrent code need a different standard.

Without deep review, your developers would then be free to focus on the higher level issues that AI
can't do a good job on right now. These questions are high priority:

- Did the AI implement all the features that it was supposed to?
- Did the AI adhere to the Architecture Review Documents?
- Are we sure that we are solving the right problem?
- Does this change impact our threat model?
- Can this change be rolled back safely and quickly?
- Does the data store need a migration?
- Are there any breaking changes to partners or customers?
- Is test coverage adequate?
- Are edge cases properly considered?
- Do we have monitoring and alerting in place?
- Do we have enough logging?
- Did the necessary documentation get updated or written?

These are all topics that we have considered, but we only have so much time and mental capacity to
review code. These things tend to get dropped when developers are deep in the weeds. Especially test
considerations.

## A Useful Production Gate

Human review is still a useful tool to ensure high code quality and throughput can be increased with
some targeted changes.

1. Design agreed on, prototyping concluded, and architecture locked by team.
1. Tasks are broken down into small enough chunks to limit the amount of code churn in a single
   review.
1. Static analysis tools for type checking, linting, secret exposure, and other checks are available
   to agents and in the CI pipeline.
1. Agents and CI pipelines ensure that the build succeeds, static analysis results are green, and
   the tests pass.
1. Multiple rounds of adversarial AI code review have been conducted with multiple models.
1. AI agent provides change overview and suggests review process to human reviewer(s) based on
   configured checklist.

This process is completely human guided and could produce at least as high quality results in
production as the traditional code review process if you can give up some control. Try it on a lower
risk project first. See if more code is able to make it to production. See how your people handle
the change. It is a big mental shift for developers to not care as much about the code itself. That
is the most obvious product they have of their labor. Design and architecture have never been seen
as important of a product as the code by the majority of developers. They should be able to
recognize that they are dropping the most tedious part of the process and appreciate that.

XOXO, Tyler
