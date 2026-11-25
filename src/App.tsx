/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header, PageRoute } from './components/Header';
import { OrderModal } from './components/OrderModal';
import { Language, TRANSLATIONS } from './data/translations';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { VisitPage } from './pages/VisitPage';

const LANG_STORAGE_KEY = 'mix_noodles_lang';

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'am') {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted environments
  }
  return 'en';
}

function getRouteFromHash(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (hash === 'menu') return 'menu';
  if (hash === 'visit') return 'visit';
  return 'home';
}

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromHash);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  // Persist language choice and update <html lang="..."> for Noto Sans Ethiopic typography
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage access errors
    }
  }, [lang]);

  // Sync page state with browser hash navigation (Back / Forward support)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getRouteFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    const targetHash = page === 'home' ? '#/' : `#/${page}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderNowClick = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0C0B0A] text-[#F8F5F2]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#DC2626] focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOrderNowClick={handleOrderNowClick}
        lang={lang}
        onToggleLanguage={setLang}
        t={t}
      />

      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            lang={lang}
            t={t}
            onNavigate={navigateTo}
            onOrderNowClick={handleOrderNowClick}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage lang={lang} t={t} onOrderNowClick={handleOrderNowClick} />
        )}

        {currentPage === 'visit' && <VisitPage lang={lang} t={t} />}
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Navbar & Hero "Order Now" Pop-up Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        lang={lang}
        t={t}
      />
    </div>
  );
}
