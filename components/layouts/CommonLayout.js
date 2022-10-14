import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function CommonLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="jCeoP5AHSxiuJ-MSP2Hyst-GX2Tzfb2fQIaspqYUW0Y" />
            </Head>
            <Navbar />
            <main className='lg:px-12 md:px-8 font-mono px-3'> {children} </main>
            <Footer />
        </>
    )
}
