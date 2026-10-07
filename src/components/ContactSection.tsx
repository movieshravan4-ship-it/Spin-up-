import React, { useState } from "react";
import { Mail, Send, CheckCircle2, MapPin, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Private Fragrance Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "Private Fragrance Consultation",
        message: "",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Maison Concierge Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Fragrance Concierge & Ateliers
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 mt-2 tracking-tight">
                Connect with our perfumers and advisors.
              </h2>
              <p className="mt-4 text-base text-stone-600 leading-relaxed font-sans">
                Whether you wish to arrange a private olfactory consultation, inquire about our seasonal discovery sets, or explore bespoke compounding, our concierge team is at your service.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-150 text-sm">
              <div className="flex items-start gap-3 text-stone-700">
                <Mail className="w-4 h-4 text-amber-900 mt-1 shrink-0" />
                <div>
                  <span className="font-medium text-stone-900 block">Atelier Correspondence</span>
                  <a
                    href="mailto:concierge@maisoncypres.fr"
                    className="text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    concierge@maisoncypres.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-700">
                <MapPin className="w-4 h-4 text-amber-900 mt-1 shrink-0" />
                <div>
                  <span className="font-medium text-stone-900 block">Paris Salon</span>
                  <span className="text-stone-600">
                    28 Rue Saint-Honoré, 75001 Paris, France
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-700">
                <MapPin className="w-4 h-4 text-amber-900 mt-1 shrink-0" />
                <div>
                  <span className="font-medium text-stone-900 block">Grasse Laboratory</span>
                  <span className="text-stone-600">
                    12 Place aux Aires, 06130 Grasse, France
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-stone-600 leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                <span>Bespoke Olfactory Formulation</span>
              </div>
              Private commissions for custom flacons require a six-month maceration period and two in-person sessions with Master Perfumer Hélène de Montmirail.
            </div>
          </div>

          {/* Right Column: Contact & Concierge Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  Request Confirmed
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Maison Cyprès. An atelier advisor will reply to your note within twenty-four hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
                  Inquire with the Atelier
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Camille Laurent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="camille@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Nature of Inquiry
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all cursor-pointer"
                  >
                    <option value="Private Fragrance Consultation">Private Fragrance Consultation (Paris Salon)</option>
                    <option value="Discovery Set Request">Discovery Set & Sample Inquiries</option>
                    <option value="Bespoke Commission">Bespoke Fragrance Compounding</option>
                    <option value="Press & Stockists">Press & International Stockists</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Message or Scent Preferences
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about the scent notes you love or your consultation preferences..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition-all placeholder:text-stone-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting to Concierge...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
