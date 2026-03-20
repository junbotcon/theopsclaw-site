import FadeInUp from './FadeInUp'

export default function ValueProp() {
  return (
    <section className="pt-10 md:pt-16 pb-20 md:pb-28 px-6 text-center">
      <FadeInUp>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          AI 콘텐츠, 정말 성과가 날까?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-500">
          30일 데이터로 답합니다.
        </p>
      </FadeInUp>
    </section>
  )
}
