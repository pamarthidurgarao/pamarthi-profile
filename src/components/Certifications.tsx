import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    description: "Validated understanding of cloud concepts and Microsoft Azure services",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
  },
  {
    title: "AZ-204: Developing Solutions for Microsoft Azure",
    description: "Expertise in developing solutions using Azure services and workflows",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
  },
  {
    title: "AZ-104: Microsoft Azure Administrator",
    description: "Proficiency in implementing, managing, and monitoring Azure infrastructure",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}