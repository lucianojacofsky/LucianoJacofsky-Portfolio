import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-medium tracking-wider text-primary mb-4 uppercase">
            Data & IT Analyst | Technology Student
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Luciano Jacofsky
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building modern, high-performance digital experiences with a focus on React, Next.js, and Python.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            {/* 
              CV CONFIGURATION :
              1. Place your PDF file in the '/public' folder of the project.
              2. Rename the file to 'resume.pdf' OR update the 'href' below.
              3. The 'download' attribute marks the filename the browser will suggest.
            */}
            <a href="/Luciano_Jacofsky_CV.pdf" download="Luciano_Jacofsky_CV.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/lucianojacofsky" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/luciano-jacofsky" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/luchi.jaco" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
