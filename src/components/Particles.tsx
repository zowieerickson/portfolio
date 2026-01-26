import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "#000",
      },
      detectRetina: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          resize: {
            enable: true,
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            min: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            min: 0.05,
          },
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: {
            enable: true,
            min: 0.5,
          },
          value: 0.5,
        },
      },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
