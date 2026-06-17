import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-16 bg-black relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-[-100px] top-20 w-[300px] h-[300px] bg-blue-600 blur-[120px] opacity-20 rounded-full"></div>

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
            Technologies I Work With
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Skills & Tech Stack
          </h2>

        </motion.div>

        {/* Categories */}
        <div className="space-y-16">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Category Title */}
              <h3 className="text-3xl font-semibold mb-8 text-gray-200">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                {category.skills.map((skill, skillIndex) => (

                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 hover:border-purple-500 transition duration-300 backdrop-blur-lg"
                  >

                    <div className="text-5xl text-purple-400">
                      {skill.icon}
                    </div>

                    <h4 className="text-lg font-medium text-gray-200">
                      {skill.name}
                    </h4>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;