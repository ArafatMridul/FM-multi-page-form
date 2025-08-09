import { motion, AnimatePresence } from "motion/react";
import { useForm } from "../../context/FormContex";
import ButtonContainer from "./ButtonContainer";
import PersonalInfo from "./PersonalInfo";
import Sidebar from "./Sidebar";
import Plans from "./Plans";
import AddsOn from "./AddsOn";
import Summary from "./Summary";
import Confirm from "./Confirm";

const Layout = () => {
    const { selectedOption, showConfirm } = useForm();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="wrapper h-9/10 lg:h-auto grid grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr] lg:p-4 bg-n-b-2 lg:bg-n-w lg:shadow-[0_8px_30px_rgba(0,0,0,0.05)] lg:rounded-xl"
            >
                <Sidebar />
                <div className="relative">
                    {selectedOption === 1 && !showConfirm && (
                        <PersonalInfo key="persona-info" />
                    )}
                    {selectedOption === 2 && !showConfirm && (
                        <Plans key="plans" />
                    )}
                    {selectedOption === 3 && !showConfirm && (
                        <AddsOn key="adds-on" />
                    )}
                    {selectedOption === 4 && !showConfirm && (
                        <Summary key="summary" />
                    )}
                    {selectedOption === 4 && showConfirm && <Confirm />}
                    {!showConfirm && <ButtonContainer />}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Layout;
