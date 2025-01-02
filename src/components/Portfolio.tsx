import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform built with React and Node.js",
      image: "/placeholder.svg",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      image: "/placeholder.svg",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "/placeholder.svg",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Portfolio</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="project-overlay">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;