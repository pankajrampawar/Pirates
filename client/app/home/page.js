'use client'

import MessageCard from "../ui/messageCard"

export default function Home() {
    return (
        <div className="text-white">
            <div>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
            </div>
        </div>
    )
}