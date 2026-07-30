import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EC] border-t border-stone-200 text-stone-600 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        <div className="space-y-4">
          <span className="text-lg font-bold tracking-[0.2em] text-stone-900 uppercase block">
            INFINITE BROW & LASH
          </span>
          <p className="font-light leading-relaxed text-stone-600">
            Beauty comes in Infinite forms. Perth Brow, Lash & Tanning Specialists located in Iluka, NOR.
          </p>
          <div className="flex items-center gap-2 text-stone-800 text-xs font-medium">
            <Car className="w-4 h-4 shrink-0" /> Free Underground Parking Available
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-stone-900 font-semibold tracking-widest uppercase text-xs flex items-center gap-2">
            <Clock className="w-4 h-4 text-stone-700" /> Opening Hours
          </h4>
          <ul className="space-y-1.5 font-light text-stone-600">
            <li className="flex justify-between"><span>Mon - Wed:</span> <span>8:00am - 7:00pm</span></li>
            <li className="flex justify-between font-medium text-stone-900"><span>Thursday:</span> <span>8:00am - 8:00pm</span></li>
            <li className="flex justify-between"><span>Friday:</span> <span>8:00am - 7:00pm</span></li>
            <li className="flex justify-between"><span>Sat - Sun:</span> <span>9:00am - 5:00pm</span></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-stone-900 font-semibold tracking-widest uppercase text-xs flex items-center gap-2">
            <MapPin className="w-4 h-4 text-stone-700" /> Location
          </h4>
          <p className="font-light leading-relaxed text-stone-600">
            98 O'Mara Blvd, Iluka WA<br />
            <span className="text-stone-900 font-normal">Inside Monty's Cafe/Barber</span>
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-stone-900 font-semibold tracking-widest uppercase text-xs flex items-center gap-2">
            <Phone className="w-4 h-4 text-stone-700" /> Direct Contact
          </h4>
          <div className="space-y-2 font-light text-stone-600">
            <p>0450 744 233 • 0412 734 783</p>
            <p className="flex items-center gap-2 break-all text-xs">
              <Mail className="w-3.5 h-3.5 text-stone-700 shrink-0" /> infinitebrowandlashh@gmail.com
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-stone-300 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
        <p>© {new Date().getFullYear()} Infinite Brow & Lash. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-stone-900">Studio Policies</Link>
          <Link href="/portfolio" className="hover:text-stone-900">Portfolio</Link>
        </div>
      </div>
    </footer>
  );
}