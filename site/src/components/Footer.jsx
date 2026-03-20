import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-base font-bold text-gray-900">TheOpsClaw</p>
          <p className="mt-1 text-sm text-gray-400">AI 기반 SNS 마케팅 에이전시</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:admin@theopsclaw.com"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <Mail size={16} />
            admin@theopsclaw.com
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2026 TheOpsClaw. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
