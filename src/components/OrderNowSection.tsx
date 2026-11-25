import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DELIVERY_APPS } from '../data/menuData';
import { Language, TranslationContent } from '../data/translations';

interface OrderNowSectionProps {
  lang: Language;
  t: TranslationContent;
  variant?: 'compact';
}

/**
 * Compact delivery app buttons used in the shared Footer.
 */
export function OrderNowSection({ lang, t }: OrderNowSectionProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {DELIVERY_APPS.map((app) => (
        <a
          key={app.id}
          href={app.url}
          aria-label={`${t.orderSection.buttonPrefix} ${app.name[lang]}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl bg-[#1A1715] border border-white/15 hover:border-[#C2410C] hover:bg-[#241E1A] text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0"
        >
          <span
            className="w-2.5 h-2.5 rounded-sm shrink-0"
            style={{ backgroundColor: app.accentColor }}
            aria-hidden="true"
          />
          <span>
            {t.orderSection.buttonPrefix} {app.name[lang]}
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-[#B5ACA3]" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
