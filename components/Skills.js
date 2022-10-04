import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { skills } from './fakeData';
import { motion } from 'framer-motion'
import CountUp from 'react-countup';



export default function Skills() {
    return (
        <section className='py-3'>
            <h1 className='bg-indigo-800 text-white p-5 text-center font-semibold text-2xl'>Skills</h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 py-12 gap-5'>
                {
                    skills.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            key={index}

                            className='border shadow-lg p-10 text-center border-indigo-900 rounded-md overflow-hidden'>

                            <h3 className='text-2xl text-indigo-800 font-semibold pt-5'>{project.title}</h3>
                            <CountUp
                                suffix="%"
                                end={project.count}
                                duration={project.count / 15}
                                className='text-4xl text-gray-900 font-semibold pt-5'
                            />
                        </motion.div>
                    ))
                }
            </div>

        </section>
    )
}
