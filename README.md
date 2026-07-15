# 포토폴리오 웹사이트

Next.js 기반의 개인 포토폴리오 웹사이트 **Leafresh**의 FE 저장소입니다.  

## [웹사이트 링크](https://www.kimlove.site/)


## 🔧 기술 스택

| 분류       | 기술                          |
|------------|-------------------------------|
| Language   | TypeScript                    |
| Framework  | React 19, Next.js 15          |
| Styling    | Tailwindcss 3      |
| 애니메이션    | motion (구 framer-motion)      |
| 아이콘   | LucideIcon   |
| 커스텀 훅   | usehooks-jhostudy |


## 폴더 구조

```
.
├── public
│   ├── data
│   │   └── project
│   │       └── details
│   ├── fonts
│   └── image
│       ├── projects      // 각 프로젝트 정적 저장소
│       └── stacks        // 각 스택 정적 저장소
└── src
    ├── app               // 메인페이지
    ├── components        // 사용 컴포넌트
    │   └── common           // 공용 컴포넌트
    └── lib               // 라이브러리
        ├── animation        // 재사용 애니메이션 저장소
        ├── colors           // Tailwind 기반의 사용색 저장소
        ├── hooks            // 커스텀 훅 저장소
        └── icons            // LucideIcon 사용 래퍼
```

## 🥺 실행 방법

별도의 환경 변수 없이 동작합니다.

### 1. 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

## 👥 팀원 (1人 개발)

| 이름 | 역할 | GitHub |
|------|------|--------|
| 홍길동 | 팀장 / 프론트엔드 | [@jihostudy](https://github.com/jihostudy) |

---

## 📄 라이선스

MIT License

