import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Diagnosis from './components/Diagnosis'
import ValueProp from './components/ValueProp'
import Results from './components/Results'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  B2B 제안서 프레임워크 플로우:
  1. Hero — 후킹
  2. Diagnosis — 출혈점 진단 (블레어 엔스)
  3. ValueProp — 패러다임 전환 (The Shift)
  4. Results — 데이터 증명 (오길비)
  5. WhyUs — 불공평한 우위 + 프레임 컨트롤 (오렌 클라프)
  6. Services — 서비스 상세 (러셀 브런슨 Value Stack)
  7. Process — 진행 프로세스
  8. Pricing — 3-Tier 가격 (크리스 두) + 리스크 제거 (호르모지)
  9. Contact — CTA + 데드라인 프레임
*/
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diagnosis />
        <ValueProp />
        <Results />
        <WhyUs />
        <Services />
        <Process />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
