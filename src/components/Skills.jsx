import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { SiCraftcms } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import { motion } from "framer-motion";

//duration parameter constant
const logoDurations = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

//second motion.div under logo is for a hover text that stays consistant with animation

export const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-3xl lg:text-4xl"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-4 md:py-8 gap-y-8 lg:gap-y-0">
        <motion.div
          variants={logoDurations(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-cyan-400 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            React
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl text-green-800" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-green-800 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Javascript
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoCss3 className="text-5xl text-blue-600" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-blue-600 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            CSS
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TiHtml5 className="text-5xl text-amber-600" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-amber-600 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            HTML 5
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCraftcms className="text-5xl text-orange-700" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-orange-700 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Craft CMS
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-5xl text-sky-400" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-sky-400 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Tailwind
          </motion.div>
        </motion.div>
        <motion.div
          variants={logoDurations(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiVuejsFill className="text-5xl text-emerald-500" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80 text-emerald-500 text-xl rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Vue
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
