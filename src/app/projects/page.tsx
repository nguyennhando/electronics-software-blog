import { ContentCard } from "@/components/content-card";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="space-y-8">
      <div className="section-frame">
        <div>
        <p className="section-kicker">Projects</p>
        <h1 className="section-title">Kho luu tru du an de theo doi mach, firmware va tai lieu hoa</h1>
          <p className="section-dek">
            Tap trung vao profile du an: stack, trang thai, van de ton dong va noi dung
            tham chieu de quay lai nhanh.
          </p>
        </div>
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
