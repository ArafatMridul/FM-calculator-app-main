import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useCalc } from "../../context/CalcContext";

const EqualButton = ({ content, className }) => {
    const { theme, dispatch } = useCalc();
    const [pressed, setPressed] = useState(false);
    return (
        <div
            onMouseDown={() => setPressed((curr) => !curr)}
            onMouseUp={() => setPressed((curr) => !curr)}
            onMouseLeave={() => setPressed(false)}
            className={twMerge("w-full tra", className, pressed && "scale-90")}
            onClick={() => dispatch({ type: "evaluate" })}
        >
            <button
                type="button"
                className={twMerge(
                    "w-full text-[1.25rem] h-full relative rounded-md lg:rounded-xl z-50 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-1 before:-z-10 lg:before:rounded-xl before:rounded-md tra before:transition-all before:duration-300 cursor-pointer",
                    theme === 1
                        ? "text-text-main-1 before:bg-bg-key-toggle-1 bg-bg-key-toggle-shadow-1 hover:before:bg-red-400/80"
                        : theme === 2
                        ? "text-bg-key-alt-2 before:bg-bg-key-toggle-2 bg-bg-key-toggle-shadow-2 hover:before:bg-orange-400/80"
                        : "text-text-white-3 before:bg-bg-key-toggle-3 bg-bg-key-toggle-shadow-3 hover:before:bg-bg-key-toggle-shadow-3"
                )}
            >
                {content}
            </button>
        </div>
    );
};

export default EqualButton;
