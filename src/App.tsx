import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Map from "./components/Map/Map";
import Headshot from "./components/Headshot/Headshot";
import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { ParticlesComponent } from "./components/Particles.tsx";

function App() {
  return (
    <>
      <ParticlesComponent />
      <main className="relative">
        <Navbar />
        <Map />
        <div className="flex gap-5">
          <Headshot />
          <div>
            <h2 className="font-semibold text-xl tracking-tighter sm:text-2xl">
              Hey, I'm Zowie (zau•ee) 👋
            </h2>
            <a
              href="mailto:zowie.erickson@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-1.5"
            >
              <div className="size-2 rounded-full bg-green-500"></div>
              <div className="relative cursor-pointer overflow-hidden">
                <p className="group text-muted-foreground">
                  <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">
                    Available for work
                    <span className="invisible h-0"> Reach out</span>
                  </span>
                  <span className="group-hover:-translate-y-full absolute top-full flex items-center justify-center transition-all duration-1000 ease-slow">
                    Reach out
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 size-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
