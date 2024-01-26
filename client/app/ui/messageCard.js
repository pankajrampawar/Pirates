'use client'

import React from 'react'
import { happyMonkey } from '../fonts'

export default function MessageCard() {
    return (
        <main className='flex flex-col text-lg bg-surface py-3 gap-3 px-4 my-2'>
            <section className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div className={`${happyMonkey.className} text-xl`}>
                            Anonymous
                        </div>
                        <div>
                            symb
                        </div>
                    </div>
                    <div className='text-gray-400 text-xs'>
                        College, year
                    </div>
            </section>

            <section className='text-[18px] pb-4 pt-3 border-b border-gray-500'>
                <p className='ml-4'>
                    this is where the text will stay and this how to text here will look this is the best possible way to write the website.
                </p>
            </section>
            
            <section className='flex justify-between items-center'>
                <div>
                    <input
                        placeholder='Your Response'
                        className='bg-secondary px-2 py-2 text-sm rounded-xl max-w-[170px] placeholder:text-white '
                    />
                </div>
                <div className='flex gap-2 text-xl'>
                    <span>
                        🤯
                    </span>
                    <span>
                        🫦
                    </span>
                    <span>
                        💀  
                    </span>
                    <span>
                        🔥
                    </span>
                    
                </div>
            </section>
        </main>
    )
}