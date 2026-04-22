import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus("idle");

    // @ts-ignore - Vite env variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // @ts-ignore - Vite env variables
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // @ts-ignore - Vite env variables
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Contact</h2>
            <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out through the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <Card className="p-6 border-none bg-muted/30">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Email</h4>
                    <a href="mailto:lucianojacofsky@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      lucianojacofsky@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-none bg-muted/30">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Phone</h4>
                    <a href="tel:+5491135060206" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      +54 9 11 3506-0206
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-none bg-muted/30">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Linkedin</h4>
                    <a href="https://www.linkedin.com/in/luciano-jacofsky/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      linkedin.com/in/luciano-jacofsky
                    </a>
                  </div>
                </CardContent>
              </Card>


              <Card className="p-6 border-none bg-muted/30">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-lg h-12" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-green-500 text-sm text-center font-medium mt-2">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-destructive text-sm text-center font-medium mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
