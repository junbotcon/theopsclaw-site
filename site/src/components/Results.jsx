import { results, screenshots } from '../data/results'
import { useCountUp } from '../hooks/useCountUp'
import FadeInUp from './FadeInUp'

function StatCard({ value, suffix, label }) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref} className="text-center p-6">
      <p className="text-3xl md:text-5xl font-bold text-primary whitespace-nowrap">
        {display.toLocaleString()}
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          숫자가 증명합니다
        </h2>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {screenshots.map((shot) => (
            <div
              key={shot.src}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className={`w-full h-auto ${shot.dark ? 'invert brightness-95' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <p className="mt-8 text-center text-sm text-gray-400">
          * 실제 운영 계정 인스타그램 인사이트 데이터 (최근 30일 기준)
        </p>
      </FadeInUp>
    </section>
  )
}
