# Question Queue

## Rules
- If blocked or ambiguous, add a question here (do not stall everything).
- Always include Options + Recommendation + Default.
- If non-blocking: proceed with Default.
- If blocking: pause only dependent tickets; continue others.

---

## Template
## Q-XXX [open] (Blocking|Non-blocking)
**Question:** ...
**Options:** A) ... B) ... C) ... D) ...
**Recommendation:** (one line)
**Default:** (A/B/C/D)
**Needed-by:** T-...
**Impact:** contracts/files
**Notes:** (optional)

---

## Q-001 [resolved] (Non-blocking)
**Question:** What kind of product is this likely to be?
**Options:** A) Web app B) Chrome extension C) Automation script D) Unknown
**Recommendation:** D (keep it flexible)
**Default:** D
**Needed-by:** next dispatch
**Impact:** folder structure + real verify commands
**Answer:** A) Web app - Next.js 포트폴리오 사이트 (GitHub Pages 배포)
**Resolved:** 2026-02-05

## Q-002 [resolved] (Non-blocking)
**Question:** Auth needed?
**Options:** A) none B) API key C) session D) JWT
**Recommendation:** D (scalable)
**Default:** A (fastest)
**Needed-by:** first real API tickets
**Impact:** API_CONTRACT + UI routing
**Answer:** A) none - 정적 사이트, 인증 불필요
**Resolved:** 2026-02-05
