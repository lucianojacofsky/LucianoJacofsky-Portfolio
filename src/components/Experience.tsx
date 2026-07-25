import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <span className="text-sm font-medium text-primary mb-1 block">Aug 2026 - Present</span>
                <h4 className="text-xl font-bold">Operations & Data Intern</h4>
                <p className="text-muted-foreground font-medium mb-2">Universidad Torcuato Di Tella — Executive Education</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Managing invoicing, collections, and payment reconciliation data in Google Sheets/Excel across three business lines</li>
                  <li>Maintaining registrant and membership databases, ensuring data integrity and traceability</li>
                  <li>Generating administrative and financial reports for leadership</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <span className="text-sm font-medium text-primary mb-1 block">March 2026 - Present</span>
                <h4 className="text-xl font-bold">Teaching Assistant (Auxiliary Professor)</h4>
                <p className="text-muted-foreground font-medium mb-2">PADI</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Tutored 15+ students in Mathematics, Programming, and Statistics, teaching 2-3 sessions per week</li>
                  <li>Co-created and revised 10+ study materials and problem sets</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <span className="text-sm font-medium text-primary mb-1 block">Jun 2024 - Mar 2025</span>
                <h4 className="text-xl font-bold">Data Entry Analyst</h4>
                <p className="text-muted-foreground font-medium mb-2">Labomed</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Reviewed ~150 patient and administrative records per week across internal systems, part-time (~4 hrs/day)</li>
                  <li>Performed quality control, correcting ~20-30 inconsistencies per month</li>
                  <li>Reduced entry errors by introducing automated processes and standardized templates</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <span className="text-sm font-medium text-primary mb-1 block">2024 - Dec 2027 (Expected)</span>
                <h4 className="text-xl font-bold">Digital Technology Bachelor's Degree</h4>
                <p className="text-muted-foreground font-medium underline decoration-primary/30 underline-offset-4">Merit Scholarship Recipient</p>
                <p className="text-muted-foreground">Universidad Torcuato Di Tella</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <span className="text-sm font-medium text-primary mb-1 block">2018 - 2023</span>
                <h4 className="text-xl font-bold">Technical High School Diploma (IT)</h4>
                <p className="text-muted-foreground font-medium">Escuela técnica ORT</p>
                <p className="text-muted-foreground text-sm">Graduated with Honors</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
