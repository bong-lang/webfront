import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

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
			<body className={cabin.className}>{children}</body>
		</html>
	);
}
