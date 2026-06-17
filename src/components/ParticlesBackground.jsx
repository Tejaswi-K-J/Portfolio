import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: ["#a855f7", "#3b82f6"],
          },

          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;