# micro_morty — Module Federation (Vite) Monorepo

This repository hosts a **host shell** (`mf-shell`) and two **remotes** (`mf-characters`, `mf-characterdetail`) built with Vite and `@originjs/vite-plugin-federation`. The shell loads remote entry points at runtime; each app is served as a static SPA behind **nginx** in production-style images.

---

## Running with Docker

### Prerequisites

- **Docker Engine** with **Compose V2** (`docker compose`), or **Docker Desktop** (Windows/macOS) with the daemon running.
- No local Node.js install is required for the containerized workflow.

### Quick start

From the **repository root** (where `docker-compose.yml` lives):

```bash
docker compose up --build
```

Or detached:

```bash
docker compose up --build -d
```

Open the shell in the browser:

| URL | Role |
|-----|------|
| http://localhost:3000 | Host (`mf-shell`) |
| http://localhost:3001 | Remote — characters list |
| http://localhost:3002 | Remote — character detail |

The shell is the entry point users should use; the other URLs are the federated origins for `remoteEntry.js` and chunks.

### Why `localhost` in federation URLs

Remotes are loaded **in the browser**, not from inside the shell container. `docker-compose.yml` passes build arguments so the shell bundle requests:

- `http://localhost:3001/assets/remoteEntry.js`
- `http://localhost:3002/assets/remoteEntry.js`

Those map to the published host ports. If you publish different host ports or deploy behind real hostnames, **rebuild the shell** with matching `FEDERATION_MF_*` values (see below).

### Build-time configuration

**Shell** (`mf-shell/Dockerfile`):

| Build arg | Purpose |
|-----------|---------|
| `FEDERATION_MF_CHARACTERS` | Full URL to the characters `remoteEntry.js` |
| `FEDERATION_MF_CHARACTERDETAIL` | Full URL to the character-detail `remoteEntry.js` |

Defaults match the compose file (`localhost:3001` / `3002`). They are embedded at **build time**; changing them requires a **rebuild** of the shell image, not a container restart.

**Remotes** (`mf-characters`, `mf-characterDetail` Dockerfiles):

| Build arg | Purpose |
|-----------|---------|
| `VITE_RICK_AND_MORTY_API_URL` | Rick and Morty API base (default: `https://rickandmortyapi.com/api`) |

To override from Compose, extend each service with `build.args` (same pattern as `mf-shell` in `docker-compose.yml`).

### Operational commands

```bash
# Service status
docker compose ps

# Follow logs
docker compose logs -f

# Stop and remove containers
docker compose down

# Rebuild without cache (after dependency or config changes)
docker compose build --no-cache
```

### Image layout (mental model)

- **Build context** is always the **repo root**: each Dockerfile copies `shared-types/` and the relevant `mf-*` directory so Vite can resolve `@shared-types` during `npm run build`.
- **Runtime**: nginx serves `dist/` with SPA fallback and CORS headers (`docker/nginx-spa.conf`) so cross-origin module federation can fetch remote assets from the browser.

### Non-Docker development

Not covered in depth here: run each `mf-*` with `npm run dev` on separate ports and point the shell’s Vite federation config at those dev URLs (see each package’s `vite.config.ts` and env defaults).

---

## Project structure (high level)

- `mf-shell/` — host application and router
- `mf-characters/` — remote: list / search / pagination
- `mf-characterDetail/` — remote: single character view
- `shared-types/` — shared TypeScript types consumed via path alias
- `docker/` — shared nginx config for static + federation-friendly headers
