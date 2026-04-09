import Link from "next/link";

export default function NotFound() {
  return (
    <div className="glass-panel mx-auto max-w-2xl rounded-[2rem] p-8 text-center">
      <p className="section-kicker">404</p>
      <h1 className="text-4xl font-semibold tracking-[-0.05em]">Khong tim thay noi dung</h1>
      <p className="mt-4 text-[var(--muted)]">
        Kiem tra lai slug hoac quay ve trang danh sach.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/posts" className="rounded-full bg-[var(--accent)] px-5 py-3 text-white">
          Posts
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-black/10 bg-white/70 px-5 py-3"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
