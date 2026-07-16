"use client";

import type { KeyboardEvent } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import StepHeader from "./step-header";

const VARIANTS = {
    email: {
        title: "Confirm Email",
        target: "email@email.com",
        verifyLabel: "Complete",
        pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
        inputMode: undefined,
    },
    phone: {
        title: "Confirm Phone",
        target: "+1 (555) 123-4567",
        verifyLabel: "Complete",
        pattern: "[0-9]+",
        inputMode: "numeric",
    },
} as const;

const OTP_SLOTS = ["a", "b", "c", "d", "e", "f"];

export default function VerificationStep({
    variant,
    onBack,
}: {
    variant: "email" | "phone";
    onBack: () => void;
}) {
    const { title, target, verifyLabel, pattern, inputMode } = VARIANTS[variant];

    return (
        <>
            <StepHeader onBack={onBack} title={title} />

            <div className="flex flex-col gap-4 px-6 pb-6">
                <div>
                    <p className="text-center font-medium font-openrunde text-gray-800">
                        Enter the verification code sent to
                    </p>
                    <p className="text-center font-openrunde font-semibold text-gray-1200">
                        {target}
                    </p>
                </div>
                <InputOTP
                    autoFocus
                    className="flex w-full items-center justify-center"
                    inputMode={inputMode}
                    maxLength={6}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                            onBack();
                        }
                    }}
                    pattern={pattern}
                >
                    <InputOTPGroup className="flex items-center justify-center gap-2">
                        {OTP_SLOTS.map((id, index) => (
                            <InputOTPSlot className="text-lg" index={index} key={id} />
                        ))}
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className="flex gap-4 px-6 pb-6">
                <button
                    aria-label={verifyLabel}
                    className="flex h-12 w-full select-none items-center justify-center gap-2 rounded-full bg-green-500 font-openrunde font-semibold text-white transition-[scale,background-color] duration-200 ease-out hover:bg-green-600 active:scale-[0.97]"
                    onClick={onBack}
                    type="button"
                >
                    {verifyLabel}
                </button>
            </div>
        </>
    );
}