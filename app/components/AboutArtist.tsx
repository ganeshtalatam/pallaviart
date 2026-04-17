import Image from "next/image";

export default function AboutArtist() {
  return (
    <section id="about" className="py-24 bg-brand-bg text-brand-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-1 lg:order-1">
            <div className="polaroid-frame aspect-[3/4] relative w-full max-w-sm mx-auto z-10 animate-fade-in -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/assets/images/pallavi_profile.png" 
                alt="Pallavi - Artist" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="font-script text-brand-primary text-2xl">Pallavi</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute top-8 -right-4 lg:-right-8 w-64 h-64 border border-brand-accent/30 z-0 hidden sm:block"></div>
            <div className="absolute -bottom-8 -left-4 lg:-left-8 w-48 h-48 bg-brand-accent/20 z-0 hidden sm:block rounded-full"></div>
          </div>

          <div className="order-2 lg:order-2 space-y-8 animate-fade-in-up">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">The Artist Behind the Brush</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast leading-tight">
              Capturing Love & Light <br/>
              <span className="font-script text-brand-gold text-3xl md:text-4xl">on every canvas</span>
            </h3>
            
            <div className="space-y-4 text-brand-text/80 leading-relaxed font-light">
              <p>
                Hi,I am <strong>Pallavi</strong>, a dedicated visual artist specializing in transforming fleeting emotions into permanent memories. Whether through the refined strokes of a Live Wedding Painting or the playful energy of Glitter Art, my goal is to create art that resonates with your soul.
              </p>
              <p>
                My journey with art is deeply personal, and I bring that intimacy to every piece I create. Serving across India, I travel to your celebrations to document them in a way that photographs simply cannot - with heart, texture, and a touch of artistic magic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-accent/30">
              <div>
                <p className="text-4xl font-serif text-brand-primary mb-2">2+</p>
                <p className="text-xs uppercase tracking-wider font-semibold">Years in Art</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-primary mb-2">100+</p>
                <p className="text-xs uppercase tracking-wider font-semibold">Masterpieces</p>
              </div>
              <div>
                <svg className="w-9 h-9 text-brand-primary mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559"></path></svg>
                <p className="text-xs uppercase tracking-wider font-semibold">Serving All India</p>
              </div>
              <div>
                <svg className="w-9 h-9 text-brand-primary mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path></svg>
                <p className="text-xs uppercase tracking-wider font-semibold">Elite Artistry</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
