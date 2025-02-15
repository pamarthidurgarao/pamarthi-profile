import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Server, Terminal, Github as Git } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Java", "Python", "JavaScript", "Go", "Groovy"]
  },
  {
    title: "Frameworks",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Spring Boot", "Hibernate", "Node.js", "React", "Angular", "Django"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["Sybase", "PostgreSQL", "SQL Server", "MySQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins", "Git"]
  },
  {
    title: "Web Technologies",
    icon: <Server className="w-6 h-6" />,
    skills: ["HTML/CSS", "REST APIs", "Microservices", "WebServices", "JSON/XML"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}