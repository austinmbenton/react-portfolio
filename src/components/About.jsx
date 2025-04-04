import photo from "../assets/Portfolio_Pic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-3xl lg:text-4xl">
        About <span className="text-slate-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={photo} alt="stock photo?" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400 lg:text-lg text-center">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
