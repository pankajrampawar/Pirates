'use client'

import React from 'react'
import { happyMonkey } from '../fonts'
import Link from 'next/link'

export default function MessageCard(props) {
    return (
        <main className='flex flex-col text-lg bg-surface py-3 gap-3 px-4 my-2'>
            <Link href={`/home/${props.id}`}>
                <section className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className={`${happyMonkey.className} text-xl`}>
                                Anonymous
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='text-gray-400 text-xs flex gap-1'>
                            <span>{props.branch}</span>
                            <span>{props.year} year</span>
                        </div>
                </section>

                <section className='text-[18px] pb-4 pt-3 border-b border-gray-500'>
                    <p className='ml-4'>
                        {props.content}
                    </p>
                </section>

            </Link>
            
            <section className='flex justify-between items-center pt-2'>
                <div>
                    <input
                        placeholder='Your Response'
                        className='bg-secondary px-2 py-2 text-sm rounded-xl max-w-[120px] placeholder:text-white focus:outline-none'
                    />
                </div>
                <div className='flex gap-3 text-xl'>
                <div className='flex gap-1 justify-center items-center'>
                        <span>
                            🫦
                        </span>
                        <span className='text-sm'>
                            40
                        </span>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <span>
                            💀 
                        </span>
                        <span className='text-sm'>
                            60
                        </span>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <span>
                            🔥
                        </span>
                        <span className='text-sm'>
                            30
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}