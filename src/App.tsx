import { useState } from "react";
import {
  Shield,
  ShieldCheck,
  Code2,
  Terminal,
  Lock,
  Database,
  ChevronRight,
  Sparkles,
  Mail,
  Check,
  GraduationCap,
} from "lucide-react";
import { personalData, type Project } from "./data/portfolioData";
import { ProjectCard } from "./components/ProjectCard";
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const categories = [
    "Todos",
    "Desarrollo",
    "Ciberseguridad",
    "Multiplataforma",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.links.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  const filteredProjects =
    selectedCategory === "Todos"
      ? personalData.projects
      : personalData.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Barra de Navegación */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold group"
          >
            <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
              <Shield className="w-4 h-4" />
            </span>
            <span className="text-white group-hover:text-emerald-400 transition-colors">
              alexis.llorca
            </span>
            <span className="text-slate-500">~/dam2</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a
              href="#sobre-mi"
              className="hover:text-emerald-400 transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#seguridad"
              className="hover:text-emerald-400 transition-colors"
            >
              Seguridad
            </a>
            <a
              href="#habilidades"
              className="hover:text-emerald-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#formacion"
              className="hover:text-emerald-400 transition-colors"
            >
              Formación
            </a>
            <a
              href="#proyectos"
              className="hover:text-emerald-400 transition-colors"
            >
              Proyectos
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* HERO SECTION */}
        <section id="sobre-mi" className="pt-8 sm:pt-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Máster en Ciberseguridad &bull; 2º DAM</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {personalData.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-300">
              {personalData.headline}
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
            >
              Ver Proyectos
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              Perfil LinkedIn
            </a>
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              Repositorio GitHub
            </a>
          </div>
        </section>

        {/* SECURITY PILLAR / ENFOQUE DIFERENCIAL */}
        <section
          id="seguridad"
          className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/80 space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Lock className="w-64 h-64 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Diferencial Técnico</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Desarrollo de Software con Mentalidad de Seguridad
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Haber cursado un Máster en Ciberseguridad me permite programar
              software pensando en la prevención de riesgos y vulnerabilidades
              desde el diseño:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Security by Design</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Diseño de arquitecturas donde la seguridad no es un parche
                posterior, sino parte estructural del ciclo de vida del
                software.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <Database className="w-4 h-4" />
                <span>Protección de Datos & OWASP</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prevención de SQL Injection en Acceso a Datos, validación
                estricta de entradas y sanitización en aplicaciones
                multiplataforma.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-2">
              <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                <Terminal className="w-4 h-4" />
                <span>Gestión Segura de Secretos</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cero credenciales en repositorios, uso de variables de entorno
                protegidas y automatización con privilegios mínimos.
              </p>
            </div>
          </div>
        </section>

        {/* HABILIDADES / STACK TÉCNICO */}
        <section id="habilidades" className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Conocimientos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Stack Tecnológico & Habilidades
            </h2>
            <p className="text-slate-400 text-sm">
              Competencias adquiridas en el Máster de Ciberseguridad y durante
              el Grado Superior de DAM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {personalData.skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-emerald-400">
                    {category.iconName === "Shield" && (
                      <Shield className="w-5 h-5" />
                    )}
                    {category.iconName === "Code2" && (
                      <Code2 className="w-5 h-5" />
                    )}
                    {category.iconName === "Terminal" && (
                      <Terminal className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMACIÓN ACADÉMICA & ESPECIALIZACIÓN */}
        <section id="formacion" className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Trayectoria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Formación Académica & Especialización
            </h2>
            <p className="text-slate-400 text-sm">
              Base técnica en desarrollo multiplataforma y ciberseguridad
              defensiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalData.education.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-400 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-400">
                    {item.institution}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80 mt-6">
                  <p className="text-[11px] font-semibold text-slate-300">
                    Materias & Enfoques Clave:
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-slate-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Portafolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Proyectos Destacados
              </h2>
              <p className="text-slate-400 text-sm">
                Casos prácticos de desarrollo, seguridad y aplicaciones
                multiplataforma.
              </p>
            </div>

            {/* Filtros de Categoría */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="p-8 sm:p-12 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-6"
        >
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ¿Hablamos de Proyectos o Prácticas?
            </h2>
            <p className="text-sm text-slate-400">
              Disponible para prácticas de 2º DAM, proyectos de desarrollo
              seguro y oportunidades en el sector tecnológico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              Conectar en LinkedIn
            </a>
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Ver Repositorios
            </a>
            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                copiedEmail
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                  : "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700"
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Copiar Correo</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
        <p>
          &copy; {new Date().getFullYear()} Alexis Emmanuel Llorca &bull;
          Desarrollado con React, TypeScript y Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
