export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-[var(--muted)] sm:px-8 lg:px-10">
        <p>Next.js + Tailwind + MDX + GitHub Pages starter cho blog ky thuat.</p>
        <p>
          Them bai moi trong <code>content/posts</code> va du an moi trong{" "}
          <code>content/projects</code>.
        </p>
      </div>
    </footer>
  );
}
