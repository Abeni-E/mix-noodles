import React from 'react';
import { MixLogo } from './BrandMotifs';
import { OrderNowSection } from './OrderNowSection';
import { PageRoute } from './Header';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const t = TRANSLATIONS.en;

  return (
    <footer lang="en" className="border-t border-white/15 bg-[#110F0D] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: Hours & Location + Order Delivery Apps */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3 className="font-cinzel text-sm font-bold tracking-wide text-[#EA580C]">
                {t.footer.hoursHeading}
              </h3>
              <p className="mt-2 text-sm text-[#F3ECE4]">{t.visit.addressValue}</p>
              <p className="mt-1 text-sm text-[#B5ACA3]">{t.footer.hoursSummary}</p>
              <p className="mt-1.5 font-cinzel text-sm font-semibold text-[#F97316] tabular-nums">
                <a
                  href={`tel:${t.visit.phoneValue.replace(/\s+/g, '')}`}
                  className="hover:text-[#DC2626] transition-colors"
                >
                  {t.visit.phoneValue}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-cinzel text-sm font-bold tracking-wide text-[#EF4444] mb-3">
                {t.footer.deliveryHeading}
              </h3>
              <OrderNowSection lang="en" t={t} variant="compact" />
            </div>
          </div>

          {/* Middle Column: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-cinzel text-sm font-bold tracking-wide text-[#EA580C]">
              {t.footer.quickLinksHeading}
            </h3>
            <ul className="space-y-2 text-sm text-[#C7B7A6]">
              <li>
                <a
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-[#EA580C] transition-colors inline-block py-0.5"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#/menu"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('menu');
                  }}
                  className="hover:text-[#EA580C] transition-colors inline-block py-0.5"
                >
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a
                  href="#/visit"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('visit');
                  }}
                  className="hover:text-[#EA580C] transition-colors inline-block py-0.5"
                >
                  {t.nav.visit}
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Brand Logo & Tagline */}
          <div className="md:col-span-4 space-y-4 md:text-right flex flex-col md:items-end">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block"
            >
              <MixLogo brandName={t.brandName} compact />
            </a>
            <p className="text-sm text-[#C7B7A6] leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-sc text-xs tracking-wide text-[#8D847C]">
          <p>{t.footer.copyright}</p>
          <p className="font-cinzel tabular-nums text-[#C2410C] font-semibold">
            <a
              href={`tel:${t.visit.phoneValue.replace(/\s+/g, '')}`}
              className="hover:text-[#EA580C] transition-colors"
            >
              {t.visit.phoneValue}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
