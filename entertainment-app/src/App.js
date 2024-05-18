import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Ranking from "./pages/Ranking"

export default function App() {
  return (
    <BrowserRouter>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />}/>
      </Routes>
    </BrowserRouter>
  )
}