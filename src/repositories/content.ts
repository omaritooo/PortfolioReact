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

interface IStack {
  name: string;
  src: string;
}

interface IList {
  prefStack: IStack[];
  reactStack: IStack[];
  cssStack: IStack[];
  utilStack: IStack[];
}
export const stacks: IList = {
  prefStack: [
    {
      name: 'Nuxt',
      src: 'icons/nuxt.svg'
    },
    {
      name: 'Vue',
      src: 'icons/vue.svg'
    },
    {
      name: 'Typescript',
      src: 'icons/ts.svg'
    },
    { name: 'Tailwind', src: 'icons/tailwind.svg' },
    {
      name: 'Sass',
      src: 'icons/sass.svg'
    }
  ],
  reactStack: [
    {
      name: 'React',
      src: 'icons/react.svg'
    },
    {
      name: 'React Native',
      src: 'icons/react-native.svg'
    },
    {
      name: 'React Query',
      src: 'icons/query.svg'
    },
    { name: 'Redux', src: 'icons/redux.svg' },
    {
      name: 'Next',
      src: 'icons/nextjs.svg'
    }
  ],
  cssStack: [
    {
      name: 'Bootstrap',
      src: 'icons/bootstrap2.svg'
    },
    {
      name: 'GSAP',
      src: 'icons/gsap.svg'
    },
    { name: 'Vuetify', src: 'icons/vuetify.svg' },
    { name: 'CSS', src: 'icons/css.svg' },
    {
      name: 'Material UI',
      src: 'icons/material-ui.svg'
    },
    {
      name: 'Framer Motion',
      src: 'icons/fm.svg'
    }
  ],
  utilStack: [
    {
      name: 'Storybook',
      src: 'icons/storybook.svg'
    },
    {
      name: 'Three.js',
      src: 'icons/threejs.svg'
    },
    {
      name: 'Jest',
      src: 'icons/jest.svg'
    }
  ]
};

export const content: Content[] = [
  {
    id: 0,
    title: 'AdGroup',
    body: {
      jobTitle: 'Front End Developer',
      jobType: 'Full time',
      durationFrom: 'August 2021',
      durationTo: 'May 2022',
      duties: [
        'Collaborated closely with UI/UX designers to create seamless, responsive web applications, achieving a 30% increase in performance across all display devices. This partnership enhanced user experience and promoted more engaging interactions.',
        'Led the front-end development cycle in parallel with backend developers to deliver websites that prioritize optimal user experience and performance. Implemented technologies like Three.js, resulting in 50% more interactivity and creating immersive web experiences.'
      ]
    }
  },
  {
    id: 1,
    title: 'Bayn',
    body: {
      jobTitle: 'Front End Developer',
      jobType: 'Contractor',
      durationFrom: 'February 2022',
      durationTo: 'March 2022',
      duties: [
        'Worked alongside UI/UX designers to create pixel-perfect responsive web applications.',
        'Worked on creating a series of landing pages for a flagship product on a tight schedule while delivering a polished product that support both Arabic and English.'
      ]
    }
  },
  {
    id: 2,
    title: 'Hmaserv',
    body: {
      jobTitle: 'Front End Developer',
      durationFrom: 'May 2021',
      jobType: 'Full time',
      durationTo: 'January 2023',
      duties: [
        'Maintained a critical dashboard, achieving a 50% reduction in user errors and providing a safer, smoother user experience. Implemented new cutting-edge features and scaled the system to accommodate a larger, more diverse user base.',
        'Revitalized legacy WebOS/Tizen projects as a Front End Developer, integrating new functionality and migrating applications to modern technologies. Reduced the potential for user error by 50% while optimizing performance metrics, achieving an exponential improvement in application eﬀiciency.'
      ]
    }
  },
  {
    id: 3,
    title: 'Shagf',
    body: {
      jobTitle: 'Front End Developer',
      durationFrom: 'September 2022',
      jobType: 'Contractor',
      durationTo: 'January 2023',
      duties: [
        'Worked as the main front end developer to create a web application for a freelancing platform using an array of modern technologies.',
        'Worked on creating a web application that utilizies a series of APIs that handle data fetching, login, payments and discounts.',
        'Worked alongside a UI/UX developer to create a pixel perfect, responsive website that supports both Arabic and English.'
      ]
    }
  },
  {
    id: 4,
    title: 'Whitepeaks',
    body: {
      jobTitle: 'Front End Developer',
      durationFrom: 'February 2023',
      jobType: 'Full time',
      durationTo: 'August 2023',
      duties: [
        'Revitalized the flagship streaming web application by implementing cutting-edge features and resolving critical bugs, resulting in a 40% increase in user satisfaction and a 30% boost in overall application performance.',
        'Spearheaded the cross-functional optimization of the flagship web application, transforming it into a high performance TV application for WebOS. Delivered a 50% performance enhancement, driving increased user engagement and satisfaction metrics by 25%.'
      ]
    }
  },
  {
    id: 5,
    title: 'pyraCode GmbH',
    body: {
      jobTitle: 'Mid Level Front End Developer',
      durationFrom: 'January 2024',
      jobType: 'Full time',
      durationTo: 'Present',
      duties: [
        'Led the migration of a Nuxt.js 2 monolithic application to Nuxt.js 3 with full TypeScript integration, leveraging new features and performance optimizations to enhance scalability, resulting in a 25% increase in application performance. Replaced deprecated packages, achieving a 30% improvement in security and reducing maintenance overhead.',
        'Reviewed Pull Requests (PRs) thoroughly, providing constructive feedback that improved code quality, ensured best practices, and maintained consistency. Streamlined integrations, resulting in 50% fewer integration issues and a 20% reduction in bug incidents.',
        'Collaborated with a cross-functional team to deliver a key, time-sensitive feature two weeks ahead of schedule, effectively coordinating with design, development, and QA teams to ensure timely, high quality delivery, meeting 100% of project deadlines and client expectations.'
      ]
    }
  }
];
