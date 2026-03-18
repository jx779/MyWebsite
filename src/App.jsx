import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import PingMe from "./pages/PingMe";
import Breakie from "./pages/Breakie";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pingme" element={<PingMe />} />
        <Route path="/projects/breakie" element={<Breakie />} />
      </Routes>
    </Router>
  )
}

export default App
