'use client'

import React from 'react'
import { keaniaOne, happyMonkey } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function PageOne() {
    return (
        <div className='flex flex-col justify-center items-center gap-28 mt-20 px-10'>
            <header className={`text-[36px] ${keaniaOne.className} tracking-wider`}>
              Nexus
            </header>

            <section className='flex flex-col gap-14'>
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
                        src="../college.svg"
                        alt='college'
                        height={29}
                        width={29}
                        className='invert'
                    />
                    <select
                        className={`bg-black w-full focus:outline-none ${happyMonkey.className} tracking-widest text-xl `}
                        placeholder="college"
                    >
                        <option value="" style={{color: '#718096'}} disabled selected>Select College</option>
                        <option value="VESIT">VESIT</option>
                        <option value="SPIT">SPIT</option>
                        <option value="NMIMS">NMIMS</option>
                    </select>
                </div>
            </section>

            <section className='flex justify-center'>
                <Link href="page2">
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