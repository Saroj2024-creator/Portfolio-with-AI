
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">Passionate about creating beautiful digital experiences</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-gray-600">
              A dedicated web developer with a passion for creating intuitive and engaging digital experiences. 
              Specialized in modern web technologies and user-centric design.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Frontend Development</li>
              <li>• UI/UX Design</li>
              <li>• Responsive Web Design</li>
              <li>• Modern Web Technologies</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
