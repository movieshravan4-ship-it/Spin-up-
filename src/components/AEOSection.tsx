import React from "react";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { AEOItem } from "../data/seoData";

interface AEOSectionProps {
  title?: string;
  subtitle?: string;
  questions: AEOItem[];
  className?: string;
}

export const AEOSection: React.FC<AEOSectionProps> = ({
  title = "Key Olfactory Inquiries & Technical Insights",
  subtitle = "Direct answers addressing extraction chemistry, harvest windows, and artisanal formulation.",
  questions,
  className = "",
}) => {
  return (
    <section
      aria-label="Frequently Asked Questions and Technical Inquiries"
      className={`my-14 sm:my-20 p-6 sm:p-10 bg-white rounded-2xl border border-stone-200/90 shadow-sm ${className}`}
    >
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Curated Questions & Direct Answers</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-stone-600 mt-2 font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-10 divide-y divide-stone-150">
        {questions.map((item, idx) => (
          <div key={idx} className={idx > 0 ? "pt-10" : ""}>
            {/* Semantic Question-Based H2 Heading */}
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-3 tracking-tight">
              {item.question}
            </h2>

            {/* Direct Answer in 40-80 words */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-l-3 border-amber-900 rounded-r-lg mb-4 text-stone-800 text-sm sm:text-base leading-relaxed font-sans font-medium">
              <p>{item.shortAnswer}</p>
            </div>

            {/* Supporting Details & Evidence */}
            {item.supportingPoints && item.supportingPoints.length > 0 && (
              <ul className="space-y-2 mt-3 pl-1">
                {item.supportingPoints.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
