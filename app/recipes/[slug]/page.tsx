"use client";
import Link from "next/link";
import { MotionSection } from "~/components/MotionClient";
import Heading from "./_components/Heading";
import IngredientSection from "./_components/ingredient/IngredientSection";
import ImageSection from "./_components/ImageSection";
import useReceipeDetails from "./_hooks/useReceipeDetails";
import useCreateComment from "./_hooks/useCreateComment";
import ReviewForm from "./_components/review/ReviewForm";
import ReviewCard from "./_components/review/ReviewCard";
import ProcedureSection from "./_components/ProcedureSection";
import { sectionVariants } from "~/config/animation";
import ReviewNotAvailable from "./_components/review/ReviewNotAvailable";

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
	const {
		formStatus,
		handleSubmit,
		isDisabled,
		newComment,
		rating,
		setRating,
		setNewComment,
	} = useCreateComment(slug);

	const { recipeComments, recipe } = useReceipeDetails(slug);

	return (
		<MotionSection
			className="w-full min-h-screen flex flex-col p-8 gap-8"
			variants={sectionVariants}
			initial="hidden"
			animate="visible"
		>
			<Link href="/recipes">
				<h3 className="text-black text-2xl tracking-wide font-normal text-end hover:underline">
					← Back
				</h3>
			</Link>

			{/* Display Image Recipe comments */}
			<ImageSection recipe={recipe} />

			{/* Display existing ingredients */}
			<IngredientSection ingredients={recipe?.ingredients} />

			{/* Display existing Procedure */}
			<ProcedureSection instructions={recipe?.instructions} />

			{/* Display existing comments */}
			<Heading text=" User Reviews" />
			{recipeComments && recipeComments.length > 0 ? (
				<div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{recipeComments.map((comment, index) => (
						<ReviewCard key={index} review={comment} />
					))}
				</div>
			) : (
				<ReviewNotAvailable />
			)}

			{/* Form create comments */}
			{formStatus === "success" && (
				<p className="text-green-500">Review submitted successfully!</p>
			)}
			{formStatus === "error" && (
				<p className="text-red-500">
					Failed to submit review. Please try again.
				</p>
			)}
			<ReviewForm
				handleSubmit={handleSubmit}
				newComment={newComment}
				setNewComment={setNewComment}
				rating={rating}
				setRating={setRating}
				isDisabled={isDisabled}
			/>
		</MotionSection>
	);
};

export default Page;
