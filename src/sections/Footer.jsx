import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-purple-600 blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold tracking-wide">
              TEJ..<span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md leading-relaxed">
              Building scalable web applications, intelligent systems,
              and impactful digital experiences.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">

            <a
              href="#home"
              className="hover:text-purple-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-purple-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-purple-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-purple-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 text-2xl">

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
              href="https://instagram.com/tejaswi__shaiva"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">

          © {currentYear} Tejaswi. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;