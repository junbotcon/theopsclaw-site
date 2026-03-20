import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react'
import FadeInUp from './FadeInUp'

/*
  블레어 엔스(Blair Enns) 100%:
  - 타겟 규모 특정 (팔로워 1만~5만, 월 15건 이하)
  - 구체적 수치 진단
  - 개별 비용 환산 + 합산 총 출혈량
  - 비행동의 비용(Cost of Inaction) — 호르모지 연계
  - 절망 포인트: "더 열심히 해도 안 됩니다" 브릿지
*/
const pains = [
  {
    icon: TrendingDown,
    title: '릴스 평균 도달률 2% 미만',
    description:
      '팔로워 1만~5만 규모에서 월 15건 이하로 올리면 발생하는 전형적인 패턴입니다. 알고리즘 탓이 아닙니다. 콘텐츠 빈도와 구조가 도달을 막고 있습니다.',
    cost: '월 200만원 이상의 잠재 도달 손실',
  },
  {
    icon: DollarSign,
    title: '광고 ROAS가 3 이하로 추락',
    description:
      '퍼포먼스 광고에만 의존하면 CPM은 매분기 15~20% 오릅니다. 팔로워 3만 이하 브랜드는 오가닉 자산 없이 광고비만 녹는 구간에 갇힙니다.',
    cost: '6개월 후 같은 성과에 광고비 2배 필요',
  },
  {
    icon: Clock,
    title: '콘텐츠 1건에 3~5일 소요',
    description:
      '기획-촬영-편집-업로드. 월 8건이 한계인 팀 구조로는 알고리즘을 이길 수 없습니다. 경쟁사는 같은 기간에 40건을 올리고 있습니다.',
    cost: '매주 8건 이상의 기회비용 손실',
  },
  {
    icon: AlertTriangle,
    title: '전략 없이 감으로 운영 중',
    description:
      '트렌드가 48시간 내에 바뀌는데, "이거 괜찮을 것 같은데?"로 결정하고 있습니다. 데이터 없이 올리는 콘텐츠의 성공률은 평균 7% 미만입니다.',
    cost: '매달 트렌드를 놓칠 때마다 경쟁사에 점유율 이전',
  },
]

export default function Diagnosis() {
  return (
    <section className="py-20 md:py-28 px-6">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-red-500 uppercase tracking-widest">
          Problem Diagnosis
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          팔로워 1만~5만 브랜드가<br />
          빠지는 전형적인 함정입니다
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          하나라도 해당되면 콘텐츠가 아니라 구조의 문제입니다.
        </p>
      </FadeInUp>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pains.map((pain, i) => (
          <FadeInUp key={pain.title} delay={i * 0.1}>
            <div className="flex flex-col gap-4 p-6 bg-red-50/60 border border-red-100 rounded-2xl">
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-500">
                  <pain.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{pain.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-gray-500">
                    {pain.description}
                  </p>
                </div>
              </div>
              <div className="ml-17 px-3 py-2 bg-red-100/80 rounded-lg">
                <p className="text-xs font-semibold text-red-600">{pain.cost}</p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>

      {/* 합산 출혈량 + 비행동 비용 + 절망 브릿지 */}
      <FadeInUp delay={0.5}>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-block px-8 py-5 bg-red-100 border border-red-200 rounded-2xl">
            <p className="text-lg font-bold text-red-700">
              이 4가지를 합치면, 매달 최소 500만원 이상의 기회를 태우고 있습니다.
            </p>
            <p className="mt-2 text-sm text-red-600">
              6개월 방치하면 3,000만원. 지금 결정하지 않으면 이 숫자는 매달 커집니다.
            </p>
          </div>
          <p className="mt-8 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            문제는, <span className="font-semibold text-gray-900">더 열심히 한다고 해결되지 않는다</span>는 겁니다.<br />
            같은 구조에서 더 많이 올려봤자, 같은 결과가 더 빨리 반복될 뿐입니다.<br />
            <span className="font-semibold text-gray-900">구조 자체를 바꿔야 합니다.</span>
          </p>
        </div>
      </FadeInUp>
    </section>
  )
}
