"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateProps {
    children: ReactNode;
    delay?: number;
}

export const AnimateFadeUp = ({ children, delay = 0 }: AnimateProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const AnimateScale = ({ children, delay = 0 }: AnimateProps) => (
    <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const AnimateFadeIn = ({ children, delay = 0 }: AnimateProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const AnimateInView = ({ children, delay = 0 }: AnimateProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
); 