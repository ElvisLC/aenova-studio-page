import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Valor from './components/Valor'
import Stats from './components/Stats'
import Servicios from './components/Servicios'
import Proceso from './components/Proceso'
import Testimonios from './components/Testimonios'
import Portafolio from './components/Portafolio'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Valor />
        <Stats />
        <Servicios />
        <Proceso />
        <Testimonios />
        <Portafolio />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}

export default App