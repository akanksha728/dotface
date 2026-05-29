import {
  Shield,
  Radar,
  Ship,
  Search,
  Siren,
  Mountain,
} from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      title: 'Tactical ISR',
      icon: Shield,
      description:
        'Persistent intelligence, surveillance, and reconnaissance operations for mission-critical battlefield awareness.',
      image: '/images/Tactical.jpeg',
      stats: ['24/7 Monitoring', 'AI Tracking', 'Secure Link'],
    },

    {
      title: 'Border Surveillance',
      icon: Radar,
      description:
        'Autonomous perimeter monitoring with long-range thermal detection and intrusion intelligence systems.',
      image: '/images/Border.jpeg',
      stats: ['Thermal Detection', 'Long Range ISR', 'EO/IR Fusion'],
    },

    {
      title: 'Maritime Patrol',
      icon: Ship,
      description:
        'Real-time maritime domain awareness for coastal surveillance, vessel tracking, and threat identification.',
      image: '/images/Maritime.jpeg',
      stats: ['Sea-State Tracking', 'Thermal Vision', 'Target Lock'],
    },

    {
      title: 'Search & Rescue',
      icon: Search,
      description:
        'Rapid aerial intelligence support for disaster zones, emergency response, and missing-person detection.',
      image: '/images/Rescue.jpeg',
      stats: ['Heat Signature', 'Rapid Deployment', 'Live Mapping'],
    },

    {
      title: 'Law Enforcement',
      icon: Siren,
      description:
        'Urban tactical monitoring and AI-assisted tracking systems for law enforcement operations.',
      image: '/images/Enforcement.jpeg',
      stats: ['Vehicle Tracking', 'AI Recognition', 'Evidence Capture'],
    },

    {
      title: 'Disaster Response',
      icon: Mountain,
      description:
        'Terrain intelligence systems for flood monitoring, wildfire assessment, and infrastructure analysis.',
      image: '/images/tracking-main.jpg',
      stats: ['Terrain Mapping', 'Thermal Scan', 'Mission Analytics'],
    },
  ];

  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,198,180,0.08),transparent_40%)]" />

      {/* Tactical Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1750px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-16 bg-[#2EC6B4]" />

              <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                Operational Applications
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-5xl">
              Mission-Ready
              <br />
              Deployment Systems
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Advanced EO/IR and AI surveillance systems engineered for defence,
            law enforcement, border monitoring, maritime operations, and
            disaster response.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {applications.map((app, index) => {
            const Icon = app.icon;

            return (
              <div
                key={app.title}
                className="group relative overflow-hidden border border-white/10 bg-[#080808] transition-all duration-500 hover:-translate-y-2 hover:border-[#2EC6B4]/50"
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[#2EC6B4]" />

                {/* IMAGE SECTION */}
                <div className="relative h-[420px] overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-cover object-center opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* HUD Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '45px 45px',
                    }}
                  />

                  {/* HUD Corners */}
                  <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-[#2EC6B4]" />
                  <div className="absolute right-5 top-5 h-10 w-10 border-r border-t border-[#2EC6B4]" />
                  <div className="absolute bottom-5 left-5 h-10 w-10 border-b border-l border-[#2EC6B4]" />
                  <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-[#2EC6B4]" />

                  {/* TOP LABEL */}
                  <div className="absolute left-6 top-6 flex items-center gap-3 border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-[#2EC6B4]" />

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                        Sector
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/90">
                        {`0${index + 1}`}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="absolute right-6 top-6 border border-[#2EC6B4]/30 bg-[#2EC6B4]/10 px-4 py-2 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#2EC6B4]">
                      ACTIVE
                    </p>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#2EC6B4]">
                      Deployment Mode
                    </p>

                    <h3 className="text-4xl font-black uppercase leading-tight tracking-[0.08em] text-white">
                      {app.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="bg-[#070707] p-8">
                  <p className="text-base leading-relaxed text-white/65">
                    {app.description}
                  </p>

                  {/* STATS */}
                  <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                    {app.stats.map((stat) => (
                      <div
                        key={stat}
                        className="flex items-center justify-between border-b border-white/5 pb-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#2EC6B4]" />

                          <p className="text-sm uppercase tracking-[0.22em] text-white/75">
                            {stat}
                          </p>
                        </div>

                        <span className="text-xs uppercase tracking-[0.25em] text-[#2EC6B4]">
                          ONLINE
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-10 flex w-full items-center justify-between border border-white/10 bg-white/[0.02] px-6 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-[#2EC6B4] hover:bg-[#2EC6B4]/10 hover:text-[#2EC6B4]">
                    Explore Use Case

                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-24 overflow-hidden border border-white/10 bg-[#080808]">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.08),transparent_60%)]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1fr_0.65fr] lg:p-16">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                Integrated Defence Intelligence
              </p>

              <h3 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-5xl">
                Autonomous Surveillance
                <br />
                Across Every Terrain
              </h3>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60">
                AI-enabled EO/IR surveillance architecture engineered for
                persistent situational awareness, tactical reconnaissance,
                thermal intelligence, and mission-critical threat detection.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-[1px] bg-white/10">
              {[
                ['98%', 'Tracking Accuracy'],
                ['24/7', 'Persistent ISR'],
                ['10KM+', 'Target Detection'],
                ['AI', 'Autonomous Analysis'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#050505] p-7">
                  <h3 className="text-4xl font-black tracking-[0.1em] text-[#2EC6B4]">
                    {value}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/55">
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