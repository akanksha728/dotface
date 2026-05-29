export default function AboutCompanySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#040404] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,198,180,0.08),transparent_45%)]" />

      {/* Tactical Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-[2px] w-16 bg-[#2EC6B4]" />
              <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                About DOTFACE Systems
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-6xl">
              From Pixel
              <br />
              To Precision
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            DOTFACE Systems develops AI-powered EO/IR intelligence platforms
            engineered for defence, surveillance, reconnaissance, and tactical
            battlefield awareness.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div className="relative overflow-hidden border border-white/10 bg-[#080808] p-10 lg:p-16">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(46,198,180,0.08),transparent_60%)]" />

            <div className="relative z-10">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                Vision Intelligence Architecture
              </p>

              <h3 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-5xl">
                Engineering Tactical
                <br />
                Vision Dominance
              </h3>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/65">
                DOTFACE Systems represents precision vision intelligence. The
                square-dot identity reflects pixel-level accuracy transformed
                into actionable battlefield intelligence.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
                Our platforms integrate EO/IR sensing, AI-assisted analytics,
                telemetry systems, and autonomous tracking technologies into
                defence-grade surveillance ecosystems designed for modern
                operational environments.
              </p>

              {/* Philosophy Blocks */}
              <div className="mt-14 grid gap-[1px] bg-white/10 md:grid-cols-2">
                {[
                  [
                    'Precision Engineering',
                    'Mission-ready hardware and stabilized ISR payload systems built for extreme environments.',
                  ],
                  [
                    'AI Vision Systems',
                    'Real-time target detection, classification, and autonomous surveillance intelligence.',
                  ],
                  [
                    'Battlefield Awareness',
                    'Integrated telemetry and EO/IR analytics delivering tactical operational visibility.',
                  ],
                  [
                    'Secure Architecture',
                    'Encrypted communication pipelines and resilient operational infrastructure.',
                  ],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-[#050505] p-8">
                    <div className="mb-5 h-1 w-16 bg-[#2EC6B4]" />

                    <h4 className="text-2xl font-black uppercase tracking-[0.06em] text-white">
                      {title}
                    </h4>

                    <p className="mt-5 text-base leading-relaxed text-white/60">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative overflow-hidden border border-white/10 bg-black">
              {/* Replace this image later */}
              {/* src/assets/about/about-main.jpg */}

              <img
                src="/images/about.png"
                alt="DOTFACE Systems"
                className="h-[500px] w-full object-cover opacity-80"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* Tactical Corners */}
              <div className="absolute left-4 top-4 h-10 w-10 border-l border-t border-[#2EC6B4]" />
              <div className="absolute right-4 top-4 h-10 w-10 border-r border-t border-[#2EC6B4]" />
              <div className="absolute bottom-4 left-4 h-10 w-10 border-b border-l border-[#2EC6B4]" />
              <div className="absolute bottom-4 right-4 h-10 w-10 border-b border-r border-[#2EC6B4]" />

              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/50 p-8 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Defence Intelligence Systems
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-white">
                  Tactical Surveillance Architecture
                </h3>
              </div>
            </div>

            {/* Timeline / Stats */}
            <div className="grid gap-[1px] bg-white/10 md:grid-cols-2">
              {[
                ['AI', 'Autonomous Tracking'],
                ['EO/IR', 'Sensor Fusion'],
                ['24/7', 'Persistent Surveillance'],
                ['IP67', 'Mission-Ready Hardware'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#080808] p-8">
                  <h3 className="text-3xl font-black tracking-[0.1em] text-[#2EC6B4]">
                    {value}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline Block */}
            <div className="border border-white/10 bg-[#080808] p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Operational Evolution
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-green-400">
                  ACTIVE DEVELOPMENT
                </span>
              </div>

              <div className="space-y-8">
                {[
                  ['2024', 'Concept & ISR Research'],
                  ['2025', 'AI Tracking Architecture'],
                  ['2026', 'EO/IR Payload Systems'],
                  ['NEXT', 'Autonomous Tactical Networks'],
                ].map(([year, text]) => (
                  <div
                    key={year}
                    className="flex items-start gap-5 border-b border-white/5 pb-6 last:border-b-0"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-[#2EC6B4]/20 bg-[#2EC6B4]/5 text-sm font-bold tracking-[0.1em] text-[#2EC6B4]">
                      {year}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-[0.08em] text-white">
                        {text}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        Mission-focused defence intelligence development aligned
                        with modern surveillance and tactical operational needs.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-24 overflow-hidden border border-white/10 bg-[#070707] p-10 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.08),transparent_60%)]" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                DOTFACE Systems
              </p>

              <h3 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-4xl">
                Building The Future
                <br />
                Of Tactical Intelligence
              </h3>
            </div>

            <div className="flex flex-wrap gap-5">
              <button className="border border-[#2EC6B4] bg-[#2EC6B4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-[#2EC6B4]">
                Explore Platform
              </button>

              <button className="border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]">
                Contact Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
