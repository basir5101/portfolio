import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogDetails } from '../../components/fakeData'
import CommonLayout from '../../components/layouts/CommonLayout'
import { motion } from 'framer-motion'

export default function Blogs() {
    return (
        <CommonLayout>
            <div className="py-0">
                <h1 className='bg-indigo-800 text-white p-2 text-center font-semibold text-2xl'>Blogs I I have written ✒️</h1>
                <div className='grid lg:grid-cols-4 py-6 gap-5'>
                    {
                        blogDetails.map((blog, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: (index + 1) / 4 }}
                                div key={index} className='border shadow-lg text-center border-indigo-900 rounded-md overflow-hidden'>
                                <Image src={blog.img} height={280} width={500} alt={blog.title} />
                                <h3 className='text-xl text-indigo-800 font-semibold pt-5'>{blog.title}</h3>
                                <div className='mt-1'> {blog.des} </div>
                                <div className="flex mt-3">
                                    <Link href={blog.link}>
                                        <a target={'_blank'} className='block hover:bg-pink-900 transition bg-indigo-800 border-r text-white w-full py-2'>Read More</a>
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </CommonLayout>
    )
}
