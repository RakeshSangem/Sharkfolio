// import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Funfacts from "./pages/Funfacts";
// import Homepage from "./pages/Homepage";
import Quiz from "./pages/Quiz";
function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="font-Raleway min-h-screen">
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
