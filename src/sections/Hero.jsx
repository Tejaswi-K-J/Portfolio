import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Profile from "../assets/Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-30"></div>

      {/* Main Content */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Tejaswi
            </span>
          </h1>

           <TypeAnimation
        sequence={[
            "MERN Stack Developer",
            2000,
            "Full Stack Engineer",
            2000,
            "Machine Learning Enthusiast",
            2000,
            "Problem Solver",
            2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-purple-400 text-lg md:text-xl tracking-wide font-medium"
        />

          <h2 className="text-2xl md:text-3xl mt-6 text-gray-300 font-semibold leading-relaxed">
            Building scalable web applications, intelligent systems,
            and modern digital experiences.
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            Passionate about Full Stack Development, Machine Learning,
            and creating impactful solutions with clean UI and powerful backend systems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              View Projects
            </a>

            <a
              href="/RESUME.pdf"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-purple-500 hover:text-purple-400 transition duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10 text-2xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            {/* Profile Image */}
          <img 
            src={Profile} 
            alt="Profile" 
            className="relative w-[380px] md:w-[520px] object-contain" />
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 text-3xl text-gray-400"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;