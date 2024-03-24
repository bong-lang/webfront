import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="p-5 space-x-3">
			<Button>Say &apos;Hello&apos;</Button>
			<Button variant={"secondary"}>Say &apos;Hello&apos;</Button>
			<Button variant={"outline"}>Say &apos;Hello&apos;</Button>
			<Button variant={"ghost"}>Say &apos;Hello&apos;</Button>
			<Button variant={"link"}>Say &apos;Hello&apos;</Button>
			<Button variant={"destructive"}>Say &apos;Hello&apos;</Button>
		</main>
	);
}
