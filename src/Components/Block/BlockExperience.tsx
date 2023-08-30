import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Content, content } from "../../repositories/content";

const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    x: 270,
    opacity: 0,
  },
};

const Tab = ({
  content,
  activeItem,
  setterFunc,
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
          ? "text-red-300   border-[#6717b2] bg-[#7B2CBF]"
          : "border-gray-400 text-white hover:text-[#7B2CBF]"
      }  py-2 px-4 md:px-5 md:py-3 font-firacode w-full text-sm md:w-full border-b-[2px] md:border-l-[2px] md:border-b-0 md:rounded-r-lg cursor-pointer  active:bg-[#7B2CBF] md:ml-1 transition duration-200 ease-in-out`}
    >
      0{content.id + 1}.{"  "} {content.title}
    </li>
  );
};

const TabContent = ({
  activeItem,
  content,
}: {
  activeItem: number;
  content: Content;
}) => {
  return (
    <motion.div
      key={activeItem}
      variants={variants}
      animate="show"
      initial="hide"
      className=" flex flex-col gap-y-2 font-raleway mt-2"
    >
      <h1 className="text-2xl w-fit font-bold flex flex-col md:flex-row gap-x-2  text-white">
        {content.body.jobTitle}
        <span className="font-semibold text-[#7B2CBF]">@ {content.title}</span>
      </h1>
      <h2 className="font-thin w-fit">{content.body.jobType}</h2>
      <span>
        {content.body.durationFrom} - {content.body.durationTo}
      </span>
      <div className="flex flex-col gap-y-4 w-fit">
        <ul className="list-disc ml-4 max-w-[80%] lg:max-w-[500px] gap-y-3 flex flex-col min-h-[340px] md:min-h-[210px] ">
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
    <section className="py-32 flex flex-col justify-center items-center bg-transparent text-white">
      <div className="container flex flex-col justify-center gap-y-10">
        <div className="w-full lg:w-3/4 lg:mx-auto flex flex-col md:flex-row items-center gap-x-2 md:gap-x-10">
          <h1 className="text-left text-3xl font-firacode ">
            <span className="dark:text-[#6717b2]">03</span>. My Career
          </h1>
          <div className="flex-1 w-full bg-[#7B2CBF] h-[1px]"></div>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row justify-center w-full  max-w-screen gap-x-8">
          <ul className="flex flex-row w-full md:max-w-max overflow-x-scroll  no-scrollbar md:gap-x-6 md:flex-col">
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
