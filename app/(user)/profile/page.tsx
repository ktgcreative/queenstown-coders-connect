import { redirect } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'
import { createClient } from '@/utils/supabase/server'
import BackgroundGridBeams from '@/components/shared/BackgroundGridBeams'
import { AnimateFadeUp, AnimateScale } from '@/components/client/Animate'
import OuterCardGlow from '@/components/shared/OuterCardGlow'

export default async function ProfilePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className="relative min-h-[100vh] overflow-hidden bg-slate-950 text-slate-200 pt-16">
            <div className="mx-auto h-full max-w-7xl px-4 md:px-8">
                <section className="relative z-20 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-16">
                    <div className="w-full max-w-md">
                        <AnimateFadeUp>
                            <div className="text-center">
                                <AnimateScale>
                                    <span className="mb-6 inline-block rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-4xl shadow-md shadow-indigo-900">
                                        <FaUserCircle />
                                    </span>
                                </AnimateScale>
                                <AnimateFadeUp delay={0.2}>
                                    <h1 className="mb-4 text-4xl font-bold leading-tight">
                                        Your Profile
                                    </h1>
                                </AnimateFadeUp>
                                <AnimateFadeUp delay={0.3}>
                                    <p className="mb-8 text-lg leading-relaxed text-slate-400">
                                        Welcome back to QT Coders
                                    </p>
                                </AnimateFadeUp>
                            </div>
                        </AnimateFadeUp>

                        <AnimateFadeUp delay={0.4}>
                            <OuterCardGlow>
                                <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-3xl">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">
                                                Email
                                            </label>
                                            <div className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-500/20 text-slate-200">
                                                {data.user.email}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">
                                                Member Since
                                            </label>
                                            <div className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-500/20 text-slate-200">
                                                {new Date(data.user.created_at).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <form action="/auth/signout" method="post">
                                                <button
                                                    type="submit"
                                                    className="w-full rounded-full border border-slate-700 bg-slate-900 px-8 py-3 text-lg font-medium text-slate-200 transition-all duration-300 hover:bg-slate-800"
                                                >
                                                    Sign out
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </OuterCardGlow>
                        </AnimateFadeUp>
                    </div>
                </section>
            </div>
            <BackgroundGridBeams />
        </div>
    )
}