import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-16 bg-black relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-[-100px] bottom-0 w-[300px] h-[300px] bg-blue-600 blur-[120px] opacity-20 rounded-full"></div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-purple-400 text-lg mb-4">
            Let’s Connect
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Open to freelance opportunities, collaborations,
            internships, startup projects, and exciting tech discussions.
          </p>

        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-lg"
        >

          {/* Email */}
          <div className="flex flex-col items-center text-center">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-3xl mb-6">

              <FaEnvelope />

            </div>

            <h3 className="text-3xl font-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Whether you have a project idea, collaboration opportunity,
              or just want to connect — feel free to reach out.
            </p>

            {/* Email Button */}
            <a
              href="mailto:tejakj1098@gmail.com"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Send Email
            </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-12 text-3xl">

            <a
              href="https://github.com/Tejaswi-K-J"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tejaswi-k-j"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/tejaswi__shaiva"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;