# UI Contract — SSOT

> Update this file first when UI behavior changes.

## Global UI States (mandatory)
Every screen must handle:
- loading
- empty
- error (with retry)
- success

## Screens
| Screen | Route | Primary action | Components |
|--------|-------|----------------|------------|
| Home | / | 프로젝트/글 탐색 | Header, Hero, ProjectGallery, MediumSection, Footer |

## Component Specifications

### Header
- **Purpose**: 네비게이션 헤더
- **Props**: none
- **Content**: 로고/이름, 네비게이션 링크 (Projects, Articles)
- **Behavior**: 스크롤 시 고정 (sticky)

### Hero
- **Purpose**: 메인 소개 섹션
- **Props**: none
- **Content**:
  - 이름/타이틀
  - 짧은 자기소개 (1-2문장)
  - 소셜 링크 (GitHub, LinkedIn, Medium)
- **Behavior**: 정적

### ProjectCard
- **Purpose**: 개별 프로젝트 카드
- **Props**:
  ```typescript
  interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
  }
  ```
- **Content**: 이미지, 제목, 설명, 태그 배지, 링크 버튼
- **Behavior**: 호버 시 약간의 상승 효과

### ProjectGallery
- **Purpose**: 프로젝트 카드 그리드
- **Props**:
  ```typescript
  interface ProjectGalleryProps {
    projects: Project[];
  }
  ```
- **Content**: 섹션 타이틀 ("Projects"), ProjectCard 그리드
- **Layout**: 반응형 그리드 (1-2-3 columns)
- **Empty state**: "아직 프로젝트가 없습니다."

### MediumCard
- **Purpose**: Medium 글 카드
- **Props**:
  ```typescript
  interface MediumCardProps {
    id: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    image?: string;
  }
  ```
- **Content**: 제목, 설명, 날짜, Medium 링크
- **Behavior**: 클릭 시 새 탭에서 Medium 열기

### MediumSection
- **Purpose**: Medium 글 섹션
- **Props**:
  ```typescript
  interface MediumSectionProps {
    articles: Article[];
  }
  ```
- **Content**: 섹션 타이틀 ("Articles"), MediumCard 목록
- **Layout**: 반응형 그리드 (1-2 columns)
- **Empty state**: "아직 글이 없습니다."

### Footer
- **Purpose**: 페이지 하단 푸터
- **Props**: none
- **Content**: 저작권, 소셜 링크

## Data Types

```typescript
// types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  image?: string;
}
```

## Accessibility baseline
- Buttons have accessible names
- Errors are announced (aria-live)
- Keyboard navigation supports primary flows
- Images have alt text
- Links open in new tab have aria-label indicating external link
