import React, { useState } from "react";
import { X, Check, Sparkles } from "lucide-react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setName("");
        onClose();
      }, 1900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close discovery set modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-stone-900">
              Privilege Access Confirmed
            </h3>
            <p className="text-sm text-stone-600">
              Your discovery set voucher and our harvest catalogue have been dispatched to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-900 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
                Haute Parfumerie
              </span>
              <h3 className="font-serif text-2xl font-semibold text-stone-900 mt-1">
                The 4-Extract Discovery Set
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Experience the four creations featured in our journal: Grasse Rose de Mai, Terre Brûlée, Cèdre Éthéré, and Nuit de Jasmin in 2ml glass flacons.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  placeholder="Jean de la Tour"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="jean@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow"
            >
              Request Discovery Invitation
            </button>
            <p className="text-[11px] text-center text-stone-400">
              Includes complimentary shipping voucher and private olfactory notes.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
