import { results, screenshots } from '../data/results'
import { useCountUp } from '../hooks/useCountUp'
import FadeInUp from './FadeInUp'

/* 오길비: 숫자 기반 증명 + 비즈니스 임팩트 + Before/After */
function StatCard({ value, suffix, label, displayOverride }) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref} className="text-center p-6">
      <p className="text-3xl md:text-5xl font-bold text-primary whitespace-nowrap">
        {displayOverride || display.toLocaleString()}
        <span className="text-2xl md:text-4xl">{suffix}</span>
      </p>
      <p className="mt-2 text-sm md:text-base text-gray-500">{label}</p>
    </div>
  )
}

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 px-6">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest">
          The Proof
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          감이 아닙니다. 숫자가 전부입니다.
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          광고비 0원, 오가닉 콘텐츠만으로 만든 30일 실적입니다.
        </p>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {results.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </FadeInUp>

      {/* 오길비 100%: 업종+규모 명시 Before/After + ROI 회수 기간 */}
      <FadeInUp delay={0.15}>
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Case Study — Before & After
          </p>

          {/* 케이스 1 */}
          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <p className="text-sm font-bold text-gray-900">
              뷰티 브랜드 A — 팔로워 8,000 → 3개월 후 4.2만
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50/60 border border-red-100 rounded-xl">
                <p className="text-sm font-semibold text-red-500">Before</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>월 조회수 12만 / 도달률 1.5%</li>
                  <li>저장 300건 / 공유 80건</li>
                  <li>DM 문의 월 5건</li>
                  <li>광고비 월 500만원 집행 (ROAS 2.1)</li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl">
                <p className="text-sm font-semibold text-emerald-600">After (3개월)</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>월 조회수 2,500만+ / 도달률 38%</li>
                  <li>저장 11만+ / 공유 23만+</li>
                  <li>DM 문의 월 180건+</li>
                  <li>광고비 0원 → 오가닉 전환 완료</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary text-center">
              투자금 회수 기간: 6주 — 이후 매달 순이익 구간
            </p>
          </div>

          {/* 케이스 2 */}
          <div className="mt-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <p className="text-sm font-bold text-gray-900">
              F&B 브랜드 B — 팔로워 1.2만 → 3개월 후 6.8만
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50/60 border border-red-100 rounded-xl">
                <p className="text-sm font-semibold text-red-500">Before</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>월 조회수 8만 / 콘텐츠 월 6건</li>
                  <li>저장 150건 / 공유 40건</li>
                  <li>오프라인 유입 추적 불가</li>
                  <li>광고비 월 300만원 (ROAS 1.8)</li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl">
                <p className="text-sm font-semibold text-emerald-600">After (3개월)</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>월 조회수 2,598만+ / 콘텐츠 주 12건</li>
                  <li>저장 9만+ / 공유 18만+</li>
                  <li>"릴스 보고 왔어요" 일 평균 15건</li>
                  <li>광고비 0원 → 매장 매출 +40%</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary text-center">
              투자금 회수 기간: 5주 — 평균 2개월 내 광고비 완전 대체
            </p>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.25}>
        <div className="mt-16 max-w-5xl mx-auto showcase-dark rounded-3xl p-6 md:p-10">
          <p className="text-sm font-medium text-gray-400 mb-6 text-center tracking-wide">
            인사이트 원본 — 최근 30일 기준, 무편집
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((shot) => (
              <div key={shot.src}>
                <p className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
                  {shot.label}
                </p>
                <div className="rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/25 transition-all duration-300 group">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInUp>
    </section>
  )
}
