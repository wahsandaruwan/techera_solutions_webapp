import { useEffect } from "react"

import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import ParticlesBg from "./Components/ParticlesBg";
import Calling from "./Components/Calling";
import Process from "./Components/Process";

// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  // Global Animations
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <ParticlesBg />
      <NavBar />
      <Hero />
      <Calling />
      <Process />
    </>
  );
}

export default App
