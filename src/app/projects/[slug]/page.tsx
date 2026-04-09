import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { findItemBySlug, getProjects } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findItemBySlug("projects", slug);

  if (!item) {
    return {};
  }

  return {
    title: item.frontmatter.title,
    description: item.frontmatter.excerpt,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const item = findItemBySlug("projects", slug);

  if (!item) {
    notFound();
  }

  const content = await renderMdx(item.content);

  return (
    <ContentPage item={{ slug, type: "projects", ...item.frontmatter }}>
      {content}
    </ContentPage>
  );
}
