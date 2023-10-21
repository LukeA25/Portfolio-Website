import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-white bg-theme-gray-700 border-t border-gray-400/50 p-8">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/luke-anderson-189514237/"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <BsLinkedin color="white" className="text-2xl sm:text-4xl" />
          </a>
          <a
            href="https://github.com/LukeA25"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <AiFillGithub color="white" className="text-2xl sm:text-4xl" />
          </a>
          <a
            href="mailto:luke1chip@gmail.com"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <AiOutlineMail color="white" className="text-2xl sm:text-4xl" />
          </a>
        </div>
        <p className="text-lg text-center">
          If you have any questions, feel free to contact me at{" "}
          <a href="tel:+1508918759" target="_blank">
            <b className="font-semibold text-theme-red">+1 (508)-918-7569</b> or{" "}
          </a>
          <a href="mailto:luke1chip@gmail.com" target="_blank">
            <b className="font-semibold text-theme-red">Luke1chip@gmail.com</b>.
          </a>
        </p>
        <span className="text-gray-400">Luke Anderson</span>
      </div>
    </footer>
  );
}

export default Footer;
