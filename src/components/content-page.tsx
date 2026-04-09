import type { ReactNode } from "react";
import type { ContentItem } from "@/lib/content";

type ContentPageProps = {
  item: ContentItem;
  children: ReactNode;
};

export function ContentPage({ item, children }: ContentPageProps) {
  return (
    <article className="mx-auto w-full max-w-4xl">
      <header className="editorial-panel mb-8 rounded-[2rem] p-8 sm:p-10">
        <div className="eyebrow-rule meta-chip w-fit text-white/78">{item.type}</div>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[0.94] font-semibold tracking-[-0.06em] sm:text-6xl">
          {item.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
          {item.excerpt}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="stat-card rounded-[1.2rem] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">Published</p>
            <p className="mt-2 text-lg font-semibold">{item.date}</p>
          </div>
          {item.status ? (
            <div className="stat-card rounded-[1.2rem] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">Status</p>
              <p className="mt-2 text-lg font-semibold">{item.status}</p>
            </div>
          ) : null}
          {item.stack?.length ? (
            <div className="stat-card rounded-[1.2rem] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">Stack</p>
              <p className="mt-2 text-lg font-semibold">{item.stack.join(", ")}</p>
            </div>
          ) : null}
        </div>
      </header>
      <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
        <div className="article-rail mb-6 flex flex-wrap gap-4">
          <span>Long-form technical article</span>
          <span>Magazine layout</span>
        </div>
        <div className="prose-content">{children}</div>
      </div>
    </article>
  );
}
