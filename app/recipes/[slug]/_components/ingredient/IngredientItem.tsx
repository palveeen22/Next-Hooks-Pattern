import { TIngredient } from '~/types/types'

const IngredientItem = ({ ingredient }: { ingredient: TIngredient }) => {
    return (
        <li className="text-base font-light text-black ml-4">
            {ingredient}
        </li>
    )
}

export default IngredientItem