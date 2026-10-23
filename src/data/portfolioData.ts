import { ArtistProfile, PortfolioItem, ServiceItem } from '../types';
import receptionLookImg from '../assets/images/reception_cocktail_look_1792749505517.jpg';

export const initialArtistProfile: ArtistProfile = {
  name: 'Meera Kapoor',
  tagline: 'Luxury Bridal Makeup & Hair Artistry',
  experienceYears: '7+ Years',
  location: 'Mumbai & Available for Pan-India Destination Weddings',
  travelAvailability: 'Worldwide & Destination Travel Available',
  whatsappNumber: '919876543210',
  displayPhone: '+91 98765 43210',
  instagramHandle: '@meerakapoor.artistry',
  instagramUrl: 'https://instagram.com/meerakapoor.artistry',
  email: 'enquiries@meerakapoorbridal.com',
  bioIntro:
    'Dedicated to the craft of authentic bridal beauty, creating timeless, camera-ready looks that accentuate individual features rather than masking them. Specializing in high-definition bridal glam, customized skin prep, and seamless bridal styling.',
  philosophy:
    'Bridal makeup should never feel like a mask. My philosophy centers on luminous, skin-first prep and bespoke artistry that complements your jewellery, couture, and lighting from the ceremony to late into the evening.',
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'look-traditional-1',
    title: 'The Royal Crimson Bride',
    category: 'traditional',
    categoryLabel: 'Traditional Bridal',
    imageUrl: 'https://images.pexels.com/photos/30214743/pexels-photo-30214743.jpeg',
    description:
      'Classic regal bridal makeup featuring soft smoked kohl liners, warm terracotta rose lips, luminous velvet matte complexion, and traditional matha patti setting.',
    palette: 'Warm Terracotta, Antique Gold, Deep Kohl, Rose Nude',
    technique: 'Airbrush HD Base, Waterproof Kohl Architecture, Matte Velvet Finish',
    occasion: 'Anand Karaj / Hindu Wedding Pheras',
  },
  {
    id: 'look-modern-1',
    title: 'Dewy Pastel Glass-Skin Glow',
    category: 'modern',
    categoryLabel: 'Modern Bridal',
    imageUrl: 'https://images.pexels.com/photos/13048651/pexels-photo-13048651.jpeg',
    description:
      'Contemporary bride in soft blush champagne tones. Emphasizes clean, lit-from-within skin texture, diffused champagne shimmer eyelids, and delicate natural lash work.',
    palette: 'Soft Champagne, Peach Blossom, Sheer Rose Gold, Nude Gloss',
    technique: 'Hydra-Infusion Skin Prep, Micro-Highlighter Layering, Feather Brow',
    occasion: 'Morning Ceremonies & Pastel Day Weddings',
  },
  {
    id: 'look-engagement-1',
    title: 'Rose Gold Soft Glam',
    category: 'engagement',
    categoryLabel: 'Engagement Makeup',
    imageUrl: 'https://images.pexels.com/photos/8871301/pexels-photo-8871301.jpeg',
    description:
      'Romantic, soft-focused glam designed for ring ceremony celebrations. Features warm radiant cheek sculpt, shimmering rose gold eyes, and glossy lip finish.',
    palette: 'Rose Gold, Soft Mocha, Champagne Sheen, Petal Pink',
    technique: 'Multi-Dimension Shimmer Placement, Soft Contour Sculpting, High-Gloss Lip',
    occasion: 'Engagement Ceremony & Ring Exchange',
  },
  {
    id: 'look-reception-1',
    title: 'Emerald Gala Smoky Wing',
    category: 'reception',
    categoryLabel: 'Reception Makeup',
    imageUrl: receptionLookImg,
    description:
      'Sophisticated evening couture styling for reception galas. Features defined sultry smoky eyes, architectural cheek contouring, and long-wearing satin nude lips.',
    palette: 'Smoky Bronze, Muted Mauve, Deep Espresso, Champagne Highlight',
    technique: 'Flash-Proof HD Formulation, Waterproof Wing Architecture, Long-Wear Satin Seal',
    occasion: 'Evening Wedding Reception & Sangeet Cocktail',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup & Styling',
    shortDescription:
      'A bespoke, comprehensive bridal experience tailored to your ceremony attire, jewellery, and wedding lighting.',
    duration: '3.5 - 4 Hours',
    idealFor: 'Main Wedding Ceremony (Pheras, Anand Karaj, Nikah, or Church Wedding)',
    inclusions: [
      'In-depth pre-wedding bridal consultation',
      'Advanced skin prep with luxury botanical serums',
      'High-Definition (HD) or Airbrush makeup application',
      'Customized premium silk/mink lash application',
      'Complete hairstyling including floral placement & padding',
      'Intricate dupatta setting, veil draping & jewellery pinning',
      'Complimentary bridal touch-up kit for ceremony survival',
    ],
  },
  {
    id: 'engagement-makeup',
    title: 'Engagement & Roka Makeup',
    shortDescription:
      'Fresh, luminous, and radiant glam crafted for intimate or grand pre-wedding celebrations.',
    duration: '2.5 - 3 Hours',
    idealFor: 'Engagement Ceremony, Ring Exchange, Roka & Sagan Celebrations',
    inclusions: [
      'Personalized look curation matching outfit colorway',
      'Radiant hydrating skin preparation',
      'Camera-ready HD base with natural dimension',
      'Lightweight fluttery lash accents',
      'Modern hairstyling (Hollywood waves, textured braids, or chic buns)',
      'Dupatta or saree draping & accessory placement',
    ],
  },
  {
    id: 'reception-makeup',
    title: 'Reception & Sangeet Makeup',
    shortDescription:
      'High-impact, sultry, and flash-proof evening styling designed for high energy dancing and reception spotlights.',
    duration: '2.5 - 3 Hours',
    idealFor: 'Cocktail Party, Sangeet Night & Formal Wedding Reception',
    inclusions: [
      'Long-wearing, sweat-resistant formulation for active events',
      'Sultry smoky eye, winged liner, or glitter glam look',
      'Sweat-proof contour and strobe highlighting',
      'Voluminous red-carpet hair styling or glamorous updos',
      'Gown, lehenga, or saree draping with secure pinning',
      'Body shimmer and decollete glow application',
    ],
  },
  {
    id: 'party-makeup',
    title: 'Bridal Party & Occasion Makeup',
    shortDescription:
      'Sophisticated, camera-ready glam for mothers, sisters, and close family members attending wedding events.',
    duration: '1.5 - 2 Hours',
    idealFor: 'Mother of the Bride/Groom, Bridesmaids, Wedding Guests',
    inclusions: [
      'Skin prep with premium hydrating bases',
      'Flawless lightweight HD makeup application',
      'Custom eye makeup tailored to individual features',
      'Soft glam lash enhancements',
      'Event-ready hair styling (blowout, curls, or elegant updos)',
      'Saree, lehenga, or dupatta draping',
    ],
  },
];

export const beautyKitBrands = [
  'Charlotte Tilbury',
  'Dior Backstage',
  'NARS Cosmetics',
  'Huda Beauty',
  'MAC Cosmetics',
  'Laura Mercier',
  'Pat McGrath Labs',
  'Estée Lauder',
];
