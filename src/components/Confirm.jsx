import React from "react";
import { motion } from "motion/react";
import ty from "/images/icon-thank-you.svg";

const Confirm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="pos flex flex-col items-center lg:justify-center"
        >
            <img src={ty} alt="thankyou" className="scale-70 lg:scale-100 pt-10 lg:pt-14" />
            <h1 className="text-[1.65rem] lg:text-[2rem] font-bold text-p-b-3 mt-1 lg:mt-8 tracking-tight">Thank you!</h1>
            <p className="text-center text-[1rem] lg:text-[1.03rem] leading-[1.5] lg:leading-[1.4] text-n-g mt-1 pb-14 lg:mt-4">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </motion.div>
    );
};

export default Confirm;
