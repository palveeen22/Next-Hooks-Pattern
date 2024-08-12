import React from 'react'
import { TComment } from '~/types/types'
import { MotionDiv } from '~/components/MotionClient'
import { Rating } from '@mui/material'
import { cardVariants } from '~/config/animation'

type TProps = {
    review: TComment,
}

const ReviewCard = ({ review }: TProps) => {

    return (
        <MotionDiv
            variants={cardVariants}
            className="border border-gray-300 rounded-xl p-4 mb-4"
        >
            <p className="text-base font-light text-black">
                {review?.comment}
            </p>
            <Rating name="simple-controlled" value={review?.rating} readOnly />
            <p className="text-sm text-gray-500">
                {new Date(review?.date).toLocaleDateString()}
            </p>
        </MotionDiv>
    )
}

export default ReviewCard