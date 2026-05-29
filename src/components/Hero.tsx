export default function DotfaceHeroSection() {
  return (
    <section  id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      {/* Replace this video later with your own cinematic footage */}
      {/* File Path: src/assets/videos/hero-defense.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      >
        <source
          src="/videos/payload.mp4"
          type="video/mp4"
        />
      </video>

      {/* Tactical Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,198,180,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-black/50" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center px-8 lg:px-20">
        <div className="max-w-4xl">

          <h3 className="text-5xl font-black leading-[1.05] tracking-[0.08em] text-white md:text-7xl lg:text-6xl">
            FROM PIXEL
            <br />
            TO PRECISION
          </h3>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Defence-grade EO/IR intelligence systems engineered for
            surveillance, target acquisition, autonomous tracking, and
            real-time battlefield awareness.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <button className="border border-[#2EC6B4] bg-[#2EC6B4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:scale-105 hover:bg-transparent hover:text-[#2EC6B4]">
              Explore Products
            </button>

            <button className="border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#2EC6B4] hover:text-[#2EC6B4]">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 z-20 grid w-full grid-cols-2 border-t border-white/10 bg-black/50 backdrop-blur-sm md:grid-cols-4">
        {[
          ["15 KM", "Detection Range"],
          ["AI", "Target Tracking"],
          ["EO / IR", "Dual Sensors"],
          ["IP67", "Mission Ready"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-r border-white/10 px-6 py-6 last:border-r-0"
          >
            <h3 className="text-2xl font-bold tracking-[0.15em] text-[#2EC6B4]">
              {value}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
