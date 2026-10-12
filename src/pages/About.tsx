import { siteConfig } from "../siteConfig";

const principles = [
  { number: "01", title: "Understand the why", text: "I want to understand why a system works, not just copy commands until they run." },
  { number: "02", title: "Build to learn", text: "Small, working projects help me turn concepts into skills I can explain and improve." },
  { number: "03", title: "Be honest about scope", text: "I document what is tested, what is simulated, and what still needs to be done." },
];

export function About() {
  return (
    <div className="page-wrap">
      <section className="page-hero">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Curious by nature.<br /><span className="gradient-text">Practical by design.</span></h1>
        <p className="page-lede">I'm {siteConfig.name}, an aspiring cloud engineer in {siteConfig.location}. I enjoy problem-solving, understanding how systems fit together, and building things that make technical concepts real.</p>
      </section>
      <section className="split-section">
        <div><p className="eyebrow">MY DIRECTION</p><h2>Learning the systems behind the software.</h2></div>
        <div className="prose">
          <p>My focus is on cloud engineering and the foundations that make reliable systems possible: Linux, Python, networking, APIs, automation, and cloud services.</p>
          <p>This site is a working record of that journey. Each case study is meant to show the problem I chose, the decisions I made, how I tested the result, and what I would improve next.</p>
          <p>I don't want to present a list of buzzwords. I want to build projects, understand the tradeoffs, and be able to explain the work clearly.</p>
        </div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">HOW I WORK</p><h2>Three principles I try to follow.</h2></div></div>
        <div className="principle-grid">
          {principles.map((item) => <article className="principle-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">CURRENT TOOLKIT</p><h2>What I'm working with.</h2></div></div>
        <div className="skill-groups">
          <div><h3>Programming & automation</h3><div className="tag-list"><span className="tag">Python</span><span className="tag">Bash</span><span className="tag">Git</span><span className="tag">GitHub</span></div></div>
          <div><h3>Systems & cloud</h3><div className="tag-list"><span className="tag">Linux</span><span className="tag">AWS fundamentals</span><span className="tag">Networking fundamentals</span><span className="tag">API concepts</span></div></div>
          <div><h3>Building this portfolio</h3><div className="tag-list"><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Vite</span><span className="tag">Responsive CSS</span></div></div>
        </div>
      </section>
    </div>
  );
}
