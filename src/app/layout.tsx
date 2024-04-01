import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Header from "./header";
import { cn } from "@/lib/utils";

const cabin = Cabin({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Bong | Bengali Programming Learning Language",
	description:
		"Bong is a web based Bengali Programming Language for learning programming.",
	icons: "/logo.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(cabin.className, "overflow-x-hidden")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<div className="fixed bottom-5 right-5">
						<ModeToggle />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
