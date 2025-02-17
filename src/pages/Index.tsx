
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card p-1"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SK</span>
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-2 text-sm text-gray-600 glass-card"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            >
              Saroj Khadka
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed"
            >
              A creative developer passionate about crafting beautiful digital experiences and transforming ideas into reality
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white overflow-hidden rounded-full bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 rounded-full glass-card hover:bg-gray-50 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center gap-6 pt-8"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:saroj2063@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
