import {
  Crosshair,
  Cpu,
  ScanSearch,
  ShieldCheck,
  Waves,
  Boxes,
} from 'lucide-react';

export default function FeaturesCapabilitiesSection() {
  const features = [
    {
      title: 'Stabilized Gimbal',
      icon: Waves,
      description:
        '3-axis stabilized payload platform engineered for ultra-smooth precision imaging in dynamic environments.',
      stats: ['3-Axis Stability', 'Low Drift', 'Steady Imaging'],
    },
    {
      title: 'Multi-Spectral Sensors',
      icon: ScanSearch,
      description:
        'Integrated EO, IR, and optional dual-band sensor systems for advanced multi-spectrum surveillance.',
      stats: ['EO + IR', 'Dual Band', 'Sensor Fusion'],
    },
    {
      title: 'AI Targeting',
      icon: Crosshair,
      description:
        'Real-time AI detection, classification, and autonomous target tracking for tactical operations.',
      stats: ['AI Detection', 'Target Tracking', 'Object Classification'],
    },
    {
      title: 'Modular Interface',
      icon: Boxes,
      description:
        'Plug-and-play modular payload architecture compatible with multiple ISR deployment platforms.',
      stats: ['Plug & Play', 'Multi Platform', 'Flexible Payload'],
    },
    {
      title: 'Low Swap Latency',
      icon: Cpu,
      description:
        'High-bandwidth low-latency ISR processing pipeline optimized for real-time battlefield intelligence.',
      stats: ['Real-Time Feed', 'Fast Response', 'Low Latency'],
    },
    {
      title: 'Rugged & Reliable',
      icon: ShieldCheck,
      description:
        'Military-grade ruggedized hardware engineered for harsh environments and mission-critical reliability.',
      stats: ['IP Rated', 'Shock Resistant', 'Mission Ready'],
    },
        {
      title: 'EO / IR Fusion',
      icon: ScanSearch,
      description:
        'Dual-spectrum electro-optical and infrared imaging for day/night tactical reconnaissance operations.',
      stats: ['Day/Night Ops', 'Thermal Overlay', 'Long Range ISR'],
    },
    {
      title: 'Secure Communications',
      icon: ShieldCheck,
      description:
        'Encrypted telemetry and mission-critical communication architecture for secure operational deployment.',
      stats: ['Encrypted Link', 'Low Latency', 'Mission Secure'],
    },
  ];
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.07),transparent_55%)]" />

      {/* Tactical Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-16 bg-[#2EC6B4]" />

              <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                Core Capabilities
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-4xl">
              Advanced Defence
              <br />
              Intelligence Systems
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Mission-ready EO/IR payload technologies integrating artificial
            intelligence, thermal vision, telemetry systems, autonomous
            targeting, and tactical battlefield intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden bg-[#080808] p-8 transition duration-500 hover:bg-[#0D0D0D]"
              >
                {/* Hover Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2EC6B4] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Tactical Number */}
                <div className="absolute right-6 top-6 text-5xl font-black text-white/[0.04]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative mb-8 flex h-20 w-20 items-center justify-center border border-[#2EC6B4]/20 bg-[#2EC6B4]/5">
                  <Icon className="h-10 w-10 text-[#2EC6B4]" />

                  {/* HUD Corners */}
                  <div className="absolute left-1 top-1 h-3 w-3 border-l border-t border-[#2EC6B4]" />
                  <div className="absolute right-1 top-1 h-3 w-3 border-r border-t border-[#2EC6B4]" />
                  <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-[#2EC6B4]" />
                  <div className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-[#2EC6B4]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black uppercase leading-tight tracking-[0.06em] text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-white/60">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {feature.stats.map((stat) => (
                    <div
                      key={stat}
                      className="flex items-center gap-4 border-b border-white/5 pb-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#2EC6B4]" />

                      <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                        {stat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-24 overflow-hidden border border-white/10 bg-[#090909]">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div className="relative overflow-hidden bg-[#070707] p-10 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(46,198,180,0.08),transparent_60%)]" />

              <div className="relative z-10">
                <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                  Autonomous Mission Intelligence
                </p>

                <h3 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-4xl">
                  Precision Surveillance
                  <br />
                  For Modern Defence
                </h3>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
                  DOTFACE systems combine EO/IR sensing, AI-driven analytics,
                  telemetry fusion, and real-time tactical visualization into a
                  single mission-ready surveillance ecosystem.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                  <button className="border border-[#2EC6B4] bg-[#2EC6B4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-[#2EC6B4]">
                    Explore Platform
                  </button>

                  <button className="border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]">
                    Technical Specs
                  </button>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                ['98%', 'Tracking Precision'],
                ['4ms', 'AI Response Time'],
                ['24/7', 'Persistent ISR'],
                ['10KM+', 'Thermal Detection'],
                ['EO/IR', 'Sensor Fusion'],
                ['IP67', 'Ruggedized Hardware'],
                ['AI', 'Autonomous Tracking'],
                ['3-Axis', 'Stabilized Gimbal'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#070707] p-8">
                  <h3 className="text-3xl font-black tracking-widest text-[#2EC6B4]">
                    {value}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}