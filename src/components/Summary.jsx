import { motion } from "motion/react";
import React from "react";
import { useForm } from "../../context/FormContex";

const Summary = () => {
    const { type, expensePlan, expenseAdd, dispatch } = useForm();
    const total =
        type === "monthly"
            ? expensePlan.price +
              expenseAdd.reduce((acc, item) => acc + item.price, 0)
            : expensePlan.price * 10 +
              expenseAdd.reduce((acc, item) => acc + item.price, 0) * 10;
    const { name, price: exP } = expensePlan;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="pos"
        >
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-p-b-3 lg:tracking-tighter">
                Finishing Up
            </h1>
            <p className="font-medium text-n-g mt-1 lg:tracking-tight">
                Double-check everything looks OK before confirming.
            </p>

            <div className="px-2 py-5 mt-4 bg-n-b-2 rounded-md">
                <div className="flex items-center justify-between mx-3 border-b-1 border-n-g/50">
                    <div className="text-p-b-3 pb-3">
                        <p className="capitalize font-bold text-sm">
                            {name} ({type})
                        </p>
                        <p
                            onClick={() =>
                                dispatch({ type: "selectOption", payload: 2 })
                            }
                            className="underline text-n-g text-sm cursor-pointer"
                        >
                            Change
                        </p>
                    </div>
                    <p className="text-p-b-3 text-sm font-bold">
                        ${type === "monthly" ? exP : exP * 10}/
                        {type === "monthly" ? "mo" : "yr"}
                    </p>
                </div>
                <div className="grid gap-3 px-3 pt-3">
                    {expenseAdd.map((expense, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <p className="text-sm text-n-g font-bold">
                                {expense.label}
                            </p>
                            <p className="text-sm text-p-b-3 font-medium">
                                +$
                                {type === "monthly"
                                    ? expense.price
                                    : expense.price * 10}
                                /{type === "monthly" ? "mo" : "yr"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between px-3 pt-6">
                <p className="text-n-g font-medium">
                    Total (per {type === "monthly" ? "month" : "year"})
                </p>
                <p className="text text-p-p font-bold">
                    +${total}/{type === "monthly" ? "mo" : "yr"}
                </p>
            </div>
        </motion.div>
    );
};

export default Summary;
