---
title: "How I'd Roll Out AI Tooling If It Were My Call"
description: "Field notes on the AI transition, from 14 years building production software at Microsoft and CrowdStrike"
date: "May 27 2026"
draft: false
---

Somewhere in your org there's a gap between what you think your AI rollout is doing and what it's actually doing. I've spent the last two years inside that gap as a developer, and I can tell you it's bigger than you think.

I've shipped production software for 14 years at Microsoft and CrowdStrike, and I watched mobile, cloud, and blockchain roll through before this one. This transition is different from those three because leadership and engineering are looking at the same rollout and seeing two completely different things.

So take this as feedback from the field you might not get any other way. I run models on my own hardware and assess them against the frontier models, I've heard the message from leadership and across the industry, and I've compared notes with a lot of developers. The layers aren't hearing each other. If you haven't started your AI transition, take this as early warning. If yours is underway and not going how you expected, this might explain why.

You can buy the tools today. You have to build the skill.

### TL;DR:

- LLMs and agentic harnesses are tools used by people. Deploy them like you'd deploy any major tooling change.
- Plan for 9–18 months, not a quarter. This is a human skills and culture shift, not a software install.
- Train your people intentionally. Mandating usage without training, while holding prior deadlines is how you burn your people out.
- Roll out gradually: experts first, then a few clustered teams, then broadly. Fix the process at each stage.
- Calibrate expectations. A safe, sustained 20–30% improvement is a win right now. Set the bar high immediately and you'll break your team.

I'm pro LLM use in software development. These tools have improved my development workflow and the whole path from idea to production. We need to be clear about one thing, though: LLMs are new tech that's moving so fast that we can't reliably answer "What is this good for?" and trust that the answer will be the same in three months.

## What's Actually Happening on the Ground

The current trend is to deploy LLM-based tools to an entire company with no formal training and mandate that everyone use them. Why does this happen at company after company? I think it is because on the management track most of the work is done in the English language and deliverables are often loosely defined. LLMs put on a great show with drafting, summarizing, and restructuring English language. It is a massive acceleration. When a leader sees their own work go fast and hears the hype from the dev side, of course this is going to be great for their org! This is a common trap that people fall into when they use AI tools to complete tasks outside of their core skill set. Backend developers fall into it too, the first time they prompt their way through a frontend task they could never have written themselves.

But software development is far more complex than those English language tasks, and these tools can't be picked up and used skillfully on day one. The compiler returns stable results every time; a web search is consistent. This new tool isn't deterministic and the documentation for how to use it keeps changing. Most developers were never given the mental model for any of this, so they prompt a harness, get a mediocre result, adjust the prompt, and get something equally mediocre but completely different. They don't understand why. They hear hype from the tech media and they get garbage. The problem isn't that they are incapable; it's that no one trained them.

This sets up a dangerous and expensive situation for a business. Leadership demands usage of new tools without providing quality training and without relaxing delivery deadlines. Even worse are the orgs where leadership turns token usage into an adoption or performance metric. In the best case this deployment strategy wastes time and money. In the worst case it encourages developers to game the system instead of learning and doing good work. It is especially galling to see money being thrown into an LLM furnace when I remember how hard it was to get a $50 stick of memory approved — for an assignment I couldn't take on without it.

### A Quick Story on Training

At Microsoft, developers in my org were required to complete a three-day training on AI usage. Someone had put a lot of thought into it including media assets for your email signature, gamification, and pretty pictures. It was entirely focused on using AI in Microsoft Office tasks and how chat bots work. Training tasks included things like vacation planning and image generation. The developers learned nothing. In private conversation all we talked about was whether leadership knew what we did all day.

Training is essential to a successful transition. Your people know good training when they see it and they evaluate you based on how you demonstrate your understanding of their work. Focus on your people.

## How I Would Run This Deployment

I would plan for 9–18 months depending on the size of your org. This isn't a software rollout; it's a skills and culture change. Those take time. Think about how long your cloud rollout took. That was the same shape of problem, and it required upskilling your whole workforce. Nobody expected that one in a quarter.

### Determining the Strategy

I would start by polling my most senior developers to find the people who are really curious about LLM-based tool chains. Only choose people who actually write code every day. Get the tools in their hands and give them:

- Time to get to know the tools and to research processes and methods.
- Budget for a variety of training.
- Space to work independently for a while.
- Encouragement to share what they are learning with each other.

Work with their managers to make sure these people can take a break from their normal responsibilities for a while. Treat this like a two-to-three-month scoped hackathon. They will need a decent-sized code base to experiment on plus a variety of tasks to implement. They will naturally choose internal code bases that they are already familiar with to work on with AI assistance. So even though this sounds expensive, you'll likely get useful work delivered along the way.

Once they have some experience built up, they need to be the ones who chart the course forward. They develop standard processes for your company, internal training content, real-life success stories, and cautionary failure stories. Make sure the training materials show standard development tasks being done, make them consumable on demand, and make the latest version easy to find. Curate the training to maintain high quality and relevance. Don't let slop into the training and accept the cost of re-recording training when needed.

In a slower-moving shift you could reasonably expect developers to pick this up on the job. This one is moving too fast for that. Most won't spend their off-hours keeping pace, so you have to accept that and fill the gap with good training.

And, treat every LLM model change in your org as a major breaking change for all your developers. I learned this the hard way. I built up a set of skills to help with repeatable tasks and they were working really well. Then I moved to Opus 4.7 and they produced terrible results. Raw prompts were consistently beating skills I'd put a couple of days into, and the more direction I added, the worse the output got. Everything I'd tuned for the last model was now working against me. Prompt strategies, reasoning levels, which tasks a model is best at — all of it can shift with a new model version. The tooling you built for the last model can hamstring the next one.

If you aren't using these tools yourself and keeping up with the space, you simply won't grasp how big this shift is for your people. It is a serious mental load for them.

### Limited Rollout

Initial deployment should be to a few complete teams that all work together and have few external dependencies. Let them work together for a few months and see what happens. They might start producing a bunch of slop, or it could be a smooth and safe transition. No matter what, you can't risk bad results spilling out into your other teams. This is where you're going to find problems and growing pains now that you are including less passionate employees.

- How are you going to handle someone who produces a week's worth of PRs in a day?
- How are you going to handle someone who doesn't understand how to use the tools?
- Where does the process you wrote earlier fall apart once normal developers touch it?

Find the gaps, update the training, then go broader.

### Broad Rollout

When you go broad, present stories that came from the earlier trials. Show the value of the tools and the dumb stuff that can happen. Don't sell hype. If you don't personally understand the process deeply, have someone who understands it run the rollout. Your developers can tell the difference. If they believe that you have experience in what you are asking them to do, they will be more willing to follow.

This is when you take the big risk. Your employees need dedicated time to learn the tools. You will have to deal with a company-wide drop in performance and new problems that surface. Make sure that your experts are on hand to answer questions, and embed them in teams to help sort things out. You are going to find that some parts of your code base are not well designed and are not well suited to AI-assisted development. There may have to be major redesign before you will see productivity gains there.

You should also be prepared for people problems. This is a big shift for your employees. Some of them are going to feel like they are giving up skills they have developed for years. They are taking as much of a risk on you as you are on them. Don't make this a competition between employees. This has to be cooperative. Shared learning is the single most important way your team will improve in a space that changes this fast.

## Success and Calibrating Expectations

Success looks like higher quality, fewer high-severity production incidents, higher developer satisfaction, and tech debt repayment. Eventually it includes more features shipped, but only once everyone is trained and operating smoothly.

Success does not mean blog posts about how many lines of code are being committed or how many tokens you paid for. It is not a competition with your peers. Don't push your people faster than they can safely go just to feel like you are keeping up with everyone else. How do you even know the CTOs you're racing have actually figured this out? I don't think most of them have — I think a lot of them are in over their heads. The loudest adoption stories in the industry are coming from people improvising in public and mistaking motion for progress, and they haven't gotten the architecture bill yet. We are still in the very early days.

It's a worrying time. You are probably afraid that if you don't push the envelope on adoption your customers will leave for your competitors, that your best employees will leave for greener pastures, and that you'll be left behind and at fault. What I see is the opposite: the companies pushing hardest are the ones whose customers are eyeing competitors and whose developers are hunting for their next role.

As a customer, I'm looking for alternatives right now. I'm tired of tools that I pay for constantly shuffling their UI faster than I can build muscle memory. I'm tired of them adding AI features that I never asked for and don't make sense in the product. I'm tired of basic functionality regressing. They aren't winning in the market because of their rapid AI transition.

I've talked to some of the developers at two of the big tech companies pushing the hardest on internal AI adoption. Their people are miserable. They hate this rapid top-down approach and want to be technically excellent. The "move fast and break things" crowd measures activity, not value, and pays for it with money, customer trust, and employees who are planning their exit.

It doesn't have to be that way, but it's entirely predictable when expectations are set by the hype instead of any real grasp of the work. Wait to make changes to your performance expectations for employees until this transition has had time to bake for a while. From what I have seen, and comparing notes with other developers, a 20–30% output improvement for production code might be all that can be safely achieved right now in a team setting. The real limits are how complex production software is, how much a team has to coordinate, and how much code and architecture a single human can actually review and absorb. If you set the bar high improvement, you're going to cause big problems among your people.

So, before you greenlight the broad rollout, picture that $50 memory stick I had to fight for while no one bats an eye at the token bill today. The budget is the ultimate source of truth about what a company actually values. If yours says that the tools matter and the people don't, the people will figure that out for themselves. Bet on your people. They are going to be the ones who make your transition work.

XOXO, Tyler
