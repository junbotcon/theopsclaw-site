import * as icons from 'lucide-react'

export default function ServiceCard({ icon, title, description }) {
  const Icon = icons[icon]

  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-gray-500">{description}</p>
    </div>
  )
}
