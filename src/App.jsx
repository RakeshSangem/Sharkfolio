import { Routes, Route, HashRouter } from 'react-router-dom';
import Funfacts from "./pages/Funfacts";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import SharksInfo from "./pages/SharksInfo";

const App = () => {
  return (
    <div className="font-Raleway min-h-screen">
      <HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="funfact" element={<Funfacts />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="sharksinfo" element={<SharksInfo />} />
					</Routes>
			</HashRouter>
    </div>
  )
}

export default App
