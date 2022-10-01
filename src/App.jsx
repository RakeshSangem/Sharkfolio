// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from "./Components/Navbar";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Funfacts from "./pages/Funfacts";
// import Homepage from "./pages/Homepage";
import Quiz from "./pages/Quiz";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-Raleway bg-[url('./assets/shark.png')] min-h-screen">
      <Navbar />
      <HashRouter>
					<Routes>
						{/* <Route path="home" element={<Homepage />} /> */}
						<Route path="funfact" element={<Funfacts />} />
            <Route path="quiz" element={<Quiz />} />
					</Routes>
			</HashRouter>
    </div>
  )
}

export default App
