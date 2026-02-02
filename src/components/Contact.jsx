import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Download } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -left-64 w-96 h-96 bg-accent-100/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-display font-bold mb-8"
                >
                    LET'S CREATE
                    <br />
                    <span className="text-accent-200">SOMETHING EPIC</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Got a project in mind? I'm always open to discussing new ideas,
                    creative opportunities, or just having a chat about the future of tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-8"
                >
                    <a
                        href="mailto:kashishporwal1702@gmail.com"
                        className="inline-block px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-accent-100 hover:scale-105 transition-all duration-300"
                    >
                        Say Hello
                    </a>

                    <div className="flex gap-8 mt-8">
                        <a
                            href="https://github.com/Kashish-Porwal"
                            target="_blank"
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:text-accent-300 transition-all duration-300"
                        >
                            <Github className="w-6 h-6" />
                        </a>


                        <a
                            href="https://www.linkedin.com/in/kashish-porwal-328a63289/"
                            target="_blank"
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:text-accent-300 transition-all duration-300"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>

                        <a
                            href="https://codolio.com/profile/kashish_1702"
                            target="_blank"
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:text-accent-300 transition-all duration-300"
                        >
                            <Code className="w-6 h-6" />
                        </a>

                        <a
                            href="https://drive.google.com/file/d/18DMC2JVrpCMh3OcF9BQeYukUMQpn_1-o/view?usp=sharing"
                            target="_blank"
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:text-accent-300 transition-all duration-300"
                        >
                            <Download className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-32 text-sm text-gray-500">
                    <p>© 2025 Kashish Porwal. Built with 💜 using React & Next.js.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
