import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Typed from 'react-typed';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
export default function Banner() {
    return (
        <section className='relative'>

            <div className=' grid lg:grid-cols-2 grid-cols-1 py-5'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={'/profile.png'} height={1000} width={1200} alt='profile' />
                </motion.div>
                <div className='relative'>
                    <div className="hidden sm:visible absolute ">
                        <motion.svg
                            width="100%"
                            height="600"
                            viewBox="0 10 100% 30"
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.line
                                x1="0"
                                y1="170"
                                x2="100%"
                                y2="30"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2}
                            />
                        </motion.svg>

                    </div>
                    <h1 className='text-2xl font-semibold'> Hello! I am  <span className='text-indigo-700'>Abdul Basir</span> </h1>
                    <Typed
                        style={{ fontSize: '25px' }}
                        strings={['Frontend Web Developer', 'Mobile App Developer', 'JavaScript Developer', 'React Developer']}
                        typeSpeed={40}
                        loop={true}
                    />

                </div>
                <img className='absolute right-0 bottom-0 w-1/2' src="/coding.svg" alt="" />
            </div>
        </section>
    )
}
