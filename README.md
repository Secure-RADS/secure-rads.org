# Secure RADS research website

Astro static site for secure-rads.org, with Home, Team, and Publications routes.

## Requirements

Bun. Use it for installing dependencies and running every script. The lockfile is
`bun.lock`, so npm, pnpm, and yarn are not supported.

## Local development

```sh
bun install
bun run dev
```

The dev server runs at http://localhost:4321.

## Build

```sh
bun run build
bun run preview
```

The build output is `dist/`.

## Deploy

Deploys run through Cloudflare on push to `main`. `dist/` is served as the
Cloudflare Worker `secure-rads-site` using static assets (`wrangler.jsonc`), with
`CLOUDFLARE_ACCOUNT_ID` set to the account that owns `secure-rads.org`.

Manual deploy (optional): `bun run deploy`.

`secure-rads.org` is served by a zone Worker route (`secure-rads.org/*`) rather
than a Pages project. The DNS record stays proxied so the zone's TLS settings
(including minimum TLS version) apply to the hostname.
