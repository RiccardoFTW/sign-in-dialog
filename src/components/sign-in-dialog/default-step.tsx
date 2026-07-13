export function DefaultStep() {
    return (
        <section className="w-full max-w-[360px] h-[388px] relative overflow-hidden rounded-3xl bg-preview-bg shadow-custom">
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
                            <legend className="sr-only">Sign-in method</legend>
                            <button type="button" className="flex flex-1 h-10 items-center justify-center rounded-xl font-openrunde font-semibold bg-gray-400 text-gray-1200" aria-pressed={true}>Email</button>
                            <button type="button" className="flex flex-1 h-10 items-center justify-center rounded-xl font-openrunde font-semibold text-gray-900" aria-pressed={false}>Phone</button>
                            <button type="button" className="flex flex-1 h-10 items-center justify-center rounded-xl font-openrunde font-semibold text-gray-900" aria-pressed={false}>Passkey</button>
                        </fieldset>
                    </div>
                    <div className="flex h-12 w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-200 pl-4 pr-1 font-openrunde">
                        <input type="email" name="email" autoComplete="email" aria-label="Email address" placeholder="email@email.com" className="w-full min-w-0 font-medium placeholder:text-gray-900 text-gray-1200 bg-transparent" />
                        <button type="button" aria-label="Continue" disabled className="flex items-center justify-center h-10 w-12 shrink-0 rounded-xl bg-gray-100"><span aria-hidden="true">→</span></button>
                    </div>
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
                        className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-sky-400 text-white font-openrunde font-semibold">
                        <span aria-hidden="true">◈</span>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </section>
    )
}