# Secure RADS research website

Astro static site with Home, Team, and Publications routes.

```sh
bun install
bun run dev
bun run build
bun run deploy
```

The build output is `dist/`. Deploy with `CLOUDFLARE_ACCOUNT_ID` set to the
account that owns `secure-rads.org`. The Cloudflare Pages project is
`secure-rads-research`.
