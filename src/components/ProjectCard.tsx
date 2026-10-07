import { useState } from "react";
import type { Project } from "../data/portfolioData";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-
  .85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />
      <path d="m9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group">
      <div className="space-y-4">
        {/* Categoría y enlaces de acción */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-emerald-400 border border-slate-700/80">
            {project.category}
          </span>

          {/* Botones rápidos de GitHub y Demo */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-colors"
                title="Ver código en GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* Descripción corta */}
        <p className="text-xs text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Botón interactivo */}
        <button
          onClick={toggleDetails}
          className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 cursor-pointer"
        >
          {showDetails ? "Ocultar detalles técnicos" : "Ver detalles técnicos"}
          {showDetails ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Renderizado condicional de detalles */}
        {showDetails && (
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 animate-fadeIn">
            <p className="text-[11px] font-semibold text-slate-300">
              Puntos Clave de Arquitectura:
            </p>
            <ul className="space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-400 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-slate-800/80 mt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
