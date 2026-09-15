// All content below is derived strictly from Ranim Khemir's CV (Ranim-Khemir-CV.pdf).
// No fabricated experience, skills, or achievements have been added.

export const profile = {
  name: "Ranim Khemir",
  title: "Artificial Intelligence Engineering Student",
  tagline: "AI Engineering Student, ESPRIT · Multimedia CS, ISAMM",
  location: "Korba, Nabeul, Tunisia",
  email: "ranim.khemir6@gmail.com",
  phone: "+216 94 612 006",
  linkedin: "https://www.linkedin.com/in/ranim-khemir",
  linkedinLabel: "linkedin.com/in/ranim-khemir",
  cvFile: "/Ranim-Khemir-CV.pdf",
  intro:
    "Artificial Intelligence engineering student at ESPRIT, holding a Bachelor's degree in Multimedia Computer Science from ISAMM. Passionate about software, web, mobile development and artificial intelligence, with hands-on experience building full-stack platforms and a strong drive to deliver innovative, real-world solutions.",
};

export const about = {
  paragraphs: [
    "I'm an Artificial Intelligence engineering student at ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies), holding a Bachelor's degree in Multimedia Computer Science from ISAMM (Institut Supérieur des Arts Multimédia de La Manouba).",
    "Through academic coursework and hands-on projects — including a full-stack final-year internship building a claims-management platform and a healthcare platform with machine-learning features — I've developed solid foundations in modern frameworks like React and Django, and a growing interest in applying AI to real-world problems.",
    "I enjoy collaborating within a team, and I bring autonomy, rigor and a strong appetite for learning to everything I build. I'm a quick learner, adaptable, and comfortable working across academic and practical environments.",
  ],
  highlights: [
    { label: "Currently", value: "Engineering Cycle in AI — ESPRIT" },
    { label: "Degree", value: "Bachelor, Multimedia Computer Science — ISAMM" },
    { label: "Based in", value: "Korba, Nabeul, Tunisia" },
    { label: "Languages", value: "Arabic, English, French, Turkish" },
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "PHP", "C", "Python", "JavaScript"],
  },
  {
    category: "Web Development & APIs",
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Oracle Database", "SQLite", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git & GitHub", "Visual Studio Code", "Eclipse", "Android Studio"],
  },
];

export const softSkills = [
  "Creativity & innovative problem-solving",
  "Teamwork & collaboration",
  "Autonomy & initiative",
  "Quick learner & adaptable",
];

export const projects = [
  {
    id: "mae-assurances",
    name: "Claims Management Platform — MAE Assurances",
    period: "Feb 2026 – May 2026",
    role: "Full-Stack Developer — Final-Year Internship (PFE)",
    description:
      "A full-stack web platform built to centralize, review, classify and track customer claims arriving from multiple channels for MAE Assurances.",
    stack: ["React.js", "Django REST Framework", "SQLite", "Recharts", "Leaflet"],
    features: [
      "REST backend with Django/DRF managing claims, statuses, categories, internal notes and full action history",
      "Admin / Agent workspace with role-based access and agent assignment",
      "Interactive dashboard with statistics, advanced filters, charts, urgency tracking, and PDF/Excel export",
      "Interactive map of MAE agencies built with Leaflet for geographic visualization",
      "Authentication system with login, password recovery and automated email notifications",
    ],
    tag: "Featured Project",
    links: { github: null, demo: null },
    note: "Internal client project — source not publicly available",
  },
  {
    id: "healthcare-platform",
    name: "Intelligent Healthcare Management & Prediction Platform",
    period: "Sept 2025 – Nov 2025",
    role: "Full-Stack Developer — Academic Project",
    description:
      "An intelligent healthcare platform for patient management, medical appointments and health monitoring, enhanced with machine-learning-driven predictions.",
    stack: ["React.js", "Django REST Framework", "Python", "PostgreSQL", "Machine Learning"],
    features: [
      "Machine Learning module for health-risk prediction and medical-specialty recommendation",
      "Admin / Agent spaces with role management, agent assignment and profile-based access restrictions",
      "Secure REST APIs with role-based authentication",
      "Interactive dashboards for patients, doctors and administrators",
    ],
    tag: "Academic Project",
    links: { github: null, demo: null },
    note: null,
  },
  {
    id: "sales-app",
    name: "Mobile E-commerce Application",
    period: "2025",
    role: "Mobile Developer — Academic Project, ISAMM",
    description:
      "A simple Android e-commerce application designed and built as part of academic coursework, covering interface and data management from the ground up.",
    stack: ["Java", "XML", "Android Studio"],
    features: [
      "Designed and developed a native Android application in Java and XML",
      "Implemented core features for user interface and data management",
      "Applied development best practices with functional testing",
      "Delivered as a collaborative team project with divided responsibilities",
    ],
    tag: "Academic Project",
    links: { github: null, demo: null },
    note: null,
  },
];

export const experience = [
  {
    role: "Customer Service Representative (Seasonal)",
    org: "Les Villas Africa Jade",
    period: "Jun 2026 – Sept 2026",
    location: "Korba, Nabeul, Tunisia",
    points: [
      "Managed customer relations through phone, WhatsApp, and booking platforms including Airbnb, Booking.com, TunRooms and Expedia",
      "Handled reservations, requests and complaints while providing personalized assistance",
      "Contributed to improving customer experience and satisfaction",
    ],
  },
  {
    role: "B2B Event Coordinator (Occasional Collaboration)",
    org: "B2B International",
    period: "2024 – Present",
    location: "Tunis, Tunisia",
    points: [
      "Coordinated professional meetings between Tunisian companies and foreign partners",
      "Managed participant reception, company assistance and coordination with operational teams",
    ],
  },
  {
    role: "Active Member — Club J2I (Jeunes Ingénieurs)",
    org: "ISAMM, La Manouba",
    period: "2024 – Present",
    location: "La Manouba, Tunisia",
    points: [
      "Participated in organizing technology-related events",
      "Collaborated on engineering and development-oriented projects",
      "Strengthened communication, teamwork, and project management skills",
    ],
  },
];

export const education = [
  {
    degree: "Engineering Cycle in Artificial Intelligence",
    field: "Artificial Intelligence",
    school: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",
    period: "2026 – Present",
    location: "Tunisia",
    link: null,
    details: [],
  },
  {
    degree: "Bachelor's Degree — Multimedia Computer Science",
    field: "Computer Science",
    school: "ISAMM — Institut Supérieur des Arts Multimédia de La Manouba",
    period: "2023 – 2026",
    location: "Manouba, Tunisia",
    link: "https://isa2m.rnu.tn/",
    details: [
      "Computer architecture and multimedia systems",
      "Web and mobile development",
      "Academic programming projects",
    ],
  },
  {
    degree: "High School Diploma — Computer Science",
    field: null,
    school: "Korba High School",
    period: "2019 – 2023",
    location: "Korba, Tunisia",
    link: null,
    details: [],
  },
];

export const languages = [
  {
    name: "Arabic",
    level: "Native",
    cefr: null,
  },
  {
    name: "English",
    level: "Upper-Intermediate (B2)",
    cefr: null,
  },
  {
    name: "French",
    level: "Intermediate (B2)",
    cefr: null,
  },
  {
    name: "Turkish",
    level: "Intermediate (B1)",
    cefr: null,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
