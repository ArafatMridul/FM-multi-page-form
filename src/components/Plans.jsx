import { motion } from "motion/react";
import arcade from "/images/icon-arcade.svg";
import advanced from "/images/icon-advanced.svg";
import pro from "/images/icon-pro.svg";
import PlanType from "./PlanType";
import { twMerge } from "tailwind-merge";
import { useForm } from "../../context/FormContex";

const Plans = () => {
    const { type, dispatch } = useForm();
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="pos"
        >
            <h1 className="text-[1.5rem] lg:text-[2rem] font-bold text-p-b-3">
                Select your plan
            </h1>
            <p className="text-[1.125rem] text-n-g mt-1 tracking-tighter">
                You have the option of monthly or yearly billing.
            </p>
            <div className="mt-5 lg:mt-10 grid lg:grid-cols-3 gap-3.5 lg:gap-4">
                <PlanType icon={arcade} label="Arcade" price={9} />
                <PlanType icon={advanced} label="Advanced" price={12} />
                <PlanType icon={pro} label="Pro" price={15} />
            </div>
            <div className="flex items-center justify-center gap-6 bg-n-b-2 py-3 rounded-md mt-8">
                <p
                    className={twMerge(
                        "text-sm font-bold tra select-none",
                        type === "monthly" ? "text-p-b-3" : "text-n-g"
                    )}
                >
                    Monthly
                </p>
                <div
                    onClick={() =>
                        dispatch({
                            type: "setPaymentType",
                            payload: type === "monthly" ? "yearly" : "monthly",
                        })
                    }
                    className={twMerge(
                        "relative text-sm font-bold bg-p-b-3 py-2.5 px-5 rounded-full cursor-pointer"
                    )}
                >
                    <div
                        className={twMerge(
                            "absolute size-3 top-1/2 -translate-y-1/2 rounded-full bg-white tra",
                            type === "monthly"
                                ? "left-1"
                                : "left-full -translate-x-4"
                        )}
                    ></div>
                </div>
                <p
                    className={twMerge(
                        "text-sm font-bold tra select-none",
                        type === "monthly" ? "text-n-g" : "text-p-b-3"
                    )}
                >
                    Yearly
                </p>
            </div>
        </motion.div>
    );
};

export default Plans;
