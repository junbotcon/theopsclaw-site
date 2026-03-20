import { ArrowRight } from 'lucide-react'
import FadeInUp from './FadeInUp'

/* 패러다임 전환 (The Shift) — 블레어 엔스: 충분히 아프게 한 뒤 해결 패러다임 제시 */
export default function ValueProp() {
  return (
    <section className="pt-10 md:pt-16 pb-20 md:pb-28 px-6 text-center">
      <FadeInUp>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          The Shift
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          더 열심히 하는 게 아니라,<br />
          구조를 바꿔야 합니다
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          같은 노력으로 10배의 결과를 만드는 브랜드들은<br />
          콘텐츠를 '비용'이 아니라 '자산'으로 설계합니다.
        </p>
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8">
          <div className="flex-1 px-6 py-5 bg-red-50 border border-red-100 rounded-2xl text-center">
            <p className="text-sm font-semibold text-red-500">지금 대부분의 브랜드</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 text-left max-w-xs mx-auto">
              <li>광고비에 의존 → CPM 매분기 상승</li>
              <li>감으로 콘텐츠 기획 → 성과 들쭉날쭉</li>
              <li>1건 제작에 3~5일 → 트렌드 놓침</li>
              <li>오가닉 자산 0 → 광고 끄면 매출도 멈춤</li>
            </ul>
          </div>
          <ArrowRight size={24} className="text-primary shrink-0 rotate-90 md:rotate-0 self-center" />
          <div className="flex-1 px-6 py-5 bg-primary-light border border-indigo-200 rounded-2xl text-center">
            <p className="text-sm font-semibold text-primary">구조를 바꾼 브랜드</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 text-left max-w-xs mx-auto">
              <li>AI가 시장 데이터를 읽고 전략 설계</li>
              <li>주 10건+ 콘텐츠로 알고리즘 선점</li>
              <li>오가닉 도달이 광고비를 대체</li>
              <li>콘텐츠가 자산으로 누적 → 복리 성장</li>
            </ul>
          </div>
        </div>
      </FadeInUp>
    </section>
  )
}
