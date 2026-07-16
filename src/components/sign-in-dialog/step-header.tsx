"use client"

type StepHeaderProps = {
    title: string
    onBack: () => void
}

export default function StepHeader({ title, onBack }: StepHeaderProps) {
    return (
        <header className="flex items-center gap-3 p-6 font-openrunde font-semibold text-xl text-gray-1200">
            <button
                type="button"
                aria-label="Go back"
                onClick={onBack}
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
                <span aria-hidden="true">←</span>
            </button>
            <h2>{title}</h2>
        </header>
    )
}
