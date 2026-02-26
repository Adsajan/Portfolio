export type NavLink = {
  id: number;
  url: string;
  label: string;
};

export type ServiceItem = {
  id: number;
  icon: string;
  name: string;
  description: string;
};

export type ResumeItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
};

export type SkillItem = {
  id: number;
  name: string;
  level: number;
};

export const NavLinks: NavLink[] = [
  { id: 1, url: "#home", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#resume", label: "Resume" },
  { id: 4, url: "#projects", label: "Projects" },
  { id: 5, url: "#skills", label: "Skills" },
  { id: 6, url: "#contact", label: "Contact" },
];

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: "images/s1.png",
    name: "UI/UX Design",
    description:
      "Designing clean, user-focused interfaces that are consistent, accessible, and easy to use.",
  },
  {
    id: 2,
    icon: "images/s2.png",
    name: "Frontend Development",
    description:
      "Building responsive web apps with React and Next.js, with maintainable component architecture.",
  },
  {
    id: 3,
    icon: "images/s3.png",
    name: "Backend Integration",
    description:
      "Connecting interfaces to APIs and data systems while keeping performance and reliability in mind.",
  },
  {
    id: 4,
    icon: "images/s4.png",
    name: "Product Collaboration",
    description:
      "Working with teams to ship features quickly, from requirements and design to production release.",
  },
];

export const experienceData: ResumeItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    organization: "Freelance",
    period: "2024 - Present",
    description:
      "Building business websites and internal tools using Next.js, TypeScript, and REST APIs.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    organization: "Client Projects",
    period: "2023 - 2024",
    description:
      "Delivered modern interfaces with reusable components and responsive layouts for multiple clients.",
  },
];

export const educationData: ResumeItem[] = [
  {
    id: 1,
    title: "BSc in Computer Science",
    organization: "University Program",
    period: "2020 - 2024",
    description:
      "Focused on software engineering, web technologies, and practical project development.",
  },
  {
    id: 2,
    title: "Self-Learning Programs",
    organization: "Online Platforms",
    period: "2022 - Present",
    description:
      "Continuous training in React ecosystem, UI design, and deployment best practices.",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    image: "images/p1.jpg",
    title: "Ecommerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and analytics with a clear data-focused interface.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    image: "images/p2.jpg",
    title: "Portfolio Website",
    description:
      "Personal portfolio with animated hero section, clean sections, and mobile-first navigation.",
    tags: ["React", "Next.js", "Animation"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    image: "images/p3.jpg",
    title: "Business Landing Page",
    description:
      "Fast-loading landing page optimized for conversions with structured content and call-to-action blocks.",
    tags: ["UI/UX", "Frontend", "SEO"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    image: "images/p4.jpg",
    title: "Task Management App",
    description:
      "Simple productivity app to plan and track work using a clear and maintainable interface.",
    tags: ["Next.js", "State", "REST API"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const skillsData: SkillItem[] = [
  { id: 1, name: "HTML/CSS", level: 95 },
  { id: 2, name: "JavaScript", level: 90 },
  { id: 3, name: "TypeScript", level: 85 },
  { id: 4, name: "React / Next.js", level: 90 },
  { id: 5, name: "UI/UX Design", level: 80 },
];
