import React from "react";
import { twMerge } from "tailwind-merge";
import { useForm } from "../../context/FormContex";

const Option = ({ label, number }) => {
    const { selectedOption } = useForm();
    return (
        <div className="flex gap-4">
            <div
                className={twMerge(
                    "border-2 text-md border-n-b-2 text-n-b-2 rounded-full size-8.5 flex items-center justify-center shrink-0 tra",
                    selectedOption === number && "bg-n-b-2 text-p-b-3"
                )}
            >
                {number}
            </div>
            <div className="hidden lg:block">
                <div>
                    <h2 className="text-p-b-2 uppercase text-xs">
                        step {number}
                    </h2>
                </div>
                <div>
                    <p className="text-n-w font-medium uppercase text-sm tracking-widest">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Option;
