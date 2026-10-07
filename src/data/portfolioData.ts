export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Desarrollo' | 'Ciberseguridad' | 'Multiplataforma';
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const personalData = {
  name: 'Alexis Emmanuel Llorca',
  headline: 'Desarrollador Multiplataforma (DAM) | Especialista en Ciberseguridad',
  bio: 'Estudiante de 2º de Desarrollo de Aplicaciones Multiplataforma con Máster en Ciberseguridad. Apasionado por el desarrollo de software seguro, la protección de sistemas y la automatización. Enfoque práctico en crear aplicaciones robustas desde el diseño (Security by Design).',
  location: 'España',
  links: {
    github: 'https://github.com/AlexisLlorca', // Alexis podrá poner su usuario exacto
    linkedin: 'https://www.linkedin.com/in/alexis-e-llorca/', // Alexis podrá poner su perfil exacto
    email: 'alexisllorca9@gmail.com',
  },
  
  skillCategories: [
    {
      title: 'Ciberseguridad & Protección',
      iconName: 'Shield',
      skills: ['Security by Design', 'Análisis de Vulnerabilidades', 'Seguridad en Redes', 'Hardening de Sistemas', 'Buenas Prácticas OWASP'],
    },
    {
      title: 'Desarrollo de Software',
      iconName: 'Code2',
      skills: ['Java (Avanzado)', 'Kotlin (Android)', 'SQL (Bases de Datos)', 'JavaScript', 'HTML5 / CSS3', 'Python (en progreso)'],
    },
    {
      title: 'Sistemas & Entorno',
      iconName: 'Terminal',
      skills: ['Linux (CachyOS / Arch / Debian)', 'Windows', 'Git & GitHub', 'Bash', 'Docker (Básico)'],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'proyectcraft-console',
      title: 'ProyectCraft Console',
      category: 'Desarrollo',
      description: 'Aplicación de consola estructurada en Java aplicando programación orientada a objetos, control de excepciones y lógica modular.',
      tags: ['Java', 'OOP', 'Git', 'Consola'],
      highlights: ['Manejo estructurado de datos', 'Validación de entradas de usuario'],
      githubUrl: 'https://github.com/AlexisLlorca',
    },
    {
      id: 'dam-practicas-seguras',
      title: 'Proyectos de 2º DAM (PSP & Acceso a Datos)',
      category: 'Multiplataforma',
      description: 'Implementación de servicios en red, concurrencia de hilos en Java (PSP) y persistencia segura de datos mediante JDBC/SQL.',
      tags: ['Java', 'Concurrencia', 'SQL', 'Seguridad'],
      highlights: ['Prevención de inyección SQL', 'Gestión eficiente de procesos y sockets'],
      githubUrl: 'https://github.com/AlexisLlorca',
    },
    {
      id: 'automated-pipeline',
      title: 'DevSecOps & Automation Suite',
      category: 'Ciberseguridad',
      description: 'Suite de scripts y automatizaciones para análisis de datos, extracción segura de información y despliegue continuo.',
      tags: ['Python', 'CI/CD', 'Automatización', 'Seguridad'],
      highlights: ['Gestión segura de credenciales (.env)', 'Flujos automáticos en GitHub Actions'],
      githubUrl: 'https://github.com/AlexisLlorca',
    },
  ] as Project[],
};
