import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Content, content } from '../../repositories/content';
import { BaseTitle } from '../Base/BaseTitle';

const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  },
  hide: {
    x: 270,
    opacity: 0
  }
};

const Tab = ({
  content,
  activeItem,
  setterFunc
}: {
  content: Content;
  activeItem: number;
  setterFunc: any;
}) => {
  return (
    <li
      onClick={() => {
        setterFunc(content.id);
      }}
      className={`${
        activeItem === content.id
          ? 'text-white dark:text-red-300  border-light-primary dark:border-dark-offset bg-light-main dark:bg-dark-main'
          : 'border-light-main dark:border-dark-main text-light-main dark:text-white hover:text-light-primary dark:hover:text-dark-main'
      }  py-2 px-4 md:px-5 md:py-3 font-firacode w-full text-sm md:w-full border-b-[2px] flex md:border-l-[2px] md:border-b-0 md:rounded-r-lg cursor-pointer  dark:active:bg-dark-main md:ml-1 transition duration-200 ease-in-out`}>
      0{content.id + 1}.{'  '} {content.title}
    </li>
  );
};

const TabContent = ({ activeItem, content }: { activeItem: number; content: Content }) => {
  return (
    <motion.div
      key={activeItem}
      variants={variants}
      animate="show"
      initial="hide"
      className="flex flex-col mt-2 gap-y-2 font-raleway">
      <h1 className="flex flex-col text-2xl font-bold text-[#3AAFA9] dark:text-white w-fit md:flex-row gap-x-2">
        {content.body.jobTitle}
        <span className="font-semibold text-light-primary dark:text-dark-main">
          @ {content.title}
        </span>
      </h1>
      <h2 className="font-thin w-fit dark:text-white text-light-primary">{content.body.jobType}</h2>
      <span className="dark:text-white text-[#3AAFA9]">
        {content.body.durationFrom} - {content.body.durationTo}
      </span>
      <div className="flex flex-col gap-y-4 w-fit">
        <ul className="list-disc ml-4 max-w-[80%] dark:text-white text-[#3AAFA9] lg:max-w-[500px] gap-y-3 flex flex-col min-h-[340px] md:min-h-[210px] ">
          {content.body.duties.map((el: string) => {
            return (
              <li key={el} className="text-base ">
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export const BlockExperience = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-32 text-white bg-transparent">
      <div className="container flex flex-col justify-center gap-y-10">
        <BaseTitle title="My Experience" index="03" />
        <div className="flex flex-col justify-center w-full gap-y-5 md:flex-row max-w-screen gap-x-8">
          <ul className="flex flex-row w-full overflow-x-scroll md:overflow-x-hidden md:max-w-max no-scrollbar md:gap-x-6 md:flex-col">
            {content.map((el: Content) => {
              return (
                <Tab
                  key={el.id}
                  content={el}
                  setterFunc={(id: any) => setActiveItem(id)}
                  activeItem={activeItem}
                />
              );
            })}
          </ul>
          <AnimatePresence mode="wait">
            <TabContent content={content[activeItem]} activeItem={activeItem} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
