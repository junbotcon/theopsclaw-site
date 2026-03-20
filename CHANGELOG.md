# Design 프로젝트 CHANGELOG

## 2026-03-20 — 폴더 구조 대규모 재정비

### ⚠️ 중요 변경

**`site/` 폴더가 `웹/outputs/theopsclaw-site/`로 이동했습니다.**

이전 경로로 접근하면 안 됩니다.

### 변경 전
```
design/
├── site/              ← 사이트 코드
├── webUI/             ← 외부 레포 (서브모듈)
├── 캐릭터/             ← 디자인 자산 (Git 추적됨)
└── docs/superpowers/  ← 기획 문서
```

### 변경 후
```
design/
├── 캐릭터/
│   ├── _sources/      ← 오픈소스 원본
│   ├── frameworks/    ← 프레임워크 (디자인프레임워크.md, 프롬프트분해/)
│   └── outputs/       ← 결과물 (스타일카드/)
├── 웹/
│   ├── _sources/      ← 오픈소스 원본 (webUI)
│   ├── frameworks/    ← 카피라이팅·디자인 프레임워크
│   └── outputs/       ← ⭐ theopsclaw-site (배포용, Git 추적)
├── 제안서/
│   ├── _sources/
│   ├── frameworks/
│   └── outputs/
├── .agent/workflows/  ← 에이전트 워크플로우
├── AGENTS.md          ← 에이전트 세팅
└── CHANGELOG.md       ← 이 파일
```

### Git 추적 범위
- ✅ 추적: `웹/outputs/theopsclaw-site/`, `.github/`, `AGENTS.md`, `CHANGELOG.md`
- ❌ 비추적: `캐릭터/`, `웹/_sources/`, `제안서/` (로컬 전용)

### GitHub Pages 배포
- 배포 경로: `웹/outputs/theopsclaw-site/dist`
- 워크플로우: `.github/workflows/deploy.yml`
- 도메인: `theopsclaw.com`

### dev 서버 실행
```bash
cd 웹/outputs/theopsclaw-site
npm run dev -- --port 3099
```
