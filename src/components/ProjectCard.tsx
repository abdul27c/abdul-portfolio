import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className="eyebrow">{project.category}</span>
        <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
          {project.status}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-list">
        {project.stack.slice(0, 5).map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <div className="card-actions">
        <Link className="text-link" to={`/projects/${project.slug}`}>Explore case study <span aria-hidden="true">→</span></Link>
        <a className="text-link muted-link" href={project.repoUrl} target="_blank" rel="noreferrer">Source code ↗</a>
      </div>
    </article>
  );
}
