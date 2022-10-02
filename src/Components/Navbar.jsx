import sharkLogo from '../assets/shark-logo.svg'
import githubIcon from'../assets/githubIcon.svg'

function Navbar() {
  return(
    <nav className="w-full h-[12vh] px-20 flex justify-between absolute top-0">
      <a className="flex items-center hover:scale-105 transform transition duration-300" href="#">
        <img className="w-8 mr-1" src={sharkLogo} alt="shark-logo" />
        <p className="font-Berkshire text-white tracking-wide text-2xl">SharkFolio</p>
      </a>
      <div className="flex items-center justify-between gap-8 font-semibold">
        <a href="/#/funfact" className="text-shadow text-lg text-white transition duration-200 hover:text-[#6EE9FF]">Fun Facts</a>
        <a href="/#/quiz" className="text-shadow text-lg text-white transition duration-300 hover:text-[#6EE9FF]">Quiz</a>
        <a className="hover:scale-105 transform transition duration-300" href="https://github.com/RakeshSangem/Sharkfolio" ><img className="w-8 github-logo" src={githubIcon} alt="" /></a>
      </div>
    </nav>
  )
}
export default Navbar
