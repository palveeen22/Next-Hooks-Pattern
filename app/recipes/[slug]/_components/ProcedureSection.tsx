import React from 'react'
import { MotionDiv } from '~/components/MotionClient'
import Heading from './Heading';
import { cardVariants } from '~/config/animation';

const ProcedureSection = ({ instructions = "" }: { instructions: string }) => {

    const instructionSteps = instructions
        .split(/[,.]/)
        .map((step, index) => (
            <li key={index} className="text-base font-light text-black ml-4">
                {step}
            </li>
        ));

    return (
        <MotionDiv
            variants={cardVariants}
        >
            <Heading text="Procedure" />
            <ul>{instructionSteps}</ul>
        </MotionDiv>
    )
}
export default ProcedureSection