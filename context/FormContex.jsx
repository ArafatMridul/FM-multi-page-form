import { createContext, useContext, useReducer } from "react";

const FormContex = createContext();

const initialState = {
    selectedOption: 1,
    name: "",
    email: "",
    phone: "",
    errorName: false,
    errorEmail: false,
    errorPhone: false,
    expensePlan: {},
    type: "monthly",
    expenseAdd: [],
    showConfirm: false,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case "selectOption":
            return { ...state, selectedOption: payload };

        case "setName":
            return { ...state, name: payload };

        case "setEmail":
            return { ...state, email: payload };

        case "setPhone":
            return { ...state, phone: payload };

        case "setErrName":
            return { ...state, errorName: payload };

        case "setErrEmail":
            return { ...state, errorEmail: payload };

        case "setErrPhone":
            return { ...state, errorPhone: payload };

        case "goNext":
            return { ...state, selectedOption: state.selectedOption + 1 };

        case "setPaymentType":
            return { ...state, type: payload };

        case "setExpPlan":
            return { ...state, expensePlan: payload };

        case "setAddOnsExp": {
            const exists = state.expenseAdd.some(
                (item) => item.label === payload.label
            );

            return {
                ...state,
                expenseAdd: exists
                    ? state.expenseAdd.filter(
                          (item) => item.label !== payload.label
                      )
                    : [...state.expenseAdd, payload],
            };
        }

        case "confirm":
            return { ...state, showConfirm: true };

        default:
            throw new Error("Unknown action");
    }
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePhone(phone) {
    const pattern = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/;
    return pattern.test(phone);
}

function FormProvider({ children }) {
    const [
        {
            selectedOption,
            name,
            email,
            phone,
            errorName,
            errorEmail,
            errorPhone,
            type,
            expensePlan,
            expenseAdd,
            showConfirm,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    function handleSubmit() {
        let hasError = false;

        if (!name) {
            dispatch({ type: "setErrName", payload: true });
            hasError = true;
        } else {
            dispatch({ type: "setErrName", payload: false });
        }

        if (!validatePhone(phone)) {
            dispatch({ type: "setErrPhone", payload: true });
            hasError = true;
        } else {
            dispatch({ type: "setErrPhone", payload: false });
        }

        if (!validateEmail(email)) {
            dispatch({ type: "setErrEmail", payload: true });
            hasError = true;
        } else {
            dispatch({ type: "setErrEmail", payload: false });
        }

        if (!hasError) {
            dispatch({ type: "goNext" });
        }
    }

    return (
        <FormContex.Provider
            value={{
                selectedOption,
                name,
                email,
                phone,
                errorName,
                errorEmail,
                errorPhone,
                dispatch,
                handleSubmit,
                type,
                expensePlan,
                expenseAdd,
                showConfirm,
            }}
        >
            {children}
        </FormContex.Provider>
    );
}

function useForm() {
    const context = useContext(FormContex);
    if (context === undefined)
        throw new Error("FormContext used outside of FormProvider");

    return context;
}

export { FormProvider, useForm };
