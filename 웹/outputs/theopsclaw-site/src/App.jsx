import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Results from './components/Results'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Results />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
