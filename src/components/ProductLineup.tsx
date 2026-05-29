export default function ProductLineupSection() {
    const products = [
        {
            id: 'XR',
            title: 'EOIR PAYLOAD',
            accent: '#2EC6B4',

            description:
                'Balanced performance. Multi-mission ready.',

            specs: [
                '30x Optical Zoom',
                '640×512 Thermal Resolution',
                'AI Target Tracking',
                '≤1.25 kg Payload Weight',
            ],

            image: '/images/xr.png',
        },

        {
            id: 'LR',
            title: 'LONG RANGE ISR',
            accent: '#F6A623',

            description:
                'See farther. Detect first. Stay ahead.',

            specs: [
                '60x Optical Zoom',
                '1280×1024 Thermal Resolution',
                'LRF Up To 10 km',
                '≤2.20 kg Payload Weight',
            ],

            image: '/images/lr.png',
        },

        {
            id: 'AI+',
            title: 'INTELLIGENCE PAYLOAD',
            accent: '#2EC6B4',

            description:
                'Onboard intelligence. Smarter missions.',

            specs: [
                'AI Edge Compute',
                'Multi-Target Tracking',
                'Object Classification',
                '≤1.40 kg Payload Weight',
            ],

            image: '/images/ai-plus.png',
        },
    ];

    return (
        <section
            id="products"
            className="relative overflow-hidden bg-[#050505] py-24 text-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,198,180,0.08),transparent_60%)]" />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1700px] px-6 lg:px-10">
                {/* Section Header */}
                <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-0.5 w-16 bg-[#2EC6B4]" />

                            <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                                Product Lineup
                            </p>
                        </div>

                        <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-6xl">
                            ISR Payload
                            <br />
                            Family
                        </h2>
                    </div>

                    <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                        AI-powered EO/IR payload systems engineered for tactical
                        ISR, reconnaissance, surveillance, and autonomous
                        battlefield intelligence.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid gap-8 xl:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden border border-white/10 bg-[#0B0B0B] transition duration-500 hover:border-[#2EC6B4]/40"
                        >
                            {/* Accent Line */}
                            <div
                                className="absolute left-0 top-0 h-full w-[2px]"
                                style={{ backgroundColor: product.accent }}
                            />

                            {/* Product Image */}
                            <div className="relative h-[620px] overflow-hidden border-b border-white/10 bg-[#050505] xl:h-[720px]">
                                {/* Main Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.id}
                                    className="h-full w-full object-contain object-center scale-[0.92] p-10 transition duration-700 group-hover:scale-100"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                {/* Tactical HUD Corners */}
                                <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#2EC6B4]" />
                                <div className="absolute right-6 top-6 h-10 w-10 border-r border-t border-[#2EC6B4]" />
                                <div className="absolute bottom-6 left-6 h-10 w-10 border-b border-l border-[#2EC6B4]" />
                                <div className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#2EC6B4]" />

                                {/* Product Badge */}
                                <div className="absolute left-8 top-8 border border-white/10 bg-black/80 px-5 py-2 backdrop-blur-md">
                                    <p
                                        className="text-sm font-bold uppercase tracking-[0.35em]"
                                        style={{ color: product.accent }}
                                    >
                                        DOTFACE
                                    </p>
                                </div>

                                {/* Product Text */}
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <h3
                                        className="text-4xl font-black tracking-[0.08em]"
                                        style={{ color: product.accent }}
                                    >
                                        {product.id}
                                    </h3>

                                    <p className="mt-3 text-2xl uppercase tracking-[0.25em] text-white/90">
                                        {product.title}
                                    </p>

                                    <div
                                        className="mt-6 h-[2px] w-20"
                                        style={{
                                            backgroundColor: product.accent,
                                        }}
                                    />

                                    <p className="mt-6 max-w-sm text-xl leading-relaxed text-white/80">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="border-t border-white/10 bg-[#070707] p-8">
                                {/* Specs */}
                                <div className="space-y-5">
                                    {product.specs.map((spec) => (
                                        <div
                                            key={spec}
                                            className="flex items-center gap-4 border-b border-white/5 pb-5"
                                        >
                                            <div
                                                className="h-2.5 w-2.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        product.accent,
                                                }}
                                            />

                                            <p className="text-sm uppercase tracking-[0.22em] text-white/75">
                                                {spec}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Label */}
                                <div
                                    className="mt-10 border-t border-white/10 pt-6 text-center text-xs font-medium uppercase tracking-[0.35em]"
                                    style={{ color: product.accent }}
                                >
                                    {product.id === 'XR' &&
                                        'Compact | Versatile | Reliable'}

                                    {product.id === 'LR' &&
                                        'Extended Range | High Sensitivity | Surveillance Dominance'}

                                    {product.id === 'AI+' &&
                                        'AI-Powered | Real-Time Insights | Mission Autonomy'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Technical Stats */}
                <div className="mt-24 grid border border-white/10 bg-[#0A0A0A] md:grid-cols-4">
                    {[
                        ['3-Axis', 'Stabilized Gimbal'],
                        ['EO / IR', 'Multi-Spectral Sensors'],
                        ['AI', 'Real-Time Tracking'],
                        ['IP67', 'Mission Ready Hardware'],
                    ].map(([value, label]) => (
                        <div
                            key={label}
                            className="border-b border-r border-white/10 p-8 last:border-r-0 md:border-b-0"
                        >
                            <h3 className="text-3xl font-black tracking-[0.15em] text-[#2EC6B4]">
                                {value}
                            </h3>

                            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}