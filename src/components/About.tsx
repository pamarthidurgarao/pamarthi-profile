import { Code, Layout, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern web technologies.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              A passionate developer who loves to code
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a full-stack developer with a passion for creating beautiful and functional web applications. 
              I love learning new technologies and solving complex problems.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="text-primary">▹</span>
                <span>5+ years of development experience</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">▹</span>
                <span>Worked with multiple Fortune 500 companies</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">▹</span>
                <span>Delivered 50+ successful projects</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg flex gap-4 hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-primary">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;