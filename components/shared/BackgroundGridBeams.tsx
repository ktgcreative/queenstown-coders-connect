"use client";

import React, { useEffect, useState } from "react";
import { AnimationProps, motion } from "motion/react";

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

export const BackgroundGridBeams = () => {
    return (
        <div
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 27 75 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
            className="absolute bottom-0 left-0 right-0 top-0"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/0 to-black/80" />
            <Beams />
        </div>
    );
};

const Beams = () => {
    const { width } = useWindowSize();

    const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

    const placements = [
        {
            top: GRID_BOX_SIZE * 0,
            left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
            transition: {
                duration: 3.5,
                repeatDelay: 5,
                delay: 2,
            },
        },
        {
            top: GRID_BOX_SIZE * 12,
            left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
            transition: {
                duration: 3.5,
                repeatDelay: 10,
                delay: 4,
            },
        },
        {
            top: GRID_BOX_SIZE * 3,
            left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
        },
        {
            top: GRID_BOX_SIZE * 9,
            left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
            transition: {
                duration: 2,
                repeatDelay: 7.5,
                delay: 3.5,
            },
        },
        {
            top: 0,
            left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
            transition: {
                duration: 3,
                repeatDelay: 2,
                delay: 1,
            },
        },
        {
            top: GRID_BOX_SIZE * 2,
            left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
            transition: {
                duration: 5,
                repeatDelay: 5,
                delay: 5,
            },
        },
    ];

    return (
        <>
            {placements.map((p, i) => (
                <Beam
                    key={i}
                    top={p.top}
                    left={p.left - BEAM_WIDTH_OFFSET}
                    transition={p.transition || {}}
                />
            ))}
        </>
    );
};

const Beam = ({
    top,
    left,
    transition = {},
}: {
    top: number;
    left: number;
    transition?: AnimationProps["transition"];
}) => {
    return (
        <motion.div
            initial={{
                y: 0,
                opacity: 0,
            }}
            animate={{
                opacity: [0, 1, 0],
                y: 32 * 8,
            }}
            transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ...transition,
            }}
            style={{
                top,
                left,
            }}
            className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-cyan-500/0 to-cyan-500"
        />
    );
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () =>
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

export default BackgroundGridBeams;
