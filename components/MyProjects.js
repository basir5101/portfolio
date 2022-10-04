import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projectDetails } from './fakeData';
import { motion } from 'framer-motion'



export default function MyProjects() {
    return (
        <section className='py-3'>

            <h1 className='bg-indigo-800 text-white p-5 text-center font-semibold text-2xl'>Projects</h1>
            <div className='grid lg:grid-cols-4 py-12 gap-5'>
                {
                    projectDetails.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            key={index} className='border shadow-lg text-center border-indigo-900 rounded-md overflow-hidden'>
                            <Image src={project.image} height={280} width={500} alt={project.name} />
                            <div className="bg-gray-300 pb-8 py-3">
                                <h3 className='text-xl text-indigo-800 font-semibold pt-5'>{project.name}</h3>
                                <div className='mt-1'> {project.tech.join(", ").toUpperCase()} </div>
                            </div>
                            <div className="flex">
                                <Link href={project.live}>
                                    <a target={'_blank'} className='block hover:bg-pink-900 transition bg-indigo-800 border-r text-white w-1/2 py-2'>Visit Site</a>
                                </Link>
                                <Link href={project.github}>
                                    <a target={'_blank'} className='w-1/2 py-2 block hover:bg-pink-900 transition bg-indigo-900 text-white'>GitHub Repository</a>
                                </Link>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

        </section>
    )
}
