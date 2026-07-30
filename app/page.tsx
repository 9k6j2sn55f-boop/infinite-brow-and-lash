import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Sparkles,
  Scissors,
  Eye,
  Sun,
  Layers,
  ArrowRight,
  Clock,
  Car,
  AlertCircle,
  Phone,
  ChevronRight,
  Gift,
} from "lucide-react";

export const metadata = {
  title: "Infinite Brow & Lash | Perth Brow, Lash & Tanning Specialists",
  description:
    "Beauty comes in Infinite forms. Located in Iluka WA. Brows, Lash Lifts, Lash Extensions, Spray Tans, and Combo Deals inside Monty's Cafe/Barber.",
};

export default function Home() {
  const serviceCategories = [
    {
      title: "Eyebrows & Lamination",
      desc: "Precision brow sculpting, custom tinting, stain mapping, and signature brow lamination for clean, defined frames.",
      icon: Scissors,
    },
    {
      title: "Lash Extensions & Lifts",
      desc: "Handcrafted volume fans, hybrid extensions, lash lifts, and lash botox tailored to your natural eye shape.",
      icon: Eye,
    },
    {
      title: "Bronze Spray Tanning",
      desc: "Flawless, streak-free sunless tanning custom-blended to your natural skin tone for a long-lasting coastal glow.",
      icon: Sun,
    },
    {
      title: "Package Deals & Add-Ons",
      desc: "Curated lash and brow combo packages designed for high-value transformations with bundled savings.",
      icon: Layers,
    },
  ];

  const packageDeals = [
    {
      name: "Lash Lift + Tint & Brow Wax + Tint",
      duration: "1 hr 30 mins",
      price: "$130",
    },
    {
      name: "Lash Lift + Tint & Brow Wax + Stain",
      duration: "1 hr 30 mins",
      price: "$135",
    },
    {
      name: "Lash Botox & Brow Wax + Tint",
      duration: "1 hr 30 mins",
      price: "$155",
    },
    {
      name: "Lash Botox & Brow Wax + Stain",
      duration: "1 hr 30 mins",
      price: "$160",
    },
    {
      name: "Lash Lift + Tint & Brow Lamination + Tint",
      duration: "1 hr 30 mins",
      price: "$175",
      popular: true,
    },
    {
      name: "Lash Lift + Tint & Brow Lamination + Stain",
      duration: "1 hr 30 mins",
      price: "$180",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-stone-900 font-sans selection:bg-stone-300 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-stone-300/60 pt-20 pb-20 px-4 bg-gradient-to-b from-[#F2EDE4] via-[#F7F4EE] to-[#EFEAE0]">
        <div className="absolute inset-0 bg-[radial-gradient(#E2DAD0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-stone-300/80 text-stone-800 text-xs tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-stone-600 shrink-0" /> Perth Brow, Lash & Tanning Specialists
          </div>

          <h1 className="mb-6 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <span className="block font-serif italic text-stone-700 font-light text-2xl sm:text-4xl md:text-5xl leading-tight whitespace-nowrap">
              Beauty comes in Infinite forms
            </span>

            <span className="block mt-2 font-sans font-black text-xl sm:text-3xl md:text-5xl tracking-[0.18em] uppercase text-stone-950 leading-tight whitespace-nowrap">
              INFINITE BROW & LASH
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-700 max-w-xl font-normal leading-relaxed mb-10">
            Located in Iluka, NOR • Brows | Lash Lifts | Lash Extensions | Spray Tans inside Monty's Cafe/Barber.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-xs sm:max-w-md mb-12">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-stone-900/20 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 hover:bg-white border border-stone-300 text-stone-900 font-semibold text-xs uppercase tracking-widest transition-all shadow-sm"
            >
              Location & Hours
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-300/80 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-stone-700 tracking-wider font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stone-600 shrink-0" /> 98 O'Mara Boulevard, Iluka WA
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-stone-600 shrink-0" /> Free Underground Parking
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-600 shrink-0" /> Open 7 Days
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-stone-600 font-bold block mb-2">
            Studio Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-950">
            Signature Services
          </h2>
          <div className="w-12 h-1 bg-stone-800 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md shadow-stone-300/30 flex flex-col justify-between hover:shadow-xl hover:shadow-stone-300/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="p-3.5 bg-[#F4EFE6] border border-stone-200 rounded-2xl text-stone-900 w-fit mb-6">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-950 mb-3 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs text-stone-950 font-bold uppercase tracking-wider hover:text-stone-600 transition-colors pt-4 border-t border-stone-100"
                >
                  Book Treatment <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-[#EFEAE0] border-y border-stone-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs tracking-widest uppercase font-semibold mb-3 shadow-sm">
              <Gift className="w-3.5 h-3.5 text-stone-600" /> Save With Packages
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-stone-950">
              Studio Package Deals
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm font-normal mt-2">
              Combine your lash lift, botox, brow lamination, and staining sessions into one 90-minute treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageDeals.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative p-7 rounded-3xl bg-white border ${
                  pkg.popular ? "border-stone-900 shadow-xl shadow-stone-400/30" : "border-stone-200 shadow-md"
                } flex flex-col justify-between hover:border-stone-400 transition-all`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-stone-950 text-stone-50 text-[10px] font-bold tracking-wider uppercase shadow-md">
                    Client Favorite
                  </span>
                )}

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
                    Package Deal
                  </span>
                  <h3 className="text-lg font-serif text-stone-950 mb-2 font-semibold leading-snug">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-stone-600 font-normal mb-6">
                    <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-medium">Price</span>
                    <span className="text-xl font-black text-stone-950">{pkg.price}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    Book Deal <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Policies */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-[#F4EFE6] text-stone-900 border border-stone-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-stone-950 font-semibold">Studio Location</h3>
                <p className="text-xs text-stone-600 font-medium">98 O'Mara Blvd, Iluka WA</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mb-4">
              Located inside <strong className="text-stone-950">Monty's Cafe/Barber</strong>. Free underground parking is available right below the building!
            </p>
            <div className="p-4 rounded-2xl bg-[#F8F4EC] border border-stone-200 text-xs text-stone-700">
              💡 <em>Late appointments:</em> If the outer door is locked, call/text us at <strong className="text-stone-950">0450 744 233</strong> or <strong className="text-stone-950">0412 734 783</strong> to be let in.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-[#F4EFE6] text-stone-900 border border-stone-200">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-stone-950 font-semibold">Booking Policies</h3>
                <p className="text-xs text-stone-600 font-medium">Cancellation & Arrival Policy</p>
              </div>
            </div>
            <ul className="space-y-3 text-xs text-stone-700 font-normal">
              <li className="flex items-start gap-2">
                <span className="text-stone-950 font-bold">•</span>
                <span><strong>24-Hour Cancellation:</strong> 50% fee applies for cancellations within 24 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-950 font-bold">•</span>
                <span><strong>Late Arrivals:</strong> Arrivals &gt;15 minutes late may incur a 100% no-show fee.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-950 font-bold">•</span>
                <span><strong>Health & Wellbeing:</strong> Please reschedule if you are feeling unwell.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-950 text-stone-50 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-serif mb-3">Book Your Next Session</h2>
          <p className="text-stone-300 text-xs sm:text-sm font-normal mb-8">
            Select your preferred treatment and date directly on our studio booking page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-50 text-stone-950 font-bold text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="tel:0450744233"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-700 text-stone-200 text-xs uppercase tracking-wider font-semibold hover:border-stone-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-400" /> Call Studio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}