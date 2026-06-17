import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-[-100px] bottom-20 w-[300px] h-[300px] bg-purple-600 blur-[120px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-purple-400 text-lg mb-4">
            Some Things I’ve Built
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={1500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  relative
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  overflow-hidden
                  backdrop-blur-lg
                  hover:border-purple-500
                  transition
                  duration-300
                "
              >

                {/* Spotlight Hover Effect */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    pointer-events-none
                  "
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(168,85,247,0.15), transparent 40%)",
                  }}
                ></div>

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                {/* Content */}
                <div className="p-8 relative z-10">

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">

                    {project.tech.map((tech, techIndex) => (

                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-5">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-purple-500 hover:text-purple-400 transition duration-300"
                    >

                      <FaGithub />
                      GitHub

                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition duration-300"
                    >

                      <FaExternalLinkAlt />
                      Live Demo

                    </a>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;