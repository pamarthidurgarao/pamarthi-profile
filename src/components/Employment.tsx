import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Wells Fargo India Solutions Pvt Ltd",
    role: "Lead Software Engineer",
    period: "April 2022 - Present",
    description: "Leading the development of Unsecure Lending platform using Spring Boot, Kafka, and React JS."
  },
  {
    company: "CoMakeIt software Pvt Ltd",
    role: "Senior Software Engineer",
    period: "August 2019 - April 2022",
    description: "Worked on Keylane's LeanAppsLife and Iddink Group projects, implementing solutions using Java and microservices."
  },
  {
    company: "Pramati Technologies Private Ltd",
    role: "Development Engineer",
    period: "March 2018 - July 2019",
    description: "Developed enterprise solutions using Java and related technologies."
  },
  {
    company: "Tectoro Consulting Private Ltd",
    role: "Senior Member Technical",
    period: "January 2015 - February 2018",
    description: "Contributed to various software development projects using Java and web technologies."
  },
  {
    company: "Nacre Software Services",
    role: "Member Technical Staff",
    period: "July 2014 - December 2014",
    description: "Started professional career working on software development projects."
  }
];

export default function Employment() {
  return (
    <section id="employment" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-px bg-purple-200" />
              )}
              <div className="absolute left-0 top-0 p-2 bg-purple-100 rounded-full">
                <Briefcase className="w-4 h-4 text-purple-600" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-semibold">{exp.role}</span>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}