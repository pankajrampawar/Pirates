'use client'

import React, { useState, useEffect } from 'react'
import { keaniaOne, happyMonkey } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function PageTwo() {

    const [userData, setUserData] = useState({
        college: '',
        year: '', 
        branch: '',
        username: '',
        password: '',
    });

    useEffect(()=>{
        console.log(" in use effect ")
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData((prev)=>({
            ...prev,
            [id]: value
        }))
    }

    return (
        <div className='flex flex-col justify-center items-center gap-28 mt-20 px-10'>
            <header className={`text-[36px] ${keaniaOne.className} tracking-wider`}>
              Nexus
            </header>

            <section className='flex flex-col gap-14 w-full max-w-[350px]'>
                <div className='flex gap-2 border-b border-gray-400 pb-2'>
                    <Image
                        src="../user.svg"
                        alt='user'
                        height={29}
                        width={29}
                        className='invert' 
                    />
                    <input 
                        placeholder='username'
                        className={`bg-black focus:outline-none ${happyMonkey.className} text-xl`}
                    />
                </div>
                
                <div className='flex gap-2 border-b border-gray-400 pb-2'>
                    <Image
                        src="../password.svg"
                        alt='user'
                        height={29}
                        width={29}
                        className='invert' 
                    />
                    <input 
                        placeholder='password'
                        id='password'
                        type='password'
                        value={userData.password}
                        onChange={handleChange}
                        className={`bg-black focus:outline-none ${happyMonkey.className} text-xl`}
                    />
                </div>
                
            </section>

            <section className='flex justify-center'>
                <Link href="/home">
                    <button
                         className={`${happyMonkey.className} bg-white text-black text-3xl flex flex-col justify-center items-center h-[90px] w-[120px] rounded-[50px]`}
                    >
                        <Image 
                            src="../next.svg"
                            alt='next'
                            height={40}
                            width={40}
                            className='-mb-2'
                        />
                        <p>Next</p>
                    </button>
                </Link>
            </section>
        </div>
    )
}