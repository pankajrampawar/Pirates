
import Link from "next/link"
import { happyMonkey } from "../fonts"

export default function MessageClickedCard(props) {
    return (
        <main className='flex flex-col text-lg bg-surface py-3 gap-3 px-4 my-2'>
        <Link href={`/home/${props.id}`}>
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
                    {props.content}
                </p>
            </section>

        </Link>
        
        <section className='flex justify-center items-center pt-2'>
            <div className='flex gap-4 text-xl'>
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