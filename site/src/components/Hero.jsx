import FadeInUp from './FadeInUp'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center pt-16">
      <FadeInUp>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          AI 시대,<br />
          콘텐츠의 기준이 바뀌었습니다
        </h1>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
          시장을 읽는 AI, 성과를 만드는 팀
        </p>
      </FadeInUp>
      <FadeInUp delay={0.3}>
        <p className="mt-4 text-sm md:text-base font-medium text-primary">
          월 5,000만+ 조회 · 저장 22만+ — AI 콘텐츠의 실제 성과
        </p>
      </FadeInUp>
      <FadeInUp delay={0.45}>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl hover:bg-primary-hover active:bg-primary-active transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-11 min-w-11"
        >
          프로젝트 문의하기
        </a>
      </FadeInUp>
    </section>
  )
}
