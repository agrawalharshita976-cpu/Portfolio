import React from "react";
import { TextShimmer } from "./TextShimmer";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5F5EF] px-6 py-12 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-left">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE4] text-[#173D2F] text-xs font-bold tracking-widest mb-6 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#929F83] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#173D2F]"></span>
              </span>
              Hi There!
            </div>

            {/* Name */}
            <h1 className="mb-6 text-5xl md:text-7xl font-extrabold tracking-[-0.06em] text-[#173D2F]">
              <span className="font-light text-[#929F83]">I'm </span>
              Harshita
            </h1>

            {/* Role */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#173D2F] text-white text-lg md:text-xl font-bold rounded-sm shadow-lg -rotate-1">
                <p className="kicker">
                  <span className="kicker-dot" />
                  Software Developer & Data Storyteller
                </p>
              </span>

              {/* Reference-style typography */}
              <h2 className="mt-8 max-w-3xl font-['DM_Sans'] text-[clamp(3.2rem,6.2vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.075em] text-[#173D2F]">
                I turn messy
                <br />
                ideas into{" "}
                <span className="font-['Playfair_Display'] font-semibold italic tracking-[-0.06em] text-[#929F83]">
                  useful
                </span>
                <br />
                digital
                <br />
                experiences.
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
              <a href="#work" className="group">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#173D2F] text-white font-bold rounded-xl hover:bg-[#244F3D] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  View My Work
                </button>
              </a>

              <a
                href="/resume.pdf"
                download="Harshita_Resume.pdf"
                className="group"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#173D2F] border-2 border-[#173D2F] font-bold rounded-xl hover:bg-[#173D2F] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Download Resume
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-[#D7DCCF] pt-10">
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-[#173D2F]">
                  3+
                </p>
                <p className="text-xs md:text-sm font-medium text-[#788473] uppercase tracking-wider">
                  Projects
                </p>
              </div>

              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-[#173D2F]">
                  3rd
                </p>
                <p className="text-xs md:text-sm font-medium text-[#788473] uppercase tracking-wider">
                  Year B.Tech
                </p>
              </div>

              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-[#173D2F]">
                  150
                </p>
                <p className="text-xs md:text-sm font-medium text-[#788473] uppercase tracking-wider">
                  DSA Solved
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#929F83] to-[#DCE4D3] rounded-[2rem] opacity-30 group-hover:opacity-50 blur-2xl transition duration-500"></div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#DCE4D3] rounded-full blur-xl opacity-70"></div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E8EDE4] rounded-full blur-xl opacity-70"></div>

              {/* Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/my.jpg"
                  alt="Harshita"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
