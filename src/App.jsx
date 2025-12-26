import { useState, useEffect } from 'react'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator"
import StarBackground from "./components/StarBackground/StarBackground"
import Footer from "./components/Footer/Footer"
import BackToTop from "./components/BackToTop/BackToTop"
import Loader from "./components/Loader/Loader"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <StarBackground />
      <Nav />
      <ScrollIndicator />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      <ThemeSwitcher />
    </>
  )
}

export default App
