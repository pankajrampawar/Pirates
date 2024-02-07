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

        const checkAndGetUserAction = async () => {
            const response = await checkAndGetUser();
                
            const userCopy = response.user;
            delete userCopy.password

            if (response.status) {
              localStorage.setItem('user', JSON.stringify(userCopy))

              setUser(userCopy);

              getAllCraft();

              return;
            } else if (!response.status) {
                router.push('/login');
                return;
            }
            return;
        };
        
        const checkUser = () => {
            const user = JSON.parse(localStorage.getItem('user'))
            
            if (user) {
                setUser(user);
                getAllCraft();
                return; 
            }
            
            checkAndGetUserAction()
            return;
        }
        
        checkUser();
    }, []);

    return (
        <div className="text-white">
            <div>
                { crafts &&
                    crafts.slice().reverse().map((craft) => {
                        return(
                            <MessageCard
                                key={ craft._id }
                                content={ craft.content }
                                id={ craft._id }
                                year = { craft.year &&  craft.year }
                                branch = { craft.branch && craft.branch }
                                replies = { craft.responses ? craft.responses.length : 0 }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}