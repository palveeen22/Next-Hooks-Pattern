"use client";
import { Rating } from '@mui/material'
import React, { FormEvent, SetStateAction } from 'react'

type TProps = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
    newComment: string
    setNewComment: (value: SetStateAction<string>) => void
    rating: number
    setRating: (value: SetStateAction<number>) => void
    isDisabled: boolean
}

const ReviewForm = ({ handleSubmit, newComment, setNewComment, rating, setRating, isDisabled }: TProps) => {

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
                type="text"
                placeholder="Leave your review here"
                className="border border-gray-300 rounded-2xl w-full px-4 py-5 focus:border-red-500 focus:outline-none text-red-500"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue || 0);

                }}
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className={`${isDisabled ? "bg-gray-300" : "bg-red-500"} py-2 px-8 rounded-full`}
                    disabled={isDisabled}
                >
                    <p className="text-white font-light">Submit Review</p>
                </button>
            </div>
        </form>
    )
}

export default ReviewForm