import React from "react";
import InputField from "./InputField";
import { useForm } from "../../context/FormContex";
import { motion } from "motion/react";

const PersonalInfo = () => {
    const { name, phone, email, errorName, errorEmail, errorPhone, dispatch } =
        useForm();
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="pos"
        >
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-p-b-3 lg:tracking-tighter">
                Personal info
            </h1>
            <p className="font-medium text-n-g mt-1 lg:tracking-tight">
                Please provide your name, email address, and phone number.
            </p>
            <div className="mt-4 lg:mt-8 grid gap-4 lg:gap-6">
                <InputField
                    type="text"
                    label="Name"
                    value={name}
                    error={errorName}
                    onchange={(e) =>
                        dispatch({ type: "setName", payload: e.target.value })
                    }
                    placeholder="e.g. Stephen King"
                />
                <InputField
                    type="email"
                    value={email}
                    error={errorEmail}
                    onchange={(e) =>
                        dispatch({ type: "setEmail", payload: e.target.value })
                    }
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                />
                <InputField
                    type="text"
                    value={phone}
                    error={errorPhone}
                    onchange={(e) =>
                        dispatch({ type: "setPhone", payload: e.target.value })
                    }
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </motion.div>
    );
};

export default PersonalInfo;
