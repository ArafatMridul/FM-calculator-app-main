import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useCalc } from "../../context/CalcContext";

const OperationButton = ({ content, className }) => {
    const { theme, dispatch } = useCalc();
    const [pressed, setPressed] = useState(false);
    return (
        <div
            onMouseDown={() => setPressed((curr) => !curr)}
            onMouseUp={() => setPressed((curr) => !curr)}
            onMouseLeave={() => setPressed(false)}
            className="w-full h-full"
            onClick={() => dispatch({ type: "operation", payload: content })}
        >
            <button
                type="button"
                className={twMerge(
                    "w-full text-[2rem] lg:text-[2.75rem] py-2 lg:py-0 relative rounded-md lg:rounded-xl z-50 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-1 before:-z-10 before:rounded-md lg:before:rounded-xl before:transition-all before:duration-300 cursor-pointer",
                    theme === 1
                        ? "bg-bg-key-alt-shadow-1 before:bg-bg-key-alt-1 text-text-alt-1 hover:before:bg-white"
                        : theme === 2
                        ? "bg-bg-key-alt-shadow-2 before:bg-bg-key-alt-2 text-text-main-2 hover:before:bg-white"
                        : "bg-bg-key-alt-shadow-3 before:bg-bg-key-alt-3 text-text-main-3 hover:before:bg-bg-key-3",
                    className,
                    pressed && "scale-90"
                )}
            >
                {content}
            </button>
        </div>
    );
};

export default OperationButton;
