import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  X,
} from 'lucide-react';
import {
  DayKey,
  GALLERY_PHOTOS,
  GalleryShape,
  POPULAR_TIMES_BY_DAY,
  VISIT_HERO_BACKGROUND_IMAGE,
} from '../data/menuData';
import { Language, TranslationContent } from '../data/translations';
import { ChopstickDivider, ResilientImage } from '../components/BrandMotifs';

interface VisitPageProps {
  lang: Language;
  t: TranslationContent;
}

const DAY_INDEX_ORDER: DayKey[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://maps.app.goo.gl/ozHPJMbig3tb2sbq7?g_st=atm';

const GOOGLE_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=XMMX%2B33W+Ayertena,+Addis+Ababa&z=17&output=embed';

const GALLERY_SHAPE_CLASSES: Record<
  GalleryShape,
  { wrapper: string; aspect: string }
> = {
  double: {
    wrapper: 'rounded-lg sm:rounded-2xl sm:col-span-2',
    aspect: 'aspect-square sm:aspect-[16/9]',
  },
  landscape: {
    wrapper: 'rounded-lg sm:rounded-2xl',
    aspect: 'aspect-square sm:aspect-[16/10]',
  },
  square: {
    wrapper: 'rounded-lg sm:rounded-2xl',
    aspect: 'aspect-square',
  },
  portrait: {
    wrapper: 'rounded-lg sm:rounded-2xl',
    aspect: 'aspect-square sm:aspect-[3/4]',
  },
};

function formatHour12(hour24: number): string {
  const normalized = ((hour24 % 24) + 24) % 24;
  if (normalized === 0) return '12 AM';
  if (normalized === 12) return '12 PM';
  if (normalized < 12) return `${normalized} AM`;
  return `${normalized - 12} PM`;
}

export function VisitPage({ lang, t }: VisitPageProps) {
  const now = new Date();
  const todayIndex = now.getDay(); // 0 = Sunday ... 6 = Saturday
  const currentHour24 = now.getHours();

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayIndex);
  const [selectedHour24, setSelectedHour24] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for the photo gallery lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const activeDayData = POPULAR_TIMES_BY_DAY[selectedDayIndex];
  const isViewingToday = selectedDayIndex === todayIndex;

  // Determine which hour to evaluate for the status banner
  const activeHour24 = selectedHour24 ?? currentHour24;
  const matchedHourEntry = activeDayData.hours.find(
    (entry) => entry.hour24 === activeHour24
  );

  // Pick dynamic crowd status text based on hour & level
  const getBusynessStatus = (): { text: string; toneClass: string } => {
    if (!matchedHourEntry) {
      return {
        text: t.visit.popularTimes.statusClosed,
        toneClass: 'text-[#C7B7A6] border-white/15 bg-[#191613]',
      };
    }
    const lvl = matchedHourEntry.level;
    if (lvl <= 24) {
      return {
        text: t.visit.popularTimes.statusEmpty,
        toneClass: 'text-emerald-300 border-emerald-500/35 bg-emerald-950/25',
      };
    }
    if (lvl <= 44) {
      return {
        text: t.visit.popularTimes.statusKindOfBusy,
        toneClass: 'text-[#F6EFE7] border-white/25 bg-[#1B1815]',
      };
    }
    if (lvl <= 64) {
      return {
        text: t.visit.popularTimes.statusIntermediate,
        toneClass: 'text-[#FDBA74] border-[#C2410C]/45 bg-[#9A3412]/20',
      };
    }
    if (lvl <= 79) {
      return {
        text: t.visit.popularTimes.statusBusy,
        toneClass: 'text-[#FB923C] border-[#EA580C]/55 bg-[#9A3412]/30',
      };
    }
    return {
      text: t.visit.popularTimes.statusReallyPacked,
      toneClass: 'text-[#FCA5A5] border-[#DC2626]/60 bg-[#991B1B]/25',
    };
  };

  const statusInfo = getBusynessStatus();
  const activePhoto = lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  const handlePrevDay = () => {
    setSelectedDayIndex((prev) => (prev - 1 + 7) % 7);
  };

  const handleNextDay = () => {
    setSelectedDayIndex((prev) => (prev + 1) % 7);
  };

  return (
    <div>
      {/* 1. FULL-BLEED EDGE-TO-EDGE "VISIT MIX NOODLES" BANNER */}
      <section
        aria-labelledby="visit-page-title"
        className="relative w-full min-h-[185px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden border-b border-[#C2410C]/45 bg-[#12100E]"
      >
        <img
          src={VISIT_HERO_BACKGROUND_IMAGE}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/92 via-[#0C0B0A]/76 to-[#0C0B0A]/38"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <h1
              id="visit-page-title"
              className="font-display text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3EB]"
            >
              {t.visit.pageTitle}
            </h1>
            <p className="mt-2 sm:mt-4 text-xs sm:text-base lg:text-lg text-[#DFD5CB] leading-relaxed">
              {t.visit.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* 2. COMPACT POPULAR TIMES & BUSYNESS WIDGET (Light greyish surface) */}
        <section
          aria-labelledby="popular-times-heading"
          className="rounded-2xl bg-[#22201E] border border-white/15 p-4 sm:p-5"
        >
          {/* Dynamic Live/Selected Hour Status Banner ABOVE the day switcher */}
          <div
            className={`rounded-xl border px-3.5 py-2 text-xs sm:text-sm font-medium leading-snug ${statusInfo.toneClass}`}
          >
            {statusInfo.text}
          </div>

          {/* Compact Heading + Day Stepper */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2
                id="popular-times-heading"
                className="font-display text-base sm:text-lg font-bold text-[#EA580C]"
              >
                {t.visit.popularTimes.heading}
              </h2>
              <p className="mt-0.5 text-xs text-[#C7BEB5]">
                {activeDayData.peakNote[lang]}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevDay}
                aria-label={t.visit.popularTimes.prevDay}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#191715] hover:bg-[#DC2626] border border-white/15 text-[#F6EFE7] transition-colors shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="min-w-[100px] text-center font-cinzel text-xs sm:text-sm font-bold text-[#F6EFE7] px-2.5 py-1.5 rounded-lg bg-[#191715] border border-[#C2410C]/45">
                {t.visit.popularTimes.dayNames[activeDayData.day]}
              </span>

              <button
                type="button"
                onClick={handleNextDay}
                aria-label={t.visit.popularTimes.nextDay}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#191715] hover:bg-[#DC2626] border border-white/15 text-[#F6EFE7] transition-colors shrink-0 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Compact Horizontal Day Strip */}
          <div className="mt-3 flex items-center gap-1 overflow-x-auto pb-1">
            {DAY_INDEX_ORDER.map((dayKey, idx) => {
              const isSelected = idx === selectedDayIndex;
              return (
                <button
                  key={dayKey}
                  type="button"
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`font-sc px-2.5 py-1 min-h-[28px] rounded-md text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#C2410C] text-[#FFF7ED]'
                      : 'bg-[#191715] text-[#C7BEB5] hover:text-[#FB923C] border border-white/10'
                  }`}
                >
                  {t.visit.popularTimes.dayNames[dayKey]}
                </button>
              );
            })}
          </div>

          {/* Compact Hourly Crowd Bars (7 AM – 9 PM) */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex items-end justify-between gap-1 sm:gap-2 h-20 sm:h-24">
              {activeDayData.hours.map((entry) => {
                const isHighlighted = entry.hour24 === activeHour24;
                const barColor =
                  entry.level >= 80
                    ? 'bg-[#DC2626]'
                    : entry.level >= 55
                    ? 'bg-[#C2410C]'
                    : 'bg-[#9A3412]/80';

                return (
                  <button
                    key={entry.hour24}
                    type="button"
                    onClick={() => setSelectedHour24(entry.hour24)}
                    title={`${entry.label} — ${entry.level}%`}
                    aria-label={`${entry.label}`}
                    aria-pressed={isHighlighted}
                    className="flex-1 h-full flex flex-col justify-end items-center group cursor-pointer focus-visible:outline-none"
                  >
                    <div
                      style={{ height: `${Math.max(14, entry.level)}%` }}
                      className={`w-full max-w-[20px] rounded-t-sm transition-all duration-150 ${
                        isHighlighted
                          ? 'bg-[#F6EFE7] ring-2 ring-[#DC2626]'
                          : `${barColor} group-hover:bg-[#EA580C]`
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-1.5 flex items-center justify-between font-sc text-[11px] font-semibold text-[#9A9189] tabular-nums">
              <span>7a</span>
              <span>9a</span>
              <span>12p</span>
              <span>3p</span>
              <span>6p</span>
              <span>9p</span>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#C7BEB5]">
              <span>
                {t.visit.popularTimes.selectedHourLabel}{' '}
                <strong className="text-[#EA580C] tabular-nums">
                  {matchedHourEntry ? matchedHourEntry.label : formatHour12(activeHour24)}
                </strong>
              </span>

              {(!isViewingToday || selectedHour24 !== null) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDayIndex(todayIndex);
                    setSelectedHour24(null);
                  }}
                  className="text-[11px] font-semibold text-[#EA580C] hover:text-[#FB923C] underline cursor-pointer"
                >
                  {t.visit.popularTimes.resetNow}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 3. ATTRACTIVE GOOGLE MAPS LOCATION CARD & OPENING HOURS (Light greyish surfaces) */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Google Maps Embed + Light Greyish "Open in Google Maps" Action Bar */}
          <section
            aria-labelledby="location-heading"
            className="lg:col-span-7 rounded-2xl bg-[#252321] border border-white/15 overflow-hidden flex flex-col shadow-xl"
          >
            <div className="relative h-64 sm:h-80 w-full bg-[#100E0C] border-b border-white/10">
              <iframe
                title="Mixed Noodles Location Map — XMMX+33W Ayertena, Addis Ababa"
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#252321] flex flex-col sm:flex-row sm:items-center justify-between gap-5 flex-1">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#DC2626] shrink-0" aria-hidden="true" />
                  <h2
                    id="location-heading"
                    className="font-display text-lg sm:text-xl font-bold text-[#EA580C]"
                  >
                    {t.visit.locationHeading}
                  </h2>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#F6EFE7]">
                  {t.visit.addressValue}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#C7BEB5]">
                  {t.visit.neighborhoodNote}
                </p>
              </div>

              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] rounded-xl bg-gradient-to-r from-[#DC2626] to-[#C2410C] hover:from-[#991B1B] hover:to-[#9A3412] text-[#FFF7ED] text-sm font-bold shadow-md transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.visit.directionsCta}</span>
                <ExternalLink
                  className="w-3.5 h-3.5 opacity-85 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </section>

          {/* Light Greyish Opening Hours & Phone Card (No Email) */}
          <section
            aria-labelledby="hours-heading"
            className="lg:col-span-5 rounded-2xl bg-[#252321] border border-white/15 p-6 sm:p-7 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h2
                id="hours-heading"
                className="font-display text-xl font-bold text-[#EA580C] flex items-center gap-2"
              >
                <Clock className="w-5 h-5 text-[#DC2626] shrink-0" aria-hidden="true" />
                <span>{t.visit.hoursHeading}</span>
              </h2>

              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-white/10">
                  {t.visit.hoursRows.map((row) => (
                    <tr key={row.days}>
                      <th
                        scope="row"
                        className="py-3.5 text-left font-medium text-[#C7BEB5]"
                      >
                        {row.days}
                      </th>
                      <td className="py-3.5 text-right font-bold text-[#F6EFE7] tabular-nums">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between gap-4 rounded-xl bg-[#191715] border border-white/10 px-4 py-3.5">
                <span className="text-sm font-semibold text-[#C7BEB5] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DC2626] shrink-0" aria-hidden="true" />
                  <span>{t.visit.phoneLabel}</span>
                </span>
                <a
                  href={`tel:${t.visit.phoneValue.replace(/\s+/g, '')}`}
                  className="font-cinzel text-base sm:text-lg font-bold text-[#FB923C] hover:text-[#DC2626] tabular-nums transition-colors"
                >
                  {t.visit.phoneValue}
                </a>
              </div>
            </div>
          </section>
        </div>

        <ChopstickDivider />

        {/* 4. BIGGER 3-COLUMN RANDOMIZED-ORIENTATION PHOTO GALLERY (No Text Overlays) */}
        <section aria-labelledby="full-gallery-heading">
          <div className="mb-6">
            <h2
              id="full-gallery-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#EA580C]"
            >
              {t.visit.galleryHeading}
            </h2>
            <p className="mt-1.5 text-sm text-[#C7B7A6]">{t.visit.gallerySubheading}</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 grid-flow-dense items-center">
            {GALLERY_PHOTOS.map((photo, index) => {
              const shapeStyle = GALLERY_SHAPE_CLASSES[photo.shape];
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={photo.alt[lang]}
                  className={`group relative overflow-hidden border border-white/20 hover:border-[#EA580C] bg-[#22201E] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 shadow-lg ${shapeStyle.wrapper}`}
                >
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt[lang]}
                    aspectClassName={shapeStyle.aspect}
                    className="transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* Clean Lightbox Modal (No Text Overlay on Image) */}
        {activePhoto && lightboxIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt[lang]}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative w-full max-w-4xl rounded-2xl bg-[#141210] border border-[#C2410C]/45 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
                <span className="text-xs sm:text-sm font-semibold text-[#EA580C] tabular-nums">
                  {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label={t.visit.closeLightbox}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#221E1A] hover:bg-[#991B1B] text-[#F6EFE7] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-[#0C0B0A]">
                <ResilientImage
                  src={activePhoto.src}
                  alt={activePhoto.alt[lang]}
                  aspectClassName="aspect-[16/10]"
                  className="object-contain"
                  loading="eager"
                />
              </div>

              <div className="px-4 sm:px-6 py-3 flex items-center justify-end gap-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + GALLERY_PHOTOS.length) %
                        GALLERY_PHOTOS.length
                    )
                  }
                  aria-label={t.visit.prevPhoto}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#221E1A] hover:bg-[#C2410C] text-[#F6EFE7] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)
                  }
                  aria-label={t.visit.nextPhoto}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#221E1A] hover:bg-[#C2410C] text-[#F6EFE7] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
