"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Priyanka & Rahul",
    role: "Wedding Couple",
    text: "Having Pallavi paint our wedding was the absolute highlight of the night! Our guests couldn't stop talking about it, and the final painting is stunning.",
  },
  {
    name: "Ananya S.",
    role: "Event Planner",
    text: "I've worked with many live artists, but Pallavi brings a unique elegance and professionalism. The way she captures emotions live is pure magic.",
  },
  {
    name: "Sneha & Karan",
    role: "Anniversary Couple",
    text: "The custom portrait she painted for our 10th anniversary was breathtaking. She understood exactly what we wanted and delivered a masterpiece.",
  },
  {
    name: "Meera R.",
    role: "Bride",
    text: "Getting a live portrait done in just a few minutes was the best return gift for our guests. Everyone loved their customized sketches!",
  },
  {
    name: "Rohan & Divya",
    role: "Destination Wedding",
    text: "From our beach ceremony in Goa to the final brushstroke — Pallavi captured every detail with such warmth. The painting hangs in our living room now!",
  }
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white p-8 border border-brand-accent/30 hover:border-brand-primary/50 transition-colors min-w-[340px] max-w-[400px] flex-shrink-0 shadow-sm">
      <div className="flex space-x-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-gold text-sm">★</span>
        ))}
      </div>
      <p className="font-light text-brand-text/90 italic mb-8 leading-relaxed text-sm">
        &ldquo;{review.text}&rdquo;
      </p>
      <div>
        <h4 className="font-serif text-brand-primary text-lg">{review.name}</h4>
        <p className="text-xs uppercase tracking-widest text-brand-text/60 mt-1">{review.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials({ preview = false }: { preview?: boolean }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-advance every 5 seconds in preview mode
  useEffect(() => {
    if (!preview) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [preview, next]);

  if (preview) {
    return (
      <section id="reviews" className="py-24 bg-brand-light text-brand-text relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Client Love</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
              Words from Happy Clients
            </h3>
            <div className="h-px w-24 bg-brand-accent mx-auto mt-6"></div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-2xl mx-auto">
            {/* Review Content */}
            <div className="min-h-[220px] flex items-center justify-center">
              <div
                key={current}
                className="text-center space-y-6 animate-fade-in px-4"
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-lg">★</span>
                  ))}
                </div>
                <p className="font-light text-brand-text/90 italic text-lg md:text-xl leading-relaxed">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <div className="pt-4">
                  <h4 className="font-serif text-brand-primary text-xl">{reviews[current].name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-text/60 mt-2">{reviews[current].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 w-10 h-10 flex items-center justify-center text-brand-text/50 hover:text-brand-primary transition-colors text-2xl"
              aria-label="Previous review"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 w-10 h-10 flex items-center justify-center text-brand-text/50 hover:text-brand-primary transition-colors text-2xl"
              aria-label="Next review"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-10">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-brand-primary w-6"
                      : "bg-brand-text/30 hover:bg-brand-text/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/testimonials" className="inline-block px-8 py-4 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              Read All Reviews
            </Link>
          </div>

        </div>
      </section>
    );
  }

  // Full page version — grid layout
  return (
    <section id="reviews" className="py-24 bg-brand-light text-brand-text relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Client Love</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
            Words from our Patrons
          </h3>
          <div className="h-px w-24 bg-brand-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
}
