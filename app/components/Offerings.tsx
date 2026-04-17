import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Art Gallery",
    subtitle: "Aesthetic Collections",
    desc: "A curated space filled with soulful, hand-painted masterpieces that speak to the heart.",
    image: "/assets/images/service_gallery.png"
  },
  {
    title: "Live Wedding Artist",
    subtitle: "Vows on Canvas",
    desc: "Experience the magic as your most sacred moments are captured in real-time, creating a museum-quality heirloom.",
    image: "/assets/images/service_wedding.png"
  },
  {
    title: "Turmeric Magic",
    subtitle: "Interactive Haldi Art",
    desc: "A one-of-a-kind interactive experience where your portrait is brought to life using turmeric paste and guest participation.",
    image: "/assets/images/service_turmeric_magic.png"
  },
  {
    title: "Glitter Art",
    subtitle: "Stardust & Sparkle",
    desc: "Stunning contemporary pieces that use real sparkle to elevate the energy and glamour of any subject.",
    image: "/assets/images/service_glitter.png"
  },
  {
    title: "Custom Artwork",
    subtitle: "Made just for you",
    desc: "From personalized portraits to bespoke commissions, bring your unique vision to life through my brush.",
    image: "/assets/images/service_custom.png"
  }
];

export default function Offerings({ limit }: { limit?: number }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="offerings" className="py-24 bg-brand-light text-brand-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Art Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
            Freezing Moments & Emotions via Art
          </h3>
          <div className="h-px w-24 bg-brand-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-brand-accent/30 hover:border-brand-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center space-y-3">
                <h4 className="text-xl font-serif text-brand-primary">{service.title}</h4>
                <p className="text-xs uppercase tracking-widest text-brand-text/70 opacity-80">{service.subtitle}</p>
                <p className="text-sm text-brand-text/90 font-light pt-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-16">
            <Link href="/services" className="inline-block px-8 py-4 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              View All Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
