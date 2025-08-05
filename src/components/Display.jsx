import React from "react";
import { twMerge } from "tailwind-merge";
import { useCalc } from "../../context/CalcContext";

const Display = () => {
    const { theme, currentDigit, operation, previousDigit, formateNumber } =
        useCalc();
    console.log("previous ", previousDigit);
    console.log("operation ", operation);
    console.log("current ", currentDigit);
    return (
        <div
            className={twMerge(
                "h-[88.4px] flex justify-end items-center lg:h-[124px] text-[2.35rem] lg:text-[3.5rem] py-4 px-5.5 lg:py-5 lg:px-8 lg:tracking-[-1px] tracking-wide rounded-lg mt-7 lg:mt-6.5 overflow-x-clip",
                theme === 1
                    ? "bg-bg-screen-1 text-text-main-1"
                    : theme === 2
                    ? "bg-bg-screen-2 text-text-main-2"
                    : "bg-bg-screen-3 text-text-main-3"
            )}
        >
            {formateNumber(previousDigit)}
            {operation}
            {formateNumber(currentDigit)}
        </div>
    );
};

export default Display;
