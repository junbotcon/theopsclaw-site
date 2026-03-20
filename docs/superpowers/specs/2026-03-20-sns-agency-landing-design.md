# SNS 마케팅 대행사 랜딩 페이지 — Design Spec

## Overview

SNS 마케팅 대행사의 클라이언트 유치를 목적으로 하는 싱글 페이지 랜딩 사이트.
성과 숫자로 신뢰를 확보하고, 서비스 소개 후 이메일 문의로 전환하는 Conversion-Optimized 구조.

## Target

- 잠재 클라이언트 (SNS 마케팅이 필요한 사업자/브랜드)
- 성과 데이터(조회수, 팔로워 등)를 통한 신뢰 확보가 핵심

## Tech Stack

- React + Tailwind CSS
- Vite (빌드 도구)
- framer-motion (애니메이션)
- Lucide React (아이콘)

## Style Direction

- **톤**: 밝고 감각적 (Soft UI Evolution)
- **배경**: #FAFAFA ~ #FFFFFF
- **포인트 컬러**: `#6366F1` (Indigo 500) / hover: `#4F46E5` / active: `#4338CA`
- **Contact 배경**: `#EEF2FF` (Indigo 50)
- **타이포그래피**: Pretendard (한글) + Inter (영문)
  - Hero 헤드라인: `text-4xl md:text-6xl font-bold`
  - 서브카피: `text-lg md:text-xl text-gray-500`
  - 섹션 타이틀: `text-3xl md:text-4xl font-bold`
  - 카드 제목: `text-xl font-semibold`
  - 본문: `text-base (16px) leading-relaxed`
- **섹션 패딩**: `py-20 md:py-28`
- **카드/요소**: `shadow-sm` 기본 → 호버 시 `shadow-md` + 라운딩 `rounded-2xl`
- **호버**: 200ms ease 트랜지션, `hover:-translate-y-1`
- **반응형**: 모바일 퍼스트 (375px, 768px, 1024px, 1440px)
- **아이콘**: Lucide (SVG), 이모지 사용 금지

## Page Structure

### 1. Hero (`h-screen`, 중앙 정렬)

- 헤드라인: 큰 볼드 텍스트 (예: "SNS에서 성과를 만듭니다")
- 서브 카피: 한 줄 설명 (예: "인스타그램, 틱톡, 유튜브 쇼츠 — 데이터 기반 SNS 마케팅")
- CTA 버튼: 포인트 컬러 배경, "무료 상담 신청" → Contact 섹션으로 smooth scroll
- 배경: 심플, 추후 성과 이미지 배경으로 교체 가능하도록 여백 확보

### 2. Results (성과 실적)

- 3~4개 숫자 카드, 가로 배치 (모바일 2열 그리드)
- 각 카드: 큰 숫자 (카운트업 애니메이션) + 라벨
  - 예시 데이터: "1,200만+" 총 콘텐츠 조회수 / "150+" 운영 계정 수 / "300%" 평균 팔로워 증가율
- 카운트업: Intersection Observer로 뷰포트 진입 시 0 → 목표값 애니메이션 (framer-motion)
- 숫자 아래에 성과 이미지 그리드 영역: 초기 구현에서는 렌더링하지 않음. 추후 이미지 제공 시 3열 그리드로 추가

### 3. Services (서비스 소개)

- 3~4개 카드, 가로 배치 (모바일 세로 스택)
- 각 카드: Lucide 아이콘 + 서비스명 + 한 줄 설명
  - 예시: SNS 계정 운영 / 콘텐츠 제작 / 광고 집행 / 데이터 분석
- Soft UI 스타일: 미세 그림자, 호버 시 translateY(-4px) + 그림자 강화

### 4. Contact (문의)

- 배경: 포인트 컬러를 살짝 깐 영역으로 시선 유도
- 헤드라인: "성과가 궁금하신가요?"
- CTA 버튼: `mailto:admin@theopsclaw.com` — "이메일 문의하기"

## Accessibility

- 색상 대비 4.5:1 이상
- 포커스 링 visible
- CTA 버튼 최소 44x44px 터치 타겟
- prefers-reduced-motion 시 카운트업 애니메이션 비활성화
- 시맨틱 HTML (section, h1~h3 순서)

## Anti-Patterns to Avoid

- 이모지를 아이콘 대신 사용하지 않음
- 다크 모드 없음 (밝은 톤 단일)
- 과도한 애니메이션 없음 (카운트업만)
- placeholder-only 라벨 사용 금지
- 가로 스크롤 금지

## Intentionally Omitted

- **Navigation/Header**: 싱글 페이지 4섹션이므로 별도 네비게이션 없음. 스크롤만으로 충분
- **Footer**: 최소한의 copyright 텍스트만 (예: "© 2026 TheOpsClaw. All rights reserved.")
- **SEO**: 추후 별도 작업. 이번 구현에서는 기본 title/meta만
- **다크 모드**: 없음

## Animation Details

- 카운트업: duration 1.5s, easeOut
- 호버 트랜지션: duration 200ms, ease
