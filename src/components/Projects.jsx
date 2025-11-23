import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
    {
        title: 'Vibe Commerce',
        category: 'Full-Stack Shopping App',
        image: '/vibe-commerce.png',
        description: 'Full-stack shopping app with product listing, cart, and checkout. Built with React, Node.js, and MongoDB.',
        link: 'https://github.com/Kashish-Porwal/Vibe_Commerce',
        color: '#ff00ff'
    },
    {
        title: 'Competitive Coding Platform',
        category: 'Performance Analytics',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
        description: 'Platform comparing performance across LeetCode, Codeforces, and GitHub with advanced ranking system.',
        link: 'https://github.com/Kashish-Porwal/Competitive-Coding-Platform',
        color: '#00ffff'
    },
    {
        title: 'Interactive Sudoku Solver',
        category: 'Python GUI Application',
        image: '/sudoku.png',
        description: 'Sudoku solver with backtracking algorithm, themes, and hints using Python and Tkinter.',
        link: 'https://github.com/Kashish-Porwal/Interactive-Sudoku-Solver',
        color: '#00ff9d'
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative cursor-pointer perspective-1000 block"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 shadow-xl"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <span className="text-2xl">↗</span>
                    </div>
                </div>
            </div>

            <div style={{ transform: "translateZ(50px)" }}>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-accent-200 transition-colors">
                    {project.title}
                </h3>
                <p className="text-accent-100 text-sm font-mono mb-2">{project.category}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="work" className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-display font-bold mb-12 text-right"
                >
                    WORK SHOWCASE
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
