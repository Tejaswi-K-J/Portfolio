import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">

      <div className="text-center">

        {/* Animated Circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-8"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Tejaswi
          <span className="text-purple-500">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-400 mt-4 text-lg"
        >
          Building modern digital experiences...
        </motion.p>

      </div>

    </div>
  );
}

export default Loader;