import React, { useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ReviewItem, TranslationContent } from '../data/translations';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: ReviewItem) => void;
  t: TranslationContent;
}

/**
 * Interactive "Leave a Review" modal with animated 1-5 star selector,
 * name field, review textarea, and instant prepend to the reviews list.
 */
export function ReviewModal({
  isOpen,
  onClose,
  onSubmitReview,
  t,
}: ReviewModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const activeStars = hoveredRating ?? rating;
  const ratingText = t.reviewModal.ratingLabels[Math.max(0, activeStars - 1)] ?? '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuote = quote.trim();
    if (!trimmedQuote) {
      setError(t.reviewModal.validationError);
      return;
    }

    const newReview: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      name: name.trim() || t.reviewModal.defaultAuthor,
      date: t.reviewModal.justNowDate,
      rating,
      quote: trimmedQuote,
      isNew: true,
    };

    onSubmitReview(newReview);
    setName('');
    setQuote('');
    setRating(5);
    setHoveredRating(null);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-[#141210] border border-white/20 p-6 sm:p-7 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="review-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold text-white"
                >
                  {t.reviewModal.title}
                </h2>
                <p className="mt-1 text-sm text-[#B5ACA3]">{t.reviewModal.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.reviewModal.closeLabel}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#221E1A] hover:bg-[#991B1B] text-white transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Interactive Star Selector */}
              <div className="rounded-xl bg-[#1C1815] border border-white/15 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sc text-sm font-semibold tracking-wide text-white/80">
                    {t.reviewModal.ratingLabel}
                  </span>
                  <span className="font-cinzel text-sm font-bold text-[#EA580C] tabular-nums">
                    {activeStars}/5 · {ratingText}
                  </span>
                </div>

                <div
                  className="mt-3 flex items-center gap-2"
                  onMouseLeave={() => setHoveredRating(null)}
                >
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const isFilled = starValue <= activeStars;
                    return (
                      <motion.button
                        key={starValue}
                        type="button"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.92 }}
                        onMouseEnter={() => setHoveredRating(starValue)}
                        onClick={() => setRating(starValue)}
                        aria-label={`${starValue} stars`}
                        aria-pressed={rating === starValue}
                        className="p-1.5 rounded-lg focus-visible:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors duration-150 ${
                            isFilled
                              ? 'fill-[#EA580C] text-[#EA580C]'
                              : 'fill-transparent text-[#574F47]'
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="review-author-name"
                  className="block font-sc text-sm font-semibold tracking-wide text-[#B5ACA3] mb-1.5"
                >
                  {t.reviewModal.nameLabel}
                </label>
                <input
                  id="review-author-name"
                  type="text"
                  maxLength={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.reviewModal.namePlaceholder}
                  className="w-full rounded-xl bg-[#1C1815] border border-white/15 focus:border-white px-4 py-3 text-sm text-white placeholder:text-[#787068] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="review-body-text"
                  className="block font-sc text-sm font-semibold tracking-wide text-[#B5ACA3] mb-1.5"
                >
                  {t.reviewModal.reviewLabel}
                </label>
                <textarea
                  id="review-body-text"
                  rows={4}
                  maxLength={320}
                  value={quote}
                  onChange={(e) => {
                    setQuote(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={t.reviewModal.reviewPlaceholder}
                  className="w-full rounded-xl bg-[#1C1815] border border-white/15 focus:border-white px-4 py-3 text-sm text-white placeholder:text-[#787068] focus:outline-none transition-colors resize-none"
                />
                <div className="mt-1.5 flex items-center justify-between text-xs">
                  <span className="text-[#EF4444]" role="alert">
                    {error}
                  </span>
                  <span className="text-[#8D847C] tabular-nums">
                    {quote.length}/320
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 min-h-[44px] rounded-xl bg-[#221E1A] hover:bg-[#2C2621] text-sm font-semibold text-[#B5ACA3] hover:text-white transition-colors cursor-pointer"
                >
                  {t.reviewModal.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 min-h-[44px] rounded-xl bg-[#DC2626] hover:bg-[#991B1B] text-sm font-bold text-white transition-colors cursor-pointer"
                >
                  {t.reviewModal.submitBtn}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
