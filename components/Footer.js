import Link from 'next/link'
import React from 'react'
import { Linkedin } from 'react-feather'
import { contactDetails } from './fakeData'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <div className='bg-indigo-800 text-white '>
            <motion.div initial={{ scale: 0.25 }} whileInView={{ scale: 1 }} className='p-12'>
                <h1 className='text-center my-12 text-4xl font-mono'>Touch With Me</h1>
                <ul className='flex align-middle justify-center'>
                    {
                        contactDetails.map((detail, index) => (
                            <li className='flex mb-3 mx-3' key={index}>
                                <Link href={detail.title === 'Email' ? `mailto:${detail.link}` : detail.link}>
                                    <a className='border p-3 hover:scale-110 rounded-full' target={"_blank"}  >
                                        {detail.component}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </motion.div>
        </div>
    )
}
