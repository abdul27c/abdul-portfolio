import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { siteConfig } from "../siteConfig";

export function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> BUILDING • LEARNING • DOCUMENTING</div>
          <h1>Turning curiosity into <span className="gradient-text">working systems.</span></h1>
          <p className="hero-intro">{siteConfig.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore my projects <span>→</span></Link>
            <Link className="button button-secondary" to="/about">A little about me</Link>
          </div>
          <div className="hero-meta"><span>⌁ {siteConfig.location}</span><span>☁ Cloud • Linux • Python</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="terminal-window">
            <div className="terminal-bar"><span /><span /><span /><small>~/portfolio</small></div>
            <div className="terminal-content">
              <p><span className="terminal-muted">$</span> whoami</p>
              <p className="terminal-output">abdullah-mohamed</p>
              <p><span className="terminal-muted">$</span> focus --current</p>
              <p className="terminal-output">cloud engineering</p>
              <p className="terminal-output">automation & reliability</p>
              <p><span className="terminal-muted">$</span> git status</p>
              <p className="terminal-success">● building projects and learning every day</p>
              <span className="cursor-block" />
            </div>
          </div>
          <div className="floating-chip chip-top">Python <span>✓</span></div>
          <div className="floating-chip chip-bottom">Cloud foundations <span>↗</span></div>
        </div>
      </section>

      <section className="section-block intro-video-section">
        <div className="section-heading">
          <div><p className="eyebrow">START HERE</p><h2>A quick introduction</h2></div>
          <p>I'll use this space for a short video about who I am, what I'm learning, and what I'm building.</p>
        </div>
        {siteConfig.introVideoId ? (
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${siteConfig.introVideoId}`}
              title="Introduction video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-placeholder">
            <div className="play-icon">▶</div>
            <div><strong>Introduction video coming soon</strong><p>Add your YouTube video ID in <code>src/siteConfig.ts</code> when it's ready.</p></div>
          </div>
        )}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Projects with a purpose.</h2></div>
          <Link className="text-link" to="/projects">View all projects <span>→</span></Link>
        </div>
        <div className="project-grid">
          {featured.map((project) => <ProjectCard project={project} key={project.slug} />)}
          <article className="project-card add-project-card">
            <div className="add-symbol">＋</div>
            <h3>More projects, soon</h3>
            <p>This portfolio is designed to grow. Add a project in one data file and it can appear in the project collection.</p>
            <Link className="text-link" to="/projects">See the collection structure →</Link>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div><p className="eyebrow">LET'S CONNECT</p><h2>Have a project or opportunity in mind?</h2><p>I'm always interested in learning from people who build and operate useful technology.</p></div>
        <Link className="button button-primary" to="/contact">Get in touch <span>→</span></Link>
      </section>
    </>
  );
}
