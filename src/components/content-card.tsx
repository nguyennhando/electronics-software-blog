import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type ContentCardProps = {
  item: ContentItem;
  href: string;
};

export function ContentCard({ item, href }: ContentCardProps) {
  return (
    <article className="glass-panel group rounded-[1.6rem] p-5 transition hover:-translate-y-1">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        <span>{item.type}</span>
        <span>{item.date}</span>
      </div>
      <h3 className="text-2xl leading-tight tracking-[-0.04em]">{item.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
        {item.excerpt}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {(item.tags ?? []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/8 px-3 py-1 text-xs text-[var(--accent-strong)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href={href} className="mt-6 inline-flex text-sm font-medium text-[var(--warm)]">
        Mo chi tiet
      </Link>
    </article>
  );
}
