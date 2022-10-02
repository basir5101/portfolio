import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'react-feather'
const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='px-12 p-2 flex align-middle justify-between bg-indigo-700 text-white'>
            {/* <ul className='flex align-middle justify-center '>
                <li>
                    <Link href={'/'}>
                        <a className='px-5 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/blogs'}>
                        <a className='px-5 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Blogs</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        <a className='px-5 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/projects'}>
                        <a className='px-5 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        <a className='px-5 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Contact</a>
                    </Link>
                </li>
            </ul> */}


            <motion.div whileTap={{ scale: 1.2 }} className="relative pb-12"> <button onClick={() => setIsOpen(isOpen => !isOpen)} className='absolute top-1 border-indigo-600 rounded-full p-2 bg-gray-700'> {isOpen ? <X /> : <Menu />} </button></motion.div>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                {
                    isOpen && <ul className='md:flex align-middle justify-center '>
                        <li>
                            <Link href={'/'}>
                                <a className='px-5 mb-2 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blogs'}>
                                <a className='px-5 mb-2 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Blogs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <a className='px-5 mb-2 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>About Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/projects'}>
                                <a className='px-5 mb-2 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>
                                <a className='px-5 mb-2 text-lg py-1 hover:bg-indigo-800 transition bg-indigo-900 mx-2 rounded-md block'>Contact</a>
                            </Link>
                        </li>
                    </ul>
                }
            </motion.nav>
        </div>
    )
}
