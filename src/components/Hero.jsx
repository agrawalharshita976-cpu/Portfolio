import React from "react";
import { TextShimmer } from "./TextShimmer";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest mb-6 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Hi There!
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
              <span className="text-slate-400 font-light">I'm </span>
              <TextShimmer className="tracking-tight"> Harshita</TextShimmer>
            </h1>

            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-slate-900 text-white text-lg md:text-xl font-bold rounded-sm shadow-lg transform -rotate-1">
                SOFTWARE DEVELOPER
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#work" className="group">
                <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  View My Work
                </button>
              </a>
              <a
                href="/resume.pdf"
                download="Harshita_Resume.pdf"
                className="group"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl hover:border-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-200 pt-10">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-indigo-600">
                  3+
                </p>
                <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-indigo-600">
                  3rd
                </p>
                <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Year B.Tech
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-indigo-600">
                  150
                </p>
                <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  DSA Solved
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 `bg-linear-to-tr` from-indigo-500 to-blue-500 `rounded-4xl` opacity-20 group-hover:opacity-30 blur-2xl transition duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
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
