// All content below is derived strictly from Ranim Khemir's CV (khemir ranim.pdf).
// No fabricated experience, skills, or achievements have been added.

export const profile = {
  name: "Ranim Khemir",
  title: "Full-Stack Web & Mobile Developer",
  tagline: "Computer Science Graduate, ISAMM",
  location: "Korba, Nabeul, Tunisia",
  email: "ranim.khemir6@gmail.com",
  phone: "+216 94 612 006",
  linkedin: "https://www.linkedin.com/in/ranim-khemir",
  linkedinLabel: "linkedin.com/in/ranim-khemir",
  cvFile: "/Ranim-Khemir-CV.pdf",
  intro:
    "Computer Science graduate from ISAMM with a genuine passion for web, software and mobile development. I build on solid technical foundations from academic and hands-on projects to deliver reliable, thoughtful solutions — and I'm looking to bring that energy to an engineering team.",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate in Multimedia Computing from ISAMM (Institut Supérieur des Arts Multimédia de La Manouba), with a genuine interest in web, software and mobile development.",
    "Through academic coursework and hands-on projects — including a full-stack final-year internship building a claims-management platform — I've developed solid foundations in modern frameworks like React and Django, and I'm motivated to put that knowledge to work on innovative, real-world projects.",
    "I enjoy collaborating within a team, and I bring autonomy, rigor and a strong appetite for learning to everything I build.",
  ],
  highlights: [
    { label: "Degree", value: "Licence, Multimedia Computing — ISAMM" },
    { label: "Focus", value: "Web, Software & Mobile Development" },
    { label: "Based in", value: "Korba, Nabeul, Tunisia" },
    { label: "Languages", value: "Arabic, English, Turkish, French" },
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "PHP", "C"],
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
    items: ["PostgreSQL", "SQLite", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git & GitHub", "Visual Studio Code", "Eclipse", "Android Studio", "Postman"],
  },
];

export const softSkills = [
  "Creativity & innovative problem-solving",
  "Teamwork & collaboration",
  "Autonomy & initiative",
  "Active listening & empathy",
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
      "Admin / Agent workspace with role-based access and agent assignment by category",
      "Interactive dashboard with statistics, advanced filters, charts, urgency tracking, and PDF/Excel export",
      "Interactive map of MAE agencies built with Leaflet for geographic visualization",
      "Authentication system with login, password change/reset and automated email notifications",
    ],
    tag: "Featured Project",
    links: { github: null, demo: null },
    note: "Internal client project — source not publicly available",
  },
  {
    id: "sales-app",
    name: "Online Sales Mobile App",
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
    role: "Customer Relations Associate (Seasonal)",
    org: "Les Villas Africa Jade",
    period: "Jun 2026 – Sept 2026",
    location: "Korba, Nabeul, Tunisia",
    points: [
      "Managed client relationships by phone and WhatsApp, and across booking platforms including Airbnb, Booking.com, TunRooms and Expedia",
      "Liaised with villa owners and guided guests through the full reservation process",
      "Used Excel to track and organize reservations",
      "Followed up on requests and handled complaints to maintain service quality",
      "Contributed to improving overall client experience and satisfaction",
    ],
  },
  {
    role: "B2B Event Coordinator (Occasional Mission)",
    org: "B2B International",
    period: "2024 – Present",
    location: "Tunis, Tunisia",
    points: [
      "Organized and coordinated professional meetings between Tunisian companies and international partners",
      "Managed on-site participant reception and logistics",
      "Supported and guided companies throughout events",
      "Coordinated with operational teams to ensure smooth execution of activities",
      "Handled participant requests to maintain satisfaction during international B2B events",
    ],
  },
  {
    role: "Active Member — Club J2I (Jeunes Ingénieurs)",
    org: "ISAMM, La Manouba",
    period: "2024 – 2026",
    location: "La Manouba, Tunisia",
    points: [
      "Helped organize technology-focused events and initiatives",
      "Collaborated on team projects related to development and engineering",
      "Strengthened communication and project-management skills",
    ],
  },
];

export const education = [
  {
    degree: "Licence — Multimedia Computing",
    field: "Computer Science",
    school: "ISAMM — Institut Supérieur des Arts Multimédia de La Manouba",
    period: "Sept 2023 – Jun 2026",
    location: "Manouba, Tunisia",
    link: "https://isa2m.rnu.tn/",
    details: [
      "Computer architecture and multimedia systems",
      "Web and mobile development",
      "Academic programming projects",
    ],
  },
  {
    degree: "Baccalauréat — Computer Science",
    field: null,
    school: "Lycée de Korba",
    period: "2019 – 2023",
    location: "Korba, Nabeul, Tunisia",
    link: null,
    details: [],
  },
];

export const languages = [
  {
    name: "Arabic",
    level: "Native speaker",
    cefr: null,
  },
  {
    name: "English",
    level: "Independent user",
    cefr: [
      { skill: "Listening", value: "B2" },
      { skill: "Reading", value: "B1" },
      { skill: "Spoken Production", value: "B1" },
      { skill: "Spoken Interaction", value: "B2" },
      { skill: "Writing", value: "B2" },
    ],
  },
  {
    name: "Turkish",
    level: "Independent user",
    cefr: [
      { skill: "Listening", value: "B2" },
      { skill: "Reading", value: "B1" },
      { skill: "Spoken Production", value: "B2" },
      { skill: "Spoken Interaction", value: "B2" },
      { skill: "Writing", value: "B1" },
    ],
  },
  {
    name: "French",
    level: "Independent user",
    cefr: [
      { skill: "Listening", value: "B1" },
      { skill: "Reading", value: "B1" },
      { skill: "Spoken Production", value: "B1" },
      { skill: "Spoken Interaction", value: "A2" },
      { skill: "Writing", value: "B1" },
    ],
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
