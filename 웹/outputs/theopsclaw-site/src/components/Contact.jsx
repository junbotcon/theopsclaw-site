import { Mail, Clock, Shield, Users } from 'lucide-react'
import FadeInUp from './FadeInUp'

/*
  오렌 클라프 100%: 통화 주도권 + 거절 기준 공개
  호르모지 100%: Dream Outcome 감각적 장면 묘사
*/
export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-primary-light">
      <div className="text-center max-w-2xl mx-auto">
        {/* 호르모지: Dream Outcome 장면 묘사 */}
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            3개월 후 아침, 인사이트를 열면
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            어제 올린 콘텐츠가 50만 조회를 찍고 있고,<br />
            DM에 협업 문의가 쌓여 있는 걸 보게 됩니다.<br />
            광고비는 0원인데, 매출 그래프는 올라가고 있습니다.
          </p>
        </FadeInUp>

        {/* 오렌 클라프: 주도권 + 심사 프레임 */}
        <FadeInUp delay={0.1}>
          <p className="mt-8 text-base text-gray-600 leading-relaxed">
            15분 통화에서 <span className="font-semibold text-gray-900">우리가 먼저 판단합니다.</span><br />
            귀사와 함께할 때 성과가 나올 수 있는 구조인지 확인합니다.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm text-gray-600">
              <Shield size={16} className="text-emerald-500" />
              성과 미달 시 전액 환불 (Dominate)
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm text-gray-600">
              <Users size={16} className="text-primary" />
              매달 3팀만 선정
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm text-gray-600">
              <Clock size={16} className="text-amber-500" />
              이번 달 마감까지 잔여 슬롯 확인
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <a
            href="mailto:admin@theopsclaw.com"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl hover:bg-primary-hover active:bg-primary-active transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-11 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Mail size={20} />
            적합성 확인 신청하기
          </a>
          {/* 오렌 클라프: 거절 기준 공개 — 갑 프레임 강화 */}
          <p className="mt-4 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            콘텐츠에 3개월 이상 투자할 의지가 없는 브랜드, 단기 바이럴만 원하는 브랜드는 받지 않습니다.<br />
            맞지 않으면 솔직하게 말씀드립니다.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
