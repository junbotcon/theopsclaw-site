# SNS 마케팅 대행사 랜딩 페이지 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** SNS 마케팅 대행사의 클라이언트 유치용 싱글 페이지 랜딩 사이트를 React + Tailwind로 구축한다.

**Architecture:** Vite + React SPA. 4개 섹션 컴포넌트(Hero, Results, Services, Contact) + 공통 CountUp 훅으로 구성. framer-motion은 카운트업 애니메이션에만 사용. 라우팅 없음.

**Tech Stack:** React 18, Tailwind CSS 3, Vite, framer-motion, lucide-react

**Spec:** `docs/superpowers/specs/2026-03-20-sns-agency-landing-design.md`

---

## File Structure

```
site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx              # React entrypoint
│   ├── App.jsx               # 섹션 조합 + smooth scroll
│   ├── index.css             # Tailwind directives + font imports
│   ├── hooks/
│   │   └── useCountUp.js     # Intersection Observer + 카운트업 로직
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Results.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── data/
│       ├── results.js        # 성과 숫자 데이터
│       └── services.js       # 서비스 카드 데이터
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `site/package.json`
- Create: `site/vite.config.js`
- Create: `site/tailwind.config.js`
- Create: `site/postcss.config.js`
- Create: `site/index.html`
- Create: `site/src/main.jsx`
- Create: `site/src/index.css`
- Create: `site/src/App.jsx`

- [ ] **Step 1: Create project directory and initialize**

```bash
mkdir -p site/src
cd site
npm init -y
```

- [ ] **Step 2: Install dependencies**

```bash
npm install react react-dom framer-motion lucide-react
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 4: Configure `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          active: '#4338CA',
          light: '#EEF2FF',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: Create `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 6: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TheOpsClaw — SNS 마케팅 대행사</title>
    <meta name="description" content="데이터 기반 SNS 마케팅으로 성과를 만듭니다." />
  </head>
  <body class="bg-white text-gray-900 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Create `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

- [ ] **Step 8: Create placeholder `src/App.jsx`**

```jsx
export default function App() {
  return (
    <main>
      <h1>TheOpsClaw</h1>
    </main>
  )
}
```

- [ ] **Step 9: Verify dev server runs**

```bash
npx vite --open
```

Expected: Browser opens with "TheOpsClaw" text on white background.

- [ ] **Step 10: Commit**

```bash
git add site/
git commit -m "chore: scaffold Vite + React + Tailwind project"
```

---

### Task 2: Data Files

**Files:**
- Create: `site/src/data/results.js`
- Create: `site/src/data/services.js`

- [ ] **Step 1: Create `src/data/results.js`**

```js
export const results = [
  { value: 1200, suffix: '만+', label: '총 콘텐츠 조회수' },
  { value: 150, suffix: '+', label: '운영 계정 수' },
  { value: 300, suffix: '%', label: '평균 팔로워 증가율' },
]
```

- [ ] **Step 2: Create `src/data/services.js`**

```js
export const services = [
  {
    icon: 'Users',
    title: 'SNS 계정 운영',
    description: '브랜드에 맞는 콘텐츠 기획부터 일상 운영까지 전담합니다.',
  },
  {
    icon: 'Clapperboard',
    title: '콘텐츠 제작',
    description: '릴스, 쇼츠, 틱톡 영상 등 플랫폼에 최적화된 콘텐츠를 제작합니다.',
  },
  {
    icon: 'Target',
    title: '광고 집행',
    description: '메타, 틱톡 광고를 데이터 기반으로 세팅하고 최적화합니다.',
  },
  {
    icon: 'BarChart3',
    title: '데이터 분석',
    description: '성과 데이터를 분석하고 액션 가능한 인사이트를 제공합니다.',
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add site/src/data/
git commit -m "feat: add results and services data"
```

---

### Task 3: useCountUp Hook

**Files:**
- Create: `site/src/hooks/useCountUp.js`

- [ ] **Step 1: Create `src/hooks/useCountUp.js`**

```js
import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function useCountUp(target, duration = 1.5) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [spring])

  // prefers-reduced-motion: skip animation
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setDisplay(target)
      motionValue.jump(target)
    }
  }, [target, motionValue])

  return { ref, display }
}
```

- [ ] **Step 2: Verify no import errors**

```bash
cd site && npx vite build 2>&1 | head -5
```

Expected: Build succeeds (unused export is fine).

- [ ] **Step 3: Commit**

```bash
git add site/src/hooks/
git commit -m "feat: add useCountUp hook with reduced-motion support"
```

---

### Task 4: Hero Component

**Files:**
- Create: `site/src/components/Hero.jsx`

- [ ] **Step 1: Create `src/components/Hero.jsx`**

```jsx
export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
        SNS에서 성과를 만듭니다
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
        인스타그램, 틱톡, 유튜브 쇼츠 — 데이터 기반 SNS 마케팅
      </p>
      <a
        href="#contact"
        className="mt-10 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl
                   hover:bg-primary-hover active:bg-primary-active
                   transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                   min-h-[44px] min-w-[44px]"
      >
        무료 상담 신청
      </a>
    </section>
  )
}
```

- [ ] **Step 2: Wire into App.jsx**

Replace `src/App.jsx`:

```jsx
import Hero from './components/Hero'

export default function App() {
  return (
    <main>
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npx vite --open
```

Expected: Full-height hero with headline, subtext, indigo CTA button centered.

- [ ] **Step 4: Commit**

```bash
git add site/src/components/Hero.jsx site/src/App.jsx
git commit -m "feat: add Hero section"
```

---

### Task 5: Results Component

**Files:**
- Create: `site/src/components/Results.jsx`

- [ ] **Step 1: Create `src/components/Results.jsx`**

```jsx
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
```

- [ ] **Step 2: Add to App.jsx**

```jsx
import Hero from './components/Hero'
import Results from './components/Results'

export default function App() {
  return (
    <main>
      <Hero />
      <Results />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll past Hero. Expected: 3 stat cards with numbers animating from 0 to target on scroll-in.

- [ ] **Step 4: Commit**

```bash
git add site/src/components/Results.jsx site/src/App.jsx
git commit -m "feat: add Results section with count-up animation"
```

---

### Task 6: Services Components

**Files:**
- Create: `site/src/components/ServiceCard.jsx`
- Create: `site/src/components/Services.jsx`

- [ ] **Step 1: Create `src/components/ServiceCard.jsx`**

```jsx
import * as icons from 'lucide-react'

export default function ServiceCard({ icon, title, description }) {
  const Icon = icons[icon]

  return (
    <div
      className="p-8 bg-white rounded-2xl shadow-sm
                 hover:shadow-md hover:-translate-y-1
                 transition-all duration-200"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-gray-500">{description}</p>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/components/Services.jsx`**

```jsx
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
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Hero from './components/Hero'
import Results from './components/Results'
import Services from './components/Services'

export default function App() {
  return (
    <main>
      <Hero />
      <Results />
      <Services />
    </main>
  )
}
```

- [ ] **Step 4: Verify in browser**

Expected: 4 service cards in a row (desktop) with icons, hover lift effect.

- [ ] **Step 5: Commit**

```bash
git add site/src/components/ServiceCard.jsx site/src/components/Services.jsx site/src/App.jsx
git commit -m "feat: add Services section with Soft UI cards"
```

---

### Task 7: Contact + Footer + Final Assembly

**Files:**
- Create: `site/src/components/Contact.jsx`
- Create: `site/src/components/Footer.jsx`
- Modify: `site/src/App.jsx`

- [ ] **Step 1: Create `src/components/Contact.jsx`**

```jsx
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-primary-light">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          성과가 궁금하신가요?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          SNS 마케팅에 대해 편하게 문의해주세요.
        </p>
        <a
          href="mailto:admin@theopsclaw.com"
          className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl
                     hover:bg-primary-hover active:bg-primary-active
                     transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                     min-h-[44px]"
        >
          <Mail size={20} />
          이메일 문의하기
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `src/components/Footer.jsx`**

```jsx
export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-sm text-gray-400">
      &copy; 2026 TheOpsClaw. All rights reserved.
    </footer>
  )
}
```

- [ ] **Step 3: Final `src/App.jsx`**

```jsx
import Hero from './components/Hero'
import Results from './components/Results'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <Results />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 4: Verify full page in browser**

```bash
npx vite --open
```

Expected: 전체 4섹션 + 푸터가 스크롤로 이어지며, Hero CTA 클릭 시 Contact 섹션으로 smooth scroll. 이메일 버튼 클릭 시 메일 클라이언트 열림.

- [ ] **Step 5: Check responsive (375px, 768px, 1024px)**

DevTools에서 모바일 뷰 확인. Results 2열, Services 1열(모바일) → 4열(데스크톱).

- [ ] **Step 6: Commit**

```bash
git add site/src/components/Contact.jsx site/src/components/Footer.jsx site/src/App.jsx
git commit -m "feat: add Contact, Footer, complete page assembly"
```

---

### Task 8: Final Polish & Build Verification

**Files:**
- Modify: various (minor tweaks if needed)

- [ ] **Step 1: Production build**

```bash
cd site && npx vite build
```

Expected: `dist/` folder created, no errors.

- [ ] **Step 2: Preview production build**

```bash
npx vite preview
```

Expected: Production build runs correctly at localhost:4173.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: verify production build"
```
