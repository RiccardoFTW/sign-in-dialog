'use client'

import { motion } from "motion/react"
import StepHeader from "./step-header"

type PasskeyProps = {
    onBack: () => void
}

export function PasskeyStep({ onBack }: PasskeyProps) {
    return (
        <>
            <StepHeader title="Passkey" onBack={onBack} />
            <div className="flex flex-col items-center gap-4 px-6 pb-6">
                <motion.div
                    aria-hidden="true"
                    className="size-24 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,#00bcff_25%,transparent_45%)] p-1"
                    animate={{ rotate: 360 }}
                    transition={{
                        type: "tween",
                        duration: 1.4,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <div className="size-full rounded-full bg-gray-200" />
                </motion.div>
                <h3>Waiting for Passkey</h3>
                <p>Please verify your passkey.</p>
                <button type="button" onClick={onBack} className="flex h-12 w-full items-center justify-center rounded-full bg-sky-400 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-[scale] duration-200 ease-out active:scale-[0.97]">Continue</button>
            </div>
        </>
    )
}
