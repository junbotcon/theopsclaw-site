import { Mail } from 'lucide-react'
import FadeInUp from './FadeInUp'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-primary-light">
      <div className="text-center max-w-2xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            성과가 궁금하신가요?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            SNS 마케팅에 대해 편하게 문의해주세요.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <a
            href="mailto:admin@theopsclaw.com"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl hover:bg-primary-hover active:bg-primary-active transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-11 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Mail size={20} />
            협업 문의하기
          </a>
        </FadeInUp>
      </div>
    </section>
  )
}
