import { motion } from "motion/react";
import { Award, ShieldCheck, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * EDIT CERTIFICATIONS HERE:
 * 1. Add your public verification links to the 'link' property.
 * 2. Update titles or issuers as needed.
 */
const certifications = [
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    icon: Database,
    link: "https://coursera.org/share/3a1aeff63717b90d97d71fc326626016", // EDIT THIS LINK
  },
  {
    title: "Google IT Support Certificate",
    issuer: "Google",
    icon: ShieldCheck,
    link: "https://www.coursera.org/account/accomplishments/specialization/9NB4R1X4N9UV", // EDIT THIS LINK
  },
  {
    title: "Cybersecurity Professional Foundations",
    issuer: "Microsoft & LinkedIn",
    icon: Award,
    link: "https://www.linkedin.com/learning/certificates/e3a070b52af59f1275a7eb59372cf290555d2b9051380b3a9c94615b2daf3168?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqYhmeX2JSKelTh6hmMdXsg%3D%3D", // EDIT THIS LINK
  },
  {
    title: "EF SET English Certificate",
    issuer: "EF Education First",
    icon: Globe,
    link: "https://cert.efset.org/en/uaTAvy", // EDIT THIS LINK
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Credentials</h2>
          <h3 className="text-4xl font-bold">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <Card className="h-full border-none bg-muted/20 group-hover:bg-muted/40 transition-all duration-300 transform group-hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
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
