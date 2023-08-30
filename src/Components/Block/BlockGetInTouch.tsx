export const BlockGetInTouch = () => {
  return (
    <>
      <section className="container py-20 flex flex-col gap-y-3 items-center justify-center">
        <h1 className="font-firacode text-4xl text-center text-[#7B2CBF]">
          05. What’s Next?
        </h1>
        <h2 className="text-7xl font-raleway text-center font-semibold text-white">
          Get In Touch
        </h2>
        <p className="text-xl font-raleway text-center text-white font-light lg:max-w-[50%] mt-4">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a
          className="px-4 py-2 rounded-[4px] bg-transparent border-[1px] text-white mt-2 lg:mt-4 border-white"
          href="mailto:omarash227@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
      </section>
      <footer className="container text-center text-white font-thin text-xl py-10">
        Built by Omar Ashraf
      </footer>
    </>
  );
};
