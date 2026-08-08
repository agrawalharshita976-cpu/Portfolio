import React from "react";
import { PlusIcon } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "./morphing-dialog";

export function ProjectDialogCard({
  title,
  subtitle,
  description,
  imageUrl,
  longDescription,
}) {
  const fallbackImg =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{ borderRadius: "16px" }}
        className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-shadow"
      >
        <MorphingDialogImage
          src={imageUrl}
          alt={title}
          className="h-52 sm:h-64 md:h-72 w-full object-cover"
          onError={(e) => {
            e.target.src = fallbackImg;
          }}
        />
        <div className="flex grow flex-row items-end justify-between px-4 py-4">
          <div className="pr-2">
            <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 font-bold text-base sm:text-lg">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 text-xs sm:text-sm">
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
          <button
            type="button"
            className="relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <PlusIcon size={16} />
          </button>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: "20px" }}
          className="pointer-events-auto relative flex h-auto w-[95vw] max-w-[700px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 max-h-[90vh] overflow-y-auto"
        >
          <MorphingDialogImage
            src={imageUrl}
            alt={title}
            className="h-48 sm:h-64 md:h-80 w-full object-cover"
            onError={(e) => {
              e.target.src = fallbackImg;
            }}
          />
          <div className="p-5 sm:p-6">
            <MorphingDialogTitle className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-zinc-50">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 font-medium text-sm sm:text-base">
              {subtitle}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
              {longDescription && (
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {longDescription}
                </p>
              )}
              <button className="mt-6 w-full py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm sm:text-base">
                Visit Project Website
              </button>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-900 dark:text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

const projectData = [
  {
    id: 1,
    title: "Notes App",
    subtitle: "React + Vite Project",
    imageUrl: "/images/sun.jpg",
    description:
      "A simple note-taking application built with React, allowing users to create, view, and manage personal notes in a clean interface.",
    longDescription:
      "Built as part of learning core React concepts, this app uses component state and props to handle dynamic note creation and rendering. It reinforced fundamentals like conditional rendering, list rendering with keys, and controlled form inputs.",
  },
  {
    id: 2,
    title: "Card UI",
    subtitle: "Reusable React Card Components",
    imageUrl: "/images/earth.jpg",
    description:
      "A set of reusable card components built with React and Tailwind CSS, including a job-listing card and a project showcase card.",
    longDescription:
      "Designed and built two distinct card layouts to explore component reusability and prop-driven design: a job-board style card with logo, tags, and an apply action, and a dark-themed project showcase card with hover states and expandable descriptions.",
  },
  {
    id: 3,
    title: "UI Design",
    subtitle: "React + Vite + Tailwind CSS",
    imageUrl: "/images/lamp.jpg",
    description:
      "A responsive UI design built with React, Vite, and Tailwind CSS, focused on clean layout and component-driven design.",
    longDescription:
      "Built to practice translating a visual design into React components using Tailwind's utility classes for spacing, typography, and responsive breakpoints.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base px-2">
            A selection of my recent work in design and development, showcasing
            interactive experiences and clean aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projectData.map((project) => (
            <ProjectDialogCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              longDescription={project.longDescription}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
