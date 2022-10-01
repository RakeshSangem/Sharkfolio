import sharkLogo from '../assets/shark-logo.svg'
import githubIcon from'../assets/githubIcon.svg'

function Navbar() {
  return(
    <nav className=" h-[12vh] px-20 flex justify-between">
      <a className="flex items-center" href="#">
        <img className="w-10" src={sharkLogo} alt="shark-logo" />
        <p className="font-Berkshire text-white text-2xl font-bold">SharkFolio</p>
      </a>
      <div className="flex items-center justify-between gap-8">
        <a href="/#/funfact" className="text-lg text-white">Fun Facts</a>
        <a href="/#/quiz" className="text-lg text-white">Quiz</a>
        <a href="https://github.com/RakeshSangem/Sharkfolio" ><img className="w-6" src={githubIcon} alt="" /></a>
      </div>

    </nav>
  )
}
export default Navbar
