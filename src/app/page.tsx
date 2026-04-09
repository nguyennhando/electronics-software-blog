import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { HeroGrid } from "@/components/hero-grid";
import { getProjects, getRecentPosts } from "@/lib/content";

export default function Home() {
  const recentPosts = getRecentPosts(3);
  const featuredProjects = getProjects().slice(0, 3);

  return (
    <div className="space-y-16">
      <HeroGrid />

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Latest Notes</p>
            <h2 className="section-title">Bai viet moi ve firmware, Linux va hardware</h2>
          </div>
          <Link className="inline-link" href="/posts">
            Xem tat ca bai viet
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {recentPosts.map((post) => (
            <ContentCard key={post.slug} item={post} href={`/posts/${post.slug}`} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Project Archive</p>
            <h2 className="section-title">Ho so du an de luu mach, BOM, ghi chu va code</h2>
          </div>
          <Link className="inline-link" href="/projects">
            Xem toan bo du an
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
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
