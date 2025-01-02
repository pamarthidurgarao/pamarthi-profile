import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-primary mb-4">Welcome to my Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Durga Rao Pamarthi</span>
            </h1>
            <div className="typing-demo text-2xl md:text-3xl mb-8">
              Full Stack Developer
            </div>
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg"
            >
              Contact Me <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;