import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "posts" | "projects";

type Frontmatter = {
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  status?: string;
  stack?: string[];
};

export type ContentItem = Frontmatter & {
  slug: string;
  type: ContentType;
};

const contentRoot = path.join(process.cwd(), "content");

function getDirectory(type: ContentType) {
  return path.join(contentRoot, type);
}

function sortByDateDescending(items: ContentItem[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

function readCollection(type: ContentType): ContentItem[] {
  const directory = getDirectory(type);
  const entries = fs
    .readdirSync(directory)
    .filter((entry) => entry.endsWith(".mdx"));

  return sortByDateDescending(
    entries.map((entry) => {
      const slug = entry.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(directory, entry), "utf8");
      const { data } = matter(source);
      const frontmatter = data as Frontmatter;

      return {
        slug,
        type,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        tags: frontmatter.tags ?? [],
        status: frontmatter.status,
        stack: frontmatter.stack ?? [],
      };
    }),
  );
}

export function getPosts() {
  return readCollection("posts");
}

export function getProjects() {
  return readCollection("projects");
}

export function getRecentPosts(limit: number) {
  return getPosts().slice(0, limit);
}

export function getItemBySlug(type: ContentType, slug: string) {
  const filePath = path.join(getDirectory(type), `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    type,
    content,
    frontmatter: {
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      tags: frontmatter.tags ?? [],
      status: frontmatter.status,
      stack: frontmatter.stack ?? [],
    },
  };
}

export function findItemBySlug(type: ContentType, slug: string) {
  const filePath = path.join(getDirectory(type), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return getItemBySlug(type, slug);
}
