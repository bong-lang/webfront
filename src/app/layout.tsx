import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bong | Bengali Programming Language",
	description: "Bong is a web based Bengali programming language for learning",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cabin.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<div className="fixed bottom-5 right-5">
						<ModeToggle />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
