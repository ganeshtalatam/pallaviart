import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPreview({ preview = false }: { preview?: boolean }) {
  return (
    <section id="portfolio" className="py-24 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Featured Masterpieces</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
            A Glimpse into the Gallery
          </h3>
          <p className="text-brand-text font-light max-w-2xl mx-auto pt-4">
            Browse through a curated collection of live event paintings, turmeric magic, and custom artworks transformed into eternal memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-brand-accent/20">
            <Image 
              src="/assets/images/service_wedding.png" 
              alt="Live Wedding Painting" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-brand-primary font-serif text-2xl tracking-wide uppercase">Live Events</span>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-brand-accent/20">
            <Image 
              src="/assets/images/service_turmeric_magic.png" 
              alt="Turmeric Magic Art" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-brand-primary font-serif text-2xl tracking-wide uppercase">Turmeric Magic</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-brand-accent/20">
            <Image 
              src="/assets/images/service_glitter.png" 
              alt="Glitter Art" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-brand-primary font-serif text-2xl tracking-wide uppercase">Glitter Art</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-brand-accent/20">
            <Image 
              src="/assets/images/service_custom.png" 
              alt="Custom Artwork" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-brand-primary font-serif text-2xl tracking-wide uppercase">Custom Artwork</span>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          {preview ? (
            <Link href="/portfolio" className="inline-block px-8 py-3 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              Explore Full Portfolio
            </Link>
          ) : (
            <a href="https://www.instagram.com/_shades.of.soul_/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              View Instagram Gallery
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
