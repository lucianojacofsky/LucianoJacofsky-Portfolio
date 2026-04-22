import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

/**
 * EDIT PROJECTS HERE:
 * 1. Add your chosen URLs to the 'link' property.
 * 2. Update the tech stack, titles, and descriptions.
 * 3. Place new project images in the public folder or use external URLs.
 */
const projects = [
  {
    title: "DomestiApp",
    description: "An app designed to connect customers who need domestic services with qualified professionals.",
    tech: ["React", "Vite", "TailWind", "Firebase"],
    link: "https://domesti-app.vercel.app/", // EDIT THIS LINK
    github: "#",
    image: "https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&q=80&w=800",
  },
  {
    title: "QR-URL Shortener",
    description: "A powerful, full-stack URL shortener with integrated QR generation and click tracking. ",
    tech: ["Node.js", "SQLite", "HTML", "CSS"],
    link: "https://qr-url-shortener-phi.vercel.app/", // EDIT THIS LINK
    github: "#",
    image: "https://images.unsplash.com/photo-1550482768-88b710a445fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sound Visualizer",
    description: "Real-time audio processing and dynamic graphics tool.",
    tech: ["Web Audio API", "Canvas", "JavaScript"],
    link: "https://visualizador-de-sonido.vercel.app/", // EDIT THIS LINK
    github: "#",
    image: "https://images.unsplash.com/photo-1724185773486-0b39642e607e?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Minesweeper Solver",
    description: "An advanced solver utilizing a hybrid AI approach.",
    tech: ["TypeScript", "JSON", "SQLite"],
    link: "https://github.com/lucianojacofsky/Minesweeper-Solver", // EDIT THIS LINK
    github: "#",
    image: "https://plus.unsplash.com/premium_photo-1707599548250-f2e4780ebf03?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&q=80&w=800",
  },
  // ADDED SPACE FOR TWO MORE PROJECTS BELOW
  {
    title: "Collab Editor",
    description: "Is a real-time collaborative image editor where multiple users work on the same canvas.",
    tech: ["React", "Motion", "Tailwind", "Node.js"],
    link: "https://collab-edit-chi.vercel.app/", // EDIT THIS LINK
    github: "#",
    image: "https://plus.unsplash.com/premium_photo-1722156533656-b22cbcf1c82e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rugby Scouting App",
    description: "is a professional-grade performance analytics platform designed for Tier-1 rugby scouting.",
    tech: ["Python", "AI", "SQLite"],
    link: "https://scout-rugby.vercel.app/", // EDIT THIS LINK
    github: "#",
    image: "https://images.unsplash.com/photo-1529663297269-6d349ec39b57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Portfolio</h2>
            <h3 className="text-4xl font-bold font-heading">Featured Projects</h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of my recent work. Hover and click any card to visit the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="overflow-hidden border-none bg-card hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">{project.title}</h4>
                      <Github className="w-5 h-5 text-muted-foreground hover:text-white transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px] uppercase tracking-wider font-sans">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
