# Lab Notes Archive

Starter template cho blog ky thuat va kho luu tru du an voi:

- `Next.js`
- `Tailwind CSS`
- `MDX`
- `GitHub Pages`

Phu hop de luu bai viet, log debug, BOM, ghi chu firmware, Linux, hardware va software project.

## Chay local

PowerShell cua ban co the chan `npm.ps1`, vi vay hay dung `npm.cmd`:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

## Cau truc thu muc

```text
content/
  posts/
  projects/
src/
  app/
  components/
  config/
  lib/
.github/
  workflows/
```

## Cach them noi dung

Them file `.mdx` moi vao:

- `content/posts` cho bai blog
- `content/projects` cho ho so du an

Frontmatter mau:

```mdx
---
title: "Ten bai viet"
excerpt: "Mo ta ngan"
date: "2026-04-09"
tags:
  - firmware
  - linux
status: "Active"
stack:
  - ESP32
  - MQTT
---
```

## Deploy GitHub Pages

1. Tao repo tren GitHub.
2. Push code len branch `main`.
3. Trong GitHub vao `Settings > Pages`, chon `GitHub Actions`.
4. Workflow `.github/workflows/deploy.yml` se build va deploy tu dong.

Neu repo cua ban la project page, `basePath` se duoc tu dong lay theo ten repo trong GitHub Actions.

## Can sua truoc khi public

Sua `src/config/site.ts`:

- `name`
- `description`
- `siteUrl`
