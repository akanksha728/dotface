export default function DFOSDashboardSection() {
  const cameras = [
    {
      id: 'CAM-01',
      target: 'TGT-07',
      status: 'TRACKING',
      image: '/images/cam1.jpeg',
    },
    {
      id: 'CAM-02',
      target: 'TGT-03',
      status: 'LOCKED',
      image: '/images/cam2.jpeg',
    },
    {
      id: 'CAM-03',
      target: 'TGT-11',
      status: 'ACTIVE',
      image: '/images/cam3.jpeg',
    },
    {
      id: 'CAM-04',
      target: 'TGT-15',
      status: 'TRACKING',
      image: '/images/cam4.jpeg',
    },
  ];

  return (
    <section
      id="dfos"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,198,180,0.08),transparent_40%)]" />

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
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-16 bg-[#2EC6B4]" />

              <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                DF-OS Command Interface
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-5xl">
              Tactical AI
              <br />
              Surveillance Platform
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            AI-powered battlefield surveillance integrating EO/IR tracking,
            telemetry visualization, thermal intelligence, autonomous target
            acquisition, and mission coordination.
          </p>
        </div>

        {/* Dashboard */}
        <div className="grid gap-8 xl:grid-cols-[1.6fr_0.75fr]">
          {/* LEFT SIDE */}
          <div className="overflow-hidden border border-white/10 bg-[#050505]">
            {/* TOP BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    System
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-[0.15em] text-[#2EC6B4]">
                    DF-OS v2.1.0
                  </h3>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  ONLINE
                </div>
              </div>

              {/* Modes */}
              <div className="flex flex-wrap gap-3">
                {['EO MODE', 'IR MODE', 'THERMAL', 'AI TRACK'].map(
                  (mode, index) => (
                    <button
                      key={mode}
                      className={`border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                        index === 3
                          ? 'border-[#2EC6B4] bg-[#2EC6B4]/10 text-[#2EC6B4]'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-[#2EC6B4] hover:text-[#2EC6B4]'
                      }`}
                    >
                      {mode}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* CAMERA GRID */}
            <div className="grid gap-[1px] bg-white/10 md:grid-cols-2">
              {cameras.map((camera, index) => (
                <div
                  key={camera.id}
                  className="group relative overflow-hidden bg-black"
                >
                  {/* IMAGE */}
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={camera.image}
                      alt={camera.id}
                      className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* Tactical Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />

                    {/* Top Bar */}
                    <div className="absolute left-0 top-0 flex w-full items-center justify-between border-b border-white/10 bg-black/50 px-5 py-4 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#2EC6B4]" />

                        <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                          {camera.id}
                        </p>
                      </div>

                      <p
                        className={`text-xs uppercase tracking-[0.28em] ${
                          camera.status === 'LOCKED'
                            ? 'text-red-500'
                            : 'text-[#2EC6B4]'
                        }`}
                      >
                        {camera.status}
                      </p>
                    </div>

                    {/* Crosshair */}
                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25">
                      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/25" />

                      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/25" />

                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2EC6B4] bg-[#2EC6B4]/20 shadow-[0_0_20px_#2EC6B4]" />
                    </div>

                    {/* Tracking Box */}
                    <div className="absolute left-[26%] top-[35%] h-20 w-20 border-2 border-[#2EC6B4]">
                      <div className="absolute -top-6 left-0 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#2EC6B4]">
                        {camera.target}
                      </div>
                    </div>

                    {/* Threat Box */}
                    {index % 2 === 0 && (
                      <div className="absolute bottom-[28%] right-[18%] h-16 w-16 border-2 border-red-500">
                        <div className="absolute -top-6 left-0 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-500">
                          THREAT
                        </div>
                      </div>
                    )}

                    {/* Bottom Telemetry */}
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-white/10 bg-black/55 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                      <span>RANGE 4.1KM</span>
                      <span>CONF 95%</span>
                      <span>LOCKED</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-8">
            {/* Threat Panel */}
            <div className="border border-white/10 bg-[#070707] p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Threat Priority
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-red-500">
                  HIGH ALERT
                </span>
              </div>

              <div className="space-y-5">
                {[
                  ['TGT-07', '4.1 KM', '#ff3b30'],
                  ['TGT-03', '3.7 KM', '#ff3b30'],
                  ['TGT-12', '2.1 KM', '#F6A623'],
                  ['TGT-21', '6.7 KM', '#2EC6B4'],
                ].map(([target, range, color]) => (
                  <div
                    key={target}
                    className="flex items-center justify-between border-b border-white/5 pb-4"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />

                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white">
                          {target}
                        </p>

                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                          UAV DETECTED
                        </p>
                      </div>
                    </div>

                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      {range}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Map */}
            <div className="overflow-hidden border border-white/10 bg-[#070707]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Mission Map
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-green-400">
                  LIVE
                </span>
              </div>

              <div className="relative">
                <img
                  src="/images/map.jpg"
                  alt="Mission Map"
                  className="h-[360px] w-full object-cover opacity-50"
                />

                <div className="absolute inset-0 bg-black/20" />

                {/* Dots */}
                <div className="absolute left-[25%] top-[40%] h-4 w-4 rounded-full border border-[#2EC6B4] bg-[#2EC6B4]/30 shadow-[0_0_20px_#2EC6B4]" />

                <div className="absolute left-[60%] top-[50%] h-4 w-4 rounded-full border border-red-500 bg-red-500/30 shadow-[0_0_20px_red]" />

                <div className="absolute left-[45%] top-[30%] h-4 w-4 rounded-full border border-[#F6A623] bg-[#F6A623]/30 shadow-[0_0_20px_#F6A623]" />

                {/* Lines */}
                <div className="absolute left-[27%] top-[42%] h-[2px] w-[180px] rotate-[12deg] bg-[#2EC6B4]" />

                <div className="absolute left-[48%] top-[33%] h-[2px] w-[120px] rotate-[60deg] bg-red-500" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-[1px] bg-white/10">
              {[
                ['98%', 'Tracking Accuracy'],
                ['4ms', 'Response Time'],
                ['16', 'Targets Monitored'],
                ['24/7', 'Operational Mode'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#070707] p-6">
                  <h3 className="text-3xl font-black tracking-[0.12em] text-[#2EC6B4]">
                    {value}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/50">
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