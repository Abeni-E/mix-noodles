import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_HERO_BACKGROUND_IMAGE,
  MENU_ITEMS,
  MenuCategoryId,
} from '../data/menuData';
import { Language, TranslationContent } from '../data/translations';

interface MenuPageProps {
  lang: Language;
  t: TranslationContent;
  onOrderNowClick: () => void;
}

export function MenuPage({ lang, t, onOrderNowClick }: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | MenuCategoryId>('all');

  const visibleCategories: MenuCategoryId[] =
    activeCategory === 'all' ? MENU_CATEGORIES : [activeCategory];

  return (
    <div>
      {/* FULL-BLEED EDGE-TO-EDGE MENU HEADER BANNER */}
      <section
        aria-labelledby="menu-page-title"
        className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#C2410C]/45 bg-[#12100E]"
      >
        <img
          src={MENU_HERO_BACKGROUND_IMAGE}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/92 via-[#0C0B0A]/76 to-[#0C0B0A]/38"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <h1
              id="menu-page-title"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7EFE7]"
            >
              {t.menu.pageTitle}
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#DFD5CB] leading-relaxed">
              {t.menu.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Traditional Dark-Orange Category Filter Rail */}
        <div className="mt-7 rounded-2xl bg-[#16110E] border border-[#C2410C]/45 p-1.5 shadow-inner">
          <div
            role="tablist"
            aria-label={t.menu.pageTitle}
            className="menu-tabs-scroll flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 px-0.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`font-sc px-4 py-2 min-h-[38px] rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-b from-[#EA580C] to-[#9A3412] text-[#FFF7ED] border border-[#FDBA74]/35 shadow-sm'
                  : 'bg-transparent text-[#C7B7A6] hover:text-[#FB923C] hover:bg-[#221A14]'
              }`}
            >
              {t.menu.allCategory}
            </button>

            {MENU_CATEGORIES.map((categoryId) => {
              const isSelected = activeCategory === categoryId;
              return (
                <React.Fragment key={categoryId}>
                  <span
                    aria-hidden="true"
                    className="text-[#9A3412]/70 text-[10px] select-none shrink-0"
                  >
                    ◆
                  </span>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(categoryId)}
                    className={`font-sc px-4 py-2 min-h-[38px] rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#EA580C] to-[#9A3412] text-[#FFF7ED] border border-[#FDBA74]/35 shadow-sm'
                        : 'bg-transparent text-[#C7B7A6] hover:text-[#FB923C] hover:bg-[#221A14]'
                    }`}
                  >
                    {t.menu.categories[categoryId]}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Menu Categories & Light Greyish Cards with Bigger Pictures */}
        <div className="mt-8 space-y-10">
          {visibleCategories.map((categoryId) => {
            const items = MENU_ITEMS.filter((item) => item.category === categoryId);
            return (
              <section
                key={categoryId}
                aria-labelledby={`category-${categoryId}`}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-5">
                  <h2
                    id={`category-${categoryId}`}
                    className="font-display text-lg sm:text-xl font-bold text-[#EA580C] whitespace-nowrap"
                  >
                    {t.menu.categories[categoryId]}
                  </h2>
                  <div
                    aria-hidden="true"
                    className="h-[1px] flex-1 bg-gradient-to-r from-[#DC2626]/80 via-[#C2410C]/45 to-transparent"
                  />
                </div>

                {items.length === 0 ? (
                  <p className="text-sm text-[#B5ACA3] py-6">{t.menu.emptyCategory}</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((item) => (
                      <article
                        key={item.id}
                        className="group flex flex-col rounded-xl bg-[#252321] border border-white/15 overflow-hidden shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#EA580C]/75"
                      >
                        {/* Bigger Food Image or Clean Blank Slot */}
                        {item.image ? (
                          <div className="h-48 sm:h-52 w-full overflow-hidden bg-[#181513] border-b border-white/10">
                            <img
                              src={item.image}
                              alt={item.name[lang]}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                            />
                          </div>
                        ) : (
                          <div
                            className="h-32 sm:h-36 w-full bg-[#191715] border-b border-white/10 flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 48 48"
                              fill="none"
                              className="opacity-40"
                            >
                              <path
                                d="M10 24H38C37.5 32 31.5 37 24 37C16.5 37 10.5 32 10 24Z"
                                stroke="#C2410C"
                                strokeWidth="2.2"
                              />
                              <path
                                d="M15 20C15 16 19 13 24 13C29 13 33 16 33 20"
                                stroke="#DC2626"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Compact Text & Action Area */}
                        <div className="p-3.5 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F6EFE7] leading-snug">
                                {item.name[lang]}
                              </h3>
                              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FB923C] tabular-nums whitespace-nowrap shrink-0">
                                {item.price}
                              </span>
                            </div>

                            {/* Fasting Indicator */}
                            {item.fasting && (
                              <div className="mt-1 inline-flex items-center gap-1.5 font-sc text-xs font-semibold tracking-wide text-emerald-400">
                                <span
                                  className="w-3 h-3 rounded-[2px] border border-emerald-400 flex items-center justify-center shrink-0"
                                  aria-hidden="true"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                </span>
                                <span>{t.menu.fastingLabel}</span>
                              </div>
                            )}

                            <p className="mt-2 text-xs text-[#C7BEB5] leading-relaxed line-clamp-3">
                              {item.description[lang]}
                            </p>
                          </div>

                          <div className="mt-3.5 pt-3 border-t border-white/10">
                            <button
                              type="button"
                              onClick={onOrderNowClick}
                              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg bg-[#DC2626] hover:bg-[#991B1B] text-[#FFF5F5] text-xs font-semibold transition-colors cursor-pointer"
                            >
                              <span>{t.menu.orderOnAppCta}</span>
                              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
