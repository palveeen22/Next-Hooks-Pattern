import { MotionDiv } from "~/components/MotionClient";
import { cardVariants } from "~/config/animation";
import { TCuisine, TPropsFormRecipe } from "~/types/types";

const RecipeForm = ({
	handleSubmit,
	formData,
	handleChange,
	cuisines,
	difficulties,
	diets,
	file,
	handleImageChange,
	isDisabled,
}: TPropsFormRecipe) => {
	return (
		<form onSubmit={handleSubmit}>
			<MotionDiv
				className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg"
				variants={cardVariants}
			>
				<h1 className="text-black font-light text-3xl">
					Create your own receipe here
				</h1>
				<label className="block mb-4 mt-4">
					<span className="text-gray-700">Receipe Title</span>
					<input
						type="text"
						name="name"
						placeholder="Receipe name"
						value={formData?.name}
						onChange={handleChange}
						required
						className="mt-1 block w-full p-4 rounded-full focus:ring-red-500 focus:border-red-500 text-red-500 border-gray-300 focus:border focus:outline-none"
					/>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Description</span>
					<textarea
						name="instructions"
						value={formData?.instructions}
						onChange={handleChange}
						placeholder="Description how to cook with your receipe..."
						required
						className="mt-1 block w-full p-4 rounded-full focus:ring-red-500 focus:border-red-500 border-gray-300 text-red-500 focus:border focus:outline-none"
					/>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Main Ingredients</span>
					<textarea
						name="ingredients"
						value={formData?.ingredients}
						onChange={handleChange}
						required
						placeholder="Write your ingredient tomato, pasta, baccon ..."
						className="mt-1 block w-full p-4 rounded-full focus:ring-red-500 focus:border-red-500 text-red-500 border-gray-300 focus:border focus:outline-none"
					/>
				</label>
			</MotionDiv>
			<MotionDiv
				className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg  mt-8"
				variants={cardVariants}
			>
				<h1 className="text-black font-light text-3xl">
					Category and Attributes
				</h1>
				<label className="block mb-4 mt-4">
					<span className="text-gray-700">Receipe Category</span>
					<select
						name="cuisineId"
						value={formData?.cuisineId}
						onChange={handleChange}
						required
						className="form-input mt-1 block w-full p-4 rounded-full"
					>
						<option value="">Select Receipe Category</option>
						{cuisines?.map((cuisine: TCuisine) => (
							<option key={cuisine?.id} value={cuisine?.id}>
								{cuisine?.name}
							</option>
						))}
					</select>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Receipe level for cook?</span>
					<select
						name="difficultyId"
						value={formData?.difficultyId}
						onChange={handleChange}
						required
						className="form-input mt-1 block w-full p-4 rounded-full"
					>
						<option value="">Select level of difficulty</option>
						{difficulties?.map((difficulty: TCuisine) => (
							<option key={difficulty?.id} value={difficulty?.id}>
								{difficulty?.name}
							</option>
						))}
					</select>
				</label>
				<label className="block mb-4">
					<span className="text-gray-700">Diet Tags</span>
					<select
						name="dietId"
						value={formData?.dietId}
						onChange={handleChange}
						required
						className="form-input mt-1 block w-full p-4 rounded-full"
					>
						<option value="">Select Tags for diet</option>
						{diets?.map((diet: TCuisine) => (
							<option key={diet?.id} value={diet?.id}>
								{diet?.name}
							</option>
						))}
					</select>
				</label>
			</MotionDiv>
			<MotionDiv
				className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg mt-8"
				variants={cardVariants}
			>
				<h1 className="text-black font-light text-3xl">Image of recipe</h1>
				<div className="p-4 rounded-xl bg-white mt-8 h-32 flex justify-center items-center">
					<label className="flex flex-col items-center px-4 py-1 bg-white text-red-500 rounded-full shadow-lg tracking-wide  border border-red-500 cursor-pointer">
						<span className="text-base leading-normal">
							{file ? "Added ✔" : "Upload Image "}
						</span>
						<input
							type="file"
							className="hidden"
							onChange={handleImageChange}
							accept="image/*"
						/>
					</label>
				</div>
				<button
					type="submit"
					className="bg-red-500 mx-auto py-3 px-16 rounded-full flex justify-end mt-6 items-end"
					disabled={isDisabled}
				>
					<p className="text-white font-light">Publish</p>
				</button>
			</MotionDiv>
		</form>
	);
};

export default RecipeForm;
