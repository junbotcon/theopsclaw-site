/*
  ★ 광고주별 커스텀 데이터 — 이 파일만 바꾸면 전체 제안서가 바뀜
  client-analysis-framework.md Phase 1~5 에서 수집한 정보를 여기 입력
*/

export const client = {
  // === Phase 1: 기본 정보 ===
  brandName: '뉴트리원',
  productName: '멜라토닌 수면 젤리',
  category: '건강기능식품 / 수면 보조',
  salesChannels: ['올리브영', '자사몰', '쿠팡'],
  usp: '젤리 제형으로 간편 섭취, 멜라토닌 + 테아닌 복합 성분',
  priceRange: '19,900원 (30일분)',

  // === Phase 2: 현재 마케팅 상황 ===
  instagram: '@nutrione_official',
  followers: 8200,
  currentContent: '제품 사진 피드 위주, 릴스 거의 없음',
  pastMarketing: '인플루언서 3회 집행 (건당 80~120만원), 성과 불투명',
  painPoints: [
    '인플루언서 비용 대비 성과 측정이 안 됨',
    '콘텐츠가 광고 티가 나서 저장/공유가 안 됨',
    '릴스를 만들고 싶은데 내부 제작 역량이 없음',
  ],
  monthlyBudget: '300~500만원',

  // === Phase 3: 타겟 소비자 ===
  targetAge: '25~40대',
  targetGender: '여성',
  consumerNeeds: '수면 질 개선, 다음 날 컨디션, 간편한 섭취',
  infoChannels: ['인스타그램', '올리브영 리뷰', '유튜브'],

  // === Phase 4: 목표 ===
  goal: '브랜드 인지도 + 올리브영 매출 전환',
  kpiTarget: '월 500만 도달, 올리브영 검색량 30% 증가',
  timeline: '3개월',
  hiddenNeeds: [
    '인플루언서에 돈 썼는데 성과가 안 보여서 불안',
    '경쟁사(레몬트리 수면젤리)가 릴스로 치고 올라오는 게 보임',
    '대표가 "인스타 좀 해라"고 하는데 뭘 해야 할지 모름',
  ],

  // === Phase 5: 콘텐츠 방향 ===
  exposureStyle: '자연스럽게 녹이기',
  tonePreference: '밝고 귀여운 (캐릭터 활용)',
  reference: '필로우톡 인스타 — 수면 정보 콘텐츠',
  restrictions: ['경쟁사 직접 언급 금지', '의학적 효능 보장 표현 금지'],
}

// === 우리 채널 데이터 (고정) ===
export const channels = [
  {
    name: '성준 채널',
    handle: '@health_sj',
    followers: '22만',
    monthlyViews: '2,000만+',
    theme: '남성 건강 · 운동 · 영양',
    audience: '25~40대 남성 60%, 여성 40%',
    nonFollowerReach: '90%+',
  },
  {
    name: '주희 채널',
    handle: '@health_jh',
    followers: '18만',
    monthlyViews: '1,500만+',
    theme: '여성 건강 · 뷰티 · 라이프스타일',
    audience: '20~35대 여성 80%',
    nonFollowerReach: '88%+',
  },
]

// === 상품 정보 (고정) ===
export const product = {
  pricePerContent: '100만원',
  includes: [
    '시나리오 기획',
    'AI 캐릭터 콘텐츠 제작',
    '채널 게시 (영구 잔존)',
    '48시간 속보 + 주간 + 월간 리포트',
  ],
  totalNetwork: '40만 팔로워',
  totalMonthlyViews: '3,500만+',
  savesRecord: '22만+',
  sharesRecord: '47만+',
}

// === 시나리오 샘플 (광고주 제품으로 커스텀) ===
export const scenarioSample = {
  title: `${client.productName} — AI 캐릭터 릴스 시나리오`,
  note: '본 자료는 스토리(대사/흐름) 확인용 초안입니다. 디자인·캐릭터·배경은 제작 과정에서 변경될 수 있습니다.',
  steps: [
    { emoji: '🧸', label: '후킹', line: '"릴스 하나만… 벌써 새벽 두시야…"' },
    { emoji: '💭', label: '문제', line: '"지금 자도 4시간도 못자네. 내일 또 좀비 출근이다"' },
    { emoji: '💡', label: '원인', line: '"블루라이트가 멜라토닌 분비를 막고 있었어"' },
    { emoji: '🟡', label: '제품 등장', line: `"나 찾았어? ${client.productName}! 밤 모드로 전환해줄게"` },
    { emoji: '✅', label: 'CTA', line: '"올리브영에서 만나! 🔗 프로필 링크"' },
  ],
}

// === 비교표 데이터 ===
export const comparison = [
  { item: '건당 단가', influencer: '80~150만원', us: '100만원' },
  { item: '콘텐츠 지속성', influencer: '단발 1회, 삭제 가능', us: '채널에 영구 잔존' },
  { item: '제작 안정성', influencer: '사람 컨디션/일정 의존', us: 'AI 기반 — 안정적 대량 제작' },
  { item: '광고 느낌', influencer: '광고 티 → 스킵', us: '정보형 콘텐츠 → 저장/공유' },
  { item: '성과 리포트', influencer: '없거나 부실', us: '인사이트 원본 48h/주간/월간' },
  { item: '채널 네트워크', influencer: '단일 채널', us: '2채널 40만 팔로워' },
  { item: '비팔로워 도달', influencer: '30~50%', us: '90%+ (신규 도달)' },
]
