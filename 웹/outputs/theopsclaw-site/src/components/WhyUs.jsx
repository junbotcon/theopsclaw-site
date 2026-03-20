import { Globe, Share2, FileText, Zap } from 'lucide-react'
import FadeInUp from './FadeInUp'

/*
  오렌 클라프(Oren Klaff): 갑(Prize) 프레임 컨트롤
  - Push-Pull: "모든 브랜드에 맞지 않습니다" (Push) → 항목으로 끌어당김 (Pull)
  - 사이트 전체 갑 톤 일관성 유지
*/
const items = [
  {
    icon: Globe,
    title: '30일 5,000만 오가닉 도달',
    description: '광고 1원 없이 콘텐츠만으로. 이 숫자를 만든 시스템을 그대로 적용합니다.',
  },
  {
    icon: Share2,
    title: '47만 공유, 22만 저장',
    description: '공유되는 콘텐츠는 만드는 게 아니라 설계하는 겁니다. 바이럴은 구조의 결과입니다.',
  },
  {
    icon: FileText,
    title: '인사이트 원본 100% 공개',
    description: '리포트를 예쁘게 포장하지 않습니다. 인사이트 화면 그대로 보여드립니다. 숨길 게 없으니까요.',
  },
  {
    icon: Zap,
    title: 'AI + 사람, 이 조합만 가능',
    description: 'AI가 속도를 내고, 사람이 전략을 잡습니다. 이 구조를 운영할 수 있는 팀은 극소수입니다.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 px-6">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest">
          Why Us & Only Us
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          솔직히, 모든 브랜드에 맞는 건 아닙니다
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          하지만 진심으로 성장하려는 브랜드라면,<br />
          이 결과를 만들 수 있는 팀은 많지 않다는 걸 아실 겁니다.
        </p>
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

      {/* 오렌 클라프: 지위(Status) 프레임 — 기존 파트너 업종으로 사회적 증거 */}
      <FadeInUp delay={0.5}>
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            현재 협업 중인 파트너 업종
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {['뷰티 · 코스메틱', 'F&B · 요식업', '패션 · 라이프스타일', '헬스 · 피트니스', '테크 · SaaS'].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600 rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            매달 수십 건의 문의 중, 실제로 함께하는 팀은 3팀뿐입니다.
          </p>
        </div>
      </FadeInUp>
    </section>
  )
}
