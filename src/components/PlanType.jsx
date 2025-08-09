import { useForm } from "../../context/FormContex";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const PlanType = ({ icon, label, price }) => {
    const { type, expensePlan, dispatch } = useForm();
    return (
        <div
            onClick={() =>
                dispatch({
                    type: "setExpPlan",
                    payload: { name: label, price: price },
                })
            }
            className={twMerge(
                "p-4 ring-1 grid grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr] gap-4 lg:gap-11 rounded-md cursor-pointer select-none tra",
                expensePlan.name === label
                    ? "ring-2 ring-p-p bg-n-b-2"
                    : "ring-n-g"
            )}
        >
            <div className="grid grid-cols-1 place-items-center lg:row-start-1 lg:place-items-start">
                <img src={icon} alt={label} />
            </div>
            <div className="grid lg:row-start-2">
                <h2 className="text-[1rem] text-p-b-3 font-bold">{label}</h2>
                <p className="text-[0.9rem] leading-tight text-n-g font-medium">
                    ${type === "monthly" ? price : price * 10}/
                    {type === "monthly" ? "mo" : "yr"}
                </p>

                <AnimatePresence mode="wait">
                    {type === "yearly" && (
                        <motion.p
                            key="free-text"
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-[0.9rem] leading-6 text-p-b-3 font-medium overflow-hidden lg:w-[12ch]"
                        >
                            2 months free
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PlanType;
