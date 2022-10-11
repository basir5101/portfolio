import React from 'react'
import CommonLayout from '../../components/layouts/CommonLayout'
import { motion } from 'framer-motion'
import { contactDetails } from '../../components/fakeData'
import Link from 'next/link'
import Typed from 'react-typed'

export default function AboutMe() {
    return (
        <CommonLayout>
            <section className='font-mono'>
                <div className="text-center ">
                    <h1 className='my-4'>
                        <Typed
                            className='text-4xl font-semibold'
                            strings={['Md Abdul Basir']}
                            typeSpeed={50}
                        />
                    </h1>
                    <h3>
                        <Typed
                            className='text-3xl'
                            strings={['Frontend Web Developer', 'Mobile App Developer', 'JavaScript Developer', 'React Developer', 'React-native Developer']}
                            typeSpeed={40}
                            loop={true}
                        />
                    </h3>
                    <motion.div initial={{ scale: 0.25 }} whileInView={{ scale: 1 }} className='py-4'>
                        <ul className='flex flex-wrap align-middle justify-center'>
                            {
                                contactDetails.map((detail, index) => (
                                    <li className='flex mb-3 mx-3' key={index}>
                                        <Link href={detail.title === 'Email' ? `mailto:${detail.link}` : detail.title === 'Phone' ? `tel:${detail.link}` : detail.link}>
                                            <a className='border p-3 hover:scale-110 hover:bg-indigo-300 rounded-full border-indigo-700' target={"_blank"}  >
                                                {detail.component}
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                </div>

                <motion.div initial={{ scale: 0.25 }} whileInView={{ scale: 1 }} className='py-4'>
                    <h3 className="text-3xl my-1 font-semibold text-indigo-700" > Programming skills:  </h3>
                    <hr />
                    <div className="text-lg mb-5">
                        <h4 className='my-1'>
                            <strong>Expertise: </strong>
                            html, css, bootstrap, JavaScript, ES6, react, material ui, react hook, firebase.
                        </h4>
                        <h4 className='mb-1'>
                            <strong>Conformable: </strong>
                            SCSS, LESS, Redux
                        </h4>
                        <h4 className='mb-1'>
                            <strong>Familiar: </strong>
                            Nodejs, Express js, Mongodb
                        </h4>
                        <h4 className='mb-1'>
                            <strong>Tools: </strong>
                            git, chrome dev tools, vs code.
                        </h4>
                    </div>
                    <h3 className="text-3xl my-1 font-semibold text-indigo-700" >Education:  </h3>
                    <hr />
                    <div className="text-lg mb-5">
                        <h4 className='my-1'>
                            <strong>Rohanpur A.B Govt.School, Rohanpur </strong>
                            SSC(2015)
                        </h4>
                        <h4 className='mb-1'>
                            <strong>Rohanpur Yusuf Ali College, Rohanpur </strong>
                            hsc(2017)
                        </h4>
                        <h4 className='mb-1'>
                            <strong>Bangabandhu Sheikh Mujibur Rahman Science and Technology, Gopalganj-8100 </strong>
                            running
                        </h4>
                    </div>
                </motion.div>
            </section>
        </CommonLayout>
    )
}
