import { NavLink, Link, Outlet } from "react-router-dom";
import { siteConfig } from "../siteConfig";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark">AM</span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Built in public, one project at a time.</span>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </div>
  );
}
