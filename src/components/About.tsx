import { Code, Layout, Server } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const technicalSkills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Git", percentage: 85 },
    { name: "MongoDB", percentage: 75 },
    { name: "PostgreSQL", percentage: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 animate-on-scroll"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
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
          
          <div className="grid gap-6 animate-on-scroll">
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

        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex p-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card flex flex-col items-center bg-background p-6 rounded-lg min-w-[200px]"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">{skill.percentage}%</div>
                    </div>
                    <svg className="w-full h-full transform -rotate-90 skill-progress">
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-muted opacity-25"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.percentage / 100)}`}
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default About;