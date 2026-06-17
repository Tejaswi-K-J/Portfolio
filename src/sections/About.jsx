import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[250px] h-[250px] bg-purple-600 blur-[120px] opacity-20 rounded-full"></div>

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
            Get To Know More
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            About Me
          </h2>

        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I’m a Computer Science student and MERN Stack Developer
              passionate about building scalable web applications,
              intelligent systems, and impactful digital experiences.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My interests span across Full Stack Development,
              Machine Learning, system design, and modern UI/UX.
              I enjoy solving real-world problems through clean code,
              efficient architectures, and creative thinking.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Beyond development, I continuously explore new
              technologies, optimize problem-solving skills,
              and work on projects that combine innovation,
              analytics, and practical usability.
            </p>

          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

              <FaCode className="text-4xl text-purple-400 mb-5" />

              <h3 className="text-2xl font-semibold mb-3">
                Full Stack
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Building scalable MERN stack applications with
                responsive UI and optimized backend systems.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2">

              <FaBrain className="text-4xl text-blue-400 mb-5" />

              <h3 className="text-2xl font-semibold mb-3">
                Machine Learning
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Exploring clustering algorithms, predictive systems,
                analytics, and intelligent data-driven solutions.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-pink-500 transition duration-300 hover:-translate-y-2">

              <FaLaptopCode className="text-4xl text-pink-400 mb-5" />

              <h3 className="text-2xl font-semibold mb-3">
                UI/UX Focus
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Designing clean, modern, and engaging user
                experiences with smooth interactions.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500 transition duration-300 hover:-translate-y-2">

              <FaServer className="text-4xl text-green-400 mb-5" />

              <h3 className="text-2xl font-semibold mb-3">
                Problem Solving
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Strong foundation in DSA, backend logic,
                APIs, databases, and system-level thinking.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;