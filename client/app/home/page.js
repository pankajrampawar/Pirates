'use client'

import React, { useState, useEffect, Suspense } from 'react'
import MessageCard from "../ui/messageCard"
import { getCrafts } from '../actions';
import { useRouter } from 'next/navigation';
import { checkAndGetUser } from '../actions';
import { HomeSkeleton } from '../ui/skeletons';


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
                
            if (response.status) {
              const userCopy = response.user;    
              if (userCopy) delete userCopy.password

              localStorage.setItem('user', JSON.stringify(userCopy))

              setUser(userCopy);

              getAllCraft();

              return;
            } else if (!response.status) {
                router.push('/');
                return;
            }

            router.push('/')
            return;
        };
        
        const checkUser = () => {
            const userToParse = localStorage.getItem('user')
            let user;
            if(userToParse) {
                user = JSON.parse(userToParse)
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
            <Suspense fallback={<HomeSkeleton/>}>
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
            </Suspense>
        </div>
    )
}