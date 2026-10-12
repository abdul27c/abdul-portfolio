import { siteConfig } from "../siteConfig";

export function Contact() {
  return (
    <div className="page-wrap">
      <section className="page-hero compact-hero">
        <p className="eyebrow">CONTACT</p>
        <h1>Good work starts <span className="gradient-text">with a conversation.</span></h1>
        <p className="page-lede">Interested in a project, a cloud engineering opportunity, or sharing feedback? The easiest way to reach me is through one of the links below.</p>
      </section>
      <div className="contact-grid">
        {siteConfig.email && <a className="contact-card" href={`mailto:${siteConfig.email}`}><span className="contact-symbol">@</span><span><strong>Email</strong><small>{siteConfig.email}</small></span><span>↗</span></a>}
        <a className="contact-card" href={siteConfig.github} target="_blank" rel="noreferrer"><span className="contact-symbol">⌘</span><span><strong>GitHub</strong><small>Projects, code, and experiments</small></span><span>↗</span></a>
        {siteConfig.linkedin && <a className="contact-card" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><span className="contact-symbol">in</span><span><strong>LinkedIn</strong><small>Professional profile</small></span><span>↗</span></a>}
      </div>
      <p className="muted-copy contact-note">Add your email and LinkedIn URL in <code>src/siteConfig.ts</code> when you're ready to publish them.</p>
    </div>
  );
}
