import React from "react";

import CTA from "@components/cta";
import Project from "@components/project";

import { projects } from "@constants/index";

const Projects: React.FunctionComponent = () => (
  <section className="max-container">
    <h1 className="head-text">
      My{" "}
      <span className="blue-gradient_text drop-shadow font-semibold">
        Projects
      </span>
    </h1>

    <p className="text-slate-500 mt-2 leading-relaxed">
      I've embarked on numerous projects throughout the years, but these are the
      ones I hold closest to my heart. Many of them are open-source, so if you
      come across something that piques your interest, feel free to explore the
      codebase and contribute your ideas for further enhancements. Your
      collaboration is highly valued!
    </p>

    <div className="flex flex-wrap my-20 gap-16">
      {projects.map((project) => (
        <Project
          key={project.name}
          iconUrl={project.iconUrl}
          theme={project.theme}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>

    <hr className="border-slate-200" />

    <CTA />
  </section>
);

export default Projects;
