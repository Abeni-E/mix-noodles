/**
 * ============================================================================
 * MIX NOODLES — BILINGUAL TRANSLATIONS (ENGLISH & AMHARIC)
 * ============================================================================
 * Edit any heading, label, review, or placeholder restaurant detail below.
 * Both "en" and "am" follow the exact same object shape.
 */

export type Language = 'en' | 'am';

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  quote: string;
  isNew?: boolean;
}

export interface TranslationContent {
  brandName: string;
  nav: {
    home: string;
    menu: string;
    visit: string;
    orderNow: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    kicker: string;
    headline: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    visitBannerText: string;
    visitBannerCta: string;
    specialsHeading: string;
    specialsSubheading: string;
    specialPlaceholderLabel: string;
    specialPlaceholderHint: string;
    viewAllMenu: string;
    socialsHeading: string;
    socialsSubheading: string;
    followOnLabel: string;
    reviewsHeading: string;
    reviewsSubheading: string;
    leaveReviewBtn: string;
    reviews: ReviewItem[];
  };
  reviewModal: {
    title: string;
    subtitle: string;
    ratingLabel: string;
    ratingLabels: string[];
    nameLabel: string;
    namePlaceholder: string;
    reviewLabel: string;
    reviewPlaceholder: string;
    submitBtn: string;
    cancelBtn: string;
    closeLabel: string;
    defaultAuthor: string;
    justNowDate: string;
    validationError: string;
  };
  orderModal: {
    title: string;
    subtitle: string;
    callLabel: string;
    callSublabel: string;
    closeLabel: string;
  };
  menu: {
    pageTitle: string;
    pageSubtitle: string;
    allCategory: string;
    fastingLabel: string;
    categories: {
      mains: string;
      chinese: string;
      chicken: string;
      salads: string;
      'shakes-juices': string;
      'veg-fruit': string;
    };
    orderOnAppCta: string;
    emptyCategory: string;
  };
  visit: {
    pageTitle: string;
    pageSubtitle: string;
    popularTimes: {
      heading: string;
      prevDay: string;
      nextDay: string;
      selectedHourLabel: string;
      resetNow: string;
      dayNames: Record<
        'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday',
        string
      >;
      statusClosed: string;
      statusEmpty: string;
      statusKindOfBusy: string;
      statusIntermediate: string;
      statusBusy: string;
      statusReallyPacked: string;
    };
    locationHeading: string;
    addressLabel: string;
    addressValue: string;
    plusCode: string;
    neighborhoodNote: string;
    directionsCta: string;
    phoneLabel: string;
    phoneValue: string;
    hoursHeading: string;
    hoursRows: Array<{
      days: string;
      time: string;
    }>;
    galleryHeading: string;
    gallerySubheading: string;
    closeLightbox: string;
    prevPhoto: string;
    nextPhoto: string;
  };
  orderSection: {
    buttonPrefix: string;
  };
  footer: {
    tagline: string;
    quickLinksHeading: string;
    hoursHeading: string;
    hoursSummary: string;
    deliveryHeading: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    brandName: 'Mixed Noodles',
    nav: {
      home: 'Home',
      menu: 'Menu',
      visit: 'Visit Us',
      orderNow: 'Order Now',
      languageLabel: 'Switch language',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    home: {
      kicker: 'Homemade Chinese Noodles · Ayertena',
      headline: 'Fresh Stir-Fried Noodles, Sizzling Plates & Bowls Daily',
      tagline:
        'From wok-tossed homemade noodles and hot sizzling platters to crisp salads and fresh mojitos, Mixed Noodles serves bold flavor right at Ayertena Traffic Light.',
      primaryCta: 'Order Now',
      secondaryCta: 'Explore Full Menu',
      visitBannerText: 'Come over today — try our freshly cooked noodles in person',
      visitBannerCta: 'Visit Us',
      specialsHeading: 'Our Specials',
      specialsSubheading:
        'Guest favorites from our kitchen—stir-fry combo noodles, chicken lollipop, combo salad, and fresh mojitos.',
      specialPlaceholderLabel: 'Special',
      specialPlaceholderHint: 'Photo & dish details coming soon',
      viewAllMenu: 'See Full Menu',
      socialsHeading: 'What are people saying online?',
      socialsSubheading:
        'Visit our socials and make sure to follow and like our videos.',
      followOnLabel: 'Visit us on',
      reviewsHeading: 'Read Our Reviews',
      reviewsSubheading:
        'Real feedback from our guests at Ayertena — hover any card or add your own.',
      leaveReviewBtn: 'Leave a Review',
      reviews: [
        {
          id: 'rev-1',
          name: 'Amanuel Yigzaw',
          date: '5 months ago',
          rating: 5,
          quote:
            'I enjoyed eating sizzling fish, which had a delicious taste, and the customer service was excellent. The view was also breathtaking.',
        },
        {
          id: 'rev-2',
          name: 'Melesse',
          date: '4 weeks ago',
          rating: 5,
          quote:
            'Quiet, easy to talk, and a great spot for 3–4 people. Generous homemade noodles with very fair ETB pricing.',
        },
        {
          id: 'rev-3',
          name: 'Fraol Kuma',
          date: '3 months ago',
          rating: 5,
          quote:
            'Great lunch spot with quick service under 10 minutes, fresh salads for vegetarian options, and 5-star food and atmosphere.',
        },
        {
          id: 'rev-4',
          name: 'Estifanose Lulseged Legesse',
          date: '5 months ago',
          rating: 5,
          quote:
            'No wait for dinner! Wonderful sizzling plates, stir-fried noodles, and great vegetarian and fasting food options available.',
        },
        {
          id: 'rev-5',
          name: 'henok abeje',
          date: '4 months ago',
          rating: 5,
          quote:
            'Nice taste! 5/5 for food, service, and atmosphere—a lively and welcoming dining room for friends and family.',
        },
        {
          id: 'rev-6',
          name: 'Beza Gosaye',
          date: '2 months ago',
          rating: 5,
          quote:
            'Freshly stir-fried vegetable noodles, crisp combo salad, and refreshing mojitos—everything came out fresh and flavorful.',
        },
        {
          id: 'rev-7',
          name: 'eyader addis',
          date: '8 months ago',
          rating: 5,
          quote:
            'Loved the flavor of the food and the warm hospitality. Easily worth coming back for another round.',
        },
        {
          id: 'rev-8',
          name: 'Tsion Terefe',
          date: '6 months ago',
          rating: 5,
          quote:
            'Great service and great food!! Clean space, attentive staff, and bold flavors from start to finish.',
        },
      ],
    },
    reviewModal: {
      title: 'Share Your Experience',
      subtitle: 'Tap a star rating and tell other guests what you enjoyed.',
      ratingLabel: 'Your Rating',
      ratingLabels: ['Needs work', 'Fair', 'Good', 'Great!', 'Unforgettable!'],
      nameLabel: 'Your Name (Optional)',
      namePlaceholder: 'e.g., Meron A.',
      reviewLabel: 'Your Review',
      reviewPlaceholder: 'How were the noodles, sizzling plates, and service?',
      submitBtn: 'Leave a Review',
      cancelBtn: 'Cancel',
      closeLabel: 'Close review form',
      defaultAuthor: 'Happy Guest',
      justNowDate: 'Just now',
      validationError: 'Please write a short review before posting.',
    },
    orderModal: {
      title: 'Order Mixed Noodles',
      subtitle: 'Call us directly or choose a delivery app below.',
      callLabel: 'Call Restaurant Directly',
      callSublabel: 'Speak with our counter for pickup or quick help',
      closeLabel: 'Close order options',
    },
    menu: {
      pageTitle: 'The Menu',
      pageSubtitle:
        'Homemade stir-fried noodles, hot sizzling platters, Chinese rice dishes, crisp salads, and fresh shakes & juices — all priced in ETB.',
      allCategory: 'All Dishes',
      fastingLabel: 'Fasting',
      categories: {
        mains: 'Noodles & Sizzling Mains',
        chinese: 'Chinese Cuisine',
        chicken: 'Chicken',
        salads: 'Salads',
        'shakes-juices': 'Shakes & Juices',
        'veg-fruit': 'Vegetable & Fruit',
      },
      orderOnAppCta: 'Order on delivery',
      emptyCategory: 'No dishes found in this category.',
    },
    visit: {
      pageTitle: 'Visit Mixed Noodles',
      pageSubtitle:
        'Check how busy we are by the hour, browse our real kitchen photos, or open Google Maps for turn-by-turn directions to Ayertena.',
      popularTimes: {
        heading: 'Popular Times & Best Hours to Visit',
        prevDay: 'Previous day',
        nextDay: 'Next day',
        selectedHourLabel: 'Viewing hour:',
        resetNow: 'Jump to current hour',
        dayNames: {
          sunday: 'Sunday',
          monday: 'Monday',
          tuesday: 'Tuesday',
          wednesday: 'Wednesday',
          thursday: 'Thursday',
          friday: 'Friday',
          saturday: 'Saturday',
        },
        statusClosed:
          'We are closed right now — dine-in opens daily at 7:00 AM (delivery 9:00 AM – 8:30 PM).',
        statusEmpty: "It's empty and quiet right now — you can walk right in!",
        statusKindOfBusy:
          'Kind of busy right now — plenty of open seats with no wait.',
        statusIntermediate:
          'Moderately busy (intermediate) — lively dining room, little to no wait.',
        statusBusy:
          'Busy right now — popular hour, consider coming slightly earlier or ordering delivery.',
        statusReallyPacked:
          "It's really packed right now — do not rush over yet, try visiting in a couple of hours!",
      },
      locationHeading: 'Location & Contact',
      addressLabel: 'Address',
      addressValue: 'XMMX+33W Ayertena, Addis Ababa, Ethiopia',
      plusCode: 'XMMX+33W',
      neighborhoodNote: 'Easy access right at Ayertena Traffic Light',
      directionsCta: 'Open in Google Maps',
      phoneLabel: 'Phone',
      phoneValue: '098 199 9955',
      hoursHeading: 'Opening Hours',
      hoursRows: [
        { days: 'Dine-In (Mon – Sun)', time: '7:00 AM – 9:00 PM' },
        { days: 'Delivery Apps (Mon – Sun)', time: '9:00 AM – 8:30 PM' },
      ],
      galleryHeading: 'Photo Gallery',
      gallerySubheading: 'Click any photo to open it larger.',
      closeLightbox: 'Close photo viewer',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
    },
    orderSection: {
      buttonPrefix: 'Order on',
    },
    footer: {
      tagline:
        'Homemade stir-fried noodles, sizzling platters, Chinese fried rice, and fresh drinks at Ayertena Traffic Light.',
      quickLinksHeading: 'Explore',
      hoursHeading: 'Hours & Location',
      hoursSummary: 'Dine-In Daily 7:00 AM – 9:00 PM · Delivery 9:00 AM – 8:30 PM',
      deliveryHeading: 'Order Delivery',
      copyright: '© 2026 Mixed Noodles. All rights reserved.',
    },
  },

  am: {
    brandName: 'ሚክስድ ኑድልስ',
    nav: {
      home: 'መነሻ',
      menu: 'ሜኑ',
      visit: 'ይጎብኙን',
      orderNow: 'አሁን ይዘዙ',
      languageLabel: 'ቋንቋ ቀይር',
      openMenu: 'ማውጫውን ክፈት',
      closeMenu: 'ማውጫውን ዝጋ',
    },
    home: {
      kicker: 'በቤት የተሰሩ የቻይና ኑድልስ · አየር ጤና',
      headline: 'በየቀኑ ትኩስ ስቲር ፍራይ ኑድልስ እና ሲዝሊንግ ምግቦች',
      tagline:
        'በዎክ ከተጠበሱ ኑድልስ እና ትኩስ ሲዝሊንግ ምግቦች እስከ ትኩስ ሰላጣ እና ሞሂቶ ድረስ፤ ሚክስድ ኑድልስ አየር ጤና ትራፊክ መብራት አጠገብ ጣፋጭ ምግቦችን ያቀርባል።',
      primaryCta: 'አሁን ይዘዙ',
      secondaryCta: 'ሙሉ ሜኑን ይመልከቱ',
      visitBannerText: 'ዛሬ ይጎብኙን — ትኩስ የተሰሩ ኑድልሶችን በምግብ ቤታችን ይቅመሱ',
      visitBannerCta: 'ይጎብኙን',
      specialsHeading: 'የእኛ ልዩ ምግቦች',
      specialsSubheading:
        'ከደንበኞቻችን ተወዳጅ ምርጫዎች — ኮምቦ ስቲር ፍራይ ኑድልስ፣ ቺክን ሎሊፖፕ፣ ኮምቦ ሰላጣ እና ትኩስ ሞሂቶ።',
      specialPlaceholderLabel: 'ልዩ ምግብ',
      specialPlaceholderHint: 'ፎቶ እና የምግብ መረጃ በቅርቡ ይገባል',
      viewAllMenu: 'ሙሉ ሜኑን ይመልከቱ',
      socialsHeading: 'ሰዎች በመስመር ላይ ምን እያሉ ነው?',
      socialsSubheading:
        'የማህበራዊ ገጾቻችንን ይጎብኙ እና ቪዲዮዎቻችንን ላይክ እና ፎሎው ማድረግ እንዳይረሱ።',
      followOnLabel: 'ይከታተሉን በ',
      reviewsHeading: 'አስተያየቶቻችንን ያንብቡ',
      reviewsSubheading:
        'የእንግዶቻችን እውነተኛ አስተያየቶች — በካርዶቹ ላይ ይንኩ ወይም የራስዎን አስተያየት ይጨምሩ።',
      leaveReviewBtn: 'አስተያየት ይስጡ',
      reviews: [
        {
          id: 'rev-1',
          name: 'Amanuel Yigzaw',
          date: 'ከ5 ወራት በፊት',
          rating: 5,
          quote:
            'ሲዝሊንግ ዓሣው በጣም ጣፋጭ ነበር፤ የደንበኞች አገልግሎታቸውም እጅግ በጣም ጥሩ ነው። እይታውም አስደናቂ ነበር።',
        },
        {
          id: 'rev-2',
          name: 'Melesse',
          date: 'ከ4 ሳምንታት በፊት',
          rating: 5,
          quote:
            'ጸጥ ያለ፣ ለመነጋገር ምቹ እና ለ3–4 ሰዎች ተስማሚ ቦታ። ጣፋጭ ኑድልስ በተመጣጣኝ ዋጋ።',
        },
        {
          id: 'rev-3',
          name: 'Fraol Kuma',
          date: 'ከ3 ወራት በፊት',
          rating: 5,
          quote:
            'ለምሳ በጣም ጥሩ ቦታ፤ ከ10 ደቂቃ ባነሰ ጊዜ ፈጣን አገልግሎት፣ ትኩስ ሰላጣዎች እና 5 ኮከብ ድባብ።',
        },
        {
          id: 'rev-4',
          name: 'Estifanose Lulseged Legesse',
          date: 'ከ5 ወራት በፊት',
          rating: 5,
          quote:
            'ለእራት ምንም ወረፋ አልነበረም! ሲዝሊንግ ምግቦች፣ የተጠበሱ ኑድልስ እና የጾም ምግቦች በስፋት አሉ።',
        },
        {
          id: 'rev-5',
          name: 'henok abeje',
          date: 'ከ4 ወራት በፊት',
          rating: 5,
          quote:
            'በጣም ጣፋጭ ነው! ለምግቡ፣ ለአገልግሎቱ እና ለድባቡ 5 ከ5 — ለጓደኞችና ለቤተሰብ ደስ የሚል ቦታ።',
        },
        {
          id: 'rev-6',
          name: 'Beza Gosaye',
          date: 'ከ2 ወራት በፊት',
          rating: 5,
          quote:
            'ትኩስ የአትክልት ስቲር ፍራይ ኑድልስ፣ ኮምቦ ሰላጣ እና ቀዝቃዛ ሞሂቶ — ሁሉም በጣም ጣፋጭ ነበሩ።',
        },
        {
          id: 'rev-7',
          name: 'eyader addis',
          date: 'ከ8 ወራት በፊት',
          rating: 5,
          quote:
            'በምግባቸው ጣዕም እና በመስተንግዶአቸው በጣም ተደስተናል፤ በድጋሚ ለመምጣት የሚጋብዝ ነው።',
        },
        {
          id: 'rev-8',
          name: 'Tsion Terefe',
          date: 'ከ6 ወራት በፊት',
          rating: 5,
          quote:
            'ድንቅ አገልግሎት እና ምርጥ ምግብ!! ንጹህ ቦታ እና አስደሳች መስተንግዶ።',
        },
      ],
    },
    reviewModal: {
      title: 'አስተያየትዎን ያጋሩ',
      subtitle: 'ኮከቦችን ይምረጡ እና ስለ ምግባችን ያለዎትን አስተያየት ይጻፉ።',
      ratingLabel: 'የእርስዎ ደረጃ',
      ratingLabels: ['መሻሻል አለበት', 'መካከለኛ', 'ጥሩ', 'በጣም ጥሩ!', 'ድንቅ!'],
      nameLabel: 'ስምዎ (አማራጭ)',
      namePlaceholder: 'ለምሳሌ፡ ሜሮን አ.',
      reviewLabel: 'አስተያየትዎ',
      reviewPlaceholder: 'ኑድልሱ፣ ሲዝሊንግ ምግቦቹ እና አገልግሎቱ እንዴት ነበሩ?',
      submitBtn: 'አስተያየት ይስጡ',
      cancelBtn: 'ተወው',
      closeLabel: 'የአስተያየት ቅጹን ዝጋ',
      defaultAuthor: 'ደስተኛ ደንበኛ',
      justNowDate: 'አሁን',
      validationError: 'እባክዎ ከመላክዎ በፊት አጭር አስተያየት ይጻፉ።',
    },
    orderModal: {
      title: 'ሚክስድ ኑድልስን ይዘዙ',
      subtitle: 'በቀጥታ ይደውሉልን ወይም ከታች ካሉት የአቅርቦት መተግበሪያዎች ይምረጡ።',
      callLabel: 'በቀጥታ ወደ ምግብ ቤቱ ይደውሉ',
      callSublabel: 'ለመውሰድ ወይም ለፈጣን እርዳታ ያነጋግሩን',
      closeLabel: 'የማዘዣ አማራጮችን ዝጋ',
    },
    menu: {
      pageTitle: 'የምግብ ዝርዝር (ሜኑ)',
      pageSubtitle:
        'በቤት የተሰሩ ስቲር ፍራይ ኑድልስ፣ ሲዝሊንግ ምግቦች፣ የተጠበሰ ሩዝ፣ ትኩስ ሰላጣ እና መጠጦች — ሁሉም ዋጋዎች በብር (ETB)።',
      allCategory: 'ሁሉም ምግቦች',
      fastingLabel: 'የጾም',
      categories: {
        mains: 'ኑድልስ እና ሲዝሊንግ ምግቦች',
        chinese: 'የቻይና ምግቦች (ሩዝ)',
        chicken: 'ዶሮ',
        salads: 'ሰላጣዎች',
        'shakes-juices': 'ሼኮች እና ጁሶች',
        'veg-fruit': 'አትክልት እና ፍራፍሬ',
      },
      orderOnAppCta: 'በአቅርቦት ይዘዙ',
      emptyCategory: 'በዚህ ምድብ ውስጥ ምንም ምግብ አልተገኘም።',
    },
    visit: {
      pageTitle: 'ሚክስድ ኑድልስን ይጎብኙ',
      pageSubtitle:
        'በየሰዓቱ ያለውን የሰው ብዛት ይመልከቱ፣ የምግብ ቤታችንን ፎቶዎች ይጎብኙ ወይም ወደ አየር ጤና አቅጣጫ ያግኙ።',
      popularTimes: {
        heading: 'የተጨናነቁ እና የተረጋጉ ሰዓታት',
        prevDay: 'ቀዳሚ ቀን',
        nextDay: 'ቀጣይ ቀን',
        selectedHourLabel: 'የተመረጠው ሰዓት፦',
        resetNow: 'ወደ አሁኑ ሰዓት ተመለስ',
        dayNames: {
          sunday: 'እሁድ',
          monday: 'ሰኞ',
          tuesday: 'ማክሰኞ',
          wednesday: 'ረቡዕ',
          thursday: 'ሐሙስ',
          friday: 'ዓርብ',
          saturday: 'ቅዳሜ',
        },
        statusClosed:
          'አሁን ዝግ ነን — ምግብ ቤቱ በየቀኑ ከጠዋቱ 7:00 AM ይከፈታል (አቅርቦት 9:00 AM – 8:30 PM)።',
        statusEmpty: 'አሁን ቦታው ባዶ እና ጸጥ ያለ ነው — ያለምንም ወረፋ መምጣት ይችላሉ!',
        statusKindOfBusy: 'አሁን ቀላል እንቅስቃሴ አለ — በቂ ወንበሮች አሉ፣ ወረፋ የለም።',
        statusIntermediate: 'አሁን መካከለኛ እንቅስቃሴ አለ — ደስ የሚል ድባብ፣ ወረፋ የለም ማለት ይቻላል።',
        statusBusy: 'አሁን ትንሽ ሞቅ ያለ ሰዓት ነው — ቀድመው ቢመጡ ወይም ቢያዙ ይመረጣል።',
        statusReallyPacked:
          'አሁን በጣም የተጨናነቀ ሰዓት ነው — ለጊዜው አይምጡ፣ ከጥቂት ሰዓታት በኋላ ቢሞክሩ ይሻላል!',
      },
      locationHeading: 'አድራሻ እና መገናኛ',
      addressLabel: 'አድራሻ',
      addressValue: 'XMMX+33W አየር ጤና፣ አዲስ አበባ፣ ኢትዮጵያ',
      plusCode: 'XMMX+33W',
      neighborhoodNote: 'አየር ጤና ትራፊክ መብራት አጠገብ በቀላሉ ይገኛል',
      directionsCta: 'በGoogle Maps ክፈት',
      phoneLabel: 'ስልክ',
      phoneValue: '098 199 9955',
      hoursHeading: 'የሥራ ሰዓታት',
      hoursRows: [
        { days: 'በምግብ ቤት (ሰኞ – እሁድ)', time: '7:00 AM – 9:00 PM' },
        { days: 'የአቅርቦት መተግበሪያዎች (ሰኞ – እሁድ)', time: '9:00 AM – 8:30 PM' },
      ],
      galleryHeading: 'የፎቶ ማዕከል',
      gallerySubheading: 'በትልቁ ለማየት ማንኛውንም ፎቶ ይጫኑ።',
      closeLightbox: 'ፎቶውን ዝጋ',
      prevPhoto: 'ቀዳሚ ፎቶ',
      nextPhoto: 'ቀጣይ ፎቶ',
    },
    orderSection: {
      buttonPrefix: 'ይዘዙ በ',
    },
    footer: {
      tagline:
        'በየቀኑ በትኩሱ የሚዘጋጁ ስቲር ፍራይ ኑድልስ፣ ሲዝሊንግ ምግቦች፣ የተጠበሰ ሩዝ እና መጠጦች አየር ጤና።',
      quickLinksHeading: 'ገጾች',
      hoursHeading: 'ሰዓታት እና አድራሻ',
      hoursSummary: 'በየቀኑ 7:00 AM – 9:00 PM · አቅርቦት 9:00 AM – 8:30 PM',
      deliveryHeading: 'ለማዘዝ',
      copyright: '© 2026 ሚክስድ ኑድልስ (Mixed Noodles). መብቱ በህግ የተጠበቀ ነው።',
    },
  },
};
