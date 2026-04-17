import Link from "next/link";

const packages = [
  {
    title: "Essential Package",
    canvas: "18 x 24 inches",
    description: "Perfect for intimate weddings & capturing the couples' special moment.",
    features: [
      "Live painting for 4-5 hours",
      "Focus on the Couple",
      "Background elements slightly detailed",
      "Studio touch-ups if required",
      "Ready to hang canvas"
    ],
    highlight: false
  },
  {
    title: "Signature Package",
    canvas: "22 x 28 inches",
    description: "Our most popular choice. A grand display capturing family and detailed backdrop.",
    features: [
      "Live painting for 5-7 hours",
      "Couple + 2 Key Figures",
      "Highly detailed background & decor",
      "Guest entertainment interaction",
      "Studio touch-ups + Varnishing",
      "Ready to hang canvas + Delivery"
    ],
    highlight: true
  },
  {
    title: "Luxury Package",
    canvas: "24 x 36 inches",
    description: "The ultimate masterpiece. A panoramic capture of your grandest life event.",
    features: [
      "Full event live painting coverage",
      "Couple + Up to 6 Key Figures",
      "Intricate architectural & decor details",
      "Premium framing included",
      "Comprehensive studio refining",
      " VIP Shipping & Handling"
    ],
    highlight: false
  }
];

export default function Packages({ preview = false }: { preview?: boolean }) {
  return (
    <section id="packages" className={`py-24 bg-brand-light text-brand-text relative ${preview ? '' : 'min-h-screen'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Investment & Tiers</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
            Live Art Packages
          </h3>
          <p className="text-brand-text font-light max-w-2xl mx-auto pt-4">
            Creating heirlooms takes time, patience, and absolute focus. Explore our live wedding painting tiers designed to best suit your event scale and vision.
          </p>
          <div className="h-px w-24 bg-brand-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 transition-transform duration-500 hover:-translate-y-2 ${pkg.highlight ? 'bg-brand-primary text-brand-bg shadow-2xl border-none scale-105 z-10' : 'bg-white border border-brand-accent/30 shadow-lg'}`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-bg px-4 py-1 text-xs uppercase tracking-widest font-semibold rounded-full shadow-md z-20">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-4 mb-8">
                <h4 className={`text-2xl font-serif ${pkg.highlight ? 'text-brand-accent' : 'text-brand-primary'}`}>{pkg.title}</h4>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm tracking-widest uppercase opacity-70">Canvas Size:</span>
                  <span className={`text-lg font-semibold ${pkg.highlight ? 'text-white' : 'text-brand-contrast'}`}>{pkg.canvas}</span>
                </div>
                <p className={`font-light text-sm ${pkg.highlight ? 'opacity-90' : 'text-brand-text/80'}`}>
                  {pkg.description}
                </p>
              </div>

              {!preview && (
                <>
                  <div className="flex-1 mt-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className={`mr-3 mt-1 ${pkg.highlight ? 'text-brand-accent' : 'text-brand-primary'}`}>✓</span>
                          <span className={`text-sm ${pkg.highlight ? 'opacity-90 mt-1' : 'opacity-80 mt-1'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-8 border-t border-brand-accent/20">
                    <Link 
                      href="/contact" 
                      className={`block w-full py-4 text-center text-sm uppercase tracking-widest font-medium transition-colors ${pkg.highlight ? 'bg-brand-gold text-brand-bg hover:opacity-90' : 'bg-transparent border border-brand-contrast text-brand-contrast hover:bg-brand-contrast hover:text-brand-bg'}`}
                    >
                      Inquire Now
                    </Link>
                  </div>
                </>
              )}

            </div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link href="/packages" className="inline-block px-8 py-4 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              View All Package Details
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
