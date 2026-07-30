import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Star, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Portfolio & Client Reviews | Infinite Brow & Lash Iluka",
  description:
    "Explore transformation results for eyebrow lamination, lash extensions, and spray tans at Infinite Brow & Lash in Iluka WA.",
};

export default function PortfolioPage() {
  const galleryItems = [
    {
      title: "Brow Lamination + Stain",
      category: "Eyebrows",
      desc: "Precision mapped, laminated, and stained brow architecture for a fuller frame.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Handcrafted Volume Lash Set",
      category: "Lash Extensions",
      desc: "Bespoke volume fans constructed individually for natural depth and flutter.",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Lash Lift & Tint Combo",
      category: "Lash Lifts & Botox",
      desc: "Natural lash enhancement lifting from the root with deep nourishing botox treatment.",
      img: "https://images.unsplash.com/photo-1583001809863-22bd19f7782a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Coastal Bronze Spray Tan",
      category: "Spray Tanning",
      desc: "Flawless, streak-free quick-drying sunless bronze glow custom blended to skin tone.",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      service: "Brow Lamination + Stain",
      text: "The best brows I've ever had in Perth! The shape is so clean and lasted over 6 weeks. The studio inside Monty's with free underground parking makes visits so easy.",
      rating: 5,
    },
    {
      name: "Chloe T.",
      service: "Lash Lift & Tint Package",
      text: "Obsessed with my lash lift! It looks like I'm wearing extensions every single day without any maintenance. 10/10 service.",
      rating: 5,
    },
    {
      name: "Jessica K.",
      service: "Bronze Spray Tan",
      text: "No streakiness at all, just a flawless natural coastal bronze. Dried quickly and looked amazing for my weekend event!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-600 font-bold block mb-2">
              Studio Suite Gallery
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-stone-950 font-medium">
              Transformations & Reviews
            </h1>
            <div className="w-12 h-1 bg-stone-800 mx-auto mt-4 rounded-full" />
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-stone-200/90 bg-white shadow-md shadow-stone-300/30 flex flex-col justify-between hover:shadow-xl hover:shadow-stone-300/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-stone-200 font-bold block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-white drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <p className="text-xs text-stone-600 font-normal leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-stone-950 font-bold uppercase tracking-wider hover:text-stone-600 transition-colors"
                  >
                    Book This Look <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Client Experience Reviews */}
          <div className="bg-[#EFEAE0] border border-stone-300/70 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1 text-stone-800 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-stone-800 text-stone-800" />
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-950 font-semibold">
                Client Experiences
              </h2>
              <p className="text-xs text-stone-600 font-normal mt-1">
                Real feedback from studio guests in Iluka WA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between"
                >
                  <p className="text-xs text-stone-700 font-normal leading-relaxed mb-6 italic">
                    "{rev.text}"
                  </p>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-stone-950">{rev.name}</h4>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
                        {rev.service}
                      </span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-stone-600 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call To Action Button */}
          <div className="text-center py-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" /> Book Your Transformation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}