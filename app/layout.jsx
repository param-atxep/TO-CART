import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "ToCart - Shop smarter | ToCart",
    description: "ToCart - Modern multi-vendor eCommerce platform by Param Shelke.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                                <StoreProvider>
                                        <Toaster />
                                        {children}
                                </StoreProvider>
            </body>
        </html>
    );
}
