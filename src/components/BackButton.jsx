import React from "react";
import { useForm } from "../../context/FormContex";
import { twMerge } from "tailwind-merge";

const BackButton = () => {
    const { selectedOption, dispatch } = useForm();
    return (
        <div
            onClick={() =>
                dispatch({
                    type: "selectOption",
                    payload: selectedOption >= 1 && selectedOption - 1,
                })
            }
            className={twMerge(
                "mr-auto text-sm lg:text-lg font-medium text-n-g px-4 lg:px-6.5 py-2.5 lg:py-3 cursor-pointer tra hover:text-p-b-3",
                selectedOption === 1 && "opacity-0 pointer-events-none"
            )}
        >
            <p>Go Back</p>
        </div>
    );
};

export default BackButton;
