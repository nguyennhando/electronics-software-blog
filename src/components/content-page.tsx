import type { ReactNode } from "react";
import type { ContentItem } from "@/lib/content";

type ContentPageProps = {
  item: ContentItem;
  children: ReactNode;
};

export function ContentPage({ item, children }: ContentPageProps) {
  return (
    <article className="mx-auto w-full max-w-3xl">
      <header className="glass-panel mb-8 rounded-[2rem] p-8 sm:p-10">
        <p className="section-kicker">{item.type}</p>
        <h1 className="max-w-3xl text-4xl leading-none font-semibold tracking-[-0.05em] sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          {item.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          <span>{item.date}</span>
          {item.status ? <span>Status: {item.status}</span> : null}
          {item.stack?.length ? <span>Stack: {item.stack.join(", ")}</span> : null}
        </div>
      </header>
      <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
        <div className="prose-content">{children}</div>
      </div>
    </article>
  );
}
