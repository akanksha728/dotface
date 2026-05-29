import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';

import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
} from 'react-icons/fa6';

export default function PremiumFooterSection() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] text-white">
            {/* Background Image */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/footer.png"
                    alt="Footer Background"
                    fill
                    priority
                    className="object-cover object-center opacity-40"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-[1] bg-black/60" />

            {/* Glow Overlay */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_bottom_left,rgba(46,198,180,0.12),transparent_45%)]" />

            {/* Tactical Grid */}
            <div
                className="absolute inset-0 z-[3] opacity-[0.06]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '70px 70px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1700px] px-6 lg:px-10">
                {/* Top CTA Banner */}
                <div className="relative overflow-hidden border-x border-b border-white/10 bg-[#070707]/80 px-8 py-14 backdrop-blur-sm lg:px-16 lg:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.08),transparent_60%)]" />

                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                                Mission Ready Intelligence
                            </p>

                            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-4xl">
                                Autonomous EO/IR Systems
                                <br />
                                For Modern Defence
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <button className="border border-[#2EC6B4] bg-[#2EC6B4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-[#2EC6B4]">
                                Request Demo
                            </button>

                            <button className="border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="grid gap-px bg-white/10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                    {/* Brand Block */}
                    <div className="bg-[#060606]/80 p-10 backdrop-blur-sm lg:p-14">
                        {/* Logo */}
                        <div className="mb-8 flex items-center gap-4">

                            <div>
                                <Image
                                    src="/images/dotface-logo.svg"
                                    alt="DOTFACE Logo"
                                    width={178}
                                    height={48}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <p className="max-w-md text-base leading-relaxed text-white/60">
                            AI-powered EO/IR surveillance platforms engineered
                            for tactical intelligence, autonomous tracking,
                            battlefield awareness, and defence-grade operational
                            environments.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
                            {[
                                ['98%', 'Tracking Accuracy'],
                                ['10KM+', 'Detection Range'],
                                ['EO/IR', 'Sensor Fusion'],
                                ['24/7', 'Persistent ISR'],
                            ].map(([value, label]) => (
                                <div
                                    key={label}
                                    className="bg-[#050505]/90 p-5"
                                >
                                    <h4 className="text-2xl font-black tracking-[0.08em] text-[#2EC6B4]">
                                        {value}
                                    </h4>

                                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/50">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="bg-[#060606]/80 p-10 backdrop-blur-sm lg:p-14">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-0.5 w-10 bg-[#2EC6B4]" />

                            <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                                Navigation
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                'Home',
                                'Products',
                                'Features',
                                'Applications',
                                'About',
                                'Contact',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="group flex items-center justify-between border-b border-white/5 pb-4 text-sm uppercase tracking-[0.22em] text-white/65 transition hover:text-[#2EC6B4]"
                                >
                                    {item}

                                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="bg-[#060606]/80 p-10 backdrop-blur-sm lg:p-14">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-0.5 w-10 bg-[#2EC6B4]" />

                            <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                                Systems
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                'DF-XR Payload',
                                'DF-OS Platform',
                                'Thermal Systems',
                                'AI Tracking',
                                'EO/IR Sensors',
                                'ISR Solutions',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="group flex items-center justify-between border-b border-white/5 pb-4 text-sm uppercase tracking-[0.22em] text-white/65 transition hover:text-[#2EC6B4]"
                                >
                                    {item}

                                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter + Social */}
                    <div className="bg-[#060606]/80 p-10 backdrop-blur-sm lg:p-14">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-0.5 w-10 bg-[#2EC6B4]" />

                            <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                                Secure Updates
                            </p>
                        </div>

                        <p className="text-base leading-relaxed text-white/60">
                            Receive product intelligence updates, EO/IR platform
                            releases, mission capability announcements, and
                            tactical system briefings.
                        </p>

                        {/* Newsletter */}
                        <div className="mt-8 space-y-4">
                            <input
                                type="email"
                                placeholder="operator@domain.com"
                                className="h-14 w-full border border-white/10 bg-black/70 px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                            />

                            <button className="w-full border border-[#2EC6B4] bg-[#2EC6B4] py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-[#2EC6B4]">
                                Subscribe
                            </button>
                        </div>

                        {/* Social */}
                        <div className="mt-10 flex items-center gap-4">
                            {[
                                FaInstagram,
                                FaLinkedinIn,
                                FaXTwitter,
                                FaYoutube,
                            ].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex h-14 w-14 items-center justify-center border border-white/10 bg-black/60 text-white/70 transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Strip */}
                <div className="flex flex-col gap-5 border-x border-t border-white/10 bg-[#040404]/90 px-8 py-6 text-sm uppercase tracking-[0.22em] text-white/45 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
                    <p>
                        © 2026 DOTFACE Systems — All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a
                            href="#"
                            className="transition hover:text-[#2EC6B4]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#2EC6B4]"
                        >
                            Terms & Conditions
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#2EC6B4]"
                        >
                            Secure Operations
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}