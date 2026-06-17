import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 100,
        y: position.y - 100,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[1]"
      style={{
        background:
          "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}

export default CursorGlow;