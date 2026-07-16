'use client'

import StepHeader from "./step-header"

type PasskeyProps = {
    onBack: () => void
}

export function PasskeyStep({ onBack }: PasskeyProps) {
    return (
        <>
            <StepHeader title="Passkey" onBack={onBack} />
            <div className="flex flex-col items-center gap-4 px-6 pb-6">
                <div
                    aria-hidden="true"
                    className="size-24 rounded-full bg-gray-200"
                />
                <h3>Waiting for Passkey</h3>
                <p>Please verify your passkey.</p>
                <button type="button" onClick={onBack} className="flex h-12 w-full items-center justify-center rounded-full bg-sky-400 text-white">Continue</button>
            </div>
        </>
    )
}
