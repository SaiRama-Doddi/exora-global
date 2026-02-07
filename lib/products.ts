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
  name: "Makhana (Fox Nuts) – Premium Export Quality",
  slug: "makhana",
  category: "Organic Foods",
  shortDescription:
    "Export-grade premium makhana with excellent puffing, uniform size, and high nutritional value.",

  description:
    "Our Premium Quality Makhana (Fox Nuts) are carefully sourced from trusted Indian farms and hygienically processed to meet international export standards. Known for their light texture, rich nutritional value, and long shelf life, makhana is a highly demanded superfood in global markets. Each batch is naturally grown, hand-picked, hand-sorted, and cleaned to ensure uniform size, superior taste, excellent puffing, and high purity. Ideal for roasting, seasoning, direct consumption, and use in health foods and snacks worldwide.",

  details: {
    origin: "India (Direct Farm Sourcing)",
    packaging:
      "Bulk & customized export packaging available. Vacuum-sealed and food-grade packaging options.",
    shelfLife: "12–18 months under proper storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Hygienically Processed",
      "Food Safety Compliant",
      "Non-GMO"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770387964/makhana_pwt8af.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770387964/makhana2_oo3rmm.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770387964/makhan3_tqmkyw.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770387964/makhana4_ds9j0q.jpg"
  ]
}
,
  {
  id: "2",
  name: "Soapnuts (Reetha) – Natural Eco-Friendly Cleaning Product",
  slug: "soapnuts",
  category: "Natural Products",
  shortDescription:
    "Premium export-grade soapnuts (Reetha) with high saponin content for natural and eco-friendly cleaning.",

  description:
    "Our premium Soapnuts (Reetha) are sustainably harvested from trusted forest regions in India and naturally sun-dried to preserve their high saponin content. These dried fruit shells produce a gentle, natural lather when soaked in water, making them an ideal eco-friendly alternative to chemical detergents. Carefully hand-sorted, cleaned, and export-graded, our soapnuts offer excellent cleaning efficiency, long shelf life, and consistent quality for global buyers. Suitable for laundry, dishwashing, personal care formulations, and herbal products.",

  details: {
    origin: "India (Sustainably Harvested Forest Regions)",
    packaging:
      "Bulk and customized export packaging available. Food-grade and moisture-protected packaging options.",
    shelfLife: "24 months under dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Eco-Friendly Product",
      "Chemical-Free",
      "Hygienically Processed"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388121/s1_xd3fzi.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388122/s2_vnsj0e.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388121/s3_pitk9x.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388121/s4_d0fe77.jpg"
  ]
}
, 
  {
  id: "3",
  name: "Bamboo Salt – Mineral-Rich Gourmet Specialty Salt",
  slug: "bamboo-salt",
  category: "Specialty Foods",
  shortDescription:
    "Premium mineral-rich bamboo salt, valued in gourmet and health food markets worldwide.",

  description:
    "Our premium Bamboo Salt is a high-value specialty gourmet salt produced using a traditional roasting process that enhances its mineral content and purity. Carefully refined and hygienically processed, this salt is known for its smooth taste, fine texture, and rich mineral profile. It is widely used in gourmet cooking, health foods, and wellness products due to its purity and unique preparation method. Export-graded and quality tested, our bamboo salt is packed to maintain freshness and long shelf life, making it a preferred choice for international buyers seeking specialty mineral salts.",

  details: {
    origin: "Traditional Mineral-Enriched Processing",
    packaging:
      "Available in retail and bulk export packaging. Moisture-proof, food-grade sealed packaging options.",
    shelfLife: "Indefinite when stored in a dry, airtight condition",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Food Safety Compliant",
      "Hygienically Processed",
      "Premium Gourmet Quality"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388646/b4_wfyuwd.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388645/b3_ydi2av.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388645/b2_pjskdx.jpg"
  ]
}
,
  {
  id: "4",
  name: "Organic Turmeric Powder – High Curcumin Export Grade",
  slug: "organic-turmeric-powder",
  category: "Organic Spices",
  shortDescription:
    "Premium organic turmeric powder with high curcumin content, vibrant color, and strong aroma for global food and health markets.",

  description:
    "Our premium Organic Turmeric Powder is sourced from certified organic farms in India, known globally for producing turmeric with high curcumin content. Carefully harvested, sun-dried, and finely ground under hygienic conditions, this turmeric retains its natural color, aroma, and medicinal properties. Rich in antioxidants and anti-inflammatory compounds, it is widely used in food processing, health supplements, Ayurvedic products, and wellness formulations. Each batch is export-graded, lab-tested, and processed to meet international quality standards, ensuring purity, safety, and consistent quality for global buyers.",

  details: {
    origin: "India (Certified Organic Farms)",
    packaging:
      "Available in retail and bulk export packaging. Moisture-proof, food-grade sealed bags and customized packaging options.",
    shelfLife: "24 months under cool and dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "USDA Organic",
      "EU Organic",
      "FSSAI Approved",
      "Export Grade",
      "Non-GMO"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770387421/turmeric_vcpo3q.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388820/t2_p7btm7.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388820/t3_tqzba8.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388820/t4_fvj0dp.jpg"
  ]
}
,
  {
  id: "5",
  name: "Organic Chilli Powder – High Color & Rich Heat Export Grade",
  slug: "organic-chilli-powder",
  category: "Organic Spices",
  shortDescription:
    "Premium organic red chilli powder with vibrant natural color, strong aroma, and balanced heat for global food industries.",

  description:
    "Our premium Organic Chilli Powder is made from carefully selected organic red chillies sourced from leading chilli-growing regions of India. The chillies are naturally sun-dried and finely ground under hygienic processing conditions to retain their natural oils, vibrant red color, rich aroma, and consistent pungency. Known for its high color value and balanced heat level, this chilli powder is widely used in food processing, spice blends, sauces, seasonings, and ready-to-eat products. Each batch is export-graded and quality tested to ensure purity, freshness, and compliance with international food safety standards.",

  details: {
    origin: "India (Organic Chilli Growing Regions)",
    packaging:
      "Available in bulk and retail export packaging. Moisture-proof, food-grade sealed bags with customized options.",
    shelfLife: "18–24 months under proper storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "USDA Organic",
      "EU Organic",
      "FSSAI Approved",
      "Export Grade",
      "Non-GMO"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388984/c2_zxc9yd.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388984/c1_twdmqb.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388984/c3_fdmqsd.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770388984/c4_zwk5im.jpg"
  ]
}
,
{
  id: "6",
  name: "Organic Coconut Oil – Cold-Pressed Virgin Export Grade",
  slug: "organic-coconut-oil",
  category: "Organic Oils",
  shortDescription:
    "Premium cold-pressed virgin coconut oil with natural aroma, high purity, and wide applications in food, wellness, and cosmetics.",

  description:
    "Our premium Organic Coconut Oil is extracted from fresh, organically grown coconuts using the cold-press method to preserve its natural nutrients, aroma, and purity. This virgin coconut oil is rich in lauric acid, antioxidants, and healthy fats, making it highly valued in food processing, skincare, haircare, and wellness products. Carefully filtered and hygienically processed, it retains its natural taste, clarity, and long shelf stability. Each batch is export-graded and tested to meet international quality and safety standards, ensuring consistent supply and superior quality for global buyers.",

  details: {
    origin: "India (Organic Coconut Growing Regions)",
    packaging:
      "Available in retail and bulk export packaging. Food-grade bottles, jars, and industrial drums with customized options.",
    shelfLife: "24 months under cool and dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "USDA Organic",
      "EU Organic",
      "Virgin Grade",
      "Export Grade",
      "Non-GMO"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389207/o4_h5d4ux.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389206/o3_dkamqm.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389242/o6_ykdetj.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389205/o2_zsplwo.jpg"
  ]
}
,
 {
  id: "7",
  name: "Organic Cumin Seeds – High Aroma Export Grade",
  slug: "organic-cumin-seeds",
  category: "Organic Spices",
  shortDescription:
    "Premium organic cumin seeds with high essential oil content, strong aroma, and uniform size for global spice markets.",

  description:
    "Our premium Organic Cumin Seeds are sourced from certified organic farms in leading cumin-growing regions of India. Carefully cleaned, graded, and hygienically processed, these seeds are known for their high volatile oil content, strong natural aroma, and rich flavor profile. Widely used in spice blends, food processing, seasoning, and traditional cuisines, cumin is also valued for its digestive and health benefits. Each batch is export-graded and quality tested to ensure purity, uniform size, and compliance with international food safety standards, making it a reliable choice for global buyers.",

  details: {
    origin: "India (Certified Organic Cumin Growing Regions)",
    packaging:
      "Available in bulk and retail export packaging. Moisture-proof, food-grade sealed bags with customized options.",
    shelfLife: "24 months under cool and dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "USDA Organic",
      "EU Organic",
      "FSSAI Approved",
      "Export Grade",
      "Non-GMO"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389404/cu1_ijihcw.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389407/cu4_yzjrip.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389405/cu3_wik9xs.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770389615/cu5_odknfi.jpg"
  ]
},

{
  id: "8",
  name: "Raw Coconut Shell Powder – Natural Export Grade",
  slug: "raw-coconut-shell-powder",
  category: "Agro Products",
  shortDescription:
    "Finely processed coconut shell powder suitable for industrial, agricultural, and eco-friendly applications.",

  description:
    "Our Raw Coconut Shell Powder is produced from high-quality coconut shells that are carefully cleaned, dried, and finely ground to achieve uniform particle size and consistency. Known for its excellent binding and absorbent properties, this natural powder is widely used in incense sticks, mosquito coils, activated carbon production, plywood filler, and other industrial applications. The product is processed hygienically and packed to maintain quality during storage and export transportation.",

  details: {
    origin: "India",
    packaging:
      "25 kg and 50 kg moisture-resistant export bags with customized packaging options available.",
    shelfLife: "24 months when stored in a dry environment",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Eco-Friendly Product",
      "Quality Tested"
    ]
  },

  images: [
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466640/raw1_mbe5je.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466640/raw3_vltyvn.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466641/raw2_rju6sd.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466641/raw4_xbettd.jpg"
  ]
}
,{
  id: "9",
  name: "Egg Shell Powder – Calcium-Rich Natural Powder",
  slug: "egg-shell-powder",
  category: "Agro Products",
  shortDescription:
    "High-calcium eggshell powder processed for agricultural, feed, and industrial applications.",

  description:
    "Egg Shell Powder is manufactured from cleaned and sterilized eggshells that are finely ground into a smooth powder. Rich in natural calcium carbonate, this product is commonly used in fertilizer blends, poultry feed supplements, soil conditioners, and eco-friendly industrial applications. The powder is processed under hygienic conditions to ensure purity, safety, and consistent quality for domestic and international buyers.",

  details: {
    origin: "India",
    packaging:
      "25 kg export-grade bags with moisture protection and customized packaging options.",
    shelfLife: "24 months in dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Calcium Rich",
      "Quality Tested"
    ]
  },

  images: ["https://res.cloudinary.com/djjjd6of8/image/upload/v1770466807/egg2_sbshmn.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466807/egg3_mh38wd.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466807/egg4_t05lmc.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770466807/egg1_ma3si8.jpg"
  ]
}
,
{
  id: "10",
  name: "Tamarind Seed Powder – Industrial & Food Grade",
  slug: "tamarind-seed-powder",
  category: "Agro Products",
  shortDescription:
    "Natural tamarind seed powder used in textile, food, adhesive, and pharmaceutical industries.",

  description:
    "Our Tamarind Seed Powder is produced from premium tamarind seeds that are cleaned, roasted, and finely milled to achieve high purity and uniform texture. Known for its thickening and binding properties, it is widely used in textile sizing, paper processing, adhesives, food applications, and pharmaceuticals. The product is processed under strict quality control to ensure export-grade consistency and long shelf stability.",

  details: {
    origin: "India",
    packaging:
      "25 kg and 50 kg export-grade laminated bags with custom packaging options available.",
    shelfLife: "24 months under cool and dry storage conditions",
    moq: "As per buyer requirement",
    certifications: [
      "Export Grade",
      "Quality Tested",
      "Industrial Grade"
    ]
  },

  images: ["https://res.cloudinary.com/djjjd6of8/image/upload/v1770467030/tam1_myprf1.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770467030/tam3_tzqfyg.webp",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770467030/tam2_zxwchv.jpg",
    "https://res.cloudinary.com/djjjd6of8/image/upload/v1770467030/tam4_ai5mw1.webp"
  ]
}


];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
