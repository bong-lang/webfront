import Image from "next/image";

export default function Home() {
	return (
		<main className="p-5 space-x-3">
			<div className="">
				<Image
					src="/logo.svg"
					alt="Logo"
					width={512}
					height={512}
					priority
					className="mx-auto my-32 h-auto max-w-[200px]"
				/>
			</div>
		</main>
	);
}
