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
    name: 'Bayn',
    description:
      'On Bayn, I worked as the sole frontend developer working on creating a responsive, snappy website while also delivering a pixel perfect design. ',
    stack: ['Nuxt', 'Tailwind', 'Vuex', 'AOS'],
    links: {
      github: null,
      live: 'https://bayn.io/'
    },
    thumbnail: '/Bayn.jpeg'
  },
  {
    name: 'Active Code',
    description:
      'Active Code is an application in charge of handling interactions between sellers, resellers and admins, each with their own UI and priviliges. I worked a frontend developer working on maintaining the legacy code, adding new features and refactoring sections in the web application',
    stack: ['Nuxt', 'Vuex', 'Vuetify', 'Laravel'],
    links: {
      github: null,
      live: 'https://drive.google.com/file/d/1KbysKwMH9NwA-bFa6mxQUsySPi6ikADi/view'
    },
    thumbnail: '/activecode.jpeg'
  }
];
