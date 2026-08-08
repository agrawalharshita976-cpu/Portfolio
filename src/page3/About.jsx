import React from "react";

function About() {
  const skills = [
    { name: "React", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
    {
      name: "JavaScript",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    },
    { name: "Java", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { name: "C", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { name: "MySQL", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Tailwind", color: "bg-teal-100 text-teal-700 border-teal-200" },
    { name: "HTML", color: "bg-red-100 text-red-700 border-red-200" },
    { name: "CSS", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    {
      name: "Power BI",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    { name: "MS Excel", color: "bg-green-100 text-green-700 border-green-200" },
    {
      name: "Spring Boot",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-[#010115] to-indigo-50 px-6 py-20 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <p className="text-indigo-500 font-medium mb-3 tracking-wide uppercase text-sm">
            Get to know me
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            About <span className="text-indigo-500">Me</span>
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Intro */}
            <div className="space-y-5 mb-12">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Hi! I'm{" "}
                <span className="font-semibold text-slate-900">Harshita</span>,
                a 3rd-year B.Tech student passionate about building full-stack
                web applications with real-world impact.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                I love creating clean and modern interfaces using React &
                Tailwind, while also working with backend technologies like
                Spring Boot and MySQL.
              </p>
            </div>

            {/* Skills Section - Bubble Style */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Skills
              </h2>

              <div className="flex flex-wrap gap-3 md:gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-5 py-2.5 rounded-full border text-sm font-semibold shadow-sm
                    hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default
                    ${skill.color}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
