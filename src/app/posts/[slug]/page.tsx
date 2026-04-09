import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { findItemBySlug, getPosts } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findItemBySlug("posts", slug);

  if (!item) {
    return {};
  }

  return {
    title: item.frontmatter.title,
    description: item.frontmatter.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const item = findItemBySlug("posts", slug);

  if (!item) {
    notFound();
  }

  const content = await renderMdx(item.content);

  return (
    <ContentPage item={{ slug, type: "posts", ...item.frontmatter }}>
      {content}
    </ContentPage>
  );
}
