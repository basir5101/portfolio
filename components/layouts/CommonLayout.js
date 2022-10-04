import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function CommonLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className='lg:px-12 md:px-8 px-3'> {children} </main>
            <Footer />
        </>
    )
}
