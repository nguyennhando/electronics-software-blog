import { ContentCard } from "@/components/content-card";
import { getPosts } from "@/lib/content";

export default function PostsPage() {
  const posts = getPosts();

  return (
    <section className="space-y-8">
      <div>
        <p className="section-kicker">Posts</p>
        <h1 className="section-title">Blog ky thuat cho firmware, hardware va quy trinh lam viec</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <ContentCard key={post.slug} item={post} href={`/posts/${post.slug}`} />
        ))}
      </div>
    </section>
  );
}
