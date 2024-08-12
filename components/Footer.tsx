import Link from "next/link";
import { footerItem, footerTitle } from "~/constants/index";

const Footer = () => {
	return (
		<footer className="px-10 py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200">
			<div className="flex flex-col justify-between gap-2 md:gap-6">
				<span>
					<Link href={"/recipes"}>
						<h3 className="text-black text-2xl tracking-wide font-normal hover:underline cursor-pointer">
							{footerTitle?.title}
						</h3>
					</Link>
					<h6 className="text-black font-light text-sm">{footerTitle?.desc}</h6>
				</span>
				<h3 className="text-black font-light text-sm">
					{footerTitle?.icon} &copy;{" "}
				</h3>
			</div>
			<div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
				{footerItem?.map((item, i) => {
					return (
						<p
							key={i}
							className="text-black text-md my-2 tracking-wide cursor-pointer hover:underline"
						>
							{item.title}
						</p>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
