export type Project = {
  slug: string;
  title: string;
  category: string;
  status: "In progress" | "Prototype" | "Deployed";
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  architecture: string[];
  testing: string[];
  challenges: string[];
  lessons: string[];
  limitations: string[];
  repoUrl: string;
  demoUrl?: string;
  loomUrl?: string;
  loomEmbedUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "cloud-cost-intelligence",
    title: "Cloud Cost Intelligence",
    category: "Cloud • Python • Full stack",
    summary:
      "A cost-investigation dashboard that analyzes billing records, flags unusual spend, and surfaces nearby infrastructure changes as leads for investigation.",
    problem:
      "Cloud bills can grow unexpectedly, and a raw billing export does not automatically explain which resource changed or what an engineer should investigate first.",
    solution:
      "Built a Python analysis pipeline and FastAPI service, then connected them to a React and TypeScript dashboard. The prototype uses synthetic billing data to demonstrate spend summaries, anomaly flags, and change-event correlation.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "Pandas", "Pytest", "Vite"],
    highlights: [
      "Validates billing rows and rejects malformed cost records.",
      "Compares daily spend with a rolling historical baseline to flag unusual changes.",
      "Ranks nearby change events as investigation leads—not proof of causation.",
      "Exposes overview, investigation, health, and refresh API endpoints.",
    ],
    architecture: [
      "Synthetic billing generator creates sample CSV records.",
      "Python analyzer validates records, summarizes spend, and detects anomalies.",
      "Change correlator ranks nearby infrastructure events for investigation.",
      "FastAPI serves the analysis to a React + TypeScript dashboard.",
    ],
    testing: [
      "12 pytest tests passed in the last recorded local test run.",
      "Frontend production build passed in the last recorded build run.",
      "Input validation includes a deliberately malformed sample row.",
    ],
    challenges: [
      "Separating a useful anomaly signal from a claim that an event caused the cost increase.",
      "Keeping sample data reproducible and making rejected input visible.",
      "Designing a useful first investigation view without pretending the prototype has live AWS billing access.",
    ],
    lessons: [
      "Cost anomalies need context; a spike is a clue, not a diagnosis.",
      "Clear API boundaries make the analysis pipeline easier to test independently from the UI.",
      "A portfolio project should document what is simulated and what has actually been deployed.",
    ],
    limitations: [
      "Uses synthetic billing data, not a connected AWS Cost and Usage Report.",
      "Not publicly deployed yet; the AWS account's CloudFront verification is pending.",
      "Savings suggestions are hypotheses and have not been validated against production workloads.",
    ],
    repoUrl: "https://github.com/abdul27c/cloud-cost-intelligence",
    featured: true,
    status: "Prototype",
  },
];
