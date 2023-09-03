import { motion } from 'framer-motion';

const AnimatedTextCharacter = ({ text, delay = 1 }: { text: string; delay?: number }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = delay) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 90
      }
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 90
      }
    }
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex' }}
      className="flex flex-wrap whitespace-nowrap"
      variants={container}
      initial="hidden"
      animate="visible">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
