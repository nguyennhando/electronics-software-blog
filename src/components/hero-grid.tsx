import Link from "next/link";

export function HeroGrid() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.55fr_0.9fr]">
      <div className="editorial-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,98,254,0.3),transparent_36rem)]" />
        <div className="relative space-y-7">
          <div className="eyebrow-rule meta-chip w-fit border-white/10 text-white/80">
            Cover Story
          </div>
          <h1 className="max-w-4xl text-4xl leading-[0.92] font-semibold tracking-[-0.07em] sm:text-6xl">
            Bien kho ghi chu firmware va hardware thanh mot tech magazine ca nhan.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Giao dien nay dua blog ra khoi dang note don gian: bai viet noi bat,
            section editorial ro rang, project archive co nhan dien ky thuat va
            van giu quy trinh dang bai rat gon.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="stat-card rounded-[1.2rem] p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-white/55">Format</p>
              <p className="mt-2 text-2xl font-semibold">MDX</p>
            </div>
            <div className="stat-card rounded-[1.2rem] p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-white/55">Deploy</p>
              <p className="mt-2 text-2xl font-semibold">Pages</p>
            </div>
            <div className="stat-card rounded-[1.2rem] p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-white/55">Focus</p>
              <p className="mt-2 text-2xl font-semibold">Embedded</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/posts"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--spotlight)]"
            >
              Doc bai viet
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Xem du an
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div className="glass-panel rounded-[2rem] p-6">
          <p className="section-kicker">Editorial Angle</p>
          <ul className="space-y-4 text-sm leading-7 text-[var(--muted)]">
            <li>Trang chu uu tien bai noi bat va project archive nhu mot tech magazine.</li>
            <li>Nhung bai MDX co the chua code, bang thong so, checklist va callout.</li>
            <li>Van giu static export nen deploy va bao tri don gian.</li>
          </ul>
        </div>
        <div className="glass-panel rounded-[2rem] p-6">
          <p className="section-kicker">Sections</p>
          <div className="space-y-4">
            <div className="border-t border-[var(--line)] pt-3">
              <p className="text-sm font-semibold tracking-tight">Posts</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Firmware notes, Linux workflow, debugging and release process.
              </p>
            </div>
            <div className="border-t border-[var(--line)] pt-3">
              <p className="text-sm font-semibold tracking-tight">Projects</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Ho so du an co status, stack, BOM va log tien do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
