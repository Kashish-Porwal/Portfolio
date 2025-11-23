import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
    {
        title: 'DSA Milestone Achieved',
        event: '600+ Problems Solved',
        icon: Award,
        color: 'text-yellow-400',
        description: 'Solved over 600 Data Structures & Algorithms problems across platforms, strengthening problem-solving and analytical skills.'
    },
    {
        title: 'LeetCode Performer',
        event: '5 Badges Earned',
        icon: Star,
        color: 'text-accent-100',
        description: 'Earned 5 LeetCode badges through consistent practice, contests, and improving ranking across multiple problem categories.'
    },
    {
        title: 'Hackathon Participant',
        event: 'College & External Events',
        icon: Trophy,
        color: 'text-accent-300',
        description: 'Actively participated in hackathons, collaborating with teams to build functional prototypes under time-bound challenges.'
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-32 px-8 bg-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-16 text-right"
                >
                    ACHIEVEMENTS
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-primary border border-white/10 hover:border-accent-200/50 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-200 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm font-mono text-accent-100 mb-4">{item.event}</p>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
