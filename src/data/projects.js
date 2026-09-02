const importAll = (context) => context.keys().map(context);

const projects = [
  {
    id: "downtune",
    title: "Downtune",
    period: "2024",
    tags: ["Web", "Mobile"],
    description:
      "A platform that lets users search for and contact local artists for gigs and events. Built with a team of five, from concept to deployment.",
    stack: ["Vue.js", "Bootstrap", "Node.js", "Firebase", "Netlify"],
    link: "https://downtune.netlify.app",
    linkLabel: "Visit site",
    images: importAll(
      require.context("../images/downtune", false, /\.(png|jpe?g|svg|webp)$/)
    ),
  },
  {
    id: "dungeons-end",
    title: "Dungeons End",
    period: "Jan – Apr 2025",
    tags: ["Docker", "Microservices", "Web"],
    description:
      "A text-based dungeon crawler built on Docker containers, adhering to microservice architecture principles — with inventory management, character stats, and combat mechanics.",
    stack: ["Docker", "Python", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/NicLam1/Dungeons_End",
    linkLabel: "View on GitHub",
    images: importAll(
      require.context("../images/dungeons", false, /\.(png|jpe?g|svg|webp)$/)
    ),
  },
  {
    id: "passport-photo-maker",
    title: "Passport Photo Maker",
    period: "Jan – Apr 2025",
    tags: ["Java", "Spring Boot", "Computer Vision"],
    description:
      "Upload a photo and get a compliant passport photo back — automatic cropping and background removal that adheres to official passport requirements.",
    stack: ["Java", "Spring Boot", "Maven", "U2Net (ONNX)", "OpenCV"],
    link: "https://github.com/NicLam1/OOPTest",
    linkLabel: "View on GitHub",
    images: importAll(
      require.context("../images/passport", false, /\.(png|jpe?g|svg|webp)$/)
    ),
  },
  {
    id: "donkiboard",
    title: "Donkiboard",
    period: "Aug – Sep 2025",
    tags: ["Full Stack", "Auth"],
    description:
      "A working task dashboard where users create, view, assign, and update tasks — with user authentication and role-based access to features.",
    stack: ["TypeScript", "React", "Node.js", "Express", "Supabase"],
    link: null,
    linkLabel: null,
    images: importAll(
      require.context("../images/donkiboard", false, /\.(png|jpe?g|svg|webp)$/)
    ),
  },
];

export default projects;
