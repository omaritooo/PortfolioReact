import { useEffect, useState } from 'react';
import { usePageScroll } from '../../Hooks/usePageScroll';

export const BlockHyperlinks = () => {
  const { scrollPosition } = usePageScroll();
  const [scroll, setScroll] = useState<boolean>();

  useEffect(() => {
    if (scrollPosition > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [scrollPosition]);

  return (
    <div className="container hidden bg-transparent lg:block">
      <div className="relative z-50 flex items-end justify-between">
        <div className="fixed bottom-0 flex flex-col justify-end gap-y-4 items-center h-[200px] translate-x-6  w-[20px]">
          <div
            className={`flex flex-col w-full ${
              scroll ? 'text-light-main' : 'text-black'
            } gap-y-4 dark:text-white`}>
            <a
              aria-label="Github"
              href="https://github.com/omaritooo"
              target="_blank"
              className="transition duration-150 ease-in-out hover:scale-125"
              rel="noreferrer noopener">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img">
                <path
                  data-name="layer2"
                  d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                  fill="currentColor"></path>
                <path
                  data-name="layer1"
                  d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
                  fill="currentColor"></path>
              </svg>
            </a>
            <a
              className="transition duration-150 ease-in-out hover:scale-125"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/omarashraf27/"
              target="_blank"
              rel="noreferrer noopener">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img">
                <path
                  data-name="layer1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M3.078 22.331h12.188v36.844H3.078z"
                  strokeLinejoin="round"></path>
                <path
                  data-name="layer2"
                  d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  strokeLinejoin="round"></path>
                <path
                  data-name="layer1"
                  d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
          <div
            className={`w-[2px] ${
              scroll ? 'bg-light-main dark:bg-white' : 'bg-black dark:bg-white'
            } h-[140px]`}></div>
        </div>
      </div>
    </div>
  );
};
