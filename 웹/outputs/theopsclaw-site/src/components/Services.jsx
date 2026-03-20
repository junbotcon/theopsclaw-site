import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import FadeInUp from './FadeInUp'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-gray-50/50">
      <FadeInUp>
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest">
          What We Deliver
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center text-gray-900">
          우리가 만드는 건 콘텐츠가 아니라<br />
          성과를 내는 시스템입니다
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          각 서비스는 독립적이 아니라 하나의 성장 엔진으로 연결됩니다
        </p>
      </FadeInUp>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((svc, i) => (
          <FadeInUp key={svc.title} delay={i * 0.1}>
            <ServiceCard {...svc} />
          </FadeInUp>
        ))}
      </div>
    </section>
  )
}
