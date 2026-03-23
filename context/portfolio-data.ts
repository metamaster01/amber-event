export type PortfolioImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal"; // for masonry layout
};

export type PortfolioStory = {
  id: number;
  slug: string;
  couple: string;           // e.g. "Priya & Rohan"
  category: string;         // e.g. "Wedding Events"
  location: string;
  date: string;
  tagline: string;
  coverImage: string;
  heroImage: string;        // detail page full bleed
  shortDesc: string;        // card hover text
  storyIntro: string;       // detail page opening paragraph
  storyBody: string[];      // detail page paragraphs
  quote: string;            // pull quote on detail page
  quoteAuthor: string;
  services: string[];       // services provided
  galleryImages: PortfolioImage[];
  stats: { label: string; value: string }[];
};

export const portfolioStories: PortfolioStory[] = [
  {
    id: 1,
    slug: "priya-rohan-wedding",
    couple: "Priya & Rohan",
    category: "Wedding Events",
    location: "Nagpur, Maharashtra",
    date: "February 2024",
    tagline: "A royal affair bathed in marigolds and moonlight.",
    coverImage: "/portfolio1.png",
    heroImage: "/portfolio1.png",
    shortDesc:
      "An intimate yet grand wedding celebration woven with tradition, vibrant florals, and a love story that filled every corner of the venue with warmth.",
    storyIntro:
      "Priya and Rohan's wedding was everything they dreamed of — a seamless blend of royal Maharashtrian tradition and contemporary elegance. Held across three enchanting days in Nagpur, the celebrations moved from an intimate Haldi ceremony under a canopy of marigolds to a grand reception that left every guest breathless.",
    storyBody: [
      "From the very first consultation, we knew this was a love story that deserved extraordinary storytelling. Priya arrived with a mood board full of golden tones, jasmine garlands, and soft candlelight — and Rohan simply said, 'Whatever makes her smile.' That became our north star.",
      "The Sangeet night transformed the banquet hall into a Bollywood dreamscape — deep jewel-toned drapes, a custom LED stage, and a 12-piece live orchestra. Friends and family performed choreographed pieces that had everyone on their feet by 10 PM.",
      "The wedding morning began with a sunrise Haldi on the terrace, surrounded by earthenware pots, turmeric-yellow blooms, and the scent of fresh marigolds. By evening, the mandap — a towering floral arch of white orchids and blush roses — stood as the centrepiece of a ceremony that moved every single guest to tears.",
      "Our team coordinated 18 vendors across three days, managing everything from the bridal suite setup to the final farewell with sparklers. Not a single moment felt rushed. Every detail was exactly where it needed to be — because at Amber Events, love is in the details.",
    ],
    quote:
      "Amber Events didn't just plan our wedding — they gave us three days we will relive every single year of our lives.",
    quoteAuthor: "Priya & Rohan",
    services: [
      "Wedding Planning",
      "Floral Design & Décor",
      "Sangeet Production",
      "Photography & Videography",
      "Catering Curation",
      "Guest Management",
    ],
    galleryImages: [
      { src: "/portfolio1.png", alt: "Couple at mandap", span: "wide" },
      { src: "/portfolio1.png", alt: "Floral arch detail", span: "normal" },
      { src: "/portfolio1.png", alt: "Sangeet night stage", span: "tall" },
      { src: "/portfolio1.png", alt: "Haldi ceremony", span: "normal" },
      { src: "/portfolio1.png", alt: "Reception hall", span: "wide" },
      { src: "/portfolio1.png", alt: "Bride portrait", span: "normal" },
    ],
    stats: [
      { label: "Guests", value: "450+" },
      { label: "Days", value: "3" },
      { label: "Vendors", value: "18" },
      { label: "Flowers", value: "12,000+" },
    ],
  },
  {
    id: 2,
    slug: "sneha-vikram-destination",
    couple: "Sneha & Vikram",
    category: "Jalwa Function",
    location: "Nagpur, Maharashtra",
    date: "November 2023",
    tagline: "Where colour, rhythm, and soul danced as one.",
    coverImage: "/portfolio2.png",
    heroImage: "/portfolio2.png",
    shortDesc:
      "A spectacular Jalwa function bursting with colour, folk music, and three generations celebrating love in the most vibrant way imaginable.",
    storyIntro:
      "Sneha and Vikram's Jalwa celebration was the most colourful event our team has ever had the joy of producing. Bringing together traditions from two families across different states, we created a celebration that honoured every ritual while adding layers of spectacle and warmth.",
    storyBody: [
      "The brief was simple: make it feel like a Bollywood movie and a family reunion at the same time. We rose to the challenge with a venue transformation that featured 9 metres of fabric draping, 4,000 hand-strung marigolds, and a live dhol troupe that greeted guests at the gate.",
      "The Mehndi lawn was designed as an open-air oasis — low seating on Persian rugs, a canopy of hanging lanterns, and a live mehndi artist at work. Guests wandered freely, plates of street food in hand, as a folk fusion band played softly in the background.",
      "For the Sangeet, we built a custom stage with a dramatic LED backdrop that shifted colours with each performance. Sneha's cousins performed a surprise flash mob, and Vikram's father sang a ghazal that reduced the room to tears. These are the unrepeatable moments we live to create.",
      "By the time the families came together for the final ceremony, every ritual felt deeply personal, not staged. That is the Amber Events promise: we manage the complexity so the family can simply be present.",
    ],
    quote:
      "We didn't know a celebration could feel this alive. Every moment surprised us — and that's the best gift Amber Events could have given us.",
    quoteAuthor: "Sneha & Vikram",
    services: [
      "Jalwa Function Planning",
      "Mehndi Ceremony Décor",
      "Sangeet Stage Production",
      "Live Entertainment",
      "Traditional Catering",
      "Photography",
    ],
    galleryImages: [
      { src: "/portfolio2.png", alt: "Mehndi ceremony", span: "wide" },
      { src: "/portfolio2.png", alt: "Dhol players", span: "normal" },
      { src: "/portfolio2.png", alt: "Sangeet stage", span: "tall" },
      { src: "/portfolio2.png", alt: "Floral canopy", span: "normal" },
      { src: "/portfolio2.png", alt: "Couple dance", span: "wide" },
      { src: "/portfolio2.png", alt: "Folk artist", span: "normal" },
    ],
    stats: [
      { label: "Guests", value: "320+" },
      { label: "Days", value: "2" },
      { label: "Performers", value: "24" },
      { label: "Lanterns", value: "600+" },
    ],
  },
  {
    id: 3,
    slug: "techvision-annual-gala",
    couple: "TechVision Annual Gala",
    category: "Corporate Events",
    location: "Nagpur, Maharashtra",
    date: "August 2023",
    tagline: "Elevating a brand with an evening of elegance and purpose.",
    coverImage: "/portfolio3.png",
    heroImage: "/portfolio3.png",
    shortDesc:
      "A premium corporate gala that merged brand identity with luxury hospitality — seamless, sophisticated, and genuinely memorable.",
    storyIntro:
      "When TechVision approached us to produce their annual gala for 600 guests, they had two words: sophisticated and unforgettable. We had three months, a visionary brief, and an Amber Events team ready to deliver something the city hadn't seen before.",
    storyBody: [
      "The venue was transformed over 36 hours with a monochromatic midnight palette — deep navy, silver, and touches of champagne gold. Custom-built statement installations featuring the TechVision logo in brushed metal were placed at every hero corner for media capture.",
      "We managed a five-course plated dinner for 600 guests with military precision. Each course was paired with a curated wine selection, and our service team of 45 ensured every plate arrived within a 90-second window — a detail our client noticed and personally thanked us for.",
      "The award ceremony featured a bespoke stage with a 9-metre LED screen, live camera switching, and a house band that transitioned flawlessly from ambient dinner music to an energetic post-awards set.",
      "From registration desks dressed with branded signage to the final branded gift bag handed at the door, every touchpoint reflected TechVision's identity. Corporate events are about perception — and we made sure theirs was flawless.",
    ],
    quote:
      "Our guests are still talking about that evening three months later. Amber Events understood our brand better than we expected anyone to.",
    quoteAuthor: "Rahul Deshmukh, CEO — TechVision",
    services: [
      "Corporate Event Planning",
      "Stage & AV Production",
      "Fine Dining Catering",
      "Brand Activation",
      "Guest Experience Design",
      "Entertainment Management",
    ],
    galleryImages: [
      { src: "/portfolio3.png", alt: "Gala hall overview", span: "wide" },
      { src: "/portfolio3.png", alt: "Brand installation", span: "normal" },
      { src: "/portfolio3.png", alt: "Award stage", span: "tall" },
      { src: "/portfolio3.png", alt: "Dinner service", span: "normal" },
      { src: "/portfolio3.png", alt: "Cocktail reception", span: "wide" },
      { src: "/portfolio3.png", alt: "CEO on stage", span: "normal" },
    ],
    stats: [
      { label: "Guests", value: "600+" },
      { label: "Awards", value: "32" },
      { label: "Staff", value: "45" },
      { label: "Hours Setup", value: "36" },
    ],
  },
  {
    id: 4,
    slug: "meera-arjun-intimate-wedding",
    couple: "Meera & Arjun",
    category: "Wedding Events",
    location: "Nagpur, Maharashtra",
    date: "January 2024",
    tagline: "Small guest list. Infinite love. Impeccable detail.",
    coverImage: "/portfolio2.png",
    heroImage: "/portfolio2.png",
    shortDesc:
      "An intimate 80-person wedding that proved the most meaningful celebrations aren't measured in scale — they're measured in feeling.",
    storyIntro:
      "Meera and Arjun chose intimacy over grandeur — and gave us the creative freedom to pour every ounce of our attention into 80 guests rather than 800. The result was the most thoughtfully curated wedding our team has ever produced.",
    storyBody: [
      "Every guest received a hand-written welcome note in their room. The centrepieces were assembled from flowers sourced from a single family-owned farm just outside Nagpur. The mandap was draped in heirloom silk passed down from Meera's grandmother. These decisions weren't logistical — they were emotional.",
      "We designed a four-course dinner menu with the couple's personal chef, incorporating dishes that told the story of both families. The seating plan placed guests in conversation with people they'd enjoy — not just names on a chart.",
      "The ceremony was held at golden hour in a private garden, with string lights woven through the trees and a string quartet playing as Meera walked in. There were exactly 27 seconds between the music starting and the entire row of guests reaching for their handkerchiefs.",
      "Arjun told us afterwards: 'It felt like the wedding knew us.' That is the highest compliment we have ever received — and exactly why we do what we do.",
    ],
    quote:
      "It felt like the wedding knew us. Every detail whispered something personal. Amber Events turned our love story into a living, breathing experience.",
    quoteAuthor: "Meera & Arjun",
    services: [
      "Intimate Wedding Planning",
      "Bespoke Floral Design",
      "Private Dining Curation",
      "String Quartet & Music",
      "Photography",
      "Guest Experience",
    ],
    galleryImages: [
      { src: "/portfolio4.png", alt: "Garden ceremony", span: "wide" },
      { src: "/portfolio4.png", alt: "Mandap silk draping", span: "normal" },
      { src: "/portfolio4.png", alt: "String quartet", span: "tall" },
      { src: "/portfolio4.png", alt: "Dinner table", span: "normal" },
      { src: "/portfolio4.png", alt: "Couple portrait", span: "wide" },
      { src: "/portfolio4.png", alt: "Floral centrepiece", span: "normal" },
    ],
    stats: [
      { label: "Guests", value: "80" },
      { label: "Courses", value: "4" },
      { label: "Farm Flowers", value: "3,200" },
      { label: "Hours", value: "14" },
    ],
  },
];

export function getStoryBySlug(slug: string): PortfolioStory | undefined {
  return portfolioStories.find((s) => s.slug === slug);
}
