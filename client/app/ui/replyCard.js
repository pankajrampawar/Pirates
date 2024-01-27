'use client'

import React, { useState, useEffect } from 'react';

export default function ReplyCard(props) {

    return (
        <div className='bg-surface flex flex-col rounded-l-2xl p-4 pb-1 pt-3'>
            <section className='pb-3 border-b border-gray-400'>
                <p>
                    {props.content}
                </p>
            </section>
            <section className='flex gap-3 justify-center pt-3'>
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
            </section>
        </div>
    )
}