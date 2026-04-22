import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter mb-2 block">
              LJ<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Luciano Jacofsky. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/lucianojacofsky" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/luciano-jacofsky" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/luchi.jaco" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            Built with React, Tailwind & Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
