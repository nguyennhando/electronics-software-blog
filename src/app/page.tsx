import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { HeroGrid } from "@/components/hero-grid";
import { getProjects, getRecentPosts } from "@/lib/content";

export default function Home() {
  const recentPosts = getRecentPosts(3);
  const featuredProjects = getProjects().slice(0, 3);

  return (
    <div className="space-y-18">
      <HeroGrid />

      <section className="space-y-6">
        <div className="section-frame">
          <div>
            <p className="section-kicker">Latest Notes</p>
            <h2 className="section-title">Bai viet moi ve firmware, Linux va hardware</h2>
            <p className="section-dek">
              Cac bai viet duoc trinh bay theo nhiep cua mot chuyen muc tech magazine:
              ro y, doc nhanh va van du chi tiet de quay lai tham chieu.
            </p>
          </div>
          <Link className="inline-link" href="/posts">
            Xem tat ca bai viet
          </Link>
        </div>
        <div className="story-grid lg:story-grid-wide">
          {recentPosts.map((post) => (
            <ContentCard key={post.slug} item={post} href={`/posts/${post.slug}`} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="section-frame">
          <div>
            <p className="section-kicker">Project Archive</p>
            <h2 className="section-title">Ho so du an de luu mach, BOM, ghi chu va code</h2>
            <p className="section-dek">
              Moi project co the dong vai tro nhu mot feature story: muc tieu, stack,
              status va cac moc tien do duoc trinh bay ro rang.
            </p>
          </div>
          <Link className="inline-link" href="/projects">
            Xem toan bo du an
          </Link>
        </div>
        <div className="story-grid lg:story-grid-wide">
          {featuredProjects.map((project) => (
            <ContentCard
              key={project.slug}
              item={project}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
