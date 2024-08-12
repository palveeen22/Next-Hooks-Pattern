import Link from 'next/link'
import React from 'react'
import NotFound from '~/components/NotFound'

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <NotFound />
            <Link href={"/recipes"}>
                <button className='bg-red-500 mx-auto py-3 px-16 rounded-full hover:bg-white hover:border-red-500 hover:border text-white font-light hover:text-red-500'>
                    ← {" "} Back
                </button>
            </Link>
        </div>
    )
}

export default NotFoundPage