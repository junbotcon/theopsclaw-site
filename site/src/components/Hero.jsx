export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
        SNS에서 성과를 만듭니다
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
        인스타그램, 틱톡, 유튜브 쇼츠 — 데이터 기반 SNS 마케팅
      </p>
      <a
        href="#contact"
        className="mt-10 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl hover:bg-primary-hover active:bg-primary-active transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-11 min-w-11"
      >
        무료 상담 신청
      </a>
    </section>
  )
}
