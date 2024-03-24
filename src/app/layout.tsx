import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Header from "./header";

const cabin = Cabin({ subsets: ["latin"] });

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
			<body className={cabin.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
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
