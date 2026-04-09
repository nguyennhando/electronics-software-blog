import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(252,247,240,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[var(--panel-strong)] text-lg font-semibold">
            LN
          </span>
          <span>
            <span className="block text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Electronics + Software
            </span>
            <span className="block text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-black/8 bg-white/60 p-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
