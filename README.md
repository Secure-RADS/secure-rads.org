# Secure RADS research website

Astro static site with Home, Team, and Publications routes.

```sh
bun install
bun run dev
bun run build
bun run deploy
```

The build output is `dist/`, deployed as the Cloudflare Worker `secure-rads-site`
using static assets (`wrangler.jsonc`). Deploy with `CLOUDFLARE_ACCOUNT_ID` set to
the account that owns `secure-rads.org`.

`secure-rads.org` is served by a zone Worker route (`secure-rads.org/*`) rather
than a Pages project. The DNS record stays proxied so the zone's TLS settings
(including minimum TLS version) apply to the hostname.
