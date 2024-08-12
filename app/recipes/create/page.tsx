"use client";
import Link from "next/link";
import { useCreateRecipe } from "./_hooks/useCreateRecipe";
import { MotionSection } from "~/components/MotionClient";
import RecipeForm from "./_components/RecipeForm";
import { sectionVariants } from "~/config/animation";

const CreateRecipePage = () => {
    const {
        formErrors,
        handleSubmit,
        formData,
        handleChange,
        cuisines,
        difficulties,
        diets,
        handleImageChange,
        file,
        isDisabled,
    } = useCreateRecipe();

    return (
        <MotionSection
            className="p-4 min-h-screen"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <Link href="/recipes">
                <h3 className="text-black text-2xl tracking-wide font-normal text-end hover:underline m-4">
                    ← Back
                </h3>
            </Link>
            {formErrors?.length > 0 && (
                <div className="text-red-500 mt-4">
                    <ul>
                        {formErrors?.map((error, index) => (
                            <li key={index}>{error?.message}</li>
                        ))}
                    </ul>
                </div>
            )}
            <RecipeForm
                handleSubmit={handleSubmit}
                formData={formData}
                handleChange={handleChange}
                cuisines={cuisines}
                difficulties={difficulties}
                diets={diets}
                file={file}
                handleImageChange={handleImageChange}
                isDisabled={isDisabled}
            />
        </MotionSection>
    );
};

export default CreateRecipePage;
