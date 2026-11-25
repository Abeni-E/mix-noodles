import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { MixLogo } from './BrandMotifs';
import { Language, TranslationContent } from '../data/translations';

export type PageRoute = 'home' | 'menu' | 'visit';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOrderNowClick: () => void;
  lang: Language;
  onToggleLanguage: (nextLang: Language) => void;
  t: TranslationContent;
}

export function Header({
  currentPage,
  onNavigate,
  onOrderNowClick,
  lang,
  onToggleLanguage,
  t,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: PageRoute; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'menu', label: t.nav.menu },
    { id: 'visit', label: t.nav.visit },
  ];

  const handleNav = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0C0B0A]/95 backdrop-blur-md border-b border-white/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Logo + Single-Line Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="rounded-lg py-1 focus-visible:outline-none whitespace-nowrap shrink-0"
          aria-label={`${t.brandName} — ${t.nav.home}`}
        >
          <MixLogo brandName={t.brandName} />
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links (Desktop) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 font-cinzel text-sm font-medium tracking-wide"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id === 'home' ? '' : item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#EA580C] font-semibold'
                    : 'text-[#C7B7A6] hover:text-[#FB923C]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#DC2626] via-[#EA580C] to-[#9A3412]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle (EN | አማ) + Primary "Order Now" CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={t.nav.languageLabel}
            className="inline-flex items-center rounded-lg bg-[#161412] border border-white/15 p-0.5 shrink-0"
          >
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1.5 min-h-[34px] text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#C2410C] text-[#FFF7ED]'
                  : 'text-[#C7B7A6] hover:text-[#FB923C]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('am')}
              aria-pressed={lang === 'am'}
              className={`px-2.5 py-1.5 min-h-[34px] text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 font-[Noto_Sans_Ethiopic] cursor-pointer ${
                lang === 'am'
                  ? 'bg-[#C2410C] text-[#FFF7ED]'
                  : 'text-[#C7B7A6] hover:text-[#FB923C]'
              }`}
            >
              አማ
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOrderNowClick();
            }}
            className="px-3.5 sm:px-4 py-2 min-h-[40px] rounded-lg bg-[#DC2626] hover:bg-[#991B1B] text-[#FFF5F5] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.orderNow}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#161412] border border-white/15 text-[#EA580C] hover:border-[#C2410C] transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-white/15 bg-[#12100E] px-4 py-3 flex flex-col gap-1 font-cinzel"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id === 'home' ? '' : item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-3 min-h-[44px] rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#1E1A17] text-[#EA580C] font-semibold'
                    : 'text-[#C7B7A6] hover:bg-[#181512] hover:text-[#FB923C]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="w-5 h-0.5 rounded-full bg-[#DC2626]"
                  />
                )}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
