import { TIngredient } from '~/types/types'
import IngredientItem from './IngredientItem'

const IngredientList = ({ ingredients = [] }: { ingredients: TIngredient[] }) => {
    return (
        <ul>
            {ingredients?.map((ingredient, index) => (
                <IngredientItem
                    key={index}
                    ingredient={ingredient}
                />
            ))}
        </ul>
    )
}

export default IngredientList