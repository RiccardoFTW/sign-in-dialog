'use client'

import { Dialog } from "@base-ui/react/dialog";
import useMeasure from "react-use-measure";
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import { DefaultStep } from "./default-step";
import { useState } from "react";
import { ModalStep } from "./modal-step";
import VerificationStep from "./verification-step";
import { PasskeyStep } from "./passkey-step";
import { ConnectWalletStep } from "./connect-wallet-step";

type DialogContentProps = {
    step: ModalStep
    onNext: (nextStep: ModalStep) => void
    onBack: () => void
}

function DialogContent({ step, onNext, onBack }: DialogContentProps) {
    switch (step) {
        case "default":
            return <DefaultStep onNext={onNext} />

        case "email":
            return (
                <VerificationStep
                    variant="email"
                    onBack={onBack}
                />
            )

        case "phone":
            return (
                <VerificationStep
                    variant="phone"
                    onBack={onBack}
                />
            )

        case "passkey":
            return (
                <PasskeyStep
                    onBack={onBack}
                />
            )

        case "connect-wallet":
            return (
                <ConnectWalletStep
                    onBack={onBack}
                />
            )

        default:
            return null
    }
}

export function ConnectDialog() {
    const [currentStep, setCurrentStep] = useState<ModalStep>("default")
    const [contentRef, bounds] = useMeasure({
        offsetSize: true,
    })
    return (
        <MotionConfig
            reducedMotion="user"
            transition={{
                type: "spring",
                bounce: 0,
                duration: 0.3,
            }}
        >
            <Dialog.Root onOpenChange={(open, eventDetails) => {
                if (
                    !open &&
                    eventDetails.reason === "escape-key" &&
                    currentStep !== "default"
                ) {
                    eventDetails.cancel()
                    setCurrentStep("default")
                    return
                }
                if (open) {
                    setCurrentStep("default")
                }
            }}
            >
                <Dialog.Trigger
                    render={
                        <button
                            type="button"
                            className="flex h-11 min-w-16 items-center justify-center px-6 rounded-full bg-preview-bg text-gray-1200 font-medium shadow-custom focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-[scale] duration-200 ease-out active:scale-[0.97]">
                            Sign In
                        </button>
                    } />
                <Dialog.Portal>
                    <Dialog.Backdrop className="w-full h-full fixed inset-0 z-40 bg-black/15 opacity-100 transition-opacity duration-150 ease-out data-starting-style:opacity-0 data-ending-style:opacity-0"></Dialog.Backdrop>
                    <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] overflow-hidden rounded-3xl bg-preview-bg shadow-custom origin-center transition-[scale,opacity] duration-200 ease-out data-starting-style:scale-[0.98] data-starting-style:opacity-0 data-ending-style:scale-[0.98] data-ending-style:opacity-0">
                        <Dialog.Title className="sr-only">
                            Sign In
                        </Dialog.Title>
                        <Dialog.Description className="sr-only">Choose how you want to sign in.</Dialog.Description>
                        <Dialog.Close
                            render={
                                <button
                                    type="button"
                                    aria-label="Close Dialog"
                                    className="absolute top-6 right-6 z-10 flex size-8 items-center justify-center rounded-full bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                                    ×
                                </button>
                            }
                        />
                        <div className="max-h-[calc(100dvh-2rem)] overflow-x-hidden overflow-y-auto">
                            <motion.div
                                className="overflow-hidden"
                                animate={{
                                    height: currentStep === "default" ? 388 : bounds.height,
                                }}
                            >
                                <div className="w-full" ref={contentRef}>
                                    <AnimatePresence initial={false} mode="popLayout">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <DialogContent
                                                step={currentStep}
                                                onNext={(nextStep) => setCurrentStep(nextStep)}
                                                onBack={() => setCurrentStep("default")}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </Dialog.Popup>
                </Dialog.Portal>
            </Dialog.Root>
        </MotionConfig>
    )
}
