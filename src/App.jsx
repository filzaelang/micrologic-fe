import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import SalaryCalculating from './pages/SalaryCalculating'
import WordScramb from './pages/WordScramb'
import CountDuration from './pages/CountDuration'
import CurrencyConvert from "./pages/CurrencyConvert"
import MobileLegend from "./pages/MobileLegend"
import TicTacToe from "./pages/TicTacToe"
import MatchingCard from "./pages/MatchingCard"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-duration" element={<CountDuration />} />
          <Route path="/currency-convert" element={<CurrencyConvert />} />
          <Route path="/mobile-legend" element={<MobileLegend />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/matching-card" element={<MatchingCard />} />
          <Route path="/salary-calculating" element={< SalaryCalculating />} />
          <Route path="/word-scramb" element={<WordScramb />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
