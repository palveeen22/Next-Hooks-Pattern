import React, { ReactNode } from "react";
import Footer from "~/components/Footer";
import LoadToTop from "~/components/LoadToTop";
import Navbar from "~/components/Navbar";

export default function Recipelayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <LoadToTop />
            <Footer />
        </>
    );
}
