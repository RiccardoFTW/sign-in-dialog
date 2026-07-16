'use client'

import { useState } from "react"
import { ModalStep } from "./modal-step"

type DefaultStepProps = {
    onNext: (step: ModalStep) => void
}

type SignInTab = "Email" | "Phone" | "Passkey"

const signInTabs: SignInTab[] = ["Email", "Phone", "Passkey"]

export function DefaultStep({ onNext }: DefaultStepProps) {
    const [activeTab, setActiveTab] = useState<SignInTab>("Email")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const canContinue = email.trim().length > 0
    const canContinuePhone = phone.trim().length > 0
    return (
        <section className="w-full h-[388px]">
            <header className="p-6 font-openrunde font-semibold text-xl text-gray-1200">
                <h2>Sign In</h2>
            </header>
            <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col px-6 gap-2">
                    <div className="flex w-full gap-2">
                        <button type="button" aria-label="Sign In with Google" className="h-12 min-w-0 flex-1 flex items-center justify-center rounded-xl bg-gray-200">
                            <div className="size-5 rounded-full bg-gray-800" aria-hidden="true"></div>
                        </button>
                        <button type="button" aria-label="Sign In with Discord" className="h-12 min-w-0 flex-1 flex items-center justify-center rounded-xl bg-gray-200">
                            <div className="size-5 rounded-full bg-gray-800" aria-hidden="true"></div>
                        </button>
                        <button type="button" aria-label="Sign In with Github" className="h-12 min-w-0 flex-1 flex items-center justify-center rounded-xl bg-gray-200">
                            <div className="size-5 rounded-full bg-gray-800" aria-hidden="true"></div>
                        </button>
                        <button type="button" aria-label="Sign In with Apple" className="h-12 min-w-0 flex-1 flex items-center justify-center rounded-xl bg-gray-200">
                            <div className="size-5 rounded-full bg-gray-800" aria-hidden="true"></div>
                        </button>
                        <button type="button" aria-label="Sign In with Twitch" className="h-12 min-w-0 flex-1 flex items-center justify-center rounded-xl bg-gray-200">
                            <div className="size-5 rounded-full bg-gray-800" aria-hidden="true"></div>
                        </button>
                    </div>
                    <div className="flex h-12 w-full items-center p-1 rounded-2xl bg-gray-200">
                        <fieldset className="flex w-full gap-2 border-0 p-0">
                            <legend className="sr-only">Sign in method</legend>
                            {signInTabs.map((tab) => {
                                const isActive = activeTab === tab

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        className={`flex flex-1 h-10 items-center justify-center rounded-xl font-openrunde font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${isActive ? "bg-gray-400 text-gray-1200" : "text-gray-900"}`}
                                        aria-pressed={isActive}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                )
                            })}
                        </fieldset>
                    </div>
                    {activeTab === "Email" &&
                        (<div className="flex h-12 w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-200 pl-4 pr-1 font-openrunde">
                            <input type="email" name="email" autoComplete="email" aria-label="Email address" placeholder="email@email.com" className="w-full min-w-0 font-medium placeholder:text-gray-900 text-gray-1200 bg-transparent" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <button type="button" aria-label="Continue" disabled={!canContinue} className={`flex items-center justify-center h-10 w-12 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${canContinue ? "bg-gray-400 text-gray-1200" : "bg-gray-100 text-gray-900"}`} onClick={() => onNext("email")} ><span aria-hidden="true">→</span></button>
                        </div>
                        )}
                    {activeTab === "Phone" && (
                        <div className="flex h-12 w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-200 pl-4 pr-1 font-openrunde">
                            <input type="tel" name="phone" autoComplete="tel" aria-label="Phone number" placeholder="+39 000 000 0000" className="w-full min-w-0 font-medium placeholder:text-gray-900 text-gray-1200 bg-transparent" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            <button type="button" aria-label="Continue" disabled={!canContinuePhone} className={`flex items-center justify-center h-10 w-12 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${canContinuePhone ? "bg-gray-400 text-gray-1200" : "bg-gray-100 text-gray-900"}`} onClick={() => onNext("phone")}><span aria-hidden="true" >→</span></button>
                        </div>
                    )}
                    {activeTab === "Passkey" && (
                        <button
                            type="button"
                            aria-label="Continue with passkey"
                            className="flex h-12 w-full items-center justify-center rounded-2xl bg-gray-200 font-openrunde font-medium text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                            onClick={() => onNext("passkey")}
                        >
                            Continue with Passkey
                        </button>
                    )}
                </div>
                <div className="flex flex-col gap-4 px-6 pb-6">
                    <div className="flex items-center h-10 gap-2">
                        <span className="flex-1 h-px bg-gray-300" aria-hidden="true"></span>
                        <span className="font-openrunde text-[12px] font-semibold uppercase text-gray-800">Or</span>
                        <span className="flex-1 h-px bg-gray-300" aria-hidden="true"></span>
                    </div>
                    <button
                        type="button"
                        aria-label="Connect Wallet"
                        className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-sky-400 text-white font-openrunde font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                        onClick={() => onNext("connect-wallet")}>
                        <span aria-hidden="true">◈</span>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </section >
    )
}