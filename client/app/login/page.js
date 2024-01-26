'use client'

import React from 'react';
import { keaniaOne, happyMonkey } from '../fonts';
import Image from 'next/image';

export default function Login() {
    return (
        <div className='h-full px-10 pb-20 flex flex-col py-20 text-center items-center justify-center gap-40'>
           <header className={`text-[33px] ${keaniaOne.className} tracking-wider`}>
              Nexus
            </header>

            <section className='flex justify-center border-b border-gray-400 pb-2'>
                <Image
                    src="./user.svg"
                    alt='user'
                    width={29}
                    height={29}
                    className='invert'
                />
                <input
                    placeholder='username'
                    className={`bg-black ${happyMonkey.className} text-xl pl-5 focus:outline-none`}
                />
            </section>

            <section className='flex justify-center'>
                <button
                     className={`${happyMonkey.className} bg-white text-black text-3xl flex flex-col justify-center items-center h-[90px] w-[120px] rounded-[50px]`}
                >
                    <Image 
                        src="./next.svg"
                        alt='next'
                        height={40}
                        width={40}
                        className='-mb-2'
                    />
                    <p>Next</p>
                </button>
            </section>
        </div>
    )
}