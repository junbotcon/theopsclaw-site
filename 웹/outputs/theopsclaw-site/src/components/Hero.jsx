import { ChevronDown } from 'lucide-react'
import FadeInUp from './FadeInUp'

/* 블레어 엔스: 자랑 빼고 클라이언트의 문제로 시작 / 오렌 클라프: 갑 포지션 CTA */
export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16 relative">
      <FadeInUp>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          콘텐츠는 매일 올리는데<br />
          왜 성과는 그대로일까요?
        </h1>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
          광고비를 더 쓰는 게 답이 아닙니다.<br />
          콘텐츠 구조를 바꿔야 성과가 바뀝니다.
        </p>
      </FadeInUp>
      <FadeInUp delay={0.3}>
        <p className="mt-4 text-sm md:text-base font-medium text-gray-400 tracking-wide">
          매달 3팀만 받습니다. 지금 슬롯이 열려 있는지 확인하세요.
        </p>
      </FadeInUp>
      <FadeInUp delay={0.45}>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl hover:bg-primary-hover active:bg-primary-active transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-11 min-w-11 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          적합성 확인하기
        </a>
      </FadeInUp>

      {/* Section divider + scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <ChevronDown size={20} className="text-gray-400 animate-bounce" />
      </div>
    </section>
  )
}
