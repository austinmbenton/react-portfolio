import logo from "../assets/AB_logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-12 h-12 invert brightness-0 "
          src={logo}
          alt="logo"
          draggable="false"
        />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text 2-xl">
        <a href="https://github.com/austinmbenton" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/austinmbenton/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
};
