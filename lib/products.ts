export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  details: {
    origin: string;
    packaging: string;
    shelfLife: string;
    moq: string;
    certifications: string[];
  };
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Makhana",
    slug: "makhana",
    category: "Organic Foods",
    shortDescription: "Premium quality fox nuts, perfect for healthy snacking",
    description: "Our premium Makhana (Fox Nuts) are sourced directly from the finest farms in Bihar, India. These puffed lotus seeds are rich in protein, low in calories, and make for an excellent healthy snack option. They are carefully processed to maintain their natural crunch and nutritional value.",
    details: {
      origin: "Bihar, India",
      packaging: "Custom packaging available (1kg, 5kg, 10kg, 25kg bags)",
      shelfLife: "12 months from manufacturing date",
      moq: "500 kg",
      certifications: ["Organic Certified", "FSSAI Approved", "ISO 22000"]
    },
    images: ["/products/makhana.jpg", "/products/makhana.jpg", "/products/makhana.jpg"]
  },
  {
    id: "2",
    name: "Soapnuts",
    slug: "soapnuts",
    category: "Natural Products",
    shortDescription: "100% natural and eco-friendly cleaning alternative",
    description: "Soapnuts (Reetha) are nature's gift for eco-conscious cleaning. These dried fruit shells contain natural saponins that create a gentle lather, perfect for laundry, dishwashing, and personal care. Our soapnuts are sustainably harvested and sun-dried to preserve their cleaning properties.",
    details: {
      origin: "Himalayan Region, India",
      packaging: "Available in 500g, 1kg, 5kg, and bulk packaging",
      shelfLife: "24 months",
      moq: "200 kg",
      certifications: ["Organic Certified", "Eco-Friendly", "Cruelty-Free"]
    },
    images: ["/products/soapnuts.jpg", "/products/soapnuts.jpg", "/products/soapnuts.jpg"]
  },
  {
    id: "3",
    name: "Maize Products",
    slug: "maize-products",
    category: "Agricultural Products",
    shortDescription: "High-quality yellow maize for food and feed industry",
    description: "We export premium quality yellow maize suitable for food processing, animal feed, and industrial applications. Our maize is carefully selected, cleaned, and graded to meet international quality standards. Available in whole kernel form or processed as per customer requirements.",
    details: {
      origin: "Maharashtra & Karnataka, India",
      packaging: "50kg PP bags or as per buyer requirement",
      shelfLife: "18 months in proper storage",
      moq: "25 MT (Metric Tons)",
      certifications: ["FSSAI Approved", "Non-GMO", "Export Quality"]
    },
    images: ["/products/maize.jpg", "/products/maize.jpg", "/products/maize.jpg"]
  },
  {
    id: "4",
    name: "Bamboo Salt",
    slug: "bamboo-salt",
    category: "Specialty Foods",
    shortDescription: "Traditional Korean bamboo salt with minerals",
    description: "Bamboo Salt is a premium artisanal salt roasted multiple times in bamboo cylinders. This ancient Korean technique enriches the salt with essential minerals and removes impurities. Perfect for gourmet cooking and health-conscious consumers seeking natural mineral supplementation.",
    details: {
      origin: "Traditional Korean Process",
      packaging: "100g, 250g, 500g glass jars",
      shelfLife: "Indefinite (when stored properly)",
      moq: "100 kg",
      certifications: ["Food Safety Certified", "Premium Grade"]
    },
    images: ["/products/bamboo-salt.jpg", "/products/bamboo-salt.jpg", "/products/bamboo-salt.jpg"]
  },
  {
    id: "5",
    name: "Organic Turmeric Powder",
    slug: "organic-turmeric-powder",
    category: "Organic Spices",
    shortDescription: "High curcumin content organic turmeric",
    description: "Our organic turmeric powder is sourced from the renowned turmeric-growing regions of India. With high curcumin content (3-5%), this golden spice offers exceptional color, flavor, and health benefits. Stone-ground to preserve natural oils and nutrients.",
    details: {
      origin: "Erode & Salem, Tamil Nadu, India",
      packaging: "100g, 500g, 1kg, 25kg bags",
      shelfLife: "24 months",
      moq: "500 kg",
      certifications: ["USDA Organic", "EU Organic", "FSSAI", "Kosher"]
    },
    images: ["/products/turmeric.jpg", "/products/turmeric.jpg", "/products/turmeric.jpg"]
  },
  {
    id: "6",
    name: "Organic Chilli Powder",
    slug: "organic-chilli-powder",
    category: "Organic Spices",
    shortDescription: "Vibrant red chilli powder with perfect heat",
    description: "Made from handpicked organic red chillies, our chilli powder delivers the perfect balance of heat, color, and flavor. Sun-dried and stone-ground using traditional methods to preserve the authentic taste and capsaicin content.",
    details: {
      origin: "Guntur, Andhra Pradesh, India",
      packaging: "100g, 500g, 1kg, 25kg bags",
      shelfLife: "18 months",
      moq: "500 kg",
      certifications: ["USDA Organic", "EU Organic", "FSSAI"]
    },
    images: ["/products/chilli-powder.jpg", "/products/chilli-powder.jpg", "/products/chilli-powder.jpg"]
  },
  {
    id: "7",
    name: "Organic Coconut Oil",
    slug: "organic-coconut-oil",
    category: "Organic Oils",
    shortDescription: "Cold-pressed virgin coconut oil",
    description: "Our organic virgin coconut oil is extracted through cold-pressing fresh coconuts within hours of harvesting. This preserves the natural aroma, nutrients, and lauric acid content. Perfect for cooking, cosmetics, and wellness applications.",
    details: {
      origin: "Kerala & Tamil Nadu, India",
      packaging: "500ml, 1L bottles; 15kg, 200L drums",
      shelfLife: "24 months",
      moq: "1000 L",
      certifications: ["USDA Organic", "Fair Trade", "Virgin Grade"]
    },
    images: ["/products/coconut-oil.jpg", "/products/coconut-oil.jpg", "/products/coconut-oil.jpg"]
  },
  {
    id: "8",
    name: "Organic Cumin Seeds",
    slug: "organic-cumin-seeds",
    category: "Organic Spices",
    shortDescription: "Aromatic whole cumin seeds for global cuisines",
    description: "Premium organic cumin seeds with high volatile oil content for maximum aroma and flavor. These whole seeds are carefully cleaned, graded, and packed to preserve their essential oils. A staple spice in cuisines worldwide.",
    details: {
      origin: "Gujarat & Rajasthan, India",
      packaging: "100g, 500g, 1kg, 25kg bags",
      shelfLife: "24 months",
      moq: "500 kg",
      certifications: ["USDA Organic", "EU Organic", "FSSAI", "Halal"]
    },
    images: ["/products/cumin-seeds.jpg", "/products/cumin-seeds.jpg", "/products/cumin-seeds.jpg"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
