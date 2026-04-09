export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 text-sm text-[var(--muted)] sm:px-8 lg:px-10">
        <p className="font-medium text-[var(--foreground)]">
          A compact technical magazine powered by Next.js, Tailwind, MDX and GitHub Pages.
        </p>
        <p>
          Them bai moi trong <code>content/posts</code> va du an moi trong{" "}
          <code>content/projects</code>.
        </p>
      </div>
    </footer>
  );
}
