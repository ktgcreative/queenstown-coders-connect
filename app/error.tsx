'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
    const searchParams = useSearchParams()
    const errorMessage = searchParams.get('message') || 'An unknown error occurred'

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
                <p className="text-slate-400 mb-8">
                    {errorMessage}
                    <ul className="list-disc text-left mt-4 inline-block">
                        <li>Invalid or expired authentication token</li>
                        <li>Missing or incorrect credentials</li>
                        <li>Server-side processing error</li>
                    </ul>
                </p>
                <Link
                    href="/login"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Return to Login
                </Link>
            </div>
        </div>
    )
}