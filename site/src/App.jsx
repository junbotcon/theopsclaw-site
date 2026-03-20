import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Results from './components/Results'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
