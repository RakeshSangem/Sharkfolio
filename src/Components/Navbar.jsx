import sharkLogo from '../assets/shark-logo.svg'
import githubIcon from'../assets/githubIcon.svg'

function Navbar() {
  return(
    <nav className="w-full h-[12vh] px-20 flex justify-between absolute top-0">
      <a className="flex items-center hover:scale-105 transform transition duration-300" href="#">
        <img className="w-8 mr-1" src={sharkLogo} alt="shark-logo" />
        <p className="font-Berkshire text-white tracking-wider text-2xl">SharkFolio</p>
      </a>
      <div className="flex items-center justify-between gap-8 font-bold">
        <a href="/#/funfact" className="text-lg text-white hover:scale-105 transform transition duration-300 hover:opacity-50">Fun Facts</a>
        <a href="/#/quiz" className="text-lg text-white hover:scale-105 transform transition duration-300 hover:opacity-50">Quiz</a>
        <a className="hover:scale-105 transform transition duration-300 hover:opacity-50" href="https://github.com/RakeshSangem/Sharkfolio" ><img className="w-6" src={githubIcon} alt="" /></a>
      </div>
    </nav>
  )
}
export default Navbar
