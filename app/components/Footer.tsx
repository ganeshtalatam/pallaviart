import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5EFEC] text-brand-contrast">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-3xl tracking-wider text-brand-contrast">
                Pallavi | Artist
              </h2>
              <span className="font-script text-brand-gold text-lg block -mt-1">
                Art gallery
              </span>
            </div>
            <p className="font-light text-sm text-brand-contrast/80 leading-relaxed max-w-sm">
              Preserving the magic of your most cherished celebrations through exquisite live painting and custom artwork. Serving across India 🇮🇳.
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-brand-contrast">Explore</h3>
            <ul className="space-y-3 font-light text-sm text-brand-contrast/80">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/packages" className="hover:text-brand-gold transition-colors">Packages</Link></li>
              <li><Link href="/testimonials" className="hover:text-brand-gold transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-brand-contrast">Get In Touch</h3>
            <ul className="space-y-4 font-light text-sm text-brand-contrast/80">
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-brand-contrast/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:hello@pallaviart.com" className="hover:text-brand-gold transition-colors">hello@pallaviart.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-brand-contrast/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-brand-contrast/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <a href="https://www.instagram.com/_shades.of.soul_/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">@_shades.of.soul_</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#EBE2DD] py-6 border-t border-brand-contrast/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs font-light text-brand-contrast/70">
          &copy; {new Date().getFullYear()} Pallavi | Artist. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
