"use client"
import React, { useState, useEffect } from "react";

const LoadToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-5 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-red-500 text-white rounded-full p-1 h-12 w-12 text-2xl transition-opacity duration-300 transform hover:opacity-70 hover:scale-110"
                >
                    &#8679;
                </button>
            )}
        </div>
    );
};

export default LoadToTop;
