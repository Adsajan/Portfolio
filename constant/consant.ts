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
  icon: string;
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
    name: "Flyer Design",
    description:
      "Creating eye-catching flyers and posters that communicate clearly and match brand identity.",
  },
  {
    id: 4,
    icon: "images/s4.png",
    name: "Video Editing",
    description:
      "Editing short-form and promotional videos with smooth cuts, titles, and clean pacing.",
  },
];

export const experienceData: ResumeItem[] = [
  {
    id: 1,
    title: "Research Project Developer",
    organization: "ASR System for Sri Lankan Tamil",
    period: "2025 - Present",
    description:
      "Developing an automatic speech recognition system using preprocessing, deep learning model training, and evaluation.",
  },
  {
    id: 2,
    title: "Team Lead",
    organization: "Education Institute Management System",
    period: "2025",
    description:
      "Led a team to deliver a responsive institute management system with modules for students, teachers, courses, and scheduling.",
  },
  {
    id: 3,
    title: "Developer",
    organization: "JeyaFoods - Food Ordering System",
    period: "2025 - Present",
    description:
      "Built admin dashboard and POS features for a web-based food ordering platform with real-time updates.",
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
    title: "Automatic Speech Recognition (ASR) for Sri Lankan Tamil",
    description:
      "Individual research project focused on low-resource speech recognition using preprocessing and deep learning.",
    tags: ["Python", "PyTorch", "Google Colab"],
    liveUrl: "#",
    codeUrl: "https://github.com/Adsajan",
  },
  {
    id: 2,
    image: "images/p2.jpg",
    title: "Education Institute Management System",
    description:
      "Team software project to manage students, teachers, courses, and class scheduling with a responsive UI.",
    tags: ["React.js", "Tailwind CSS", "ShadCN UI", "Node.js", "MongoDB"],
    liveUrl: "#",
    codeUrl: "https://github.com/Adsajan",
  },
  {
    id: 3,
    image: "images/p3.jpg",
    title: "Automated Application Deployment System",
    description:
      "Automated build, test, and release workflow for web applications to streamline deployments.",
    tags: ["Python", "Jenkins", "Nginx"],
    liveUrl: "#",
    codeUrl: "https://github.com/Adsajan",
  },
  {
    id: 4,
    image: "images/p4.jpg",
    title: "JeyaFoods - Food Ordering System",
    description:
      "Web-based food ordering platform with admin dashboard and POS system for real-time order management.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "#",
    codeUrl: "https://github.com/Adsajan",
  },
];

export const skillsData: SkillItem[] = [
  { id: 1, name: "Java", icon: "java" },
  { id: 2, name: "Python", icon: "python" },
  { id: 3, name: "JavaScript", icon: "javascript" },
  { id: 4, name: "TypeScript", icon: "typescript" },
  { id: 5, name: "HTML/CSS", icon: "html" },
  { id: 6, name: "Tailwind CSS", icon: "tailwind" },
  { id: 7, name: "React.js", icon: "react" },
  { id: 8, name: "Next.js", icon: "next" },
  { id: 9, name: "MySQL", icon: "mysql" },
  { id: 10, name: "MongoDB", icon: "mongodb" },
  { id: 11, name: "GitHub", icon: "github" },
  { id: 12, name: "Docker", icon: "docker" },
];
