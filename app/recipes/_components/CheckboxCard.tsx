import React from "react";
import { TPropsCheckboxCard } from "~/types/types";

const CheckboxCard = ({
	text,
	data,
	selected,
	handleChange,
}: TPropsCheckboxCard) => {
	return (
		<div className="mt-4">
			<h2 className="text-black font-light text-xl">{text}</h2>
			{data?.map((diet) => (
				<div key={diet.id} className="mt-2 flex justify-start items-center">
					<input
						type="checkbox"
						id={`diet-${diet.id}`}
						value={diet.id}
						onChange={(e) => handleChange(e.target.value)}
						checked={selected.includes(diet.id.toString())}
						className="peer mr-2 appearance-none w-5 h-5 rounded-sm border border-red-500 focus:outline-none z-10"
					/>
					{selected.includes(diet.id.toString()) && (
						<svg
							viewBox="0 0 14 14"
							fill="none"
							className="w-5 h-5 absolute invisible peer-checked:visible stroke-red-500"
						>
							<path
								d="M3 8L6 11L11 3.5"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
					<label htmlFor={`diet-${diet.id}`} className="text-black">
						{diet.name}
					</label>
				</div>
			))}
		</div>
	);
};

export default CheckboxCard;
