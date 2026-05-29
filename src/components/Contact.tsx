export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(46,198,180,0.08),transparent_45%)]" />

      {/* Tactical Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-425 px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-16 bg-[#2EC6B4]" />
              <p className="text-sm uppercase tracking-[0.45em] text-[#2EC6B4]">
                Secure Communication
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] md:text-6xl">
              Mission Inquiry
              <br />
              Interface
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Connect with DOTFACE Systems for EO/IR payload solutions,
            surveillance platforms, defence intelligence systems, and tactical
            mission integrations.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 xl:grid-cols-[1fr_0.8fr]">
          {/* Left Contact Form */}
          <div className="relative overflow-hidden border border-white/10 bg-[#080808] p-8 lg:p-12">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,198,180,0.08),transparent_60%)]" />

            <div className="relative z-10">
              {/* Top Header */}
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                    Secure Transmission Channel
                  </p>

                  <h3 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-white">
                    Tactical Inquiry Form
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Encrypted
                </div>
              </div>

              {/* Form */}
              <form className="space-y-8">
                {/* Name + Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Operator Name"
                      className="h-14 w-full border border-white/10 bg-black px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="operator@domain.com"
                      className="h-14 w-full border border-white/10 bg-black px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                    />
                  </div>
                </div>

                {/* Organization + Phone */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                      Organization
                    </label>

                    <input
                      type="text"
                      placeholder="Agency / Company"
                      className="h-14 w-full border border-white/10 bg-black px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                      Contact Number
                    </label>

                    <input
                      type="text"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-14 w-full border border-white/10 bg-black px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                    Mission Requirement
                  </label>

                  <select className="h-14 w-full border border-white/10 bg-black px-5 text-sm tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]">
                    <option>EO/IR Payload Systems</option>
                    <option>AI Tracking Platform</option>
                    <option>Thermal Surveillance</option>
                    <option>ISR Integration</option>
                    <option>Autonomous Tracking</option>
                    <option>Custom Defence Solution</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.28em] text-white/55">
                    Mission Brief
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Describe operational requirements, deployment environment, payload specifications, and mission objectives..."
                    className="w-full border border-white/10 bg-black p-5 text-sm leading-relaxed tracking-[0.08em] text-white outline-none transition focus:border-[#2EC6B4]"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 pt-4">
                  <button className="border border-[#2EC6B4] bg-[#2EC6B4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-[#2EC6B4]">
                    Send Inquiry
                  </button>

                  <button className="border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]">
                    Download Specs
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Tactical Panels */}
          <div className="space-y-8">
            {/* Command Center Image */}
            <div className="relative overflow-hidden border border-white/10 bg-black">
              {/* Replace this image later */}
              {/* src/assets/contact/contact-visual.jpg */}

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                alt="Command Center"
                className="h-105 w-full object-cover opacity-75"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

              {/* HUD Corners */}
              <div className="absolute left-4 top-4 h-10 w-10 border-l border-t border-[#2EC6B4]" />
              <div className="absolute right-4 top-4 h-10 w-10 border-r border-t border-[#2EC6B4]" />
              <div className="absolute bottom-4 left-4 h-10 w-10 border-b border-l border-[#2EC6B4]" />
              <div className="absolute bottom-4 right-4 h-10 w-10 border-b border-r border-[#2EC6B4]" />

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/50 p-8 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Tactical Operations Center
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-white">
                  Mission Coordination Interface
                </h3>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {[
                ['Location', 'Noida, India'],
                ['Communication', 'Secure Line Active'],
                ['Response Time', '< 24 Hours'],
                ['Availability', '24/7 Operational'],
              ].map(([title, value]) => (
                <div key={title} className="bg-[#080808] p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    {title}
                  </p>

                  <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.06em] text-[#2EC6B4]">
                    {value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Tactical Status Panel */}
            <div className="border border-white/10 bg-[#080808] p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#2EC6B4]">
                  Operational Status
                </p>

                <span className="text-xs uppercase tracking-[0.25em] text-green-400">
                  ONLINE
                </span>
              </div>

              <div className="space-y-6">
                {[
                  ['AI Tracking Systems', 'ACTIVE'],
                  ['EO/IR Payload Ops', 'READY'],
                  ['Secure Telemetry', 'CONNECTED'],
                  ['Mission Control', 'STANDBY'],
                ].map(([system, status]) => (
                  <div
                    key={system}
                    className="flex items-center justify-between border-b border-white/5 pb-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-[#2EC6B4]" />

                      <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                        {system}
                      </p>
                    </div>

                    <span className="text-xs uppercase tracking-[0.25em] text-[#2EC6B4]">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                ['98%', 'Tracking Precision'],
                ['10KM+', 'Detection Range'],
                ['AI', 'Mission Intelligence'],
                ['EO/IR', 'Sensor Fusion'],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#080808] p-6">
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
