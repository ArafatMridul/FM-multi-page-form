import React from "react";
import Layout from "./components/Layout";
import { FormProvider } from "../context/FormContex";

const App = () => {
    return (
        <div className="lg:pt-26 bg-n-w lg:bg-n-b-2 h-screen">
            <FormProvider>
                <Layout />
            </FormProvider>
        </div>
    );
};

export default App;
