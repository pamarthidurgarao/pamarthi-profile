import { Code, Layout, Server } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Certifications = () => {
  const skills = [
    {
      icon: "AZ-900",
      title: "Microsoft Azure Fundamentals",
      description: "Creating responsive and interactive user interfaces using modern web technologies.",
    },
    {
      icon: "AZ-204",
      title: "Developing Solutions for Microsoft Azure",
      description: "Building robust server-side applications and APIs.",
    },
    {
      icon: "AZ-104",
      title: "Microsoft Azure Administrator",
      description: "Writing maintainable and scalable code following best practices.",
    },
  ];


  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">Cloud Certifications</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 animate-on-scroll"></div>

        <div className="grid md:grid-cols-2 gap-2 items-center mb-16">
          {skills.map((skill, index) => (
            <div className="bg-background p-6 rounded-lg flex gap-4 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div>{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold ">
                    {skill.title}
                  </h3>
                </div>
              </div>
              {/* <div className="mt-4">
                <p className="text-sm">
                  Issued: <span className="font-medium ">January 2025</span>
                </p>
                <a
                  href="https://www.credly.com/badge-link"
                  target="_blank"
                  className="mt-2 inline-block text-blue-600 hover:underline text-sm font-medium"
                >
                  Verify Certification →
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Certifications;
