import { ContentCard } from "@/components/content-card";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="space-y-8">
      <div>
        <p className="section-kicker">Projects</p>
        <h1 className="section-title">Kho luu tru du an de theo doi mach, firmware va tai lieu hoa</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ContentCard
            key={project.slug}
            item={project}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
