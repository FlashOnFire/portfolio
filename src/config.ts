// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "http://oui.oui/", // Always put "/" at the end of the URL
    author: "Guillaume Calderon",
    desc: "A personal portfolio landing template for developers and designers. Made by Avenue Labs.",
    title: "Portfolio | Guillaume Calderon",
    ogImage: "images/astro-lane.png",
    keywords:
        "Portfolio, developer, guillaume, calderon, guillaume calderon",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/FlashOnFire",
        icon: "ph:github-logo-duotone",
        title: `Follow me on Github`,
        active: true
    },
    {
        name: "LinkedIn",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:guillaume.calderon@etu.univ-lyon1.fr",
        title: `Send me email`,
        icon: "",
        active: false
    },
    {
        name: "RootMe",
        href: "https://www.root-me.org/FlashOnFire_",
        icon: "",
        title: `Find me on RootMe`,
        active: true
    }
];
