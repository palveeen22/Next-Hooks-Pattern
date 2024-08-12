import React from 'react'

const ErrorCard = () => {
    return (
        <div className="md:col-span-2 lg:col-span-3 flex justify-center items-center my-20">
            <span className='flex flex-col justify-center items-center text-center'>
                <p className='text-5xl'>🫣🫣</p>
                <p className="text-gray-500 text-5xl">Something went wrong....</p>
            </span>
        </div>
    )
}

export default ErrorCard