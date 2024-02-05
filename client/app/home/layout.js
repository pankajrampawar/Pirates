'use client'

import Navbar from "../ui/navBar"
import BottomBar from "../ui/bottomBar";
import { useState, useEffect } from 'react'
import AddButton from "../ui/addButton";
import { useRouter, useParams, usePathname } from "next/navigation";
import PostDrop from "../ui/postAMessage";


export default function RootLayout({children}) {

    const pathname = usePathname();

    const params = useParams();
    console.log(params);
    console.log(pathname)
    const router = useRouter();

    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [visible , setVisible] = useState(true);
    const [postCardVisible, setPostCardVisible] = useState(false)

    useEffect(()=>{

        if(pathname === `/home/${params.id}`) setVisible(false);

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPosition > currentScrollPos || currentScrollPos < 14);
            setPrevScrollPosition(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPosition, visible]);

    const togglePostCardVisible = () => {
        setPostCardVisible((prev) => !prev)
        console.log("toggle CLCIKED")
    }

    return (
        <div className={`${postCardVisible ? ' h-screen overflow-clip' : ''} `}>
            <nav className={`fixed bg-black w-full transition-all duration-500 top-0 left-0 ${visible ? 'opacity-100' : 'opacity-0 -translate-y-12'}`}>
                <Navbar/>
            </nav>

            <div className="pt-12">
                {children}
            </div>

            <div className={`fixed bg-black w-full transition-all duration-500 bottom-0 left-0 ${ visible ? 'opacity-100' : 'opacity-0 translate-y-8' }`}>
                <BottomBar/>
            </div>

            <div 
                onClick={togglePostCardVisible}
                className={`fixed bottom-20 right-2 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 translate-x-14'}`}>
                <AddButton/>
            </div>

            <div
                className={` ${postCardVisible ? 'block' : 'hidden' } fixed top-0 h-full w-full backdrop-blur-sm transparentBlack z-30`}
                onClick={togglePostCardVisible}
            >
            </div>

            <div className={`${postCardVisible ? 'block' : 'hidden' } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40`}>
                <PostDrop togglePostCardVisible={togglePostCardVisible}/>
            </div>
        </div>
    )
}