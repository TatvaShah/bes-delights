import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Bes Delights",
  tagline: "A sweet and salted home bakery for cakes, tarts and dessert tables.",
  category: "Home bakery",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://bes-delights-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c48a90" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Home bakery in Mississauga",
    headline: "Cakes, tarts and dessert tables for your celebration",
    subhead: "Bes Delights is a sweet and salted home bakery in Mississauga, also serving Toronto, with cakes, mini fruit tarts, crème brûlée, tiramisu, chocolate verrines and dessert tables. Ingredients are halal. Send a WhatsApp or Instagram message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A sweet table of mini fruit tarts and pastries from Bes Delights", width: 1080, height: 1920 },
      { src: "/images/post-4.jpg", alt: "A chocolate drip candle cake from Bes Delights", width: 1080, height: 1920 },
      { src: "/images/post-3.jpg", alt: "Chocolate verrines from Bes Delights", width: 1080, height: 1920 },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/14389880207" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Sweet and salted home bakery in Mississauga",
    "Cakes, tarts, crème brûlée, tiramisu and dessert tables",
    "Halal ingredients",
    "Order by WhatsApp or Instagram DM",
  ],

  about: {
    title: "Welcome to Bes Delights",
    body: [
      "Bes Delights is a sweet and salted home bakery in Mississauga, also serving Toronto. Recent work has included mini fruit tarts, mini crème brûlée, coffee bean tiramisu, chocolate verrines, candle cakes, vintage cakes and chocolate birthday cakes, including dessert tables for birthday events.",
      "Ingredients are halal. Send a WhatsApp message to 438-988-0207, or a message on Instagram, to order.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A sweet table of mini fruit tarts and pastries from Bes Delights", width: 1080, height: 1920 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a WhatsApp or Instagram message for a quote on your date and order.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom cakes", description: "Including candle cakes, vintage cakes and chocolate birthday cakes." },
        ],
      },
      {
        title: "Desserts and tables",
        items: [
          { name: "Mini fruit tarts" },
          { name: "Mini crème brûlée" },
          { name: "Coffee bean tiramisu" },
          { name: "Chocolate verrines" },
          { name: "Dessert tables", description: "Including birthday event catering." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent bakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1920, alt: "A sweet table of mini fruit tarts and pastries from Bes Delights", caption: "A sweet table", href: "https://www.instagram.com/reel/Dfpk0VpPKld/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1920, alt: "A chocolate drip candle cake from Bes Delights", caption: "A candle cake", href: "https://www.instagram.com/reel/DfataxjvsOd/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1920, alt: "Chocolate verrines from Bes Delights", caption: "Chocolate verrines", href: "https://www.instagram.com/reel/DffRlW3v1Vc/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "Coffee bean tiramisu from Bes Delights", caption: "Coffee bean tiramisu", href: "https://www.instagram.com/reel/DfiggLyPxNe/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "besdelights",
    embeds: ["https://www.instagram.com/reel/Dfpk0VpPKld/", "https://www.instagram.com/reel/DfataxjvsOd/", "https://www.instagram.com/reel/DffRlW3v1Vc/"],
  },

  order: {
    label: "How to order",
    title: "Order on WhatsApp or in a DM",
    intro: "Send a WhatsApp message to 438-988-0207, or a message on Instagram, with your date and what you would like to order. Bes Delights is based in Mississauga and also serves Toronto.",
    dmMessage: "Hi Bes Delights! I would like to order.\nDate needed:\nCake or desserts:",
    headerCtaLabel: "Order on WhatsApp",
    links: [
      { label: "Order on WhatsApp", href: "https://wa.me/14389880207" },
      { label: "Order by Instagram DM", href: "https://ig.me/m/besdelights" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a WhatsApp message to 438-988-0207, or a message on Instagram, with your date and what you would like to order." },
    { q: "Are the ingredients halal?", a: "Yes. Bes Delights uses halal ingredients." },
    { q: "Where are you based?", a: "Bes Delights is a home bakery in Mississauga and also serves Toronto." },
    { q: "What do you bake?", a: "Custom cakes, including candle, vintage and chocolate birthday cakes, plus mini fruit tarts, mini crème brûlée, coffee bean tiramisu, chocolate verrines and dessert tables." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga, Ontario, also serving Toronto",
    phone: "438-988-0207",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/besdelights/" }],
  },

  seo: {
    title: "Bes Delights | Cakes and dessert tables in Mississauga",
    description: "Sweet and salted home bakery in Mississauga and Toronto for cakes, tarts, tiramisu and dessert tables. Halal ingredients. Order by WhatsApp 438-988-0207 or DM.",
    keywords: ["home bakery Mississauga", "dessert tables Toronto", "Bes Delights"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
