import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, MessageSquarePlus, Star } from 'lucide-react';
import {
  HERO_BACKGROUND_IMAGE,
  HOME_SPECIALS_IDS,
  MENU_ITEMS,
  MenuItem,
  SOCIAL_LINKS,
} from '../data/menuData';
import { Language, ReviewItem, TranslationContent } from '../data/translations';
import { ChopstickDivider, ResilientImage, SwirlAccent } from '../components/BrandMotifs';
import { PageRoute } from '../components/Header';
import { ReviewModal } from '../components/ReviewModal';

interface HomePageProps {
  lang: Language;
  t: TranslationContent;
  onNavigate: (page: PageRoute) => void;
  onOrderNowClick: () => void;
}

const USER_REVIEWS_STORAGE_KEY = 'mix_noodles_user_reviews_v2';

function loadSavedUserReviews(): ReviewItem[] {
  try {
    const raw = window.localStorage.getItem(USER_REVIEWS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function HomePage({
  lang,
  t,
  onNavigate,
  onOrderNowClick,
}: HomePageProps) {
  const [userReviews, setUserReviews] = useState<ReviewItem[]>(loadSavedUserReviews);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        USER_REVIEWS_STORAGE_KEY,
        JSON.stringify(userReviews)
      );
    } catch {
      // Ignore storage write errors
    }
  }, [userReviews]);

  const handleAddReview = (newReview: ReviewItem) => {
    setUserReviews((prev) => [newReview, ...prev]);
  };

  const specialItems: MenuItem[] = HOME_SPECIALS_IDS.map((id) =>
    MENU_ITEMS.find((item) => item.id === id)
  ).filter((item): item is MenuItem => Boolean(item));

  // User-submitted reviews appear first at the front, followed by Google Maps reviews
  const allReviews = [...userReviews, ...t.home.reviews];
  // Duplicate array for seamless infinite sideways marquee loop
  const marqueeReviews = [...allReviews, ...allReviews];

  return (
    <div>
      {/* 1. FULL-BLEED EDGE-TO-EDGE HERO SECTION */}
      <section
        aria-labelledby="hero-heading"
        className="relative w-full overflow-hidden border-b border-[#C2410C]/40 bg-[#12100E]"
      >
        {HERO_BACKGROUND_IMAGE ? (
          <>
            <img
              src={HERO_BACKGROUND_IMAGE}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-[50%_60%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/92 via-[#0C0B0A]/78 to-[#0C0B0A]/42"
            />
          </>
        ) : (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-[#DC2626]/18 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 left-1/3 w-80 h-80 rounded-full bg-[#9A3412]/18 blur-3xl"
            />
            <SwirlAccent className="pointer-events-none absolute -right-12 -bottom-16 w-72 h-72 sm:w-96 sm:h-96 opacity-75" />
          </>
        )}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-sc text-sm sm:text-base font-semibold tracking-wider text-[#EA580C]">
              <span
                className="inline-block w-2 h-2 rounded-full bg-[#DC2626] mr-2 align-middle"
                aria-hidden="true"
              />
              {t.home.kicker}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#F6EFE7] [text-wrap:balance]"
            >
              {t.home.headline}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#DFD6CD] leading-relaxed max-w-xl">
              {t.home.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOrderNowClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#DC2626] hover:bg-[#991B1B] text-[#FFF5F5] text-sm sm:text-base font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
              >
                <span>{t.home.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#/menu"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('menu');
                }}
                className="inline-flex items-center gap-2 px-4 py-3 min-h-[48px] rounded-xl bg-[#181512]/80 border border-[#C2410C]/70 hover:border-[#EA580C] text-sm sm:text-base font-semibold text-[#FB923C] hover:bg-[#9A3412]/35 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.home.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 sm:pt-7">
        {/* 2. THIN CLICKABLE "VISIT US TODAY" STRIP (Light greyish surface) */}
        <div>
          <a
            href="#/visit"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('visit');
            }}
            className="group w-full flex items-center justify-between gap-4 rounded-xl bg-[#272523] hover:bg-[#312E2B] border border-white/15 hover:border-[#EA580C] px-4 sm:px-6 py-3 min-h-[48px] transition-colors shadow-md"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#F3ECE4] min-w-0">
              <MapPin
                className="w-4 h-4 text-[#DC2626] shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">{t.home.visitBannerText}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#EA580C] group-hover:text-[#FB923C] whitespace-nowrap shrink-0 transition-colors">
              <span>{t.home.visitBannerCta}</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <ChopstickDivider />

        {/* 3. OUR SPECIALS (Stir Fry Combo Noodle, Chicken Lollipop, Combo Salad, Mojito) */}
        <section aria-labelledby="specials-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                id="specials-heading"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#EA580C]"
              >
                {t.home.specialsHeading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#C7B7A6] max-w-2xl">
                {t.home.specialsSubheading}
              </p>
            </div>
            <a
              href="#/menu"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('menu');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FB923C] hover:text-[#EF4444] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>{t.home.viewAllMenu}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col rounded-2xl bg-[#252321] border border-white/15 hover:border-[#EA580C]/70 overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              >
                {item.image ? (
                  <ResilientImage
                    src={item.image}
                    alt={item.name[lang]}
                    aspectClassName="aspect-[4/3]"
                    className="transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="aspect-[4/3] w-full bg-[#191715] border-b border-white/10 flex flex-col items-center justify-center p-4 text-center"
                    aria-label={item.name[lang]}
                  >
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 48 48"
                      fill="none"
                      aria-hidden="true"
                      className="opacity-45"
                    >
                      <path
                        d="M10 24H38C37.5 32 31.5 37 24 37C16.5 37 10.5 32 10 24Z"
                        stroke="#C2410C"
                        strokeWidth="2"
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

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-cinzel text-base font-bold text-[#F6EFE7] leading-snug">
                        {item.name[lang]}
                      </h3>
                      <span className="font-cinzel text-sm font-bold text-[#FB923C] tabular-nums whitespace-nowrap shrink-0">
                        {item.price}
                      </span>
                    </div>

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

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={onOrderNowClick}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg bg-[#DC2626] hover:bg-[#991B1B] text-[#FFF5F5] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>{t.menu.orderOnAppCta}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ChopstickDivider />

        {/* 4. WHAT ARE PEOPLE SAYING ONLINE? (Light greyish surface) */}
        <section aria-labelledby="socials-heading">
          <div className="rounded-2xl bg-[#23211F] border border-[#C2410C]/40 p-6 sm:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <h2
                id="socials-heading"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#EF4444] text-left"
              >
                {t.home.socialsHeading}
              </h2>
              <p className="text-sm sm:text-base text-[#DED5CC] leading-relaxed md:text-right md:max-w-sm">
                {t.home.socialsSubheading}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3.5 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.home.followOnLabel} ${social.name}`}
                  className="group inline-flex items-center gap-3 px-5 py-3.5 min-h-[52px] rounded-xl bg-[#161412] hover:bg-[#9A3412]/40 border border-white/15 hover:border-[#EA580C] transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-md"
                >
                  {social.id === 'tiktok' ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-[#EA580C] group-hover:text-[#FB923C] transition-colors shrink-0"
                    >
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-[#EA580C] group-hover:text-[#FB923C] transition-colors shrink-0"
                    >
                      <path
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}

                  <span className="text-left">
                    <span className="block font-cinzel text-sm sm:text-base font-bold text-[#F6EFE7] leading-tight">
                      {social.name}
                    </span>
                    <span className="block font-sc text-xs font-semibold tracking-wide text-[#C2410C]">
                      {social.handle}
                    </span>
                  </span>

                  <ArrowRight
                    className="w-4 h-4 text-[#C7B7A6] group-hover:text-[#FB923C] transition-transform group-hover:translate-x-0.5 ml-1"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <ChopstickDivider />

        {/* 5. READ OUR REVIEWS (Light greyish cards, marquee speed 36s, edge dust fade) */}
        <section aria-labelledby="reviews-heading">
          <div className="mb-8">
            <h2
              id="reviews-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#EA580C]"
            >
              {t.home.reviewsHeading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#C7B7A6]">
              {t.home.reviewsSubheading}
            </p>
          </div>

          <div className="relative overflow-hidden py-4 -mx-2 px-2 reviews-dust-mask">
            <div className="reviews-marquee-track gap-5">
              {marqueeReviews.map((review, index) => (
                <article
                  key={`${review.id}-${index}`}
                  className={`w-[290px] sm:w-[340px] shrink-0 rounded-2xl bg-[#262422] p-5 border transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1.5 hover:bg-[#302D2A] hover:border-[#EA580C]/70 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] hover:z-20 cursor-default ${
                    review.isNew ? 'border-[#EA580C]/75' : 'border-white/12'
                  }`}
                >
                  {/* Top Row: Name on left, barely visible small date on right */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F6EFE7] truncate">
                      {review.name}
                    </h3>
                    <span className="font-sc text-xs font-medium text-[#8D847C] whitespace-nowrap shrink-0">
                      {review.date}
                    </span>
                  </div>

                  {/* Stars directly below name/date */}
                  <div
                    className="mt-1.5 flex items-center gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#EA580C] text-[#EA580C]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="mt-3 text-sm text-[#E7E0D8] leading-relaxed">
                    “{review.quote}”
                  </blockquote>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom-left "Leave a Review" button */}
          <div className="mt-6 flex justify-start">
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3 min-h-[46px] rounded-xl bg-[#252321] hover:bg-[#DC2626] border border-[#C2410C]/60 hover:border-[#DC2626] text-sm font-bold text-[#FB923C] hover:text-[#FFF5F5] transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
              <span>{t.home.leaveReviewBtn}</span>
            </button>
          </div>
        </section>

        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmitReview={handleAddReview}
          t={t}
        />
      </div>
    </div>
  );
}
