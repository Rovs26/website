# ADR-0004: Public content governance

## Status

Accepted.

## Context

The website exists to build trust, while the Android Owner-Seller application is the current operational product authority. Plans, internal implementation details, and unverified statements could easily be mistaken for available capabilities. The website must not independently define product behavior, terminology, pricing, roles, analytics, AI functionality, or other business facts.

## Decision

Every material public product claim must be evidence-based, traceable to an approved authoritative source, assigned an approval state, and revalidated when its source or product state may have changed. Unsupported claims remain unpublished.

Public descriptions must distinguish these exact product-status categories:

1. **Available Today** — implemented, verified, usable in the approved current release, and approved for public communication.
2. **Currently Testing** — exists but is limited to internal testing, invited testers, pilots, or another controlled environment.
3. **Planned** — accepted into the roadmap but not currently available.
4. **Future Vision** — directional and subject to change, with no delivery commitment.

Status patterns must include visible text and accessible semantics and must not rely on color alone. Sensitive or time-dependent statements must be dated and revalidated before major releases. Internal architecture, credentials, private workflows, and other non-public implementation details must never be used as public evidence or exposed in public content.

## Rationale

Traceability prevents roadmap ideas from becoming promises and makes corrections possible when the product changes. A fixed status taxonomy gives readers an honest understanding of present availability. Approval and revalidation protect both public trust and cross-repository product ownership.

## Consequences

- Copywriting starts from evidence and approved terminology, not marketing assumptions.
- The public claims register must identify sources, status, approval, and notes without containing secrets.
- Claims without adequate evidence or approval cannot be published.
- Planned and future capabilities need explicit non-availability language.
- Public terminology that affects other products must be validated with the appropriate authority.
- Final marketing copy and information architecture remain outside WEB-1.

## Alternatives considered

- **Allowing authors to publish plausible product statements:** Rejected because plausibility is not evidence.
- **Using one generic “coming soon” label:** Rejected because it obscures the difference between testing, accepted plans, and long-term ideas.
- **Treating repository code as automatic public approval:** Rejected because implementation, release, and communication approval are separate facts.
- **Publishing broad disclaimers around speculative copy:** Rejected because disclaimers do not make a misleading headline trustworthy.

## Conditions requiring reconsideration

Reconsider the workflow if an authorized platform-wide content-governance process supersedes it, if product authorities or status definitions formally change, or if legal review imposes stricter evidence, approval, dating, or disclosure requirements. Any replacement must preserve claim traceability and prevent plans from being presented as current availability.
