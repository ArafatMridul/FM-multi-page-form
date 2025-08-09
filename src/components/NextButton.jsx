import React, { useState } from "react";
import { useForm } from "../../context/FormContex";
import { twMerge } from "tailwind-merge";

const NextButton = () => {
    const { handleSubmit, expensePlan, selectedOption, expenseAdd, dispatch } =
        useForm();
    const [clicked, setClicked] = useState(false);
    return (
        <div
            onMouseDown={() => setClicked(true)}
            onMouseUp={() => setClicked(false)}
            onMouseLeave={() => setClicked(false)}
            onClick={() =>
                selectedOption === 1
                    ? handleSubmit()
                    : selectedOption < 4
                    ? dispatch({
                          type: "selectOption",
                          payload: selectedOption + 1,
                      })
                    : selectedOption === 4
                    ? dispatch({ type: "confirm" })
                    : ""
            }
            className={twMerge(
                "bg-p-b-3 text-sm lg:text-[1rem] text-n-b-2 w-fit  rounded-sm lg:rounded-lg px-4 lg:px-6.5 py-2.5 lg:py-3 cursor-pointer hover:bg-p-b-3/90 tranistion-all duration-200 select-none",
                clicked && "scale-95",
                selectedOption === 2 && Object.keys(expensePlan).length === 0
                    ? "opacity-0 pointer-events-none"
                    : selectedOption === 3 && expenseAdd.length === 0
                    ? "opacity-0 pointer-events-none"
                    : "",
                selectedOption === 4 && "bg-p-p text-n-b-1 hover:bg-p-p/80 px-6"
            )}
        >
            {selectedOption === 4 ? "Confirm" : "Next Step"}
        </div>
    );
};

export default NextButton;
