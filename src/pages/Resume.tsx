import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig";

export function Resume() {
  return (
    <div className="page-wrap">
      <section className="page-hero compact-hero">
        <p className="eyebrow">RÉSUMÉ</p>
        <h1>Experience, skills, <span className="gradient-text">and direction.</span></h1>
        <p className="page-lede">A concise overview of my technical background and project work. Add your final, current résumé PDF to the public folder before enabling the download.</p>
      </section>
      <section className="resume-panel">
        <div className="resume-icon">PDF</div>
        <div><h2>Abdullah Mohamed — Résumé</h2><p>Recommended file location: <code>public/resume.pdf</code></p><p className="muted-copy">Only publish a résumé after checking it for personal information you don't want public.</p></div>
        <a className="button button-primary" href={siteConfig.resumePath}>Open résumé ↗</a>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">MORE CONTEXT</p><h2>Want to see how I work?</h2></div></div>
        <p className="page-lede">The project case studies go deeper than a résumé: they explain the design, implementation, tests, tradeoffs, and what is still unfinished.</p>
        <Link className="text-link" to="/projects">Explore the case studies →</Link>
      </section>
    </div>
  );
}
