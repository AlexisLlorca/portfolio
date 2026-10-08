import { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Trash2 } from "lucide-react";

// Estructura de cada entrada en el historial de la terminal
interface TerminalEntry {
  command: string;
  output: string | string[];
  isError?: boolean;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      command: "welcome",
      output: [
        "👋 ¡Bienvenido a la terminal interactiva de Alexis Llorca!",
        "💡 Escribe 'help' o pulsa en los comandos rápidos para interactuar.",
      ],
    },
  ]);

  // Referencias para auto-scroll interno y auto-focus
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll interno dentro de la caja de la terminal (evita que la página web salte hacia abajo)
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Lógica de procesamiento de comandos con iconos temáticos
  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: string | string[] = "";
    let isError = false;

    switch (trimmed) {
      case "help":
        output = [
          "📋 Comandos disponibles:",
          "  👤 whoami       - Información sobre mi perfil y titulación",
          "  ⚡ skills       - Stack tecnológico y herramientas principales",
          "  🚀 projects     - Resumen de mis proyectos destacados",
          "  📬 contact      - Canales de contacto directo",
          "  🔑 sudo hire    - Comando especial para ofertas y reclutadores",
          "  🧹 clear        - Limpiar la pantalla de la terminal",
        ];
        break;

      case "whoami":
        output = [
          "👤 Nombre: Alexis Emmanuel Llorca",
          "🎓 Titulación: 2º de Desarrollo de Aplicaciones Multiplataforma (DAM) | Máster en Ciberseguridad",
          "🛡️ Filosofía: 'Security by Design' — software robusto, escalable y protegido desde el código.",
        ];
        break;

      case "skills":
        output = [
          "💻 Lenguajes: Java (Avanzado), Kotlin (Android), TypeScript, JavaScript, SQL, Python",
          "🛡️ Ciberseguridad: OWASP Top 10, Hardening, Análisis de Vulnerabilidades, Criptografía",
          "🐧 Sistemas & DevOps: Linux, Docker, Git/GitHub, Bash",
        ];
        break;

      case "projects":
        output = [
          "🚀 1. ProyectCraft Console -> Java OOP & Arquitectura modular",
          "🔒 2. Prácticas DAM Seguras -> Concurrencia PSP, Sockets y JDBC",
          "⚙️ 3. DevSecOps Suite -> Automatización CI/CD y análisis de seguridad",
          "👉 Desplázate hacia abajo en la web para ver las tarjetas con detalles técnicos.",
        ];
        break;

      case "contact":
        output = [
          "📧 Email:    alexisllorca9@gmail.com",
          "💼 LinkedIn: https://www.linkedin.com/in/alexis-e-llorca/",
          "🐙 GitHub:   https://github.com/AlexisLlorca",
        ];
        break;

      case "sudo hire":
      case "sudo hire alexis":
        output = [
          "🔐 [PRIVILEGIOS CONCEDIDOS]: root@alexis",
          "✨ ¡Excelente decisión! Alexis está listo para incorporarse a proyectos y prácticas de DAM.",
          "📅 Estado: Disponible para entrevistas y colaboración inmediata.",
        ];
        break;

      default:
        output = `❌ Comando no encontrado: '${trimmed}'. Escribe 'help' para ver los comandos válidos.`;
        isError = true;
    }

    setHistory((prev) => [...prev, { command: cmdText, output, isError }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCommands = ["help", "whoami", "skills", "projects", "sudo hire"];

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm cursor-text mt-8"
    >
      {/* Barra superior de ventana */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-xs text-slate-400 font-sans font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            alexis@portfolio:~
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setHistory([]);
          }}
          className="text-slate-500 hover:text-slate-300 transition-colors p-1"
          title="Limpiar terminal"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Chips de comandos rápidos (para móvil o clics rápidos) */}
      <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/60 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] text-slate-500 font-sans mr-1">
          Rápidos:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-slate-800 hover:border-slate-700 text-xs transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Salida de comandos con scroll interno */}
      <div
        ref={terminalBodyRef}
        className="p-4 space-y-3 max-h-64 overflow-y-auto"
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            {entry.command && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-semibold">
                  alexis@portfolio:~$
                </span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            <div
              className={`leading-relaxed ${
                entry.isError ? "text-rose-400" : "text-slate-300"
              }`}
            >
              {Array.isArray(entry.output) ? (
                <ul className="space-y-0.5">
                  {entry.output.map((line, lIdx) => (
                    <li key={lIdx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{entry.output}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Prompt de entrada interactivo */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-t border-slate-800"
      >
        <span className="text-emerald-400 font-semibold shrink-0">
          alexis@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe 'help' o pulsa un botón..."
          className="flex-1 bg-transparent text-white outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className="text-slate-500 hover:text-emerald-400 transition-colors p-1"
          title="Ejecutar"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
