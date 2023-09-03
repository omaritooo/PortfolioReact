export interface IProject {
  name: string;
  description: string;
  production?: boolean;
  stack: string[];
  links: {
    github: string | null;
    live: string | null;
  };
  thumbnail: string;
}

export const Projects: IProject[] = [
  {
    name: "Bayn",
    description:
      "On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ",
    stack: ["Nuxt", "Tailwind", "Vuex", "AOS"],
    links: {
      github: null,
      live: "https://bayn.io/",
    },
    thumbnail: "/Bayn.jpeg",
  },
  {
    name: "Bayn",
    description:
      "On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ",
    stack: ["Nuxt", "Tailwind", "Vuex", "AOS"],
    links: {
      github: null,
      live: "https://bayn.io/",
    },
    thumbnail: "/Bayn.jpeg",
  },
  {
    name: "Bayn",
    description:
      "On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ",
    stack: ["Nuxt", "Tailwind", "Vuex", "AOS"],
    links: {
      github: null,
      live: "https://bayn.io/",
    },
    thumbnail: "/Bayn.jpeg",
  },
  {
    name: "Bayn",
    description:
      "On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ",
    stack: ["Nuxt", "Tailwind", "Vuex", "AOS"],
    links: {
      github: null,
      live: "https://bayn.io/",
    },
    thumbnail: "/Bayn.jpeg",
  },
  {
    name: "Bayn",
    description:
      "On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ",
    stack: ["Nuxt", "Tailwind", "Vuex", "AOS"],
    links: {
      github: null,
      live: "https://bayn.io/",
    },
    thumbnail: "/Bayn.jpeg",
  },
];
