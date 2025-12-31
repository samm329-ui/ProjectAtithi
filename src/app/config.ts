
export type SectionData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
  mode: 'dark' | 'light' | 'inherit';
  animatedWebpUrl: string;
};

export type NavbarLink = {
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Review = {
    name: string;
    title: string;
    review: string;
    avatarId: string;
};

type Config = {
  brandName: string;
  fullName: string;
  industry: string;
  description: string;
  navbarLinks: NavbarLink[];
  mobileNavbarLinks: NavbarLink[];
  sections: SectionData[];
  reviews: Review[];
};

export const config: Config = {
  brandName: 'ATITHI',
  fullName: 'Atithi Family Restaurant',
  industry: 'Premium Highway Restaurant & Hospitality',
  description:
    'A refined family restaurant crafted for long-route travelers, rich families, builders, politicians, and professionals — delivering hygienic food, calm ambience, and premium hospitality with a modern Indian touch.',
  navbarLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Best Seller', href: '#bestseller' },
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
    { name: 'AI Recommendation', href: '#recommendation' },
  ],
  mobileNavbarLinks: [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'AI Recommendation', href: '#recommendation' },
  ],
  sections: [
    {
      id: 'family-dining',
      title: 'Family Dining',
      subtitle: 'Comfort • Hygiene • Taste',
      description:
        'A calm, spacious dining experience designed for families and premium travelers.',
      themeColor: '#C9A24D',
      mode: 'light',
      animatedWebpUrl:
        'https://yryoxzexvuhimvezdwle.supabase.co/storage/v1/object/public/asset/HeroSec2.webp',
    },
    {
      id: 'highway-hospitality',
      title: 'Highway Hospitality',
      subtitle: 'Premium • Convenient • Refreshing',
      description:
        'Redefining roadside stops with unmatched service and a serene atmosphere for the discerning traveler.',
      themeColor: '#A87C4F',
      mode: 'light',
      animatedWebpUrl:
        'https://yryoxzexvuhimvezdwle.supabase.co/storage/v1/object/public/asset/HeroSec2.webp',
    },
    {
      id: 'modern-indian',
      title: 'Modern Indian Cuisine',
      subtitle: 'Authentic • Innovative • Exquisite',
      description:
        'Savor traditional flavors presented with a contemporary twist by our expert chefs.',
      themeColor: '#E69A8D',
      mode: 'light',
      animatedWebpUrl:
        'https://yryoxzexvuhimvezdwle.supabase.co/storage/v1/object/public/asset/HeroSec2.webp',
    },
  ],
  reviews: [
    {
        name: 'Lusy',
        title: 'Local Guide · Frequent Traveler',
        review: "We often visit Atithi Family Restaurant while traveling on this route, and it has become one of our favorite stopover spots. The food is consistently fresh and flavorful. Their thali is wholesome and perfectly balanced. A special mention goes to the posto bora, which is crispy, flavorful, and absolutely mouth-watering.",
        avatarId: "review-avatar-1"
    },
    {
        name: 'Pallavi Chandel',
        title: 'Local Guide',
        review: "A delicious Bengali vegetarian thali at Atithi — balanced, wholesome, and truly satisfying. The food quality was impressive, service was excellent, and the overall atmosphere felt comfortable and welcoming. Great for a meal with a small group.",
        avatarId: "review-avatar-2"
    },
    {
        name: 'Snehasis Meta',
        title: 'Customer',
        review: "I visited this restaurant recently and faced a small issue with billing. Although the amount was small, accuracy in billing is important. I hope the restaurant takes more care with this in the future. The food itself was decent for the price.",
        avatarId: "review-avatar-3"
    }
  ]
};
