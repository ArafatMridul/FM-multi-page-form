import React from "react";
import { motion } from "motion/react";
import AddOps from "./AddOps";

const AddsOn = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="pos"
        >
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-p-b-3 lg:tracking-tighter">
                Pick add-ons
            </h1>
            <p className="font-medium text-n-g mt-1 lg:tracking-tight">
                Add-ons help enhance your gaming experience.
            </p>
            <div className="mt-6 lg:mt-9 grid gap-4">
                <AddOps
                    label="Online Service"
                    desc="Access to multiplayer games"
                    price={1}
                />
                <AddOps
                    label="Larger Storage"
                    desc="Extra 1TB of cloud save"
                    price={2}
                />
                <AddOps
                    label="Customizable profile"
                    desc="Custom theme on your profile"
                    price={3}
                />
            </div>
        </motion.div>
    );
};

export default AddsOn;
