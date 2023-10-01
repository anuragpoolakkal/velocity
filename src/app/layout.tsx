import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Velocity",
	description: "Builder.io Velocity AI Event Launch Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/png" href="/builderio.png"></link>
			</head>
			<body>{children}</body>
		</html>
	);
}
