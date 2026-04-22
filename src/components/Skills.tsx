import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Layout, 
  Zap, 
  Database, 
  Terminal, 
  Figma, 
  GitBranch,
  Monitor
} from "lucide-react";

const skills = [
  { name: "Python", icon: Terminal },
  { name: "SQL", icon: Database },
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Zap },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Terminal },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Figma },
  { name: "C / C++", icon: Code2 },
  { name: "R", icon: Code2 },
  { name: "Sheets / Excel", icon: Database },
  { name: "English C1", icon: Zap },
];

const services = [
  {
    title: "Custom Web Development",
    description: "Building robust and scalable web applications using React, Next.js, and Tailwind CSS.",
    icon: Layout
  },
  {
    title: "Responsive Interfaces",
    description: "Design and development focused on accessibility and excellent user experience across all platforms.",
    icon: Monitor
  },
  {
    title: "Performance Optimization",
    description: "Improving load speed and efficiency of existing web applications.",
    icon: Zap
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Skills Grid */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Expertise</h2>
            <h3 className="text-4xl font-bold mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Offerings</h2>
            <h3 className="text-4xl font-bold mb-8">Services</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 bg-card rounded-2xl border border-border/50"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
