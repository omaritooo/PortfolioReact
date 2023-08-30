type Description = {
  jobTitle: string;
  jobType: string;
  durationFrom: string;
  durationTo: string | null;
  duties: string[];
};
export type Content = {
  id: number;
  title: string;
  body: Description;
};

export const content: Content[] = [
  {
    id: 0,
    title: "AdGroup",
    body: {
      jobTitle: "Front End Developer",
      jobType: "Full time",
      durationFrom: "October 2021",
      durationTo: "May 2022",
      duties: [
        "Worked alongside UI/UX designers to create pixel-perfect responsive web applications.",
        "Also worked alongside Backend developers to create non static websites for optimal user experience while also working with technologies such as Three.js",
      ],
    },
  },
  {
    id: 1,
    title: "Bayn",
    body: {
      jobTitle: "Front End Developer",
      jobType: "Contractor",
      durationFrom: "February 2022",
      durationTo: "March 2022",
      duties: [
        "Worked alongside UI/UX designers to create pixel-perfect responsive web applications.",
        "Worked on creating a series of landing pages for a flagship product on a tight schedule while delivering a polished product that support both Arabic and English.",
      ],
    },
  },
  {
    id: 2,
    title: "Hmaserv",
    body: {
      jobTitle: "Front End Developer",
      durationFrom: "May 2021",
      jobType: "Full time",
      durationTo: "November 2022",
      duties: [
        "Worked on creating and maintaining multiple dashboards using both native JS and Vue/Nuxt.js",
        "Worked on creating and maintaining multiple dashboards using both native JS and Vue/Nuxt.js",
        "Worked on refactoring and re-purposing multiple web applications built specifically for Smart TVs using technologies such as Web-OS and Tizen",
      ],
    },
  },
  {
    id: 3,
    title: "Shagf",
    body: {
      jobTitle: "Front End Developer",
      durationFrom: "September 2022",
      jobType: "Contractor",
      durationTo: "January 2023",
      duties: [
        "Worked as the main front end developer to create a web application for a freelancing platform using an array of modern technologies.",
        "Worked on creating a web application that utilizies a series of APIs that handle data fetching, login, payments and discounts.",
        "Worked alongside a UI/UX developer to create a pixel perfect, responsive website that supports both Arabic and English.",
      ],
    },
  },
  {
    id: 4,
    title: "Whitepeaks",
    body: {
      jobTitle: "Front End Developer",
      durationFrom: "April 2023",
      jobType: "Contractor",
      durationTo: "August 2023",
      duties: [
        "Worked on creating and maintaining multiple dashboards using both native JS and Vue/Nuxt.js",
        "Worked on refactoring and re-purposing multiple web applications built specifically for Smart TVs using technologies such as Web-OS and Tizen",
      ],
    },
  },
];
