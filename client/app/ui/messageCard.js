'use client'

import React, { useState } from 'react'
import { happyMonkey } from '../fonts'
import Link from 'next/link'
import { addResponse } from '../actions'
import Image from 'next/image'

export default function MessageCard(props) {

    const getOrdinalYear = (year) => {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const v = year % 100;
        return year + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    const [active, setActive] = useState(false);
    const [response, setResponse] = useState('');


    const handleChange = (e) => {
        const { value } = e.target;

        setResponse(value);

        if(response) setActive(true);

        if(!response) setActive(false);
    }

    const handleClick = async () => {

        if (!response) {
            alert("type something to reply, dumbass!");
            return;
        }

        const result = await addResponse(props.id, response);
        
        if (result) {
            alert("response sent");
            return;
        }

        if (!result) {
            alert("unable to spend reply, it's your net..");
            return;
        }
    }

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
                            <span>{
                                props.year ? getOrdinalYear(props.year) + ' year' : ''
                            }</span>
                        </div>
                </section>

                <section className='text-[18px] pb-4 pt-3 border-b border-gray-500'>
                    <p className='ml-4'>
                        {props.content}
                    </p>
                </section>
            </Link>
            
            <section className='flex justify-between items-center pt-2'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <input
                            placeholder='Your Response'
                            className='bg-secondary px-2 py-2 text-sm rounded-xl max-w-[120px] placeholder:text-white focus:outline-none'
                            onChange={handleChange}
                            value={response}
                            id='response'
                        />
                    </div>

                    <button 
                        className={`text-black py-1 px-2 rounded-lg text-sm  ${active ? 'bg-white font-bold' : 'bg-gray-200 font-medium'}`}
                        onClick={handleClick}
                    >
                        send
                    </button>
                </div>

                <div className='flex gap-2 justify-center items-center text-white text-base'>
                    <Image
                        src={'../reply.svg'}
                        width={23}
                        height={23}
                        alt='reply'
                        className='invert'
                    />
                    <p>
                        {props.replies ? props.replies : ''}
                    </p>
                </div>
                {/* <div className='flex gap-3 text-xl'>
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
                </div> */}
            </section>
        </main>
    )
}