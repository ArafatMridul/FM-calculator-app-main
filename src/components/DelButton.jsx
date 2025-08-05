import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useCalc } from "../../context/CalcContext";

const DelButton = ({ content, className }) => {
    const { theme, dispatch } = useCalc();
    const [pressed, setPressed] = useState(false);
    return (
        <div
            onMouseDown={() => setPressed((curr) => !curr)}
            onMouseUp={() => setPressed((curr) => !curr)}
            onMouseLeave={() => setPressed(false)}
            className={twMerge(
                "w-full h-full cursor-pointer",
                className,
                pressed && "scale-90"
            )}
            onClick={() => dispatch({ type: "deleteDigit" })}
        >
            <button
                type="button"
                className={twMerge(
                    "w-full text-[1.35rem] lg:text-[1.5rem] lg:tracking-wide py-4 lg:py-4.5 uppercase h-full relative rounded-md lg:rounded-xl z-50 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-1 before:-z-10 before:rounded-md lg:before:rounded-xl before:transition-all before:duration-300 cursor-pointer tra",
                    theme === 1
                        ? "text-text-main-1 before:bg-bg-key-1 bg-bg-key-shadow-1 hover:before:bg-gray-300"
                        : theme === 2
                        ? "text-bg-key-alt-2 before:bg-bg-key-2 bg-bg-key-shadow-2 hover:opacity-70"
                        : "text-text-white-3 before:bg-bg-key-3 bg-bg-key-shadow-3 hover:opacity-70"
                )}
            >
                {content}
            </button>
        </div>
    );
};

export default DelButton;
