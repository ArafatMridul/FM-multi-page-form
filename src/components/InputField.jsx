import React from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";

const InputField = ({ type, label, placeholder, onchange, value, error }) => {
    return (
        <div className="w-full flex flex-col">
            <p className="text-p-b-3 text-sm font-medium flex items-center justify-between">
                {label}
                <AnimatePresence>
                    {error && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={twMerge("text-p-r text-sm font-bold")}
                        >
                            This field is required
                        </motion.span>
                    )}
                </AnimatePresence>
            </p>
            <input
                value={value}
                onChange={onchange}
                type={type}
                placeholder={placeholder}
                className={twMerge(
                    "ring-1 ring-n-p px-4 py-2 lg:py-2.5 rounded-sm lg:rounded-m placeholder:text-n-g md:mt-2 focus:outline-0 focus:ring-1 focus:ring-p-p tra text-p-b-3 lg:text-md font-medium",
                    error && "ring-p-r focus:ring-p-r"
                )}
            />
        </div>
    );
};

export default InputField;
