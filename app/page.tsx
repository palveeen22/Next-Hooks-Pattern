import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mainpage } from "../constants";

const page = () => {
	return (
		<main className="w-full bg-white flex flex-col-reverse md:flex-row justify-around gap-28 min-h-screen p-16">
			<div className="hidden md:flex  bg-gray-50  justify-center items-center p-8 rounded-3xl">
				<Image
					src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg"
					alt="Delicious food"
					width={500}
					height={1000}
					priority
					className="rounded-3xl"
				/>
			</div>
			<div className="flex flex-col justify-center items-center gap-4">
				<Image
					src="https://i.pinimg.com/1200x/f8/76/7a/f8767a7924fef6f583c3853be9bce373.jpg"
					alt="Delicious food"
					width={150}
					height={150}
					priority
					className="rounded-3xl"
				/>
				<h3 className="text-black"></h3>
				<span className="text-center">
					<h1 className="text-black text-7xl tracking-wide font-normal">
						{mainpage.title}
					</h1>
					<h6 className="text-black font-light text-3xl">{mainpage.desc}</h6>
				</span>
				<Link href={"/recipes"}>
					<button className="bg-red-500 mx-auto py-3 px-16 rounded-full hover:bg-white hover:border-red-500 hover:border text-white font-light hover:text-red-500">
						{mainpage.button}
					</button>
				</Link>
			</div>
		</main>
	);
};

export default page;
