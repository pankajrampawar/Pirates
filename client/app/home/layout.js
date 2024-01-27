'use client'

import Navbar from "../ui/navBar"
import { useState, useEffect } from 'react'

export default function RootLayout({children}) {

    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [visible , setVisible] = useState(true);

    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPosition > currentScrollPos || currentScrollPos < 14);
            setPrevScrollPosition(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPosition, visible])

    return (
        <div className="">
            <nav className={`fixed bg-black w-full top-0 left-0 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <Navbar/>
            </nav>

            <div className="pt-12">
                {children}
            </div>
        </div>
    )
}