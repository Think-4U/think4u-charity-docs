# Think4u Docs

An independent documentation app generated with the official `create-fumadocs-app` static Next.js template. Intended production URL: https://docs.think4u.org/docs.

## Local development

Requires Node.js 24 (22+ supported by the scaffolder) and npm.

```sh
npm ci
npm run dev
```

Open the printed local URL at `/docs`. Run `npm run types:check` and `npm run build` before publishing. The build writes a fully static site to `out/`. To preview the export, run `npm start`.

## Cloudflare Pages

Deploy this directory as its own Pages project. It can be a standalone repository or live at `apps/docs` in a monorepo; do not merge its layouts or global CSS into the main site.

1. Push the docs source and `package-lock.json` to your Git repository.
2. In Cloudflare, choose **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Set the following build options:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | Repository root for a standalone repo; `apps/docs` if placed there |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `24`, selected by `.node-version` (or set `NODE_VERSION=24`) |

4. Deploy and verify `/docs`, `/api/search`, `/llms.txt`, `/llms-full.txt`, and `/sitemap.xml` on the assigned `pages.dev` hostname.
5. Under the Pages project's **Custom domains**, select **Set up a domain** and add `docs.think4u.org`.
6. Confirm the DNS record Cloudflare offers. If DNS is hosted elsewhere, add a `CNAME` named `docs` pointing to the actual `<project>.pages.dev` hostname returned by Cloudflare. Associate the custom domain in Pages first; a DNS record alone is insufficient.
7. Wait for the domain and HTTPS certificate to become active, then check `https://docs.think4u.org/docs`.

Keep `think4u.org` serving the main site. This app keeps its default `/docs` route, so a later main-site reverse proxy can also route to the independent docs deployment.

No Worker, OpenNext adapter, runtime API key, or server is required: search, Markdown endpoints, and OG images are generated at build time. Do not choose the server-rendered Next.js preset for this static app.

References: [Cloudflare static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [Fumadocs CLI](https://fumadocs.dev/docs/cli/create-fumadocs-app).

## Content and configuration

- `content/docs/*.mdx`: documentation pages with `title` and `description` frontmatter.
- `content/docs/meta.json`: sidebar order; folders determine nested URLs.
- `lib/layout.shared.tsx`: navigation and main-site link.
- `lib/shared.ts`: app name, production origin, and optional repository URL.
- `app/layout.tsx`: default metadata.
- `app/sitemap.ts` and `app/robots.ts`: statically generated discovery files.

Set `NEXT_PUBLIC_DOCS_GITHUB_URL=https://github.com/OWNER/REPOSITORY` at build time to enable repository links. The page source links assume a standalone repository with branch `main`; adjust their source path in `app/docs/[[...slug]]/page.tsx` if this app is placed in a monorepo. Leave the variable unset to hide repository links.

When migrating existing Markdown, preserve its content and adjust only frontmatter and links. Do not edit `.source/`, `.next/`, or `out/`; they are generated.
