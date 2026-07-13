import localFont from "next/font/local";

export const inter = localFont({
    src: "./fonts/Inter-Regular.woff2",
    weight: "400",
    variable: "--font-inter",
    display: "swap",
});

export const openRunde = localFont({
    src: [
        {
            path: "./fonts/OpenRunde-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/OpenRunde-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-openrunde",
    display: "swap",
    fallback: ["system-ui", "arial"],
    adjustFontFallback: "Arial",
});