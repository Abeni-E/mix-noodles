/**
 * ============================================================================
 * MIX NOODLES — EASY-TO-EDIT MENU, POPULAR TIMES, SOCIALS & GALLERY DATA
 * ============================================================================
 * Edit dish names, descriptions, ETB prices, photos, social links, and
 * delivery app URLs here.
 */

export type MenuCategoryId =
  | 'mains'
  | 'chinese'
  | 'chicken'
  | 'salads'
  | 'shakes-juices'
  | 'veg-fruit';

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  /** Price in Ethiopian Birr (ETB) */
  price: string;
  /** Path to dish photo in /assets/photos/... (leave "" when no photo yet) */
  image: string;
  /** Set true for fasting-friendly dishes (shows green Fasting indicator) */
  fasting?: boolean;
}

export interface DeliveryAppLink {
  id: string;
  name: {
    en: string;
    am: string;
  };
  tagline: {
    en: string;
    am: string;
  };
  url: string;
  accentColor: string;
}

export interface SocialLink {
  id: 'tiktok' | 'facebook';
  name: string;
  handle: string;
  url: string;
}

export type GalleryShape = 'square' | 'landscape' | 'portrait' | 'double';

export interface GalleryPhoto {
  id: string;
  src: string;
  shape: GalleryShape;
  alt: {
    en: string;
    am: string;
  };
}

export type DayKey =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export interface HourlyCrowdEntry {
  /** 24-hour clock hour (7 = 7 AM ... 20 = 8 PM) */
  hour24: number;
  label: string;
  /** Relative crowd intensity 0–100 from Google Maps Popular Times */
  level: number;
}

export interface DayPopularTimes {
  day: DayKey;
  peakNote: {
    en: string;
    am: string;
  };
  hours: HourlyCrowdEntry[];
}

/**
 * ----------------------------------------------------------------------------
 * 0. HERO & MENU BANNER IMAGES + SPECIALS SLOTS
 * ----------------------------------------------------------------------------
 */
/** Warm drinks & restaurant interior photo for the Home full-bleed hero banner */
export const HERO_BACKGROUND_IMAGE = '/assets/photos/hero_drinks_interior.jpg';

/** Fitting real noodle photo behind "The Menu" full-bleed top banner */
export const MENU_HERO_BACKGROUND_IMAGE = '/assets/photos/stir_fry_closeup.jpg';

/** Dining room & painted Mix Noodles wall photo behind "Visit Mix Noodles" full-bleed top banner */
export const VISIT_HERO_BACKGROUND_IMAGE = '/assets/photos/dining_interior.jpg';

/** Real Mix Noodles wall mural logo */
export const MIX_LOGO_PHOTO = '/assets/photos/mix_logo_wall.jpg';

/** 4 featured dish IDs shown in "Our Specials" on the Home page */
export const HOME_SPECIALS_IDS: string[] = [
  'main-stir-fry-combo-noodle',
  'chk-lollipop',
  'sal-combo',
  'drk-mojito',
];

/**
 * ----------------------------------------------------------------------------
 * 1. SOCIAL MEDIA LINKS (TikTok & Facebook)
 * ----------------------------------------------------------------------------
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@mix_noodles',
    url: 'https://www.tiktok.com/@mix_noodles?_r=1&_d=e29b069hl0k6if&sec_uid=MS4wLjABAAAASHppcC1Bnap7WLz082zcEKTWOFFzIhMsxNyUzngwA0bI0wY6cebd1XBr0zj7okep&share_author_id=7206770551145726981&sharer_language=en&source=h5_m&timestamp=1795625827&item_author_type=0&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7685665804231051029&share_link_id=02e21164-1b49-4f4a-937f-e4c28b3342fe&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&share_enter_from=others_homepage&item_author_type=0&enable_checksum=1',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Mixed Noodles',
    url: 'https://www.facebook.com/share/1FC3xDJw88/',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 2. DELIVERY APP LINKS (Navbar Order Pop-up & Footer)
 * ----------------------------------------------------------------------------
 */
export const DELIVERY_APPS: DeliveryAppLink[] = [
  {
    id: 'app-1',
    name: {
      en: 'App 1',
      am: 'መተግበሪያ 1',
    },
    tagline: {
      en: 'Neighborhood delivery · 09:00 – 20:30',
      am: 'የአካባቢ አቅርቦት · 09:00 – 20:30',
    },
    url: '#',
    accentColor: '#DC2626',
  },
  {
    id: 'app-2',
    name: {
      en: 'App 2',
      am: 'መተግበሪያ 2',
    },
    tagline: {
      en: 'Live courier tracking · Doorstep drop-off',
      am: 'ቀጥታ የአቅርቦት ክትትል · እስከ ደጃፍ',
    },
    url: '#',
    accentColor: '#C2410C',
  },
  {
    id: 'app-3',
    name: {
      en: 'App 3',
      am: 'መተግበሪያ 3',
    },
    tagline: {
      en: 'Order ahead for pickup or scheduled delivery',
      am: 'ቀድመው ይዘዙ ወይም በቀጠሮ ይረከቡ',
    },
    url: '#',
    accentColor: '#9A3412',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 3. MENU CATEGORIES ORDER (Exact requested order)
 * ----------------------------------------------------------------------------
 */
export const MENU_CATEGORIES: MenuCategoryId[] = [
  'mains',
  'chinese',
  'chicken',
  'salads',
  'shakes-juices',
  'veg-fruit',
];

/**
 * ----------------------------------------------------------------------------
 * 4. MENU ITEMS DATA ARRAY (Real ETB prices & descriptions from screenshots)
 * ----------------------------------------------------------------------------
 */
export const MENU_ITEMS: MenuItem[] = [
  // --- 1. Wok & Sizzling Mains (13 items) ---
  {
    id: 'main-stir-fry-veg-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Vegetable Noodle',
      am: 'Stir Fry Vegetable Noodle',
    },
    description: {
      en: 'Fresh homemade stir-fried noodles tossed with crisp seasonal vegetables and savory house soy sauce.',
      am: 'Fresh homemade stir-fried noodles tossed with crisp seasonal vegetables and savory house soy sauce.',
    },
    price: '760 ETB',
    image: '/assets/photos/veg_noodles_top.jpg',
  },
  {
    id: 'main-stir-fry-chicken-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Chicken Noodle',
      am: 'Stir Fry Chicken Noodle',
    },
    description: {
      en: 'Fresh homemade noodles with marinated chopped chicken breast, egg, fresh vegetables, and house spices.',
      am: 'Fresh homemade noodles with marinated chopped chicken breast, egg, fresh vegetables, and house spices.',
    },
    price: '990 ETB',
    image: '/assets/photos/stir_fry_closeup.jpg',
  },
  {
    id: 'main-stir-fry-combo-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Combo Noodle',
      am: 'Stir Fry Combo Noodle',
    },
    description: {
      en: 'Combo noodles wok-tossed with mixed meats, crisp fresh vegetables, and savory house sauce.',
      am: 'Combo noodles wok-tossed with mixed meats, crisp fresh vegetables, and savory house sauce.',
    },
    price: '995 ETB',
    image: '/assets/photos/combo_noodles_salad.jpg',
  },
  {
    id: 'main-stir-fry-fish-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Fish Noodle',
      am: 'Stir Fry Fish Noodle',
    },
    description: {
      en: 'Fresh homemade noodles stir-fried with seasoned fish, crisp vegetables, and aromatic spices.',
      am: 'Fresh homemade noodles stir-fried with seasoned fish, crisp vegetables, and aromatic spices.',
    },
    price: '850 ETB',
    image: '',
  },
  {
    id: 'main-stir-fry-beef-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Beef Noodle',
      am: 'Stir Fry Beef Noodle',
    },
    description: {
      en: 'Fresh homemade noodles wok-tossed with tender sliced beef, vegetables, and rich soy glaze.',
      am: 'Fresh homemade noodles wok-tossed with tender sliced beef, vegetables, and rich soy glaze.',
    },
    price: '950 ETB',
    image: '',
  },
  {
    id: 'main-stir-fry-tofu-noodle',
    category: 'mains',
    name: {
      en: 'Stir Fry Tofu Noodle',
      am: 'Stir Fry Tofu Noodle',
    },
    description: {
      en: 'Fresh homemade noodles with golden tofu, fresh vegetables, egg or egg-free option, served with chili and soy sauce.',
      am: 'Fresh homemade noodles with golden tofu, fresh vegetables, egg or egg-free option, served with chili and soy sauce.',
    },
    price: '740 ETB',
    image: '',
  },
  {
    id: 'main-fish-sizzling',
    category: 'mains',
    name: {
      en: 'Fish Sizzling',
      am: 'Fish Sizzling',
    },
    description: {
      en: 'Marinated fried fish mixed with different fresh vegetables and spices, served on a hot sizzling plate.',
      am: 'Marinated fried fish mixed with different fresh vegetables and spices, served on a hot sizzling plate.',
    },
    price: '960 ETB',
    image: '',
  },
  {
    id: 'main-fried-tofu',
    category: 'mains',
    name: {
      en: 'Fried Tofu',
      am: 'Fried Tofu',
    },
    description: {
      en: 'Deep-fried crispy tofu tossed with special chili sauce and fresh green onion.',
      am: 'Deep-fried crispy tofu tossed with special chili sauce and fresh green onion.',
    },
    price: '680 ETB',
    image: '',
  },
  {
    id: 'main-beef-sizzling',
    category: 'mains',
    name: {
      en: 'Beef Sizzling',
      am: 'Beef Sizzling',
    },
    description: {
      en: 'Marinated fried sliced beef mixed with fresh vegetables and spices, served on a hot sizzling plate.',
      am: 'Marinated fried sliced beef mixed with fresh vegetables and spices, served on a hot sizzling plate.',
    },
    price: '1,190 ETB',
    image: '/assets/photos/beef_sizzling.jpg',
  },
  {
    id: 'main-chicken-sizzling',
    category: 'mains',
    name: {
      en: 'Chicken Sizzling',
      am: 'Chicken Sizzling',
    },
    description: {
      en: 'Marinated fried sliced chicken breast mixed with fresh vegetables and spices, served on a hot sizzling plate.',
      am: 'Marinated fried sliced chicken breast mixed with fresh vegetables and spices, served on a hot sizzling plate.',
    },
    price: '1,340 ETB',
    image: '/assets/photos/chicken_sizzling.jpg',
  },
  {
    id: 'main-fried-corn',
    category: 'mains',
    name: {
      en: 'Fried Corn',
      am: 'Fried Corn',
    },
    description: {
      en: 'Marinated deep-fried corn mixed with dry chili, carrot, and green onion.',
      am: 'Marinated deep-fried corn mixed with dry chili, carrot, and green onion.',
    },
    price: '610 ETB',
    image: '',
  },
  {
    id: 'main-beef-broccoli',
    category: 'mains',
    name: {
      en: 'Beef Broccoli',
      am: 'Beef Broccoli',
    },
    description: {
      en: 'Marinated fried sliced beef with broccoli, garlic, ginger, and savory house spice.',
      am: 'Marinated fried sliced beef with broccoli, garlic, ginger, and savory house spice.',
    },
    price: '810 ETB',
    image: '',
  },
  {
    id: 'main-broccoli-garlic',
    category: 'mains',
    name: {
      en: 'Broccoli Garlic',
      am: 'Broccoli Garlic',
    },
    description: {
      en: 'Fresh broccoli florets wok-tossed with aromatic garlic and savory seasoning.',
      am: 'Fresh broccoli florets wok-tossed with aromatic garlic and savory seasoning.',
    },
    price: '510 ETB',
    image: '',
  },

  // --- 2. Chinese Cuisine (5 Rice dishes) ---
  {
    id: 'cn-veg-fried-rice',
    category: 'chinese',
    fasting: true,
    name: {
      en: 'Vegetable Fried Rice',
      am: 'Vegetable Fried Rice',
    },
    description: {
      en: 'Stir-fried steamed rice with fresh vegetables (with or without egg), spices, chili, and soy sauce.',
      am: 'Stir-fried steamed rice with fresh vegetables (with or without egg), spices, chili, and soy sauce.',
    },
    price: '690 ETB',
    image: '/assets/photos/veg_fried_rice.jpg',
  },
  {
    id: 'cn-fish-fried-rice',
    category: 'chinese',
    name: {
      en: 'Fish Fried Rice',
      am: 'Fish Fried Rice',
    },
    description: {
      en: 'Steamed rice stir-fried with marinated chopped fish, fresh vegetables (egg or egg-free), chili, and soy sauce.',
      am: 'Steamed rice stir-fried with marinated chopped fish, fresh vegetables (egg or egg-free), chili, and soy sauce.',
    },
    price: '780 ETB',
    image: '',
  },
  {
    id: 'cn-chicken-fried-rice',
    category: 'chinese',
    name: {
      en: 'Chicken Fried Rice',
      am: 'Chicken Fried Rice',
    },
    description: {
      en: 'Savory wok-fried rice tossed with seasoned chicken, crisp vegetables, and soy glaze.',
      am: 'Savory wok-fried rice tossed with seasoned chicken, crisp vegetables, and soy glaze.',
    },
    price: '870 ETB',
    image: '',
  },
  {
    id: 'cn-beef-fried-rice',
    category: 'chinese',
    name: {
      en: 'Beef Fried Rice',
      am: 'Beef Fried Rice',
    },
    description: {
      en: 'Steamed rice wok-fried with tender beef, fresh seasonal vegetables, and house sauce.',
      am: 'Steamed rice wok-fried with tender beef, fresh seasonal vegetables, and house sauce.',
    },
    price: '840 ETB',
    image: '',
  },
  {
    id: 'cn-combo-rice',
    category: 'chinese',
    name: {
      en: 'Combo Rice',
      am: 'Combo Rice',
    },
    description: {
      en: 'Hearty combo fried rice with mixed meats, crisp vegetables, and signature seasoning.',
      am: 'Hearty combo fried rice with mixed meats, crisp vegetables, and signature seasoning.',
    },
    price: '860 ETB',
    image: '',
  },

  // --- 3. Chicken (1 item) ---
  {
    id: 'chk-lollipop',
    category: 'chicken',
    name: {
      en: 'Chicken Lollipop',
      am: 'Chicken Lollipop',
    },
    description: {
      en: 'Crispy spiced chicken lollipops tossed in our savory chili-garlic glaze.',
      am: 'Crispy spiced chicken lollipops tossed in our savory chili-garlic glaze.',
    },
    price: '1,200 ETB',
    image: '',
  },

  // --- 4. Salads (5 items) ---
  {
    id: 'sal-combo',
    category: 'salads',
    name: {
      en: 'Combo Salad',
      am: 'Combo Salad',
    },
    description: {
      en: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, boiled egg, chicken, beef, fish, avocado & house sauce.',
      am: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, boiled egg, chicken, beef, fish, avocado & house sauce.',
    },
    price: '910 ETB',
    image: '/assets/photos/combo_salad_bowl.jpg',
  },
  {
    id: 'sal-normal',
    category: 'salads',
    name: {
      en: 'Normal Salad',
      am: 'Normal Salad',
    },
    description: {
      en: 'Fresh lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, avocado sauce, special house sauce, and toasted bread.',
      am: 'Fresh lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, avocado sauce, special house sauce, and toasted bread.',
    },
    price: '460 ETB',
    image: '/assets/photos/tossed_salad.jpg',
  },
  {
    id: 'sal-fish',
    category: 'salads',
    name: {
      en: 'Fish Salad',
      am: 'Fish Salad',
    },
    description: {
      en: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, fish, avocado sauce, special house sauce, and toasted bread.',
      am: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, fish, avocado sauce, special house sauce, and toasted bread.',
    },
    price: '560 ETB',
    image: '',
  },
  {
    id: 'sal-beef',
    category: 'salads',
    name: {
      en: 'Beef Salad',
      am: 'Beef Salad',
    },
    description: {
      en: 'Lettuce, cucumber, carrot, white onion, chili beef, avocado sauce, special house sauce, mayonnaise, and toasted bread.',
      am: 'Lettuce, cucumber, carrot, white onion, chili beef, avocado sauce, special house sauce, mayonnaise, and toasted bread.',
    },
    price: '650 ETB',
    image: '',
  },
  {
    id: 'sal-chicken',
    category: 'salads',
    name: {
      en: 'Chicken Salad',
      am: 'Chicken Salad',
    },
    description: {
      en: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, chicken, avocado sauce, house sauce, mayonnaise, and toasted bread.',
      am: 'Lettuce, cucumber, carrot, white onion, chili, plum tomato, sweet corn, chicken, avocado sauce, house sauce, mayonnaise, and toasted bread.',
    },
    price: '860 ETB',
    image: '',
  },

  // --- 5. Shakes & Juices (2 items) ---
  {
    id: 'drk-mojito',
    category: 'shakes-juices',
    fasting: true,
    name: {
      en: 'Mojito',
      am: 'Mojito',
    },
    description: {
      en: 'Classic mojitos, strawberry mojitos, pineapple mojitos, blue lagoon mojitos, espresso mojitos, and cinnamon mojitos.',
      am: 'Classic mojitos, strawberry mojitos, pineapple mojitos, blue lagoon mojitos, espresso mojitos, and cinnamon mojitos.',
    },
    price: '300 ETB',
    image: '/assets/photos/mojito_glasses.jpg',
  },
  {
    id: 'drk-smoothies',
    category: 'shakes-juices',
    name: {
      en: 'Smoothies',
      am: 'Smoothies',
    },
    description: {
      en: 'Mix special, avocado banana, chocolate peanut butter, classic strawberry, peanut banana espresso, and papaya.',
      am: 'Mix special, avocado banana, chocolate peanut butter, classic strawberry, peanut banana espresso, and papaya.',
    },
    price: '350 ETB',
    image: '/assets/photos/smoothie_cup.jpg',
  },

  // --- 6. Vegetable & Fruit (1 item) ---
  {
    id: 'vf-mixed-veg',
    category: 'veg-fruit',
    name: {
      en: 'Mixed Vegetable',
      am: 'Mixed Vegetable',
    },
    description: {
      en: 'Different seasonal steamed vegetable mix tossed with fragrant house spices.',
      am: 'Different seasonal steamed vegetable mix tossed with fragrant house spices.',
    },
    price: '460 ETB',
    image: '',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 5. GOOGLE MAPS POPULAR TIMES (7 AM – 9 PM, extracted from screenshots)
 * ----------------------------------------------------------------------------
 */
const HOURS_LABELS = [
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
];

function buildHours(levels: number[]): HourlyCrowdEntry[] {
  return levels.map((level, idx) => ({
    hour24: 7 + idx,
    label: HOURS_LABELS[idx],
    level,
  }));
}

export const POPULAR_TIMES_BY_DAY: DayPopularTimes[] = [
  {
    day: 'sunday',
    peakNote: {
      en: 'Steady afternoon crowd · No wait',
      am: 'መካከለኛ የከሰዓት እንቅስቃሴ · ወረፋ የለም',
    },
    hours: buildHours([60, 60, 48, 48, 40, 48, 40, 60, 60, 54, 48, 32, 40, 16]),
  },
  {
    day: 'monday',
    peakNote: {
      en: 'Peak wait up to 15 min from 8:00 AM – 9:30 AM',
      am: 'ከ8:00 AM – 9:30 AM እስከ 15 ደቂቃ መጠበቅ ሊኖር ይችላል',
    },
    hours: buildHours([68, 68, 56, 74, 58, 74, 66, 66, 64, 72, 66, 66, 74, 82]),
  },
  {
    day: 'tuesday',
    peakNote: {
      en: 'Busiest around 7 PM – 9 PM · Usually no wait',
      am: 'ከ7:00 PM – 9:00 PM ሞቅ ያለ · ብዙ ጊዜ ወረፋ የለም',
    },
    hours: buildHours([28, 62, 48, 60, 70, 76, 60, 42, 52, 66, 66, 66, 80, 94]),
  },
  {
    day: 'wednesday',
    peakNote: {
      en: 'Quiet midday · Light evening rush · No wait',
      am: 'ቀን ላይ ጸጥ ያለ · ማታ ላይ ቀላል እንቅስቃሴ · ወረፋ የለም',
    },
    hours: buildHours([55, 72, 56, 32, 20, 12, 12, 18, 18, 24, 45, 52, 72, 56]),
  },
  {
    day: 'thursday',
    peakNote: {
      en: 'Lunch rush 11 AM – 2 PM · Quiet evening · No wait',
      am: 'ከ11 AM – 2 PM የምሳ ሰዓት ሞቅ ያለ · ማታ ላይ ጸጥ ያለ',
    },
    hours: buildHours([32, 26, 38, 72, 86, 86, 86, 66, 56, 38, 32, 24, 32, 44]),
  },
  {
    day: 'friday',
    peakNote: {
      en: 'Relaxed all day · Easy seating · No wait',
      am: 'ቀኑን ሙሉ የተረጋጋ · ወንበር በቀላሉ ይገኛል',
    },
    hours: buildHours([40, 40, 32, 32, 32, 40, 48, 32, 32, 30, 30, 30, 40, 40]),
  },
  {
    day: 'saturday',
    peakNote: {
      en: 'Busy morning & late afternoon · No wait',
      am: 'ጠዋት እና ከሰዓት በኋላ ሞቅ ያለ · ወረፋ የለም',
    },
    hours: buildHours([86, 68, 36, 24, 30, 36, 36, 42, 52, 66, 60, 48, 42, 36]),
  },
];

/**
 * ----------------------------------------------------------------------------
 * 6. VISIT US PHOTO GALLERY (3-column varied orientations, no text overlays)
 * ----------------------------------------------------------------------------
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-dining',
    src: '/assets/photos/dining_interior.jpg',
    shape: 'double',
    alt: {
      en: 'Mixed Noodles dining room with guests and signature wall mural',
      am: 'የሚክስድ ኑድልስ የመመገቢያ አዳራሽ',
    },
  },
  {
    id: 'gal-logo',
    src: '/assets/photos/mix_logo_wall.jpg',
    shape: 'portrait',
    alt: {
      en: 'Hand-painted Mixed Noodles logo mural inside the restaurant',
      am: 'በምግብ ቤቱ ግድግዳ ላይ ያለው የሚክስድ ኑድልስ አርማ',
    },
  },
  {
    id: 'gal-stir-fry',
    src: '/assets/photos/stir_fry_closeup.jpg',
    shape: 'square',
    alt: {
      en: 'Glossy stir-fried noodles served alongside sizzling platter',
      am: 'በዎክ የተጠበሱ ኑድልስ ከሲዝሊንግ ምግብ ጋር',
    },
  },
  {
    id: 'gal-chicken-sizzling',
    src: '/assets/photos/chicken_sizzling.jpg',
    shape: 'landscape',
    alt: {
      en: 'Chicken sizzling served on a hot cast-iron platter',
      am: 'በሞቀ የብረት ሳህን የቀረበ ሲዝሊንግ ዶሮ',
    },
  },
  {
    id: 'gal-combo-salad',
    src: '/assets/photos/combo_salad_bowl.jpg',
    shape: 'square',
    alt: {
      en: 'Fresh combo salad bowl with boiled egg, chicken, beef, and vegetables',
      am: 'ኮምቦ ሰላጣ በጎድጓዳ ሳህን',
    },
  },
  {
    id: 'gal-beef-sizzling',
    src: '/assets/photos/beef_sizzling.jpg',
    shape: 'landscape',
    alt: {
      en: 'Beef sizzling with fresh vegetables on a hot iron plate',
      am: 'በሞቀ የብረት ሳህን የቀረበ ሲዝሊንግ የበሬ ሥጋ',
    },
  },
  {
    id: 'gal-mojitos',
    src: '/assets/photos/mojito_glasses.jpg',
    shape: 'portrait',
    alt: {
      en: 'Chilled classic and blue lagoon mojitos garnished with mint',
      am: 'ቀዝቃዛ ሞሂቶ መጠጦች',
    },
  },
  {
    id: 'gal-veg-noodles',
    src: '/assets/photos/veg_noodles_top.jpg',
    shape: 'double',
    alt: {
      en: 'Stir fry vegetable noodles plated on a curved white dish',
      am: 'የአትክልት ስቲር ፍራይ ኑድልስ',
    },
  },
  {
    id: 'gal-smoothies',
    src: '/assets/photos/smoothie_cup.jpg',
    shape: 'landscape',
    alt: {
      en: 'Fresh fruit smoothie served chilled',
      am: 'ቀዝቃዛ የፍራፍሬ ስሙዚ',
    },
  },
  {
    id: 'gal-fried-rice',
    src: '/assets/photos/veg_fried_rice.jpg',
    shape: 'square',
    alt: {
      en: 'Vegetable fried rice seasoned with soy and fresh herbs',
      am: 'የአትክልት የተጠበሰ ሩዝ',
    },
  },
  {
    id: 'gal-combo-plate',
    src: '/assets/photos/combo_noodles_salad.jpg',
    shape: 'landscape',
    alt: {
      en: 'Stir-fried noodles paired with fresh crispy chicken salad',
      am: 'ስቲር ፍራይ ኑድልስ ከትኩስ ሰላጣ ጋር',
    },
  },
  {
    id: 'gal-tossed-salad',
    src: '/assets/photos/tossed_salad.jpg',
    shape: 'portrait',
    alt: {
      en: 'Fresh tossed house salad in glass bowl',
      am: 'ትኩስ የቤቱ ሰላጣ',
    },
  },
];
