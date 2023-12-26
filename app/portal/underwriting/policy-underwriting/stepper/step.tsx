import React, { useState, useRef, useLayoutEffect, useEffect, forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { Step } from "./steppertypes";
import { Button } from "app/app/components/form-components/button";
import { stepperApi } from "./steppertypes";
import { debounce } from "app/app/lib/utils";

type stepParam = Partial<stepperApi> & {
    active: boolean,
    Component: React.FC<Partial<stepperApi>>,
    label: String,
    index: number,
    isCompleted: boolean,
    steps: Step[]
    currentStepIndex: number,
    setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>
}

const step = forwardRef((props: stepParam, ref: ForwardedRef<HTMLDivElement | null>) => {

    const { active, Component, currentStepIndex, index, label, steps, onNextStep, setCurrentStepIndex, isFirstStep, onPrevStep, isLastStep } = props
    const [scrollHeight, setScrollHeight] = useState(0)
    let stepperContent = useRef<HTMLDivElement | null>(null)

    function getFirstWorkFromLabel(label: string) {
        if (!label) return
        const words = label.trim().split(' ');
        return words[0];
    }

    function handleOnStepToggle() {
        if (currentStepIndex > index) {
            setCurrentStepIndex(index)
        }
    }

    const resetScrollHeight = () => setScrollHeight(stepperContent!.current!.scrollHeight)

    const debouncedResetScrollHeight = debounce(resetScrollHeight, 300);

    useEffect(() => {
        debouncedResetScrollHeight();
    }, [stepperContent, active]);

 
    useEffect(() => {
        //Adding window resize listener for current content
        window.addEventListener('resize',debouncedResetScrollHeight, true);

        //Adding dom resizeobser for current content
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { contentRect } = entry;
                const { height } = contentRect;
                // setScrollHeight(height);
                debouncedResetScrollHeight();
            }
        });

        const targetElement = stepperContent!.current;
        if (targetElement) {
            resizeObserver.observe(targetElement);
        }
        return () => {
            window.removeEventListener('resize',debouncedResetScrollHeight, true);
            resizeObserver.disconnect();
        };
    }, []);


    return (
        <div id={`stepper-${index}`} ref={ref} className={`flex overflow-hidden ${active && 'stepper-active'}`}>
            <nav className=" basis-[4rem] py-2 min-h-full flex flex-col  text-center  ">
                <nav className={classNames({
                    "p-3 mb-2 mx-auto h-6 w-6 flex items-center justify-center rounded-full  text-white": true,
                    " bg-orange-400": active,
                    " bg-gray-300": !active,
                })}>{index + 1}</nav>
                <nav className="w-[1px] bg-gray-200 h-full mx-auto">
                </nav>
            </nav>

            <nav className=" min-w-[calc(100%-4rem)] w-full flex flex-col py-2 cursor-pointer  ">
                <nav onClick={() => handleOnStepToggle()} className={classNames({
                    "relative": true,
                    "text-orange-400": active,
                    "text-gray-500": !active,

                })}>
                    {label}
                </nav>

                <div
                    style={{ height: active ? "100%" : "0px" }}
                    ref={stepperContent}
                    className={classNames({
                        "flex flex-col overflow-hidden transform-none transition-[padding] duration-100": true,
                        "u--slideUp": active,
                        "pt-5 -translate-y-[10%]": !active,
                    })}>

                    <div className=" py-4">
                        <Component />
                    </div>

                    <nav className="!bg-white py-3 px-5 rounded-md border mt-2">
                        <nav className="grid ml-auto grid-cols-2  w-max gap-3">

                            <Button
                                onClick={(e: React.FormEvent) => {
                                    e.preventDefault();
                                    onPrevStep && onPrevStep();
                                }}
                                variant="outline"
                                className="flex items-center gap-2 !min-h-full !h-full"
                                disabled={index == 0}
                                size="lg"
                            >
                                {isFirstStep && isFirstStep() ? "Previous" :
                                    <nav className="flex flex-col gap-1 items-start truncate">
                                        <span className="">Previous</span>
                                        <span className=" text-xs text-gray-400 truncate ">{steps[index - 1]?.label}</span>
                                    </nav>
                                }
                            </Button>

                            <Button
                                onClick={(e: React.FormEvent) => {
                                    e.preventDefault();
                                    onNextStep && onNextStep();
                                }}
                                variant="primary"
                                className="flex items-center gap-2 truncate h-full"
                                size="lg"
                            >
                                {isLastStep && isLastStep() ? "Finsih" :
                                    <nav className="flex flex-col gap-1 items-start truncate">
                                        <span className="">Next</span>
                                        <span className=" text-xs text-gray-200 truncate ">{steps[index + 1]?.label}</span>
                                    </nav>
                                }
                            </Button>
                        </nav>
                    </nav>
                </div>

            </nav>
        </div>
    )
}
)
export default step