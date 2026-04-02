import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Mail, Phone, Github, Linkedin, ExternalLink,
  ChevronDown, Terminal, Database, Layout, Server,
  Globe, Smartphone, Cloud, Zap, ArrowRight, Star,
  Coffee, ShoppingBag, Sun, Utensils, Gamepad2, BookOpen,
  MessageSquare, BarChart3, Music, Camera, Briefcase, Heart
} from "lucide-react";
import profileImg from "@/assets/shahab-profile-2.jpeg";

const skills = [
  { name: "JavaScript", level: 95, icon: Terminal, color: "from-yellow-400 to-yellow-600" },
  { name: "React.js", level: 92, icon: Code2, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 90, icon: Server, color: "from-green-400 to-green-600" },
  { name: "TypeScript", level: 88, icon: Terminal, color: "from-blue-400 to-blue-600" },
  { name: "HTML5", level: 97, icon: Layout, color: "from-orange-400 to-red-500" },
  { name: "CSS3 / Grid", level: 95, icon: Layout, color: "from-blue-400 to-purple-500" },
  { name: "Tailwind CSS", level: 93, icon: Zap, color: "from-teal-400 to-cyan-500" },
  { name: "MongoDB", level: 85, icon: Database, color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", level: 83, icon: Database, color: "from-blue-500 to-indigo-600" },
  { name: "Express.js", level: 88, icon: Server, color: "from-gray-400 to-gray-600" },
  { name: "REST APIs", level: 91, icon: Globe, color: "from-purple-400 to-pink-500" },
  { name: "Responsive Design", level: 96, icon: Smartphone, color: "from-pink-400 to-rose-500" },
];

const projects = [
  {
    title: "MegaStore E-Commerce",
    desc: "A full-scale Amazon-like e-commerce platform with product categories, flash deals, cart system, search & filtering. Built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion", "Context API"],
    icon: ShoppingBag,
    gradient: "from-primary to-orange-600",
    link: "/",
    featured: true,
  },
  {
    title: "Weather Forecast Pro",
    desc: "Real-time weather forecasting app with 7-day predictions, interactive maps, and location-based alerts. Features beautiful weather animations and dark mode.",
    tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    icon: Sun,
    gradient: "from-sky-400 to-blue-600",
    link: "#",
  },
  {
    title: "Café Bliss - Restaurant",
    desc: "Elegant café and restaurant business page with online menu, table reservations, customer reviews, and Instagram gallery integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Coffee,
    gradient: "from-amber-600 to-yellow-800",
    link: "#",
  },
  {
    title: "TaskFlow Manager",
    desc: "A comprehensive project management tool with Kanban boards, team collaboration, real-time updates, and progress analytics dashboard.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    icon: Briefcase,
    gradient: "from-violet-500 to-purple-700",
    link: "#",
  },
  {
    title: "ChatVerse Messenger",
    desc: "Real-time messaging application with group chats, file sharing, voice messages, emoji reactions, and end-to-end encryption.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: MessageSquare,
    gradient: "from-green-400 to-emerald-600",
    link: "#",
  },
  {
    title: "FitTrack Dashboard",
    desc: "Fitness tracking dashboard with workout logging, nutrition tracking, progress charts, and personalized training recommendations.",
    tags: ["React", "Express", "Chart.js", "JWT Auth"],
    icon: BarChart3,
    gradient: "from-red-500 to-pink-600",
    link: "#",
  },
  {
    title: "GameZone Arcade",
    desc: "Online gaming portal with leaderboards, multiplayer support, achievement system, and social features for gamers.",
    tags: ["React", "Node.js", "WebSockets", "Redis"],
    icon: Gamepad2,
    gradient: "from-indigo-500 to-blue-700",
    link: "#",
  },
  {
    title: "BlogSphere CMS",
    desc: "Full-featured content management system with rich text editor, SEO tools, analytics, comment system, and multi-author support.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    icon: BookOpen,
    gradient: "from-teal-500 to-cyan-600",
    link: "#",
  },
  {
    title: "BeatWave Music",
    desc: "Music streaming platform with playlist creation, artist profiles, audio visualization, and social sharing features.",
    tags: ["React", "Node.js", "Web Audio API", "AWS S3"],
    icon: Music,
    gradient: "from-pink-500 to-rose-600",
    link: "#",
  },
  {
    title: "SnapGallery Pro",
    desc: "Photography portfolio and gallery app with image optimization, lightbox viewer, categorization, and client proofing tools.",
    tags: ["React", "Node.js", "Sharp", "Cloudinary"],
    icon: Camera,
    gradient: "from-amber-400 to-orange-600",
    link: "#",
  },
  {
    title: "CloudDeploy Platform",
    desc: "DevOps deployment platform with CI/CD pipelines, container management, monitoring dashboards, and automated scaling.",
    tags: ["React", "Node.js", "Docker", "AWS"],
    icon: Cloud,
    gradient: "from-slate-500 to-gray-700",
    link: "#",
  },
  {
    title: "CharityConnect",
    desc: "Nonprofit donation platform with campaign management, donor tracking, impact reporting, and recurring payment support.",
    tags: ["React", "Stripe", "Node.js", "PostgreSQL"],
    icon: Heart,
    gradient: "from-rose-400 to-red-600",
    link: "#",
  },
];

function CoverPage({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(220 25% 6%), hsl(220 30% 12%), hsl(25 95% 15%))" }}
    >
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `hsl(25 95% ${50 + Math.random() * 30}% / ${0.3 + Math.random() * 0.4})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
        className="relative mb-8"
      >
        <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-primary/50 shadow-2xl sm:h-44 sm:w-44">
          <img src={profileImg} alt="Shahab Zaman Aatif" className="h-full w-full object-contain" />
        </div>
        <motion.div
          className="absolute -bottom-1 -right-1 rounded-full bg-primary p-2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Code2 className="h-5 w-5 text-primary-foreground" />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-2 font-body text-sm tracking-[0.3em] uppercase text-primary"
      >
        Full Stack Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-4 text-center font-display text-4xl font-bold text-white sm:text-6xl md:text-7xl"
      >
        Shahab Zaman
        <br />
        <span className="text-gradient">Aatif</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-10 max-w-md px-4 text-center text-sm text-white/50"
      >
        Crafting digital experiences with clean code and creative design
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(25 95% 53% / 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-display font-semibold text-primary-foreground shadow-lg"
      >
        View Portfolio
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="h-6 w-6 text-white/30" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}>
            <CoverPage onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="min-h-screen bg-background"
        >
          {/* Navbar */}
          <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
              <span className="font-display text-lg font-bold text-foreground">
                SZ<span className="text-primary">.</span>Aatif
              </span>
              <div className="hidden gap-6 sm:flex">
                {["About", "Skills", "Projects", "Contact"].map((s) => (
                  <a key={s} href={`#${s.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    {s}
                  </a>
                ))}
              </div>
              <a href="mailto:aahir.aatif@gmail.com" className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                Hire Me
              </a>
            </div>
          </nav>

          {/* Hero / About */}
          <section id="about" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="shrink-0"
              >
                <div className="relative">
                  <div className="h-72 w-56 overflow-hidden rounded-2xl border-2 border-border shadow-xl sm:h-96 sm:w-72">
                    <img src={profileImg} alt="Shahab Zaman Aatif" className="h-full w-full object-cover object-center" />
                  </div>
                  <motion.div
                    className="absolute -bottom-3 -right-3 rounded-xl bg-primary px-4 py-2 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    <span className="font-display text-sm font-bold text-primary-foreground">3+ Years Exp.</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">Hello, I'm</p>
                <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                  Shahab Zaman Aatif
                </h1>
                <p className="mb-6 max-w-lg text-muted-foreground leading-relaxed">
                  A passionate <span className="font-semibold text-foreground">Full Stack Developer</span> who
                  transforms ideas into powerful web applications. I specialize in building scalable, responsive, and
                  user-friendly applications using modern technologies like React, Node.js, and cloud services. I love
                  clean code, beautiful interfaces, and solving complex problems.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <a href="mailto:aahir.aatif@gmail.com" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
                    <Mail className="h-4 w-4" /> aahir.aatif@gmail.com
                  </a>
                  <a href="tel:01522105347" className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                    <Phone className="h-4 w-4" /> 01522105347
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="border-t border-border bg-muted/30 py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">What I Use</p>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Tech Stack & Skills</h2>
              </motion.div>
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px -10px hsl(25 95% 53% / 0.15)" }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${skill.color}`}>
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-card-foreground">{skill.name}</span>
                        <span className="text-xs font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">My Work</p>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Live Projects</h2>
                <p className="mt-3 text-muted-foreground">A selection of projects I've built from the ground up</p>
              </motion.div>
              <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                  <motion.a
                    href={project.link}
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
                  >
                    {/* Gradient header */}
                    <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                      <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
                        <project.icon className="h-12 w-12 text-white/90" />
                      </motion.div>
                      {project.featured && (
                        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
                          <Star className="h-3 w-3" /> Live
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-border px-5 py-3">
                      <span className="text-xs font-medium text-muted-foreground">View Project</span>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="border-t border-border bg-muted/30 py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-xl text-center">
                <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">Get In Touch</p>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">Let's Work Together</h2>
                <p className="mb-8 text-muted-foreground">
                  I'm always open to new opportunities and interesting projects. Feel free to reach out!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="mailto:aahir.aatif@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-display font-semibold text-primary-foreground shadow-lg"
                  >
                    <Mail className="h-4 w-4" /> Send Email
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="tel:01522105347"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-8 py-3.5 font-display font-semibold text-card-foreground"
                  >
                    <Phone className="h-4 w-4" /> Call Me
                  </motion.a>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                  <a href="#" className="rounded-full bg-card p-3 text-muted-foreground border border-border transition-colors hover:text-primary hover:border-primary">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-card p-3 text-muted-foreground border border-border transition-colors hover:text-primary hover:border-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border py-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Shahab Zaman Aatif. Built with <span className="text-primary">❤</span> using React & Tailwind CSS
            </p>
          </footer>
        </motion.div>
      )}
    </>
  );
}
