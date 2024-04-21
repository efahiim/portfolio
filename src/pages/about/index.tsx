import React from "react";

import CTA from "@components/cta";
import Skill from "@components/skill";
import Experiences from "@components/experiences";
import Footer from "@components/footer";

import { experiences, skills } from "@constants/index";

const About: React.FunctionComponent = () => (
  <>
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Isfaaq
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Senior Frontend Engineer based in Mauritius, specializing in web
          development through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              imageUrl={skill.imageUrl}
              name={skill.name}
            />
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <Experiences experiences={experiences} />
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>

    <Footer />
  </>
);

export default About;
