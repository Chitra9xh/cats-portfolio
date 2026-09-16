import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Chitransh's portfolio`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
	<body>
	{children}
  	<Footer />
	</body>
    </html>
  );
}
