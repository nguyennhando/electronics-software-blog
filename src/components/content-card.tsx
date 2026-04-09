import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type ContentCardProps = {
  item: ContentItem;
  href: string;
};

export function ContentCard({ item, href }: ContentCardProps) {
  return (
    <article className="glass-panel group relative overflow-hidden rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(8,17,31,0.12)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),transparent)] opacity-80" />
      <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        <span className="rounded-full bg-[var(--spotlight)] px-3 py-1 text-[var(--accent-strong)]">
          {item.type}
        </span>
        <span>{item.date}</span>
      </div>
      <h3 className="max-w-[18ch] text-[1.85rem] leading-[1.02] tracking-[-0.05em]">
        {item.title}
      </h3>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
        {item.excerpt}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {(item.tags ?? []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/8 bg-white/72 px-3 py-1 text-xs text-[var(--accent-strong)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
      >
        Mo chi tiet
        <span className="transition group-hover:translate-x-1">{"->"}</span>
      </Link>
    </article>
  );
}
