# Project State (SSOT)

## North Star
- theprdguy의 개인 포트폴리오 사이트 - 프로젝트 갤러리와 Medium 글을 전시하는 정적 웹사이트 (GitHub Pages 배포)

## Current Milestone
- Portfolio v1.0: 프로젝트 갤러리 + Medium 글 카드
- DoD:
  - Next.js + Tailwind 기반 정적 사이트 구축
  - Hero, ProjectGallery, MediumSection 컴포넌트 완성
  - GitHub Actions를 통한 자동 배포 (theprdguy.github.io)
  - `make pr-check` 통과

## What works now (demo path)
- DevOS 인프라 (Makefile, SSOT 문서)
- 포트폴리오 UI 완성 (Hero, ProjectGallery, MediumSection)
- `make build` - 정적 빌드 (apps/web/out)
- `make lint` - 코드 품질 검사
- `make dev` - 개발 서버 (http://localhost:3000)

## Completed
- [x] T-000 Bootstrap SSOT + Make + queues
- [x] T-001 Define session-start triage routine
- [x] T-100 Next.js + Tailwind 프로젝트 초기화
- [x] T-101 기본 레이아웃 + Hero 섹션
- [x] T-102 ProjectCard + ProjectGallery 컴포넌트
- [x] T-103 MediumCard + MediumSection 컴포넌트
- [x] T-104 GitHub Actions 배포 워크플로우
- [x] T-105 Makefile 명령어 연동

## Blockers / Questions
- 없음 (모두 해결됨)

## Decisions (latest)
- ADRs live under docs/ADR/
- Next.js 14+ App Router + Static Export 사용
- Tailwind CSS 스타일링
- GitHub Pages 배포 (GitHub Actions)

## Next dispatch hint
- main 브랜치에 push하면 GitHub Actions가 자동 배포
- GitHub Repository Settings → Pages → Source: "GitHub Actions" 설정 필요
