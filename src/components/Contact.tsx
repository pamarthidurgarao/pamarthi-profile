import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-600 flex-shrink-0" />
                <span className="text-sm md:text-base break-all">pamarthidurgarao1@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-600 flex-shrink-0" />
                <span className="text-sm md:text-base">+91 9966532764</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-600 flex-shrink-0" />
                <span className="text-sm md:text-base">India</span>
              </div>
            </div>
            
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors text-sm md:text-base font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}