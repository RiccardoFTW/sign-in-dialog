'use client'

import { Dialog } from "@base-ui/react/dialog";
import { DefaultStep } from "./default-step";
import { useState } from "react";
import { ModalStep } from "./modal-step";

export function ConnectDialog() {
    const [currentStep, setCurrentStep] = useState<ModalStep>("default")
    return (
        <Dialog.Root>
            <Dialog.Trigger
                render={
                    <button
                        type="button"
                        className="flex h-11 min-w-16 items-center justify-center px-6 rounded-full bg-preview-bg text-gray-1200 font-medium shadow-custom">
                        Sign In
                    </button>
                } />
            <Dialog.Portal>
                <Dialog.Backdrop className="w-full h-full fixed inset-0 z-40 bg-black/15"></Dialog.Backdrop>
                <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 -translate-y-1/2">
                    <Dialog.Title className="sr-only">
                        Sign In
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">Choose how you want to sign in.</Dialog.Description>
                    <Dialog.Close
                        render={
                            <button
                                type="button"
                                aria-label="Close Dialog"
                                className="absolute top-6 right-6 z-10 flex size-8 items-center justify-center rounded-full bg-gray-200">
                                ×
                            </button>
                        }
                    />
                    {currentStep === "default" ? (
                        <DefaultStep onNext={(nextStep) => setCurrentStep(nextStep)} />
                    ) : (
                        <section className="flex h-[388px] w-full items-center justify-center rounded-3xl bg-preview-bg shadow-custom">
                            <div className="flex flex-col items-center gap-4 font-openrunde">
                                <p>{currentStep}</p>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep("default")}
                                    className="rounded-full bg-gray-200 px-4 py-2"
                                >
                                    Back
                                </button>
                            </div>
                        </section>
                    )}
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    )
}