'use client';

import { useState } from 'react';
import BackgroundGridBeams from '@/components/shared/BackgroundGridBeams';
import { MdOutlineEmail } from 'react-icons/md';
import { AnimateFadeUp, AnimateScale, AnimateFadeIn } from '@/components/client/Animate';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '@/app/actions/email';

interface EmailResult {
    success?: {
        id: string;
        from: string;
        to: string[];
        subject: string;
    };
    error?: {
        message: string;
        statusCode?: number;
    };
}

const techInterests = [
    'Web Development',
    'Data Science',
    'AI/ML',
    'Cloud',
    'Mobile',
    'DevOps',
    'Blockchain',
    'UI/UX'
];

export default function NewsletterSignup() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<EmailResult | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get('email') as string,
            name: formData.get('name') as string,
            interests: selectedInterests,
        };

        // Call the server action instead of making a fetch request
        const result = await sendEmail(data);

        if (result.success) {
            setResult({ success: result.success });
            setShowSuccess(true);
            (e.target as HTMLFormElement).reset();
        } else if (result.error) {
            setResult({ error: { message: result.error.message } });
        }

        setLoading(false);
    };

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    return (
        <div id="join" className="relative bg-slate-950 text-slate-200 py-16">
            <div className="mx-auto max-w-3xl px-4 md:px-8">
                <section className="relative z-20 flex flex-col items-center justify-center">
                    <AnimateFadeUp>
                        <div className="w-full">
                            <div className="text-center mb-12">
                                <AnimateScale>
                                    <span className="mb-6 inline-block rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-4xl shadow-md shadow-indigo-900">
                                        <MdOutlineEmail className="animate-pulse" />
                                    </span>
                                </AnimateScale>
                                <AnimateFadeUp delay={0.2}>
                                    <h1 className="mb-4 text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">
                                        Join Our Tech Community
                                    </h1>
                                </AnimateFadeUp>
                                <AnimateFadeIn delay={0.3}>
                                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                        Stay updated with Queenstown&apos;s tech scene. Get notified about meetups, workshops, and connect with local developers.
                                    </p>
                                </AnimateFadeIn>
                            </div>

                            <AnimatePresence mode="wait">
                                {!showSuccess ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                                            <div className="space-y-4">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="space-y-3"
                                                >
                                                    <h3 className="text-lg font-semibold text-slate-200">
                                                        Personal Details
                                                    </h3>
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            required
                                                            className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                            placeholder="you@example.com"
                                                        />
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="space-y-2"
                                                >
                                                    <h3 className="text-lg font-semibold text-slate-200">
                                                        Areas of Interest
                                                    </h3>
                                                    <p className="text-sm text-slate-400">
                                                        Select the topics you&apos;re interested in (optional)
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {techInterests.map((interest, index) => (
                                                            <motion.button
                                                                key={interest}
                                                                type="button"
                                                                onClick={() => toggleInterest(interest)}
                                                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedInterests.includes(interest)
                                                                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg'
                                                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                                                                    }`}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 0.4 + index * 0.05 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                {interest}
                                                            </motion.button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            <motion.button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 disabled:opacity-50 disabled:hover:scale-100"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {loading ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Signing up...
                                                    </span>
                                                ) : 'Join the Community'}
                                            </motion.button>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-xs text-slate-400 text-center mt-2"
                                            >
                                                By signing up, you&apos;ll receive our welcome email and occasional updates about the community.
                                            </motion.p>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="max-w-md mx-auto text-center bg-slate-900/50 rounded-xl p-6 border border-slate-800"
                                    >
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            className="text-5xl mb-4 inline-block"
                                        >
                                            🎉
                                        </motion.span>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-2xl font-bold text-indigo-400 mb-4"
                                        >
                                            Welcome to QTCC!
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-slate-300"
                                        >
                                            Check your inbox for our welcome email. We&apos;re excited to have you join our community!
                                        </motion.p>
                                        <motion.button
                                            onClick={() => setShowSuccess(false)}
                                            className="mt-6 text-indigo-400 hover:text-indigo-300 underline transition-colors duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Sign up another email
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {result?.error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="mt-6 max-w-md mx-auto bg-red-900/10 text-red-400 rounded-xl p-4 border border-red-900"
                                    >
                                        <p className="text-sm">
                                            {result.error.message}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </AnimateFadeUp>
                </section>
            </div>
            <BackgroundGridBeams />
        </div>
    );
} 