import Link from "next/link";

export function HeroGrid() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.22),transparent_32rem)]" />
        <div className="relative space-y-6">
          <p className="section-kicker">Open Lab Notebook</p>
          <h1 className="max-w-3xl text-4xl leading-none font-semibold tracking-[-0.06em] sm:text-6xl">
            Luu bai viet, ghi chu firmware va ho so du an trong mot repo tinh gon.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Mau nay dung MDX de viet bai, luu BOM, log debug, so do khoi va
            checklist release. Phu hop cho blog ca nhan, archive nghien cuu va
            portfolio ky thuat.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/posts"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-strong)]"
            >
              Doc bai viet
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium transition hover:bg-[var(--panel-strong)]"
            >
              Xem du an
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div className="glass-panel rounded-[2rem] p-6">
          <p className="section-kicker">Why This Stack</p>
          <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
            <li>Static export nen deploy len GitHub Pages rat gon.</li>
            <li>MDX cho phep viet bai kem code block, bang va danh sach.</li>
            <li>Tach rieng `posts` va `projects` de tai lieu hoa de hon.</li>
          </ul>
        </div>
        <div className="glass-panel rounded-[2rem] p-6">
          <p className="section-kicker">Folders</p>
          <div className="space-y-3 font-mono text-sm text-[var(--foreground)]">
            <p>content/posts</p>
            <p>content/projects</p>
            <p>src/app</p>
            <p>src/components</p>
            <p>.github/workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
