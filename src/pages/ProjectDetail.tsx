import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return <section className="detail-section"><h2>{title}</h2><ul className="detail-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <div className="page-wrap case-study">
      <Link className="back-link" to="/projects">← All projects</Link>
      <section className="page-hero case-hero">
        <div className="card-topline"><span className="eyebrow">{project.category}</span><span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span></div>
        <h1>{project.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{project.title.split(" ").slice(-1)}</span></h1>
        <p className="page-lede">{project.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={project.repoUrl} target="_blank" rel="noreferrer">View source code ↗</a>
          {project.demoUrl ? <a className="button button-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">Open live demo ↗</a> : <span className="button button-disabled" aria-disabled="true">Live demo not deployed yet</span>}
        </div>
      </section>

      <section className="case-overview">
        <div><p className="eyebrow">THE PROBLEM</p><p>{project.problem}</p></div>
        <div><p className="eyebrow">THE APPROACH</p><p>{project.solution}</p></div>
      </section>

      <section className="detail-section"><h2>Technology stack</h2><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></section>
      <DetailSection title="What it does" items={project.highlights} />
      <DetailSection title="Architecture & data flow" items={project.architecture} />

      <section className="detail-section">
        <div className="section-heading"><div><p className="eyebrow">WALKTHROUGH</p><h2>See it in action.</h2></div></div>
        {project.loomEmbedUrl ? <div className="video-frame"><iframe src={project.loomEmbedUrl} title={`${project.title} walkthrough`} allowFullScreen /></div> : <div className="video-placeholder"><div className="play-icon">▶</div><div><strong>Walkthrough video coming soon</strong><p>Add the Loom embed URL to this project's entry in <code>src/data/projects.ts</code>.</p></div></div>}
        {project.loomUrl && <p className="video-link"><a className="text-link" href={project.loomUrl} target="_blank" rel="noreferrer">Open Loom recording ↗</a></p>}
      </section>

      <DetailSection title="Testing & verification" items={project.testing} />
      <DetailSection title="Challenges & tradeoffs" items={project.challenges} />
      <DetailSection title="What I learned" items={project.lessons} />
      <section className="detail-section limitation-section"><h2>Current scope & limitations</h2><ul className="detail-list">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <div className="case-bottom"><Link className="button button-secondary" to="/projects">← Back to projects</Link><a className="button button-primary" href={project.repoUrl} target="_blank" rel="noreferrer">Explore the repository ↗</a></div>
    </div>
  );
}
