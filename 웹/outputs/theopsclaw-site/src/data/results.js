/* 오길비: Vanity Metric + 비즈니스 임팩트 지표 병행 */
export const results = [
  { value: 5000, suffix: '만+', label: '오가닉 조회수 (30일)' },
  { value: 22, suffix: '만+', label: '저장수' },
  { value: 47, suffix: '만+', label: '공유수' },
  { value: 340, suffix: '%', label: '평균 문의 전환율 증가' },
  { value: 0, suffix: '원', label: '광고비 지출', displayOverride: '0' },
]

export const screenshots = [
  {
    src: import.meta.env.BASE_URL + 'images/account-a-views.png',
    alt: '계정 A 조회수 — 30일 2,569만 조회, 도달 719만 계정',
    label: '계정 A — 30일 조회수',
  },
  {
    src: import.meta.env.BASE_URL + 'images/account-a-engagement.png',
    alt: '계정 A 반응 — 30일 반응 167만, 저장 22만, 공유 47만',
    label: '계정 A — 반응 지표',
  },
  {
    src: import.meta.env.BASE_URL + 'images/account-b-views.png',
    alt: '계정 B 조회수 — 30일 2,598만 조회, 도달 624만 계정',
    label: '계정 B — 30일 조회수',
    dark: true,
  },
]
