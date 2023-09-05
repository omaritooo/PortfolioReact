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
      durationFrom: 'October 2021',
      durationTo: 'May 2022',
      duties: [
        'Worked alongside UI/UX designers to create pixel-perfect responsive web applications.',
        'Also worked alongside Backend developers to create non static websites for optimal user experience while also working with technologies such as Three.js'
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
      durationTo: 'November 2022',
      duties: [
        'Worked on creating and maintaining multiple dashboards using both native JS and Vue/Nuxt.js',
        'Worked on refactoring and re-purposing multiple web applications built specifically for Smart TVs using technologies such as Web-OS and Tizen'
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
      durationFrom: 'April 2023',
      jobType: 'Contractor',
      durationTo: 'August 2023',
      duties: [
        "Worked on maintaining and implementing new features on multiple streaming website using the company's CMS ",
        "Started the developmenet cycle of converting a channel's streaming website to a TV application using webOS"
      ]
    }
  }
];
