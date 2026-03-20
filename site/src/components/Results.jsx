import { results } from '../data/results'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ value, suffix, label }) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref} className="text-center p-6">
      <p className="text-4xl md:text-5xl font-bold text-primary">
        {display.toLocaleString()}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </p>
      <p className="mt-2 text-base text-gray-500">{label}</p>
    </div>
  )
}

export default function Results() {
  return (
    <section className="py-20 md:py-28 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        실적이 증명합니다
      </h2>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {results.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}
