import { Check, Star, Shield, Zap, Clock, Eye } from 'lucide-react'
import FadeInUp from './FadeInUp'

/*
  크리스 두 100%: 결과(Outcome) 정량화, 건수→결과 전환, 자기선택 질문
  러셀 브런슨 100%: Stack 에스컬레이션 리듬 + 합산 극적 연출 + 보너스 극적 전환
  오길비 100%: 티어별 기대 성과 프로젝션 + 기대 ROAS
  호르모지 100%: Grand Slam 4변수 + 감정적 보장 프레이밍 + 티어별 Dream Outcome
*/

const tiers = [
  {
    name: 'Starter',
    outcome: '브랜드 인지 확보',
    targetMetric: '월 500만 도달 / 팔로워 월 1,000명+ 증가',
    price: '월 ₩',
    description: '존재감부터 만들어야 하는 브랜드',
    dream: '3개월 후, 콘텐츠를 올릴 때마다 반응이 오기 시작합니다. "요즘 자주 보여요"라는 DM이 옵니다.',
    stack: [
      { item: 'AI 기반 콘텐츠 제작 & 퍼블리싱', value: '200만원' },
      { item: '1개 플랫폼 운영 대행', value: '100만원' },
      { item: '월간 성과 리포트 (인사이트 원본)', value: '50만원' },
      { item: '해시태그 & 트렌드 전략', value: '50만원' },
    ],
    totalValue: '400만원',
    guarantee: '첫 달 불만족 시 다음 달 무료 연장',
    guaranteeFrame: '마음에 안 들면 다음 달은 무료입니다. 리스크는 우리가 집니다.',
    grandSlam: {
      time: '계약 후 5일 내 첫 콘텐츠 라이브',
      effort: '월 1회 30분 피드백 미팅만 하시면 됩니다',
    },
    expectedRoas: '예상 ROAS: 3.0+ (3개월 기준)',
    highlight: false,
  },
  {
    name: 'Growth',
    outcome: '성장 가속',
    targetMetric: '월 2,000만 도달 / DM 문의 월 50건+ / 팔로워 월 5,000명+',
    price: '월 ₩₩',
    description: '도달과 전환을 본격적으로 끌어올릴 브랜드',
    dream: '3개월 후, 매일 아침 인사이트를 열면 조회수가 수십만을 찍고 있고, DM에 협업 문의와 고객 문의가 쌓여 있습니다.',
    stack: [
      { item: 'AI 기반 콘텐츠 제작 & 멀티 플랫폼 퍼블리싱', value: '400만원' },
      { item: '2개 플랫폼 통합 운영', value: '200만원' },
      { item: '주간 성과 리포트 + 전략 미팅', value: '200만원' },
      { item: '트렌드 분석 & 경쟁사 모니터링', value: '150만원' },
      { item: '타겟 오디언스 최적화', value: '100만원' },
      { item: '콘텐츠 A/B 테스트', value: '100만원' },
    ],
    totalValue: '1,150만원',
    bonus: '첫 달 콘텐츠 전략 워크숍 무료 제공',
    bonusValue: '150만원',
    guarantee: 'KPI 미달성 시 1개월 무상 연장',
    guaranteeFrame: '약속한 KPI에 못 미치면, 달성할 때까지 추가 비용 없이 계속합니다.',
    grandSlam: {
      time: '계약 후 3일 내 첫 콘텐츠 라이브',
      effort: '격주 1회 30분 피드백만 하시면 됩니다',
    },
    expectedRoas: '예상 ROAS: 5.0+ (3개월 기준)',
    highlight: true,
  },
  {
    name: 'Dominate',
    outcome: '시장 지배',
    targetMetric: '월 5,000만+ 도달 / 카테고리 검색 1페이지 / DM 문의 월 150건+',
    price: '월 ₩₩₩',
    description: '카테고리 1위를 목표로 하는 브랜드',
    dream: '3개월 후, 귀사의 콘텐츠가 카테고리를 지배하고 있습니다. 경쟁사가 "저 브랜드 뭐야?"라고 묻기 시작합니다. 광고비는 0원인데 매출 그래프는 우상향입니다.',
    stack: [
      { item: 'AI 기반 콘텐츠 대량 제작 & 전 플랫폼 운영', value: '600만원' },
      { item: '전 플랫폼 통합 전략 운영', value: '350만원' },
      { item: '실시간 대시보드 + 주 2회 전략 미팅', value: '400만원' },
      { item: '트렌드 선점 & 바이럴 설계', value: '300만원' },
      { item: '브랜드 전용 AI 모델 커스터마이징', value: '500만원' },
      { item: '퍼포먼스 광고 연계 최적화', value: '200만원' },
    ],
    totalValue: '2,350만원',
    bonus: '전략 워크숍 + 경쟁사 심층 분석 보고서',
    bonusValue: '300만원',
    guarantee: '90일 KPI 미달성 시 달성할 때까지 무상 연장, 그래도 미달 시 전액 환불',
    guaranteeFrame: '당신이 지는 건 불가능합니다. 성과가 나오면 귀사가 이기고, 성과가 안 나오면 1원도 내지 않으니 그래도 귀사가 이깁니다.',
    grandSlam: {
      time: '계약 후 48시간 내 첫 콘텐츠 라이브',
      effort: '귀사는 피드백만. 기획, 제작, 운영, 분석 전부 우리가.',
    },
    expectedRoas: '예상 ROAS: 8.0+ (3개월 기준)',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-gray-50/50">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest">
          Investment Options
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          3개월 후, 어떤 결과를 보고 싶으신가요?
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          가격이 아니라, 3개월 후 귀사의 모습으로 선택하세요.
        </p>
      </FadeInUp>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {tiers.map((tier, i) => (
          <FadeInUp key={tier.name} delay={i * 0.1}>
            <div
              className={`relative p-8 rounded-2xl transition-all duration-200 ${
                tier.highlight
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.03]'
                  : 'bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                  <Star size={12} /> MOST POPULAR
                </div>
              )}

              {/* Tier name & quantified outcome */}
              <p className={`text-sm font-semibold uppercase tracking-wider ${tier.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                {tier.name}
              </p>
              <h3 className={`mt-2 text-2xl font-bold ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                {tier.outcome}
              </h3>

              {/* 크리스 두: 정량적 기대 결과 */}
              <p className={`mt-2 text-xs font-semibold ${tier.highlight ? 'text-indigo-200' : 'text-primary'}`}>
                {tier.targetMetric}
              </p>

              <p className={`mt-1 text-sm ${tier.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                {tier.description}
              </p>

              {/* 호르모지: Dream Outcome 장면 */}
              <div className={`mt-4 flex items-start gap-2 p-3 rounded-lg ${
                tier.highlight ? 'bg-indigo-500/20' : 'bg-primary-light'
              }`}>
                <Eye size={14} className={`shrink-0 mt-0.5 ${tier.highlight ? 'text-indigo-200' : 'text-primary'}`} />
                <p className={`text-xs leading-relaxed ${tier.highlight ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {tier.dream}
                </p>
              </div>

              <p className={`mt-4 text-3xl font-extrabold ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                {tier.price}
              </p>

              {/* 러셀 브런슨: Value Stack with escalation */}
              <p className={`mt-4 text-xs font-semibold uppercase tracking-wider ${tier.highlight ? 'text-indigo-300' : 'text-gray-400'}`}>
                포함된 가치를 확인하세요
              </p>
              <ul className="mt-3 space-y-3">
                {tier.stack.map((s) => (
                  <li key={s.item} className="flex items-start gap-3">
                    <Check size={16} className={`shrink-0 mt-1 ${tier.highlight ? 'text-indigo-200' : 'text-primary'}`} />
                    <div className="flex-1">
                      <span className={`text-sm ${tier.highlight ? 'text-indigo-100' : 'text-gray-600'}`}>{s.item}</span>
                      <span className={`ml-2 text-xs font-semibold ${tier.highlight ? 'text-indigo-300' : 'text-gray-400'}`}>
                        (가치 {s.value})
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* 브런슨: 보너스 극적 전환 */}
              {tier.bonus && (
                <div className={`mt-4 px-3 py-3 rounded-lg ${
                  tier.highlight ? 'bg-indigo-500/30' : 'bg-amber-50 border border-amber-100'
                }`}>
                  <p className={`text-xs ${tier.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                    여기서 끝이 아닙니다 —
                  </p>
                  <p className={`mt-1 text-sm font-bold ${tier.highlight ? 'text-yellow-300' : 'text-amber-700'}`}>
                    <Star size={12} className="inline mr-1" />
                    BONUS: {tier.bonus} (가치 {tier.bonusValue})
                  </p>
                </div>
              )}

              {/* 브런슨: 합산 클라이맥스 — 극적 연출 */}
              <div className={`mt-4 pt-4 border-t text-center ${tier.highlight ? 'border-indigo-400/30' : 'border-gray-100'}`}>
                <p className={`text-xs ${tier.highlight ? 'text-indigo-300' : 'text-gray-400'}`}>
                  이 모든 것을 합치면
                </p>
                <p className={`mt-1 text-xl font-extrabold line-through decoration-2 ${tier.highlight ? 'text-indigo-300' : 'text-gray-300'}`}>
                  {tier.totalValue}+
                </p>
                <p className={`text-sm font-bold ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                  실제 투자금은 상담 시 안내
                </p>
              </div>

              {/* 오길비: 기대 ROAS */}
              <p className={`mt-3 text-center text-xs font-semibold ${tier.highlight ? 'text-indigo-200' : 'text-primary'}`}>
                {tier.expectedRoas}
              </p>

              {/* Grand Slam: Time & Effort */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap size={14} className={tier.highlight ? 'text-indigo-200' : 'text-primary'} />
                  <p className={`text-xs ${tier.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {tier.grandSlam.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className={tier.highlight ? 'text-indigo-200' : 'text-primary'} />
                  <p className={`text-xs ${tier.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {tier.grandSlam.effort}
                  </p>
                </div>
              </div>

              {/* 호르모지: 감정적 보장 프레이밍 */}
              <div className={`mt-4 flex items-start gap-3 p-3 rounded-xl ${
                tier.highlight ? 'bg-emerald-500/20 border border-emerald-400/30' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <Shield size={18} className={`shrink-0 mt-0.5 ${tier.highlight ? 'text-emerald-300' : 'text-emerald-600'}`} />
                <p className={`text-xs leading-relaxed font-semibold ${tier.highlight ? 'text-emerald-200' : 'text-emerald-700'}`}>
                  {tier.guaranteeFrame}
                </p>
              </div>

              <a
                href="#contact"
                className={`mt-6 block text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-white text-primary hover:bg-indigo-50'
                    : 'bg-primary text-white hover:bg-primary-hover'
                }`}
              >
                슬롯 확인하기
              </a>
            </div>
          </FadeInUp>
        ))}
      </div>

      {/* 크리스 두: 자기선택 질문 */}
      <FadeInUp delay={0.4}>
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            당신의 브랜드는 지금 어느 단계에 있습니까?
          </p>
          <p className="mt-3 text-base text-gray-500">
            존재감이 필요한가요, 성장을 가속해야 하나요, 아니면 시장을 지배할 준비가 되었나요?
          </p>
        </div>
      </FadeInUp>
    </section>
  )
}
