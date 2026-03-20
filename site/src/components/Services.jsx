import { services } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gray-50/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        서비스
      </h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </section>
  )
}
