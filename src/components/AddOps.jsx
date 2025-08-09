import React from "react";
import tick from "/images/icon-checkmark.svg";
import { useForm } from "../../context/FormContex";
import { twMerge } from "tailwind-merge";

const AddOps = ({ label, desc, price }) => {
    const { type, expenseAdd, dispatch } = useForm();
    const clicked = expenseAdd.some((item) => item.label === label);
    return (
        <div
            onClick={() =>
                dispatch({
                    type: "setAddOnsExp",
                    payload: { label, price },
                })
            }
            className={twMerge(
                "px-4 py-2.5 lg:py-4 lg:px-6 flex items-center gap-4 lg:gap-6 ring-1 ring-n-g rounded-md cursor-pointer",
                clicked && " ring-2 ring-p-p bg-n-b-2"
            )}
        >
            <div
                className={twMerge(
                    "size-5 ring-1 ring-n-g rounded-sm grid place-items-center cursor-pointer tra",
                    clicked && "bg-p-p"
                )}
            >
                <img src={tick} alt="tick icon" />
            </div>
            <div className="flex flex-1 items-center justify-between">
                <div>
                    <h2 className="text-[0.95rem] lg:text-[1rem] tracking-tighter lg:tracking-tight font-bold text-p-b-3">
                        {label}
                    </h2>
                    <p className="text-[0.75rem] lg:text-[0.9rem] tracking-tighter font-medium text-n-g">
                        {desc}
                    </p>
                </div>
                <div className="text-xs lg:text-sm text-p-p font-medium">
                    +${type === "monthly" ? price : price * 10}/{type === "monthly" ? "mo" : "yr"}
                </div>
            </div>
        </div>
    );
};

export default AddOps;
