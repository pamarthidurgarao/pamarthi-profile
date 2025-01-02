import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { initScrollAnimations } from "./utils/scrollAnimations";

function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;