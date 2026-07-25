# ADR-0006: Dependency policy

## Status

Accepted.

## Context

Every third-party package adds maintenance, security, privacy, performance, and supply-chain cost. The WEB-0 and WEB-1 scope is small and can rely largely on the selected framework, platform APIs, semantic HTML, and CSS. Convenience dependencies could create long-term obligations without providing proportionate value.

## Decision

Keep production and development dependencies minimal. Add a dependency only when a documented, current requirement cannot be met safely and maintainably with the framework, browser, language, or existing approved tools, and when its benefit outweighs its total cost.

Before adoption, review purpose, alternatives, package health, license, security history, transitive dependencies, client-bundle effect, accessibility, privacy or network behavior, maintenance activity, and compatibility with the supported Node.js and framework versions. Prefer narrowly scoped packages and development-only placement where appropriate. Commit the npm lockfile and review dependency changes.

Do not add a component framework, CMS, client-state library, analytics SDK, chat widget, carousel package, heavy animation library, broad icon package, backend, database client, or authentication library without a separately approved requirement and decision.

## Rationale

A native-first policy keeps builds understandable, reduces attack and update surface, and protects the static, low-JavaScript rendering strategy. Explicit review also prevents packages from introducing tracking, inaccessible behavior, or unexpected client code.

## Consequences

- Convenience alone is insufficient justification for a new package.
- Pull requests that change dependencies should explain the requirement and review factors.
- Existing packages should be removed through a safe, reviewed change when they become unused or materially risky.
- Some small utilities or components may be implemented locally when that is clearer and safer.
- Dependency updates still require testing; a lockfile does not eliminate supply-chain risk.

## Alternatives considered

- **Adopting a broad component suite:** Rejected because it would impose an unapproved design language and significant dependency surface.
- **Adding packages whenever they reduce initial code:** Rejected because short-term code savings do not account for maintenance, bundle, security, and accessibility costs.
- **Forbidding all third-party packages:** Rejected because the approved framework and focused testing or tooling packages provide necessary value.
- **Automated update acceptance without review:** Rejected because compatibility and behavior changes still need verification.

## Conditions requiring reconsideration

Reconsider this policy if a mandatory workspace platform standard defines a different dependency process, if repeated local implementations become riskier than a mature focused package, or if security, accessibility, or regulatory requirements demand specialized tooling. Exceptions must remain narrow and documented.
