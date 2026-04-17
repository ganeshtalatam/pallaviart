import Link from "next/link";

export default function Contact({ preview = false }: { preview?: boolean }) {
  if (preview) {
    return (
      <section className="bg-brand-contrast py-28 text-brand-bg relative text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="text-4xl md:text-5xl font-serif text-brand-bg leading-normal">
            Ready to Capture Live Wedding Painting?
          </h3>
          <p className="text-brand-bg/80 font-light text-lg max-w-2xl mx-auto">
            My calendar fills up quickly for the wedding season across India. Let's create beautiful art together.
          </p>
          <div className="pt-6">
            <Link href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-brand-gold to-brand-light-gold text-brand-bg font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-full shadow-xl">
              INQUIRE NOW
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-contrast py-24 text-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Let's Connect</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-bg">
              Ready to Book Your Live Artist?
            </h3>
            <p className="text-brand-bg/80 font-light max-w-md mx-auto lg:mx-0">
              Transform your most precious moments into fine art. Prebook now to secure your dates for weddings, events, or custom portrait commissions.
            </p>
          </div>

          <form className="bg-black/20 p-8 md:p-10 border border-brand-bg/10 rounded-sm mx-auto lg:mx-0 lg:ml-auto w-full max-w-lg space-y-5 text-left shadow-2xl">
            <h4 className="text-2xl font-serif text-brand-gold text-center mb-6">Send an Inquiry</h4>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-bg/70 block">Your Name</label>
              <input type="text" id="name" required className="w-full bg-brand-bg/5 border border-brand-bg/20 rounded-sm px-4 py-3 text-brand-bg focus:outline-none focus:border-brand-gold transition-colors" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-bg/70 block">Email Address</label>
              <input type="email" id="email" required className="w-full bg-brand-bg/5 border border-brand-bg/20 rounded-sm px-4 py-3 text-brand-bg focus:outline-none focus:border-brand-gold transition-colors" />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-xs uppercase tracking-widest text-brand-bg/70 block">Event Date</label>
              <input type="date" id="date" className="w-full bg-brand-bg/5 border border-brand-bg/20 rounded-sm px-4 py-3 text-brand-bg focus:outline-none focus:border-brand-gold transition-colors min-h-[50px] [color-scheme:dark]" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-bg/70 block">Your Message</label>
              <textarea id="message" rows={3} required className="w-full bg-brand-bg/5 border border-brand-bg/20 rounded-sm px-4 py-3 text-brand-bg focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-light-gold text-brand-bg font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-sm mt-2">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
