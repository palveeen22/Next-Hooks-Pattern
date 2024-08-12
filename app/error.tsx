'use client'

import { useEffect } from 'react'
import ErrorCard from "../components/ErrorCard"
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <ErrorCard />
            <Link href={"/recipes"}>
                <button className='bg-red-500 mx-auto py-3 px-16 rounded-full hover:bg-white hover:border-red-500 hover:border text-white font-light hover:text-red-500'>
                    ← {" "} Back
                </button>
            </Link>
        </div>
    )
}