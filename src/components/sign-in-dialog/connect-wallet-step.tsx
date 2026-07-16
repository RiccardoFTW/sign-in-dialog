'use client'

import StepHeader from "./step-header"

type ConnectWalletStepProps = {
    onBack: () => void
}

const wallets = [
    "MetaMask",
    "Base",
    "Phantom",
    "Rainbow",
    "Other Wallets",
]

export function ConnectWalletStep({ onBack }: ConnectWalletStepProps) {
    return (
        <>
            <StepHeader title="Connect Wallet" onBack={onBack} />
            <div className="flex flex-col gap-2 px-6 pb-6">
                {wallets.map((wallet) => (
                    <button
                        key={wallet}
                        type="button"
                        aria-label={wallet}
                        onClick={onBack}
                        className="flex h-16 w-full items-center justify-between rounded-2xl bg-gray-200 px-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-gray-300" aria-hidden="true" />
                            <span className="font-openrunde text-sm font-medium text-gray-1200">
                                {wallet}
                            </span>
                        </div>
                        <span aria-hidden="true">→</span>
                    </button>
                ))}
            </div>
            <div className="flex px-6 pb-6">
                <button type="button"
                    aria-label="Create a New Wallet"
                    onClick={onBack}
                    className="flex h-12 w-full items-center justify-center rounded-full bg-sky-400 font-openrunde font-semibold text-white"
                >Create a New Wallet
                </button>
            </div>
        </>
    )
}
