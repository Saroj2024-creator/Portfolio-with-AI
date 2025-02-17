
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <div className="min-h-screen pt-16">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-400 to-pink-400 opacity-30"></div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative overflow-hidden">
          {/* Animated orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div animate={controls} className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></motion.div>
            <motion.div animate={controls} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50" style={{ animationDelay: "2s" }}></motion.div>
            <motion.div animate={controls} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50" style={{ animationDelay: "4s" }}></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            {/* Hero Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-40 h-40 mx-auto relative group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">SK</span>
                </div>
              </div>
            </motion.div>

            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950/90 px-6 py-3 text-sm text-white backdrop-blur-3xl">
                  Welcome to my portfolio
                </span>
              </span>
            </motion.div>
            
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-6xl sm:text-8xl font-bold tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
                Saroj Khadka
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed font-medium"
            >
              A creative developer passionate about crafting beautiful digital experiences and transforming ideas into reality
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-white transition-transform duration-300 ease-out hover:scale-105"
              >
                <div className="absolute inset-0 flex w-full justify-center [container-type:inline-size]">
                  <div className="absolute inset-0 flex justify-center overflow-hidden">
                    <div className="aspect-square w-16 flex-none overflow-hidden rounded-full bg-gray-950 blur-2xl"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 py-2 text-lg font-medium transition-transform duration-300 ease-out hover:scale-105"
              >
                <div className="absolute inset-0 flex w-full justify-center [container-type:inline-size]">
                  <div className="absolute inset-0 flex justify-center overflow-hidden">
                    <div className="aspect-square w-16 flex-none overflow-hidden rounded-full bg-white/10 blur-2xl"></div>
                  </div>
                </div>
                <span className="relative z-10 flex items-center text-gray-900">
                  Get in Touch
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center gap-6 pt-8"
            >
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:saroj2063@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-2 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
