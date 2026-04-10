export type ServiceFeature = {
  title: string;
  desc: string;
};

export type Service = {
  slug: string;
  title: string;
  scriptTitle: string; // cursive part
  tagline: string;
  quote: string;
  heroImage: string;       // used for detail page hero bg
  cardImage: string;       // used for homepage scroll cards
  shortDesc: string;       // card description
  detailIntro: string;     // detail page intro paragraph
  approachTitle: string;
  approachPara1: string;
  approachPara2: string;
  ctaHeading: string;
  ctaSubtext: string;
  features: ServiceFeature[];
  color: string;           // accent color per service
};

export const services: Service[] = [
  {
    slug: "wedding-events",
    title: "Wedding",
    scriptTitle: "Events",
    tagline: "Where dreams meet design.",
    quote: '"Where your forever begins beautifully."',
    heroImage: "/service-1.png",
    cardImage: "/service-1.png",
    shortDesc:
      "Your wedding is more than a ceremony — it's a story of love and celebration. From stunning décor and flawless coordination to heartfelt hospitality, we craft every detail to make your special day truly timeless.",
    detailIntro:
      "Your wedding is not just a day — it's the beginning of a lifelong story. At Amber Events, we bring your dreams to life through thoughtful planning, artistic design, and heartfelt coordination. Every detail — from the décor and ambiance to the flow of moments — is crafted to reflect your love, personality, and vision.",
    approachTitle: "Our Approach",
    approachPara1:
      "We believe in curating weddings that feel as authentic as they look beautiful. Whether you dream of a royal celebration, a minimalist modern affair, or an intimate outdoor ceremony, our team ensures your story shines through every detail.",
    approachPara2:
      "From concept and styling to on-day management, we take care of it all — so you can focus on what truly matters: cherishing the moments with your loved ones.",
    ctaHeading: "Let's Create Your Dream Wedding",
    ctaSubtext:
      "Your love story deserves a celebration as extraordinary as the bond you share. Let us bring your vision to life with elegance, creativity, and warmth.",
    features: [
      { title: "Venue Selection & Setup", desc: "From royal palace venues to intimate garden settings, we find and transform the perfect space." },
      { title: "Bridal Décor & Florals", desc: "Stunning floral arrangements, mandap design, and themed décor that matches your vision." },
      { title: "Photography & Videography", desc: "Capturing every precious moment through cinematic storytelling and candid photography." },
      { title: "Catering & Menu Curation", desc: "A curated feast featuring traditional and contemporary dishes tailored to your taste." },
      { title: "Guest Management", desc: "Seamless invitations, RSVP tracking, and hospitality that makes every guest feel special." },
      { title: "Entertainment & Music", desc: "Live bands, DJs, Sangeet nights, and curated playlists for every part of your celebration." },
    ],
    color: "#FF2D78",
  },
  {
    slug: "corporate-events",
    title: "Corporate",
    scriptTitle: "Events",
    tagline: "Where professionalism meets celebration.",
    quote: '"Elevating your brand, one event at a time."',
    heroImage: "/corporate.jpg",
    cardImage: "/corporate.jpg",
    shortDesc:
      "From high-profile product launches to annual galas, we design corporate experiences that leave lasting impressions. Our team handles every logistical detail so you can focus entirely on your business goals.",
    detailIntro:
      "Corporate events are a reflection of your brand's identity and values. At Amber Events, we combine impeccable planning with creative production to deliver experiences that engage, inspire, and leave your audience talking for years.",
    approachTitle: "Our Approach",
    approachPara1:
      "We understand that every corporate event has a purpose — whether it's to inspire a team, impress clients, or launch something extraordinary. Our process begins with understanding your objectives and building an event strategy around them.",
    approachPara2:
      "From AV production and stage design to catering and guest experience, our end-to-end management ensures flawless execution — every single time.",
    ctaHeading: "Elevate Your Next Corporate Event",
    ctaSubtext:
      "Let Amber Events transform your corporate occasion into an unforgettable experience that reflects your brand with elegance and precision.",
    features: [
      { title: "Conference & Seminar Planning", desc: "Full-scale planning for panels, keynote events, workshops, and executive summits." },
      { title: "Stage & AV Production", desc: "Professional LED screens, lighting rigs, sound systems, and seamless tech integration." },
      { title: "Brand Activation", desc: "Experiential setups, photo zones, and branded environments that amplify your identity." },
      { title: "Gala Dinners & Award Nights", desc: "Elegant banquet design, award ceremonies, and entertainment for premium evenings." },
      { title: "Team Building Events", desc: "Engaging activities and experiences that strengthen team culture and morale." },
      { title: "Product Launches", desc: "Creative launch concepts with media-worthy setups and guest experience management." },
    ],
    color: "#FF2D78",
  },
  {
    slug: "jalwa-function",
    title: "Jalwa",
    scriptTitle: "Function",
    tagline: "Celebrate with colour, rhythm & soul.",
    quote: '"Every beat, every moment — made magical."',
    heroImage: "/jalwa.jpg",
    cardImage: "/jalwa.jpg",
    shortDesc:
      "Jalwa is where tradition explodes into colour. Sangeet nights, Mehndi ceremonies, Haldi functions — we curate the most vibrant pre-wedding celebrations that your family and friends will never forget.",
    detailIntro:
      "Jalwa Functions are the heartbeat of Indian celebrations — full of music, dance, laughter, and tradition. At Amber Events, we transform these ceremonies into immersive experiences that honor your heritage while adding a contemporary sparkle.",
    approachTitle: "Our Approach",
    approachPara1:
      "From the colour palette of the Haldi décor to the choreography of a Sangeet night, we design every element of your Jalwa function with cultural pride and creative flair. We work closely with you and your family to understand the traditions that matter most.",
    approachPara2:
      "Our team coordinates performers, decorators, caterers, and photographers — ensuring that the energy never dips and the memories never fade.",
    ctaHeading: "Let the Jalwa Begin",
    ctaSubtext:
      "Your pre-wedding celebrations deserve as much love and attention as the big day itself. Let Amber Events make every ceremony unforgettable.",
    features: [
      { title: "Sangeet Night Planning", desc: "Full-scale Sangeet production with choreography support, live bands, and LED stage setups." },
      { title: "Mehndi Ceremony Décor", desc: "Vibrant floral canopies, traditional seating, and colourful installations." },
      { title: "Haldi Function Design", desc: "Bright and joyful décor using marigolds, turmeric tones, and earthy textures." },
      { title: "Themed Photo Zones", desc: "Instagram-worthy backdrops and props that capture the spirit of each ceremony." },
      { title: "Live Performances", desc: "Folk artists, dhol players, dance troupes, and cultural entertainers." },
      { title: "Traditional Catering", desc: "Authentic cuisine and refreshments curated to complement each ceremony's theme." },
    ],
    color: "#FF2D78",
  },
  {
    slug: "catering-service",
    title: "Catering",
    scriptTitle: "Service",
    tagline: "Flavours that tell your story.",
    quote: '"A feast worthy of your finest moments."',
    heroImage: "/catering.jpg",
    cardImage: "/catering.jpg",
    shortDesc:
      "Our catering service goes beyond food — it's an experience. From lavish buffet spreads to elegant plated dinners, our culinary team creates menus that delight every palate and elevate every occasion.",
    detailIntro:
      "Great food is the soul of every celebration. At Amber Events, our catering service combines culinary artistry with flawless service to deliver dining experiences that are as beautiful as they are delicious — from intimate gatherings to grand banquets.",
    approachTitle: "Our Approach",
    approachPara1:
      "We believe every menu should be a reflection of the occasion and the people behind it. Our culinary team works with you to design a menu that balances tradition and innovation — whether you envision an elaborate multi-course dinner, a lively street-food spread, or a fusion of regional flavours.",
    approachPara2:
      "Our service staff are trained to deliver warmth and professionalism at every table. From setup to teardown, we handle everything so your guests enjoy every bite, and you enjoy every moment.",
    ctaHeading: "Savour the Difference",
    ctaSubtext:
      "Let Amber Events craft a culinary experience that complements your celebration and delights every guest at your table.",
    features: [
      { title: "Custom Menu Design", desc: "Personalised menus from traditional Indian to continental and fusion cuisines." },
      { title: "Live Food Stations", desc: "Chaat counters, chefs' tables, dessert live stations, and tandoor setups." },
      { title: "Plated Fine Dining", desc: "Elegant multi-course dinners with sommelier pairings for premium events." },
      { title: "Buffet Spreads", desc: "Grand buffet layouts with diverse options catering to all dietary preferences." },
      { title: "Dessert & Cake Design", desc: "Custom wedding cakes, mithai arrangements, and dessert grazing tables." },
      { title: "Bar & Beverage Management", desc: "Signature cocktails, mocktail menus, and professional bar service." },
    ],
    color: "#FF2D78",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}