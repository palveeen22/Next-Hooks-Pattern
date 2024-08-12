import { MotionDiv } from '~/components/MotionClient'
import Heading from '../Heading';
import IngredientList from './IngredientList';
import { TIngredient } from '~/types/types';
import { cardVariants } from '~/config/animation';

const IngredientSection = ({ ingredients = [] }: { ingredients: TIngredient[] }) => {
    return (
        <MotionDiv
            variants={cardVariants}
        >
            <Heading text="Ingredients" />
            <IngredientList ingredients={ingredients} />
        </MotionDiv>
    )
}

export default IngredientSection