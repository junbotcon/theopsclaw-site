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
        <div className="mt-16 max-w-5xl mx-auto showcase-dark rounded-3xl p-6 md:p-10">
          <p className="text-sm font-medium text-gray-400 mb-6 text-center tracking-wide">
            광고 없이, 오가닉 콘텐츠만으로 만든 성과입니다 (최근 30일)
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
