import { INTRO_CONTENT } from "../constants";
// import portrait from "../assets/jj.png";
import { motion } from "framer-motion";

// universal text animation constant
const containerX = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const containerY = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Intro = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center content-center">
            <motion.h1
              variants={containerY(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 lg:pb-16 text-4xl font-thin tracking-tight lg:mt-16 xl:text-6xl"
            >
              Austin Benton-Boolukos
            </motion.h1>
            <motion.span
              variants={containerX(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl xl:text-4xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={containerX(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400 text-lg lg:text-xl text-center"
            >
              {INTRO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
