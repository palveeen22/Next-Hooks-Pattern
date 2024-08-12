import React from 'react'

const ReviewNotAvailable = () => {
    return (
        <div className='flex flex-col justify-center items-center text-black'>
            <h3 className='text-3xl'>😔</h3>
            <p className='text-lg'>There is no Review yet,{"  "}Please be first..</p>
            <h3 className='text-3xl mt-4'>⬇️</h3>
        </div>
    )
}

export default ReviewNotAvailable