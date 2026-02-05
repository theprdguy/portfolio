# CONTEXT (TL;DR)

## What we are doing (1-2 lines)
- Next.js + Tailwind 기반 포트폴리오 웹사이트 (theprdguy.github.io)
- 프로젝트 갤러리 + Medium 글 카드를 전시하는 정적 사이트

## Tech Stack
- Next.js 14+ (App Router, Static Export)
- Tailwind CSS
- TypeScript
- GitHub Pages + GitHub Actions (자동 배포)

## Operating mode
- SSOT-first, Contract-first, Ownership, Small PR, A-Mode questions
- Make is the standard interface: make pr-check is the minimum gate

## Current milestone
- Portfolio v1.0: Hero + ProjectGallery + MediumSection

## What works now (demo path)
1. `make dev` - 개발 서버 실행 (http://localhost:3000)
2. `make build` - 정적 빌드 (apps/web/out)
3. main 브랜치 push → GitHub Actions → theprdguy.github.io 자동 배포

## Key decisions (top 5)
- Using Make for verification interface
- Next.js Static Export (output: 'export')
- Tailwind CSS for styling
- 수동 데이터 관리 (projects.ts, articles.ts)
- GitHub Actions for deployment

## Active tickets (top 10)
- See tasks/QUEUE.yaml

## Open questions (top 10)
- 없음 (모두 해결됨)
