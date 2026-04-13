export const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nicolas Pardo",
      role: "Senior Software Engineer",
      tagline: "Architecting high-performance digital solutions for the global market.",
      subtagline: "7+ years of expertise in Full-stack development, Scalable Architectures, and AWS Cloud.",
      cta_primary: "View Projects",
      cta_secondary: "Get in Touch"
    },
    experience: {
      title: "Professional Journey",
      jobs: [
        {
          company: "CBR San Carlos",
          role: "Senior Software Engineer (Freelance)",
          period: "Mar 2026 - Present",
          location: "San Carlos, Chile",
          description: "Leading the digital transformation of local business infrastructure.",
          highlights: [
            "Engineered a comprehensive business management system to automate legal workflows.",
            "Architected a secure, S3-backed repository for mission-critical document storage.",
            "Deployed scalable backend services using PHP/Laravel and React frontend.",
            "Implemented CI/CD pipelines to ensure rapid and reliable software delivery."
          ]
        },
        {
          company: "Sovos - TOC Biometrics",
          role: "Software Engineer",
          period: "Jan 2022 - Nov 2025",
          location: "Santiago, Chile",
          description: "Developed mission-critical biometric signature systems.",
          highlights: [
            "Maintained LegalSign Enterprise, a high-traffic RESTful API for biometric legal signatures.",
            "Optimized core systems using Laravel and MySQL on AWS infrastructure.",
            "Reduced latency and improved reliability of signature processing engines."
          ]
        },
        {
          company: "SubastasFutChile",
          role: "Software Engineer (Freelance)",
          period: "Jan 2021 - Present",
          location: "Santiago, Chile",
          description: "Launched the first sports auction platform in Chile, supporting over 2,500 active bids.",
          highlights: [
            "Successfully migrated the entire infrastructure to AWS in 2024 to support massive traffic surges during high-profile media events (Festival de Viña), maintaining zero downtime.",
            "Engineered a high-concurrency, real-time bidding engine leveraging Socket.io and Node.js.",
            "Spearheaded high-impact philanthropic auctions to provide housing relief for wildfire victims in Chile.",
            "Integrated Mercado Pago's payment gateway and managed high-availability storage via AWS S3."
          ]
        },
        {
          company: "RED-APIS",
          role: "Software Engineer",
          period: "May 2017 - Jan 2022",
          location: "Santiago, Chile",
          description: "Built large-scale enterprise systems with a focus on accessibility and real-time communication.",
          highlights: [
            "Developed 'AtiendeOnline', a disruptive video conferencing platform for public institutions using WebRTC and Socket.io.",
            "Improved social inclusion by enabling real-time interpretation for deaf citizens and non-native speakers within government services.",
            "Built and maintained mission-critical corporate data management systems using Laravel and MySQL.",
            "Managed complex deployments and infrastructure across Google Cloud and AWS."
          ]
        }
      ]
    },
    skills: {
      title: "Technical Expertise",
      categories: [
        {
          name: "Frontend",
          list: ["React", "Vue.js", "JavaScript (ES6+)", "Vite", "Vanilla CSS"]
        },
        {
          name: "Backend",
          list: ["PHP", "Laravel", "Node.js", "CakePHP", "REST APIs"]
        },
        {
          name: "Cloud & Devops",
          list: ["AWS (ECS, S3, RDS)", "Docker", "Nginx", "CI/CD Pipelines"]
        },
        {
          name: "Databases",
          list: ["MySQL", "PostgreSQL", "Redis"]
        }
      ]
    },
    projects: {
      title: "Freelance & Independent Projects",
      items: [
        {
          name: "CBR San Carlos Management System",
          tech: "React, Laravel, AWS",
          description: "Leading as a Lead Freelance Developer to engineer a full-scale ERP for legal deed management and workflow automation.",
          urlLink: "https://cbrsancarlos.cl/"
        },
        {
          name: "SubastasFutChile",
          tech: "Node.js, Socket.io, PHP",
          description: "Founder & Lead Developer of Chile's first real-time sports auction platform, handling massive media-driven traffic spikes.",
          urlLink: "https://subastasfutchile.cl/"
        },
        {
          name: "PrismaAgen Simulator",
          tech: "React, Tailwind, AWS",
          description: "Independent Consultant for industrial ROI calculation engine, optimizing enterprise decision-making through data visualization.",
          urlLink: "https://prismagen.com/"
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      text: "I'm currently exploring new opportunities in the US market. Let's build something great together.",
      button: "Send Email"
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Nicolas Pardo",
      role: "Senior Software Engineer",
      tagline: "Arquitectando soluciones digitales de alto rendimiento para el mercado global.",
      subtagline: "Más de 7 años de experiencia en desarrollo Full-stack, arquitecturas escalables y AWS Cloud.",
      cta_primary: "Ver Proyectos",
      cta_secondary: "Contacto"
    },
    experience: {
      title: "Trayectoria Profesional",
      jobs: [
        {
          company: "CBR San Carlos",
          role: "Senior Software Engineer (Freelance)",
          period: "Mar 2026 - Actualidad",
          location: "San Carlos, Chile",
          description: "Liderando la transformación digital de infraestructuras de negocio locales.",
          highlights: [
            "Diseñé un sistema integral de gestión para automatizar flujos de trabajo legales.",
            "Arquitecté un repositorio seguro en S3 para almacenamiento de documentos críticos.",
            "Desplegué servicios escalables usando PHP/Laravel y frontend en React.",
            "Implementé pipelines de CI/CD para asegurar entregas de software rápidas y confiables."
          ]
        },
        {
          company: "Sovos - TOC Biometrics",
          role: "Software Engineer",
          period: "Enero 2022 - Nov 2025",
          location: "Santiago, Chile",
          description: "Desarrollé sistemas de firma biométrica de misión crítica.",
          highlights: [
            "Mantuve LegalSign Enterprise, una API REST de alto tráfico para firmas legales biométricas.",
            "Optimicé sistemas centrales usando Laravel y MySQL en infraestructura AWS.",
            "Reduje la latencia y mejoré la confiabilidad de los motores de procesamiento de firmas."
          ]
        },
        {
          company: "SubastasFutChile",
          role: "Software Engineer (Freelance)",
          period: "Enero 2021 - Actualidad",
          location: "Santiago, Chile",
          description: "Lancé la primera plataforma de subastas deportivas en Chile, procesando más de 2,500 pujas.",
          highlights: [
            "Migré exitosamente la plataforma a AWS en 2024 para soportar tráfico masivo durante el Festival de Viña, manteniendo 100% de disponibilidad.",
            "Ingeniería de un motor de subastas de alta concurrencia usando Socket.io y Node.js.",
            "Lideré subastas mediáticas de beneficencia para apoyar a familias que perdieron sus hogares en incendios forestales.",
            "Integré Mercado Pago para transacciones seguras y gestioné almacenamiento de alta disponibilidad en AWS S3."
          ]
        },
        {
          company: "RED-APIS",
          role: "Software Engineer",
          period: "Mayo 2017 - Enero 2022",
          location: "Santiago, Chile",
          description: "Construcción de sistemas empresariales a gran escala con foco en accesibilidad.",
          highlights: [
            "Desarrollé 'AtiendeOnline', un sistema de videollamadas para instituciones públicas usando WebRTC y Socket.io.",
            "Generé un gran impacto social permitiendo la atención de personas sordas o extranjeros en servicios públicos mediante interpretación en tiempo real.",
            "Desarrollé sistemas de gestión de datos corporativos centralizados usando Laravel y MySQL.",
            "Gestioné despliegues e infraestructura en Google Cloud y AWS."
          ]
        }
      ]
    },
    skills: {
      title: "Experiencia Técnica",
      categories: [
        {
          name: "Frontend",
          list: ["React", "Vue.js", "JavaScript (ES6+)", "Vite", "Vanilla CSS"]
        },
        {
          name: "Backend",
          list: ["PHP", "Laravel", "Node.js", "CakePHP", "APIs REST"]
        },
        {
          name: "Cloud & Devops",
          list: ["AWS (ECS, S3, RDS)", "Docker", "Nginx", "Pipelines CI/CD"]
        },
        {
          name: "Bases de Datos",
          list: ["MySQL", "PostgreSQL", "Redis"]
        }
      ]
    },
    projects: {
      title: "Proyectos Freelance & Independientes",
      items: [
        {
          name: "Sistema de Gestión CBR",
          tech: "React, Laravel, AWS",
          description: "Desarrollador Freelance Principal para un ERP de gestión de escrituras legales y automatización de procesos.",
          urlLink: "https://cbrsancarlos.cl/"
        },
        {
          name: "SubastasFutChile",
          tech: "Node.js, Socket.io, PHP",
          description: "Fundador y Desarrollador Principal de la primera plataforma de subastas deportivas en tiempo real de Chile.",
          urlLink: "https://subastasfutchile.cl/"
        },
        {
          name: "Simulador PrismaAgen",
          tech: "React, Tailwind, AWS",
          description: "Consultor Independiente para motor de cálculo de ROI industrial enfocado en optimización de eficiencia.",
          urlLink: "https://prismagen.com/"
        }
      ]
    },
    contact: {
      title: "Conectemos",
      text: "Actualmente estoy explorando nuevas oportunidades en el mercado de USA. Construyamos algo increíble juntos.",
      button: "Enviar Email"
    }
  }
};
