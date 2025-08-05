import { createContext, useContext, useReducer } from "react";

const CalcContext = createContext();

const initialState = {
    theme: 1,
    previousDigit: null,
    operation: null,
    currentDigit: null,
    overwrite: false,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case "changeTheme":
            return { ...state, theme: payload };

        case "addDigit":
            if (state.overwrite) {
                return { ...state, currentDigit: payload, overwrite: false };
            }

            if (state.currentDigit == "0" && payload == "0") return state;

            if (payload == "." && state.currentDigit.includes("."))
                return state;

            return {
                ...state,
                currentDigit: `${state.currentDigit || ""}${payload}`,
            };

        case "operation":
            if (state.currentDigit == null && state.previousDigit == null)
                return state;

            if (state.currentDigit == null) {
                return { ...state, operation: payload };
            }

            if (state.previousDigit == null) {
                return {
                    ...state,
                    operation: payload,
                    previousDigit: state.currentDigit,
                    currentDigit: null,
                };
            }

            return {
                ...state,
                previousDigit: evaluate(state),
                operation: payload,
                currentDigit: null,
            };

        case "deleteDigit":
            if (state.overwrite)
                return {
                    ...state,
                    currentDigit: null,
                    overwrite: false,
                };

            if (state.currentDigit == null) {
                return state;
            }

            if (state.currentDigit.length == 1)
                return {
                    ...state,
                    currentDigit: null,
                };

            return {
                ...state,
                currentDigit: state.currentDigit.slice(0, -1),
            };

        case "reset":
            return initialState;

        case "evaluate":
            if (
                state.currentDigit == null ||
                state.previousDigit == null ||
                state.operation == null
            )
                return state;
            return {
                ...state,
                currentDigit: evaluate(state),
                operation: null,
                previousDigit: null,
                overwrite: true,
            };
    }
}

function evaluate({ currentDigit, operation, previousDigit }) {
    const curr = parseFloat(currentDigit);
    const prev = parseFloat(previousDigit);
    if (isNaN(curr) || isNaN(prev)) return "";
    let result = 0;

    switch (operation) {
        case "+":
            result = prev + curr;
            break;

        case "-":
            result = prev - curr;
            break;

        case "x":
            result = prev * curr;
            break;

        case "/":
            result = prev / curr;
            break;
    }
    return result.toString();
}

const INTEGER_FORMATER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
});

function formateNumber(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split(".");
    if (decimal == null) return INTEGER_FORMATER.format(integer);

    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
}

function CalcProvider({ children }) {
    const [{ theme, currentDigit, previousDigit, operation }, dispatch] =
        useReducer(reducer, initialState);
    return (
        <CalcContext.Provider
            value={{
                theme,
                currentDigit,
                previousDigit,
                operation,
                dispatch,
                formateNumber,
            }}
        >
            {children}
        </CalcContext.Provider>
    );
}

function useCalc() {
    const context = useContext(CalcContext);
    if (context === undefined)
        throw new Error("CalcContext is used outside of CalcProvider.");

    return context;
}

export { CalcProvider, useCalc };
