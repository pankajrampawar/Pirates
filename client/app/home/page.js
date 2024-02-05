'use client'

import React, { useState, useEffect } from 'react'
import MessageCard from "../ui/messageCard"
import { getCrafts } from '../actions';
import { useRouter } from 'next/navigation';
import { checkAndGetUser } from '../actions';

export default function Home() {

    const router = useRouter();

    const [crafts, setCrafts] = useState(['']);
    const [user, setUser] = useState('');

    useEffect(()=>{
        const getAllCraft = async() => {
            const messages = await getCrafts();

            setCrafts(messages);
        }

        // const checkAndGetUserAction = async () => {
        //     const response = await checkAndGetUser();
            
        //     if (response.status) {
        //       localStorage.setItem('user', JSON.stringify(response.user))

        //       setUser(response.user);

             
        //     } else if (!response.status) {
        //         router.push('/login');
        //     }
            
        //     return;
        // };
        
        // const checkUser = () => {
        //     const user = JSON.parse(localStorage.getItem('user'))
            
        //     if (user) {
        //         setUser(user);

        //         return; 
        //     }
            
        //     checkAndGetUserAction()
        //     return;
        // }
        
        // checkUser();

        getAllCraft();
    }, []);

    return (
        <div className="text-white">
            <div>
                { crafts &&
                    crafts.slice().reverse().map((craft) => {
                        return(
                            <MessageCard
                                key={craft._id}
                                content={craft.content}
                                id={craft._id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}