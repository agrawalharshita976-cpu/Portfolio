// import { Briefcase } from 'lucide-react';
// import { portfolioData } from '../data/portfolioData';

// export function ExperienceSection() {
//   return (
//     <section id="experience" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-12">
//       <div className="border-b border-white/[0.06] pb-8 mb-12">
//         <div className="text-xs font-mono-tech text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-2">
//           <Briefcase className="w-3.5 h-3.5" />
//           // 04. TRAJECTORY & HISTORY
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight flex items-center gap-3">
//           <span>Work</span>
//           <span className="font-serif-italic text-4xl sm:text-5xl text-zinc-100">Experience</span>
//         </h2>
//         <p className="mt-2 text-sm text-zinc-400 max-w-lg">
//           My career building user experiences, scaling design systems, and driving frontend performance.
//         </p>
//       </div>

//       <div className="space-y-6">
//         {portfolioData.experiences.map((exp, idx) => (
//           <div
//             key={idx}
//             className="p-6 sm:p-8 rounded-xl bg-[#0c0c10]/80 border border-white/[0.07] hover:border-white/[0.15] transition-all"
//           >
//             <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
//               <div>
//                 <h3 className="text-lg font-medium text-white flex items-center gap-2">
//                   <span>{exp.role}</span>
//                   <span className="text-xs text-amber-400 font-mono-tech">@ {exp.company}</span>
//                 </h3>
//                 <span className="text-xs text-zinc-400 font-mono-tech">{exp.location}</span>
//               </div>
//               <span className="text-xs font-mono-tech text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-white/[0.06] self-start sm:self-auto">
//                 {exp.period}
//               </span>
//             </div>

//             <ul className="space-y-2 mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed list-disc list-inside">
//               {exp.description.map((bullet, bIdx) => (
//                 <li key={bIdx} className="text-zinc-300">
//                   {bullet}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/[0.04]">
//               {exp.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-2 py-0.5 text-[10px] font-mono-tech text-zinc-400 bg-zinc-900/90 rounded border border-white/[0.05]"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
