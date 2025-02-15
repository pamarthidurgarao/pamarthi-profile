import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_bpt61vr";
const TEMPLATE_ID = "template_wi9apsc";
const PUBLIC_KEY = "5gSRcxh6YDVgq7rij";
const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e?.target, PUBLIC_KEY)
      .then((result) => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Hyderabad</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">pamarthidurgarao1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              required
              className="bg-background border-none"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-background border-none"
            />
            <Input
              placeholder="Subject"
              required
              className="bg-background border-none"
            />
            <Textarea
              placeholder="Your Message"
              required
              className="bg-background border-none min-h-[150px]"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;