import sharkLogo from "../assets/shark-logo.svg";
import githubIcon from "../assets/githubIcon.svg";

export default function Navbar() {
  return (
    <nav className="w-full h-[12vh] px-20 flex justify-between absolute top-0 md:px-6">
      <a
        className="flex items-center hover:scale-105 transform transition duration-300"
        href="#"
      >
        <img className="w-8 mr-1 sm:w-6" src={sharkLogo} alt="shark-logo" />
        <p className="font-Berkshire text-white tracking-wide text-2xl sm:text-lg">
          SharkFolio
        </p>
      </a>
      <div className="flex items-center justify-between gap-8 font-semibold sm:gap-2">
        <a
          href="/#/funfact"
          className="text-shadow text-lg text-white transition duration-200 hover:text-[#6EE9FF] sm:text-sm sm:font-normal"
        >
          Fun Facts
        </a>
        <a
          href="/#/quiz"
          className="text-shadow text-lg text-white transition duration-300 hover:text-[#6EE9FF] sm:text-sm sm:font-normal"
        >
          Quiz
        </a>
        <a
          className="hover:scale-105 transform transition duration-300"
          href="https://github.com/RakeshSangem/Sharkfolio"
        >
          <img className="w-8 github-logo" src={githubIcon} alt="" />
        </a>
      </div>
    </nav>
  );
}
