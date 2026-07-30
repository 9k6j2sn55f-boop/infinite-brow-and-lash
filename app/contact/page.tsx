"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  AlertCircle,
  ShieldAlert,
  Heart,
  Calendar as CalendarIcon,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Brow Lamination + Stain ($135)",
    "Brow Wax + Tint ($65)",
    "Lash Lift + Tint Combo ($95)",
    "Lash Botox & Brow Lamination Package ($175)",
    "Full Volume Lash Extensions ($160)",
    "Coastal Bronze Spray Tan ($45)",
  ];

  const hours = [
    { days: "Monday – Wednesday", time: "8:00am – 7:00pm" },
    { days: "Thursday", time: "8:00am – 8:00pm", highlighted: true },
    { days: "Friday", time: "8:00am – 7:00pm" },
    { days: "Saturday – Sunday", time: "9:00am – 5:00pm" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-600 font-bold block mb-2">
              Studio Suite
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-stone-950 font-medium">
              Location, Hours & Booking
            </h1>
            <div className="w-12 h-1 bg-stone-800 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            
            {/* Left Column: Interactive Booking Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="p-3 rounded-2xl bg-[#F4EFE6] text-stone-900 border border-stone-200">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-stone-950 font-semibold">Reserve Your Appointment</h2>
                  <p className="text-xs text-stone-600 font-medium">Direct In-House Booking</p>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#F4EFE6] rounded-2xl border border-stone-300 space-y-4 my-6">
                  <CheckCircle2 className="w-12 h-12 text-stone-900 mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-stone-950">Appointment Request Received!</h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-normal">
                    Thank you, <strong className="text-stone-950">{formData.name}</strong>. We have logged your request for <strong className="text-stone-950">{selectedService}</strong> on <strong className="text-stone-950">{formData.date} at {formData.time}</strong>.
                  </p>
                  <p className="text-xs text-stone-600 font-normal">
                    We will send a confirmation SMS to <strong className="text-stone-950">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-stone-950 text-stone-50 text-xs font-bold uppercase tracking-wider"
                  >
                    Book Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Select Treatment *
                    </label>
                    <select
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                    >
                      <option value="">Choose a treatment or package...</option>
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Special Notes or Lash Preferences (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Sensitivity notes, specific volume fan style..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-stone-950"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Request Appointment Booking
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Location & Studio Policies */}
            <div className="space-y-8">
              
              {/* Location Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#F4EFE6] text-stone-900 border border-stone-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif text-stone-950 font-semibold">Studio Location</h2>
                    <p className="text-xs text-stone-600 font-medium">98 O'Mara Blvd, Iluka WA</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed mb-4">
                  Located inside <strong className="text-stone-950">Monty's Cafe/Barber</strong>. Free underground parking is available right beneath the building!
                </p>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8F5EE] border border-stone-200 text-stone-800 text-xs font-medium mb-4">
                  <Car className="w-4 h-4 shrink-0 text-stone-600" /> Free Underground Parking Available
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F4EC] border border-stone-200 text-xs text-stone-700 leading-relaxed font-normal">
                  <strong className="text-stone-950 block mb-1 uppercase tracking-wider text-[11px]">
                    🔒 Late Appointments & Locked Door Protocol:
                  </strong>
                  For late evening appointments, the outer door may occasionally be locked. If so, simply text or call us when you arrive at <strong>0450 744 233</strong> or <strong>0412 734 783</strong> and we will let you right in!
                </div>
              </div>

              {/* Opening Hours */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#F4EFE6] text-stone-900 border border-stone-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-serif text-stone-950 font-semibold">Opening Hours</h2>
                </div>

                <div className="space-y-3">
                  {hours.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between items-center p-3 rounded-xl border text-xs sm:text-sm ${
                        item.highlighted
                          ? "bg-stone-950 border-stone-950 text-stone-50 font-medium"
                          : "bg-[#F8F5EE] border-stone-200 text-stone-700 font-normal"
                      }`}
                    >
                      <span>{item.days}</span>
                      <span className="font-mono">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies Breakdown */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-4">
                <h2 className="text-xl font-serif text-stone-950 mb-2 flex items-center gap-2 font-semibold">
                  <ShieldAlert className="w-5 h-5 text-stone-800" /> Studio Policies
                </h2>

                <div className="space-y-1">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-stone-950 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-stone-600" /> 24-Hour Cancellation Policy
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    Cancellations within 24 hours incur a 50% fee.
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-stone-100">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-stone-950 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-600" /> Late Arrivals
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    Arrivals &gt;15 minutes late may result in cancellation with a 100% no-show fee.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}