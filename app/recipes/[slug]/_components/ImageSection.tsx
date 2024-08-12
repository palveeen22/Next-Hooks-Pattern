import Heading from './Heading'
import { MotionDiv } from '~/components/MotionClient'
import Image from 'next/image';
import { TRecipe } from '~/types/types';
import { containerVariants } from '~/config/animation';

type TPropsCardImage = {
    recipe: TRecipe
}

const ImageSection = ({ recipe }: TPropsCardImage) => {

    return (
        <>
            <Heading text="Recipe Image" />
            <MotionDiv className="flex justify-center w-full"
                variants={containerVariants}
            >
                <div className="relative w-full h-[300px] lg:h-[600px]">
                    <Image
                        src={
                            recipe?.image ||
                            "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
                        }
                        alt={`${recipe?.name} recipe`}
                        fill
                        className="rounded-3xl object-cover"
                        priority
                    />
                </div>
            </MotionDiv>
        </>
    )
}

export default ImageSection