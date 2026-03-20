# Design 프로젝트 AGENTS

## 폴더 구조

```
design/
├── 캐릭터/          ← AI 캐릭터·아바타·콘텐츠 디자인
│   ├── _sources/   ← 오픈소스 원본
│   ├── frameworks/ ← 프레임워크 세팅 (프롬프트, 디자인 원칙)
│   └── outputs/    ← 결과물 (스타일카드 등)
│
├── 웹/              ← 웹사이트 디자인 & 개발
│   ├── _sources/   ← 오픈소스 원본 (webUI 등)
│   ├── frameworks/ ← 카피라이팅·디자인 프레임워크
│   └── outputs/    ← 제작된 사이트 (theopsclaw-site 등)
│
└── 제안서/           ← 제안서·프레젠테이션
    ├── _sources/   ← 참고 자료
    ├── frameworks/ ← 제안서 템플릿
    └── outputs/    ← 완성된 제안서
```

## 규칙

- `_sources/`: 외부에서 가져온 원본. 수정하지 않음.
- `frameworks/`: 원본을 기반으로 커스터마이징한 프레임워크, 원칙, 템플릿.
- `outputs/`: 실제 만들어진 결과물.
- 새 프로젝트는 해당 분류 폴더의 `outputs/`에 생성.
- Git은 `웹/outputs/`만 추적 (배포용). 나머지는 로컬 전용.
