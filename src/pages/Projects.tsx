import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div className="page-wrap">
      <section className="page-hero compact-hero">
        <p className="eyebrow">PROJECT COLLECTION</p>
        <h1>Builds, experiments, <span className="gradient-text">and lessons.</span></h1>
        <p className="page-lede">A growing collection of practical work. Each project has its own case study with the goal, architecture, implementation notes, tests, limitations, and source code.</p>
      </section>
      <div className="collection-summary"><span>{projects.length} {projects.length === 1 ? "project" : "projects"} documented</span><span>New projects can be added in <code>src/data/projects.ts</code>.</span></div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        <article className="project-card add-project-card"><div className="add-symbol">＋</div><h3>Your next project</h3><p>When you finish another project, add its details to the projects data file and create a dedicated case study page automatically from the same template.</p></article>
      </div>
    </div>
  );
}
