import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tyler Rencher",
  EMAIL: "tyler@rencher.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Field notes on the AI transition",
  DESCRIPTION: "Field notes on using AI to move faster without sinking ships, from 14 years building production software at Microsoft and CrowdStrike.",
};

export const BLOG: Metadata = {
  TITLE: "Love Notes To My CTO",
  DESCRIPTION: "Field notes on using AI to move faster without sinking ships.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/tylerrencher"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tylerrencher",
  }
];
