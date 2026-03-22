'use client'
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientRoot from "@/components/ClientRoot";

export default function PublicLayout({ children }) {

    return (
        <>
            <Banner />
            <Navbar />
            <ClientRoot>
                {children}
            </ClientRoot>
            <Footer />
        </>
    );
}
