import { useCalc } from "./../context/CalcContext";
import { twMerge } from "tailwind-merge";
import TopPart from "./components/TopPart";
import Display from "./components/Display";
import EqualButton from "./components/EqualButton";
import DelButton from "./components/DelButton";
import ResetButton from "./components/ResetButton";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OparationButton";

const App = () => {
    const { theme } = useCalc();

    return (
        <div
            className={twMerge(
                "h-screen pt-7 lg:pt-25 tra",
                theme === 1
                    ? "bg-bg-main-1"
                    : theme === 2
                    ? "bg-bg-main-2"
                    : "bg-bg-main-3"
            )}
        >
            <div className="wrapper ">
                <TopPart />
                <Display />
                <div
                    className={twMerge(
                        "mt-6 rounded-xl p-6 lg:p-8 grid grid-cols-4 gap-3.5 lg:gap-5",
                        theme === 1
                            ? "bg-bg-toggle-1"
                            : theme === 2
                            ? "bg-bg-toggle-2"
                            : "bg-bg-toggle-3"
                    )}
                >
                    <DigitButton content="7" />
                    <DigitButton content="8" />
                    <DigitButton content="9" />
                    <DelButton content="DEL" />
                    <DigitButton content="4" />
                    <DigitButton content="5" />
                    <DigitButton content="6" />
                    <OperationButton content="+" />
                    <DigitButton content="1" />
                    <DigitButton content="2" />
                    <DigitButton content="3" />
                    <OperationButton content="-" />
                    <DigitButton content="." />
                    <DigitButton content="0" />
                    <OperationButton content="/" />
                    <OperationButton content="x" />
                    <ResetButton content="reset" className="col-span-2" />
                    <EqualButton content="=" className="col-span-2" />
                </div>
            </div>
        </div>
    );
};

export default App;
