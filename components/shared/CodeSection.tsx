"use client";

import React, { useState, MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { Highlight } from "prism-react-renderer";
import OuterCardGlow from "./OuterCardGlow";

interface CodeTab {
    label: string;
    code: string;
    language: string;
}

interface CodeCardProps {
    tabs: CodeTab[];
    githubLink?: {
        url: string;
        stars?: number;
    };
}

const CodeCard = ({ tabs, githubLink }: CodeCardProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="mx-auto max-w-3xl w-full">
            <OuterCardGlow className="mx-auto max-w-3xl w-full overflow-hidden rounded-3xl">
                <Card className="mx-auto max-w-3xl">
                    <div className="flex items-center justify-between border-b border-zinc-700 px-8 py-5">
                        <div className="flex items-center gap-4">
                            {tabs.map((tab, index) => (
                                <ToggleChip
                                    key={tab.label}
                                    onClick={() => setSelectedTab(index)}
                                    selected={selectedTab === index}
                                >
                                    {tab.label}
                                </ToggleChip>
                            ))}
                        </div>
                        {githubLink && (
                            <a
                                href={githubLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-0 flex items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-2xl 
                                bg-gradient-to-r from-blue-600 to-blue-600 px-4 py-2 text-sm font-medium text-zinc-50
                                transition-all duration-300 hover:scale-105 active:scale-100"
                            >
                                <SiGithub className="text-base" />
                                {githubLink.stars && (
                                    <>
                                        <FiStar className="hidden text-base sm:inline" />
                                        <span className="hidden sm:inline">
                                            {githubLink.stars.toLocaleString()}
                                        </span>
                                    </>
                                )}
                            </a>
                        )}
                    </div>
                    <div className="no-scrollbar px-8 py-6 bg-zinc-950/90">
                        <Markup
                            code={tabs[selectedTab].code}
                            language={tabs[selectedTab].language}
                        />
                    </div>
                </Card>
            </OuterCardGlow>
        </div>
    );
};

const ToggleChip = ({
    children,
    selected,
    onClick,
}: {
    children: string;
    selected: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${selected
                ? "bg-blue-600 text-zinc-50"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
        >
            {children}
        </button>
    );
};

const Card = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.div
            initial={{
                filter: "blur(4px)",
            }}
            whileInView={{
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.25,
            }}
            className={`relative h-full w-full overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const Markup = ({ code, language }: { code: string; language: string }) => {
    return (
        // @ts-expect-error - Included in the another theme kit (not mine lmao) 
        <Highlight theme={theme} code={code} language={language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className="text-sm">
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="leading-8">
                            <span className="mr-6 inline-block w-[40px] select-none text-zinc-500">
                                {i + 1}
                            </span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

const theme = {
    plain: {
        color: "#e2e8f0",
        backgroundColor: "transparent",
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#94a3b8)",
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "rgb(195, 232, 141)",
            },
        },
        {
            types: ["number"],
            style: {
                color: "rgb(247, 140, 108)",
            },
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "rgb(130, 170, 255)",
            },
        },
        {
            types: ["punctuation", "selector"],
            style: {
                color: "rgb(199, 146, 234)",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "rgb(191, 199, 213)",
            },
        },
        {
            types: ["class-name", "attr-name"],
            style: {
                color: "rgb(255, 203, 107)",
            },
        },
        {
            types: ["tag", "deleted"],
            style: {
                color: "rgb(255, 85, 114)",
            },
        },
        {
            types: ["operator"],
            style: {
                color: "rgb(137, 221, 255)",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "rgb(255, 88, 116)",
            },
        },
        {
            types: ["keyword"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["doctype"],
            style: {
                color: "rgb(199, 146, 234)",
                fontStyle: "italic",
            },
        },
        {
            types: ["namespace"],
            style: {
                color: "rgb(178, 204, 214)",
            },
        },
        {
            types: ["url"],
            style: {
                color: "rgb(221, 221, 221)",
            },
        },
        {
            types: ["keyword", "variable"],
            style: {
                color: "#c792e9",
                fontStyle: "normal",
            },
        },
    ],
};

export default CodeCard; 