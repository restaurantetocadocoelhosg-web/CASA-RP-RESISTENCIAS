# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RP Orçamentos** — a full-stack business management PWA for Casa RP Resistências, an electrical resistor manufacturer in Niterói/RJ, Brazil. Handles quotations, orders, services, clients, inventory, point-of-sale, NF-e fiscal invoices, and AI-assisted order parsing.

## Running the Project

```bash
npm install
npm start        # node server.js, listens on $PORT (default 3000)
```

There are no test or lint scripts. No build step required — vanilla JS and CSS served as static files.

## Required Environment Variables

| Variable | Purpose | Default |
|---|---|---|
| `PORT` | HTTP port | `3000` |
| `RP_SECRET` | HMAC session signing key | `rp-dev-secret-trocar` |
| `SUPA_URL` | Supabase project URL | hardcoded in server.js |
| `SUPA_ANON` | Supabase anon key | required |
| `ANTHROPIC_API_KEY` | Enables `/api/ia` and `/api/assist` endpoints | optional |
| `NFE_CERT_PATH` | Path to A1 certificate (.pfx/.p12) | required for NF-e |
| `NFE_CERT_PASS` | Certificate password | required for NF-e |
| `NFE_AMBIENTE` | `2` = homologation, `1` = production | `2` |

## Architecture

### Backend (`server.js`)

Express app with session authentication via HMAC-signed Base64URL tokens (not JWT). Passwords hashed with Node's `scrypt`.

Key endpoints:
- `GET /api/me`, `POST /api/login`, `POST /api/logout` — auth
- `GET/POST/DELETE /api/users` — user management (admin only)
- `POST /api/ia` — Claude parses free-text order descriptions → structured `{ client, items[] }`
- `POST /api/assist` — Claude answers analytical queries about business data
- `POST /api/nfe/emitir` — triggers NF-e XML generation, signing, SEFAZ authorization, DANFE PDF

The Supabase database is accessed **directly from the frontend** via REST with the embedded anon key. The backend does not proxy most DB operations.

### Frontend (`index.html`)

Single 2000+ line HTML file. All JS lives in a single `<script>` block. No framework — vanilla JS with a global `STATE` object holding all runtime data.

**State management:** `STATE` is the in-memory store, synced to Supabase via `fetch()` REST calls and cached in `localStorage`. Page data is loaded on tab switch.

**UI structure:** 10+ tab panels — Orçamentos, Pedidos, Clientes, Serviços, Comissões, IA, PDV, Produtos, Estoque, Admin. Navigation via `showTab(name)`.

**PDF generation:** Client-side via jsPDF (CDN). Server-side DANFE via `nfe/danfe.js` using pdfkit.

### NF-e Module (`nfe/`)

Self-contained fiscal invoice module:
- `nfe/config.js` — company data, SEFAZ RJ endpoints, last issued NF-e number
- `nfe/xml-builder.js` — builds NF-e XML per SEFAZ spec
- `nfe/signer.js` — signs XML with X.509 certificate via `node-forge` + `xml-crypto`
- `nfe/sefaz.js` — sends to SEFAZ SVRS (homologation) or SEFAZ-RJ (production)
- `nfe/danfe.js` — generates DANFE PDF from authorized XML
- `nfe/numero.js` — manages sequential NF-e numbering
- Output stored under `data/nfe/` (XML) and `data/danfe/` (PDF)

### Database (Supabase)

Tables prefixed with `rp_`: `rp_users`, `rp_quotes`, `rp_orders`, `rp_clients`, `rp_services`, `rp_products`, `rp_caixa`, `rp_pdv_vendas`. All columns use snake_case. IDs are UUID v4 (`crypto.randomUUID()`).

### PWA (`manifest.json`, `sw.js`)

Service worker provides offline caching. Icons in `icons/` are generated via `gerar_icones.js` (pngjs).

## Key Conventions

**Roles & permissions:** Two roles — `admin` (full access) and `vendedor` (seller). Fine-grained permission flags on user objects: `criar_orcamento`, `editar`, `excluir`, `aprovar`, `ver_comissoes`, `ver_clientes`, `usar_ia`, `ver_todos`.

**Status values:**
- Quotes: `EM_ANALISE`, `APROVADO`
- Orders: `EM_FABRICACAO`, `EM_ESTOQUE`, `PRONTO_RETIRADA`
- Services: `ABERTO`, `ENTREGUE`
- Commission: `null`, `a_pagar`, `pago`

**Company constants:** Defined in `index.html` as the `COMPANY` object (CNPJ, IE, address, NCM code `85168010`, minimum NF-e value R$1000). Fiscal data (CNPJ, IE, CFOP, CST) also hardcoded in `nfe/config.js` — update both if company data changes.

**AI model:** `/api/ia` and `/api/assist` use `claude-sonnet-4-6`. System prompts are inline in `server.js` around lines 139–191.

**Deployment:** Railway.com via `railway.toml` — nixpacks builder, start command `node server.js`.
