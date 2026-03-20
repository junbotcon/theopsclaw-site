import * as icons from 'lucide-react'

/* 러셀 브런슨: 각 서비스가 왜 그만큼의 가치인지 보여주기 — Pricing Stack과 연결 */
export default function ServiceCard({ icon, title, description, value }) {
  const Icon = icons[icon]

  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-gray-500 flex-1">{description}</p>
      {value && (
        <p className="mt-4 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg text-xs font-semibold text-amber-700">
          {value}
        </p>
      )}
    </div>
  )
}
