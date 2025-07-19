import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata = {
    title: "Portfolio-Abhinav",
    description: " ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden scroll-smooth`}
        >
        {/* ✅ Cloudflare Analytics Script placed just inside <body> */}
        <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "07b96f409d8949f4a11483e27783737b"}'
            strategy="afterInteractive"
        />
        {children}
        </body>
        </html>
    );
}
