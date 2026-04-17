import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-[painterly-drift_25s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('/assets/images/pallavi_hero.png')` }}
      >
        {/* Deep, elegant dark overlay for high-contrast white text */}
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 mt-24 md:mt-16 animate-fade-in-up">
        <h1 className="text-3xl md:text-7xl font-serif text-white leading-[1.15] md:leading-tight drop-shadow-lg">
          Celebrating Life’s Magic <br/>
          <span className="font-script text-brand-gold lowercase text-3xl md:text-6xl block mt-4 md:mt-2 drop-shadow-md">through art</span>
        </h1>
        <p className="text-base md:text-xl text-white/90 font-light max-w-2xl mx-auto pt-4 pb-8 leading-relaxed drop-shadow-sm">
          From soulful live wedding paintings to the sparkle of glitter art, Pallavi transforms your most precious moments into timeless masterpieces.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/contact" className="px-8 py-4 bg-brand-primary text-brand-bg uppercase text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto text-center rounded-lg">
            Book your date
          </Link>
          <Link href="/portfolio" className="px-8 py-4 border border-white/30 text-white uppercase text-sm tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto text-center backdrop-blur-sm rounded-lg">
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
