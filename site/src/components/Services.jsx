import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import FadeInUp from './FadeInUp'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-gray-50/50">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          이렇게 성과를 만듭니다
        </h2>
        <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          숫자를 만들지 않습니다. 콘텐츠가 숫자를 만들게 합니다.
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
