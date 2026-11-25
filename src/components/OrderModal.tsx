import React, { useEffect } from 'react';
import { ExternalLink, Phone, ShoppingBag, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DELIVERY_APPS } from '../data/menuData';
import { Language, TranslationContent } from '../data/translations';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  t: TranslationContent;
}

/**
 * Compact interactive "Order Now" pop-up opened from the navbar, hero CTA, or menu items.
 * Displays 3 interactive action buttons: Direct Phone Call + 2 Delivery Apps.
 */
export function OrderModal({ isOpen, onClose, lang, t }: OrderModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const topTwoApps = DELIVERY_APPS.slice(0, 2);
  const phoneHref = `tel:${t.visit.phoneValue.replace(/\s+/g, '')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-[#141210] border border-white/20 p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="order-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold text-white"
                >
                  {t.orderModal.title}
                </h2>
                <p className="mt-1 text-sm text-[#B5ACA3]">{t.orderModal.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.orderModal.closeLabel}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#221E1A] hover:bg-[#991B1B] text-white transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {/* Button 1: Call Restaurant Directly */}
              <a
                href={phoneHref}
                className="group flex items-center justify-between gap-4 rounded-xl bg-[#DC2626] hover:bg-[#991B1B] p-4 min-h-[60px] text-white transition-all duration-150 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-cinzel text-base font-bold leading-tight">
                      {t.orderModal.callLabel}
                    </div>
                    <div className="mt-0.5 text-xs text-white/85 truncate">
                      {t.orderModal.callSublabel}
                    </div>
                  </div>
                </div>
                <span className="font-cinzel text-sm font-bold tabular-nums whitespace-nowrap shrink-0">
                  {t.visit.phoneValue}
                </span>
              </a>

              {/* Buttons 2 & 3: Delivery Apps */}
              {topTwoApps.map((app) => (
                <a
                  key={app.id}
                  href={app.url}
                  className="group flex items-center justify-between gap-4 rounded-xl bg-[#1C1815] hover:bg-[#251F1B] border border-white/15 hover:border-[#C2410C] p-4 min-h-[60px] transition-all duration-150 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: app.accentColor }}
                      aria-hidden="true"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-cinzel text-base font-bold text-white leading-tight">
                        {t.orderSection.buttonPrefix} {app.name[lang]}
                      </div>
                      <div className="mt-0.5 text-xs text-[#B5ACA3] truncate">
                        {app.tagline[lang]}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="w-4 h-4 text-[#B5ACA3] group-hover:text-white transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
