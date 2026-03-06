import { skillsData } from "@/constant/consant";
import {
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillIcons = {
  java: SiOpenjdk,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  tailwind: SiTailwindcss,
  react: SiReact,
  next: SiNextdotjs,
  mysql: SiMysql,
  mongodb: SiMongodb,
  github: SiGithub,
  docker: SiDocker,
};

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="theme-card theme-border mx-auto w-full max-w-6xl rounded-3xl border p-8 sm:p-12">
        <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Skills</p>
        <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Core Technologies</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => {
            const Icon = skillIcons[skill.icon as keyof typeof skillIcons];

            return (
              <div key={skill.id} className="theme-card theme-border rounded-2xl border px-4 py-3">
                <div className="flex items-center gap-3 text-sm">
                  {Icon ? (
                    <Icon className="theme-accent text-xl" aria-hidden="true" />
                  ) : (
                    <div className="theme-surface h-9 w-9 rounded-full" aria-hidden="true" />
                  )}
                  <span className="theme-text-soft font-medium">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
