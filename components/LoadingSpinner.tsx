"use client";
import Lottie from "lottie-react";
import loading from "../public/Loading.json";

const LoadingSpinner = () => {
    return (
        <div className="p-4 min-h-screen flex justify-center items-center">
            <Lottie animationData={loading} loop={true} />
        </div>
    );
};

export default LoadingSpinner;
