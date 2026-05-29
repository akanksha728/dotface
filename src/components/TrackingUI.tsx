export default function TrackingInterfaceSection() {
  return (
    <section
      id="tracking"
      className="relative overflow-hidden bg-black py-16 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.08),transparent_60%)]" />

      {/* Tactical Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1900px] px-5">

        {/* MAIN GRID */}
        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr_1fr]">
          {/* LEFT PANEL */}
          <div className="overflow-hidden border border-white/10 bg-[#050505]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-5">
                <span className="text-xl font-black tracking-[0.15em] text-white/90">
                  01
                </span>

                <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                  Drone Tracking View
                </p>
              </div>

              <div className="text-xs uppercase tracking-[0.25em] text-green-400">
                Active
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative h-[720px] overflow-hidden">
              <img
                src="/images/tracking-main.jpg"
                alt="Tracking"
                className="h-full w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-black/35" />

              {/* HUD GRID */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                  backgroundSize: '45px 45px',
                }}
              />

              {/* CROSSHAIR */}
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/30" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/30" />

                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2EC6B4] bg-[#2EC6B4]/20 shadow-[0_0_20px_#2EC6B4]" />
              </div>

              {/* TARGET BOXES */}
              <div className="absolute left-[32%] top-[35%] h-18 w-18 border-2 border-lime-400">
                <div className="absolute -top-6 left-0 bg-black/80 px-2 py-1 text-xs uppercase tracking-[0.2em] text-lime-400">
                  TGT-01
                </div>
              </div>

              <div className="absolute left-[70%] top-[48%] h-22 w-22 border-2 border-red-500">
                <div className="absolute -top-6 left-0 bg-black/80 px-2 py-1 text-xs uppercase tracking-[0.2em] text-red-500">
                  TGT-03
                </div>
              </div>

              {/* LEFT MENU */}
              <div className="absolute left-0 top-0 flex h-full w-24 flex-col border-r border-white/10 bg-black/70 backdrop-blur-md">
                {[
                  'SCAN',
                  'TRACK',
                  'MAP',
                  'AI',
                  'SYS',
                ].map((item, index) => (
                  <button
                    key={item}
                    className={`flex flex-1 items-center justify-center border-b border-white/10 text-xs uppercase tracking-[0.28em] transition ${
                      index === 1
                        ? 'bg-[#2EC6B4]/10 text-[#2EC6B4]'
                        : 'text-white/60 hover:text-[#2EC6B4]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* RIGHT TELEMETRY */}
              <div className="absolute right-5 top-5 w-56 border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                <div className="mb-5 border-b border-white/10 pb-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Target Data
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[0.12em] text-red-500">
                    TGT-03
                  </h3>
                </div>

                {[
                  ['Range', '3.7 KM'],
                  ['Speed', '68 KM/H'],
                  ['Altitude', '245 M'],
                  ['Heading', '124°'],
                  ['Confidence', '95%'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-white/5 py-4 last:border-b-0"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {label}
                    </span>

                    <span className="text-sm font-bold tracking-[0.15em] text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* BOTTOM BAR */}
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-white/10 bg-black/70 px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {['EO', 'IR', 'NV'].map((mode, index) => (
                    <button
                      key={mode}
                      className={`border px-5 py-2 text-xs uppercase tracking-[0.25em] ${
                        index === 1
                          ? 'border-[#2EC6B4] bg-[#2EC6B4]/10 text-[#2EC6B4]'
                          : 'border-white/10 text-white/60'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                <div className="text-xs uppercase tracking-[0.35em] text-white/50">

                <img
                      src="/images/ai_target.png"
                      alt="Camera Feed"
                      className="h-56 w-full object-cover opacity-80"
                    />
                  Auto Tracking Enabled
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="space-y-5">
            {/* COMMAND INTERFACE */}
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                  CUAS Command Interface
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-red-500">
                  Threat Level: High
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/10">
                {[
                  '/images/cam1.jpg',
                  '/images/cam2.jpg',
                  '/images/cam3.jpg',
                  '/images/cam4.jpg',
                ].map((img, i) => (
                  <div key={i} className="relative bg-black">
                    <img
                      src="/images/camera.png"
                      alt="Camera Feed"
                      className="h-56 w-full object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-black/25" />
                  </div>
                ))}
              </div>
            </div>

            {/* SENSOR MODES */}
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <div className="border-b border-white/10 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Sensor Modes
                </p>
              </div>

              <img
                src="/images/thermal.jpg"
                alt="Thermal"
                className="h-[340px] w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* HANDHELD VIEW */}
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                  Handheld Optics View
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-[#2EC6B4]">
                  IR
                </span>
              </div>

              <div className="relative">
                <img
                  src="/images/handheld.jpg"
                  alt="Handheld"
                  className="h-[420px] w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/30" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/30" />
                </div>
              </div>
            </div>

            {/* MISSION MAP */}
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <div className="border-b border-white/10 px-5 py-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Mission Map
                </p>
              </div>

              <img
                src="/images/map.jpg"
                alt="Map"
                className="h-[260px] w-full object-cover opacity-80"
              />
            </div>

            {/* STATUS GRID */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                ['98%', 'Tracking Accuracy'],
                ['15 KM', 'Detection Range'],
                ['EO/IR', 'Sensor Fusion'],
                ['24/7', 'Mission Ready'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#050505] p-6">
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