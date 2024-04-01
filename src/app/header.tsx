"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const tutorials: { title: string; href: string; description: string }[] = [
	{
		title: "C - Programming Language",
		href: "/tutorials/c",
		description:
			"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
	},
	{
		title: "C++ - Programming Language",
		href: "/tutorials/cpp",
		description:
			"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'.",
	},
	{
		title: "Python - Programming Language",
		href: "/tutorials/python",
		description:
			"Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
	},
	{
		title: "Java - Programming Language",
		href: "/tutorials/java",
		description:
			"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
	},
	{
		title: "JavaScript - Programming Language",
		href: "/tutorials/javascript",
		description:
			"JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language that conforms to the ECMAScript specification.",
	},
	{
		title: "HTML - Markup Language",
		href: "/tutorials/html",
		description:
			"HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
	},
];

export default function Header() {
	return (
		<header className="w-screen border-b sticky top-0 backdrop-blur-2xl transition-colors duration-500">
			<section className="flex flex-row items-center justify-between gap-10 px-9 py-2 max-w-6xl mx-auto">
				<Link
					href="/"
					passHref
				>
					<Image
						src="/logo.svg"
						alt="Logo"
						width={36}
						height={36}
						priority
						className="h-9 w-9 min-w-9"
					/>
					<span className="text-lg font-medium sr-only">Bong Lang</span>
				</Link>
				<NavBar />
				<div className="flex-1" />
				<section className="flex flex-row items-center justify-center gap-2">
					<Link
						href={"https://github.com/bong-lang/"}
						target="_blank"
						passHref
					>
						<Button
							size={"icon"}
							variant={"outline"}
						>
							<GitHubLogoIcon className="h-5 w-5" />
						</Button>
					</Link>
					<Button
						size={"sm"}
						className="font-bold"
					>
						Join Now
					</Button>
				</section>
			</section>
		</header>
	);
}

function NavBar() {
	return (
		<NavigationMenu className="hidden md:inline-flex">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Getting started
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<Image
											src="/logo.svg"
											alt="Logo"
											width={100}
											height={100}
											priority
											className="h-auto w-24"
										/>
										<div className="mb-2 mt-4 text-lg font-medium">
											Bong - বং
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Beautifully designed & developed Bengali Programming
											Learning Platform
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem
								href="/docs"
								title="Introduction"
							>
								An overview of Bong and how to get started.
							</ListItem>
							<ListItem
								href="/docs/bong-lang"
								title="Bong Lang"
							>
								An overview of Bong Lang and how to get started.
							</ListItem>
							<ListItem
								href="/docs/tutorial"
								title="Tutorial"
							>
								Step-by-step guide to learn Bong Lang.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Tutorials
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{tutorials.map((tutorial) => (
								<ListItem
									key={tutorial.title}
									title={tutorial.title}
									href={tutorial.href}
								>
									{tutorial.description}
								</ListItem>
							))}
						</ul>
						<div className="flex flex-row items-center justify-center mb-4">
							<Link
								href="/tutorials"
								passHref
							>
								<Button
									size={"sm"}
									variant={"link"}
								>
									See all Tutorials
								</Button>
							</Link>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
