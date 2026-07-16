"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
    <OTPInput
        ref={ref}
        containerClassName={cn(
            "flex items-center gap-2 has-[:disabled]:opacity-50",
            containerClassName
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
    />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
    />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex h-12 w-10 items-center justify-center rounded-xl bg-gray-200 font-openrunde font-semibold text-gray-1200 transition-colors",
                isActive && "bg-gray-400",
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="animate-caret-blink h-5 w-px bg-gray-1200" />
                </div>
            )}
        </div>
    )
})
InputOTPSlot.displayName = "InputOTPSlot"

export { InputOTP, InputOTPGroup, InputOTPSlot }
