"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../../lib/utils"

type WaveSoundProps = React.SVGProps<SVGSVGElement> & {
    isAnimated?: boolean
}

const waveBars = [
    16, 20, 23, 24, 22, 18, 12, 9, 12, 15, 13, 10,
    14, 22, 34, 46, 54, 48, 32, 18, 14, 26, 38, 34,
    22, 14, 10, 13, 18, 21, 18, 12, 9, 11, 16, 20,
    18, 13, 10, 16, 26, 40, 52, 50, 38, 22, 14, 28,
    42, 36, 20, 14, 12, 10, 13, 18, 15, 11, 10, 14,
    20, 18, 13, 18, 32, 44, 40, 26, 16, 12,
]

const WaveSound = ({
    className,
    isAnimated = true,
    ...props
}: WaveSoundProps) => {
    return (

        <svg
            viewBox="0 0 420 120"
            fill="none"
            aria-hidden="true"
            className={cn("text-gray-500 dark:text-blue-500 transition-colors duration-300", className)}
            {...props}
        >
            <motion.line
                x1="8"
                y1="60"
                x2="412"
                y2="60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.22"
            />

            {waveBars.map((height, index) => {
                const x = 10 + index * 6

                return (
                    <motion.line
                        key={`${height}-${index}`}
                        x1={x}
                        y1={60 - height / 2}
                        x2={x}
                        y2={60 + height / 2}
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        style={{ transformBox: "fill-box", transformOrigin: "center" }}
                        animate={isAnimated ? { scaleY: [0.78, 1.08, 0.78] } : { scaleY: 1 }}
                        transition={
                            isAnimated
                                ? {
                                    duration: 1.8 + (index % 7) * 0.12,
                                    delay: index * 0.025,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }
                                : undefined
                        }
                    />
                )
            })}

            <motion.path
                d="M10 60C48 54 72 66 104 60C136 54 154 66 184 60C216 54 238 66 270 60C302 54 322 66 350 60C374 55 392 57 410 60"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.35"
                animate={isAnimated ? { opacity: [0.18, 0.45, 0.18] } : { opacity: 0.35 }}
                transition={isAnimated ? { duration: 3.4, repeat: Infinity, ease: "easeInOut" } : undefined}
            />
        </svg>
    )
}

export default WaveSound
