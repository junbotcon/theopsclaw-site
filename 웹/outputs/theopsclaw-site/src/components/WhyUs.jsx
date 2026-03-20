import { Globe, Share2, FileText, Zap } from 'lucide-react'
import FadeInUp from './FadeInUp'

const items = [
  {
    icon: Globe,
    title: '오가닉 도달 확대',
    description: '광고 없이 콘텐츠 자체의 힘으로 도달을 넓힙니다.',
  },
  {
    icon: Share2,
    title: '저장·공유 바이럴',
    description: '저장하고 공유하고 싶은 콘텐츠를 만들어 자연 확산을 만듭니다.',
  },
  {
    icon: FileText,
    title: '투명한 성과 리포트',
    description: '부풀린 숫자 없이, 실제 인사이트 데이터를 그대로 공유합니다.',
  },
  {
    icon: Zap,
    title: 'AI 제작 효율',
    description: 'AI로 제작 속도와 양을 확보하고, 사람이 전략과 퀄리티를 잡습니다.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 px-6">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          우리와 함께하면
        </h2>
      </FadeInUp>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <FadeInUp key={item.title} delay={i * 0.1}>
            <div className="text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-light text-primary">
                <item.icon size={28} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-500">{item.description}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  )
}
