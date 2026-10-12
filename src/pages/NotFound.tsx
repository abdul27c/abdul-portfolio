import { Link } from "react-router-dom";

export function NotFound() {
  return <div className="page-wrap not-found"><p className="eyebrow">404 • NOT FOUND</p><h1>This page isn't here <span className="gradient-text">yet.</span></h1><p className="page-lede">The link may be outdated, or this project page hasn't been added.</p><Link className="button button-primary" to="/">Back home →</Link></div>;
}
