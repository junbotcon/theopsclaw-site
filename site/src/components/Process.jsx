import { Search, Lightbulb, Sparkles, TrendingUp } from 'lucide-react'
import FadeInUp from './FadeInUp'

const steps = [
  {
    icon: Search,
    step: '01',
    title: '브랜드 진단',
    description: '광고주의 브랜드, 타겟, 경쟁사를 분석하고 현재 SNS 상태를 진단합니다.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: '전략 설계',
    description: '플랫폼별 콘텐츠 방향, 타겟 오디언스, KPI를 설정합니다.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'AI 콘텐츠 제작',
    description: 'AI로 콘텐츠를 제작하고, 전략에 맞게 사람이 검수합니다.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: '운영 & 최적화',
    description: '데이터를 모니터링하고 성과 패턴을 분석해 지속적으로 최적화합니다.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 px-6">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          콘텐츠가 성과가 되기까지
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          4단계, 성과가 나오는 구조
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
