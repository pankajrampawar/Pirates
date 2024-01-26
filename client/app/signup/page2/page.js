'use client'

import React from 'react'
import { keaniaOne, happyMonkey } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function PageTwo() {
    return (
        <div className='flex flex-col justify-center items-center gap-28 mt-20 px-10'>
            <header className={`text-[36px] ${keaniaOne.className} tracking-wider`}>
              Nexus
            </header>

            <section className='flex flex-col gap-14 w-full max-w-[350px]'>
                <div className='flex gap-2 border-b border-gray-400 pb-2'>
                    <Image
                        src="../year.svg"
                        alt='user'
                        height={29}
                        width={29}
                        className='invert' 
                    />
                    <select
                        className={`bg-black w-full focus:outline-none ${happyMonkey.className} tracking-widest text-xl `}
                        placeholder="college"
                    >
                        <option value="" style={{color: '#718096'}} disabled selected>Select Year</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                    </select>
                </div>

                <div className='flex gap-2 border-b border-gray-400 pb-2'>
                    <Image
                        src="../branch.svg"
                        alt='college'
                        height={29}
                        width={29}
                        className='invert'
                    />
                    <select
                        className={`bg-black w-full focus:outline-none ${happyMonkey.className} tracking-widest text-xl `}
                        placeholder="college"
                    >
                        <option value="" style={{color: '#718096'}} disabled selected>Select Branch</option>
                        <option value="CMPN">CMPN</option>
                        <option value="EXTC">EXTC</option>
                        <option value="AIDS">AIDS</option>
                        <option value="ECS">ECS</option>
                    </select>
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