# Case study

## Context

Operational payment teams often coordinate incoming requests, payment methods,
operator availability, confirmations, disputes, and settlements across disconnected
tools. That fragmentation makes status unclear and turns routine exceptions into
manual support work.

Voyage Pay was designed as one operational workspace for several participant roles.
The challenge was not merely to build screens, but to make the lifecycle of every
request explicit, auditable, and understandable to the person responsible for it.

## Product goals

1. Give each role a focused workspace instead of exposing the whole system.
2. Keep the current state and ownership of every operation unambiguous.
3. Make exceptional flows—timeouts, disputes, verification, and withdrawals—part
   of the product rather than ad-hoc support procedures.
4. Keep financial calculations and state transitions on the server.
5. Provide enough observability for daily operations without exposing sensitive data.

## Solution

The product was separated into four layers:

- **Experience layer:** role-specific Next.js workspaces for operators, merchants,
  administrators, owners, and team leads.
- **Application layer:** modular NestJS services responsible for payments,
  transactions, disputes, withdrawals, notifications, users, and analytics.
- **Data layer:** PostgreSQL as the source of truth, with explicit entities and
  server-side state transitions.
- **Integration layer:** isolated adapters for notifications, callbacks, and external
  services so that infrastructure concerns do not leak into domain modules.

## Selected engineering decisions

### Explicit state transitions

Payment state is treated as a controlled lifecycle. Mutations are validated on the
server and recorded with timestamps and actors. This reduces accidental double
processing and makes support investigations possible.

### Role-oriented navigation

Each role receives a separate information architecture. An operator sees active
work and balances; a merchant sees orders and integration settings; operations staff
see queues, disputes, verification, and platform health.

### Security at boundaries

Authentication, authorization, webhook validation, outbound URL checks, encrypted
sensitive fields, and environment-specific configuration are handled at system
boundaries. Secrets never belong in client bundles or repository defaults.

### Operational resilience

Scheduled reconciliation, idempotent handling, health checks, structured errors, and
notification fallbacks were considered part of the product, not deployment extras.

## UI system

The interface uses a restrained neutral palette, high-contrast operational states,
large numeric typography, compact data tables, and reusable workspace primitives.
Dense information is progressively disclosed so that the primary action remains
clear on both desktop and mobile screens.

## What I learned

- Multi-role products benefit from separate workspaces more than one universal UI.
- Financial state should be derived from authoritative events, not client assumptions.
- Exception handling needs first-class product design.
- A useful admin panel is an operational tool, not a collection of CRUD screens.
- Deployment isolation and secret rotation must be designed before launch.

## Disclosure note

Exact schemas, endpoints, algorithms, thresholds, providers, infrastructure topology,
commercial figures, and production screenshots are intentionally excluded. Demo data
and identifiers are fictional.

