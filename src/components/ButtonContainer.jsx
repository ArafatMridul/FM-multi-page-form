import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

const ButtonContainer = () => {
    return (
        <div className="absolute flex items-center justify-end -bottom-13 md:-bottom-16 left-4 right-4 md:left-16 md:right-16 lg:bottom-4 lg:right-21 z-40">
            <BackButton />
            <NextButton />
        </div>
    );
};

export default ButtonContainer;
