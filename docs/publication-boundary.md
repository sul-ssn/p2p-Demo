# Publication boundary

This file documents what is safe to publish and what remains private.

## Included

- A dependency-free UI prototype built specifically for the portfolio
- Fictional metrics, people, companies, transaction IDs, and activity
- A high-level architecture diagram
- General descriptions of responsibilities and engineering decisions
- Technology names already appropriate for a résumé

## Excluded

- Production frontend and backend source code
- Git history from the working repository
- Environment files, credentials, tokens, wallet material, and service identifiers
- Real API paths, payloads, webhook signatures, and integration details
- Database schema and migrations
- Internal financial rules, commissions, limits, and antifraud thresholds
- Customer, operator, merchant, or transaction data
- Deployment domains, IP addresses, logs, and provider configuration

## Before publishing

Create a new Git repository inside this directory rather than copying the production
`.git` directory. Review every screenshot manually, search the final directory for
secrets and personal data, and publish only this folder.

