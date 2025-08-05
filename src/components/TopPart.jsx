import React from "react";
import { useCalc } from "../../context/CalcContext";
import { twMerge } from "tailwind-merge";

const TopPart = () => {
    const { theme, dispatch } = useCalc();

    return (
        <div
            className={twMerge(
                "flex justify-between items-center",
                theme === 1
                    ? "text-text-main-1"
                    : theme === 2
                    ? "text-text-main-2"
                    : "text-text-main-3"
            )}
        >
            <div>
                <h1 className={twMerge("text-[2rem] ml-2 tracking-tight tra")}>
                    calc
                </h1>
            </div>

            <div className="flex items-end mt-2.5 gap-6">
                <div>
                    <h2
                        className={twMerge(
                            "tra uppercase text-[0.7rem] tracking-[2px] mb-0.5 lg:mb-1"
                        )}
                    >
                        theme
                    </h2>
                </div>
                <div
                    className={twMerge(
                        "relative h-6.5 w-18 rounded-full grid grid-cols-3 shadow-md",
                        theme === 1
                            ? "bg-bg-toggle-1"
                            : theme === 2
                            ? "bg-bg-toggle-2"
                            : "bg-bg-toggle-3"
                    )}
                >
                    {[...Array(3)].map((item, index) => (
                        <div
                            onClick={() =>
                                dispatch({
                                    type: "changeTheme",
                                    payload: index + 1,
                                })
                            }
                            className="cursor-pointer relative"
                            key={index}
                        >
                            <div
                                onClick={() =>
                                    dispatch({
                                        type: "changeTheme",
                                        payload: index + 1,
                                    })
                                }
                                className={twMerge(
                                    "absolute top-0 lg:-top-1.5 left-1/2 -translate-x-1/2 -translate-y-full text-xs"
                                )}
                            >
                                {index + 1}
                            </div>
                        </div>
                    ))}
                    <div
                        className={twMerge(
                            "absolute h-4 w-4 top-1/2 -translate-y-1/2 rounded-full tra shadow-sm",
                            theme === 1
                                ? "left-1.5 bg-bg-key-toggle-1"
                                : theme === 2
                                ? "left-1/2 -translate-x-1/2 bg-bg-key-toggle-2"
                                : "right-1.5 bg-bg-key-toggle-3"
                        )}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default TopPart;
