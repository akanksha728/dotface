"use client";

interface MegaMenuProps {
  type: "products" | "applications" | "features" | "about";
}

export default function MegaMenu({ type }: MegaMenuProps) {
  const menus = {
    products: {
      title: "Products",
      left: [
        "EOIR Payload",
        "Long Range ISR",
        "AI Intelligence Payload",
      ],
      right: [
        "Thermal Vision",
        "Target Tracking",
        "Telemetry Systems",
      ],
    },

    applications: {
      title: "Applications",
      left: [
        "Tactical ISR",
        "Border Surveillance",
        "Maritime Patrol",
      ],
      right: [
        "Search & Rescue",
        "Law Enforcement",
        "Disaster Response",
      ],
    },

    features: {
      title: "Features",
      left: [
        "AI Target Tracking",
        "EO / IR Fusion",
        "Thermal Intelligence",
      ],
      right: [
        "Satellite Telemetry",
        "Secure Communications",
        "3-Axis Stabilization",
      ],
    },

    about: {
      title: "About",
      left: [
        "Company Overview",
        "Mission & Vision",
        "Technology",
      ],
      right: [
        "Operational Evolution",
        "Defence Intelligence",
        "Contact Team",
      ],
    },
  };

  const menu = menus[type];

  return (
    <div className="relative w-[1050px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808]/95 shadow-2xl backdrop-blur-xl">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,198,180,0.06),transparent_35%)]" />

      <div className="relative z-10 grid grid-cols-2">
        
        {/* LEFT */}
        <div className="border-r border-white/10 p-10">
          
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#2EC6B4]">
            {menu.title}
          </p>

          <div className="space-y-4">
            {menu.left.map((item) => (
              <div
                key={item}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-5 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
              >
                <h3 className="text-2xl font-light text-white transition-all duration-300 group-hover:text-[#2EC6B4]">
                  {item}
                </h3>

                <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2EC6B4]">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between p-10">
          
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#2EC6B4]">
              Resources
            </p>

            <div className="space-y-4">
              {menu.right.map((item) => (
                <div
                  key={item}
                  className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-5 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
                >
                  <h4 className="text-xl font-light text-white/80 transition-all duration-300 group-hover:text-white">
                    {item}
                  </h4>

                  <span className="text-white/20 transition-all duration-300 group-hover:text-[#2EC6B4]">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}