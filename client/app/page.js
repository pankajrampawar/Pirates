'use client'
import Link from "next/link";
import { keaniaOne, happyMonkey } from "./fonts";
import React, { useEffect } from "react";
import { checkAndGetUser } from "./actions";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const checkAndGetUserAction = async () => {
      const response = await checkAndGetUser();
      
      if (!response) {
        return;
      }
      const userCopy = response.user;

      console.log(userCopy)
      
      if (response) {
        router.push('/home')
        localStorage.setItem('user', JSON.stringify(userCopy))
      }
      
      return
    };

    checkAndGetUserAction();
  }, [])

  return (
    <main className="h-full w-full bg-black text-white flex items-center flex-col gap-9 pt-20 px-7">
      <header className={`text-[36px] ${keaniaOne.className} tracking-wider`}>
        WhisEve
      </header>

      <section className={`${happyMonkey.className} tracking-wider text-center text-[20px]`}>
        <article className="flex flex-col gap-7">
         <p>
          Hey we are bunch of folks from VESIT wanting to make college life
          <span> </span> 
          <span className="underline underline-offset-8 decoration-red-500">more fun</span>
         </p>
          <p>
            SignUp and thank us later, enjoy your stay...
          </p>
        </article>   
      </section>

      <section className={`${keaniaOne.className} text-xl mt-4`}>
        <div className="flex gap-4">
          <Link href='/login'>
            <button 
              className="bg-white text-black p-3 w-[130px] rounded-3xl"
            >
              Login
            </button>
          </Link>
          
          <Link href="./signup/page1">
            <button 
              className="bg-white text-black p-3 w-[130px] rounded-3xl"
            >
              Signup
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
