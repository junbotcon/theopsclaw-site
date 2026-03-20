import { Search, Lightbulb, Sparkles, TrendingUp } from 'lucide-react'
import FadeInUp from './FadeInUp'

/*
  오렌 클라프: 독점 시스템 프레이밍 — "이건 우리만의 방법론"
  프로세스 자체를 Prize로 포지셔닝
*/
const steps = [
  {
    icon: Search,
    step: '01',
    title: '브랜드 진단',
    description: '업종, 타겟, 경쟁사를 분석하고 시장 포지션을 파악합니다. 이 진단만으로 대부분의 브랜드가 자신의 문제를 처음 인식합니다.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: '전략 설계',
    description: '플랫폼별 콘텐츠 방향, 타겟 오디언스, KPI를 설정합니다. 감이 아닌 시장 데이터에서 전략이 나옵니다.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'AI 콘텐츠 제작',
    description: 'AI가 속도를 내고, 사람이 전략과 퀄리티를 검수합니다. 이 조합이 주 10건+ 콘텐츠를 가능하게 합니다.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: '운영 & 최적화',
    description: '성과 패턴을 분석하고 다음 사이클에 즉시 반영합니다. 매 사이클이 전 사이클보다 나아지는 복리 구조입니다.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 px-6">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest">
          Our Methodology
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          5,000만 조회를 만든 시스템입니다
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          이 프로세스는 우리가 수백 번의 사이클에서 검증한 독자적 방법론입니다.<br />
          다른 곳에서는 경험할 수 없습니다.
        </p>
      </FadeInUp>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        {steps.map((item, i) => (
          <FadeInUp key={item.step} delay={i * 0.1}>
            <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200 -translate-y-1/2 z-10" />
              )}
              <span className="text-5xl font-bold text-gray-200">{item.step}</span>
              <div className="mt-4 w-12 h-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-500">{item.description}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  )
}
