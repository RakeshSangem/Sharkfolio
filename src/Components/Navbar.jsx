import sharkLogo from '../assets/shark-logo.svg'

function Navbar() {
  return(
    <nav className="bg-black/50 py-4 px-20 flex justify-between">
      <a className="flex items-center" href="#">
        <img className="w-10" src={sharkLogo} alt="shark-logo" />
        <p className="font-Berkshire text-white text-2xl font-bold">SharkFolio</p>
      </a>
      <div className="flex items-center justify-between gap-8">
        <a href="/#/funfact" className="text-lg text-white">Fun Facts</a>
        <a href="#" className="text-lg text-white">Quiz</a>
      </div>
    </nav>
  )
}
export default Navbar
