import { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// PRODUCT CATALOG
//
// This is the ONLY file you need to edit to add, remove, or update products.
// See PRODUCT-MANAGEMENT.md in the project root for a full step-by-step guide.
//
// Every photo of the same garment (front / side / back / close-up) is grouped
// into ONE product, with the clearest shot first so it becomes the card image.
//
// NOTE: all prices are the temporary ₹1000 placeholder — change `price` on any
// product to set its real price. `fabric` and `sizes` are intentionally absent
// because they cannot be confirmed from photographs.
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    id: "sandstone-serenity-kurta-set",
    slug: "sandstone-serenity-kurta-set",
    name: "Sandstone Serenity Kurta Set",
    category: "ethnic-suit",
    price: 1500,
    images: [
      "/images/products/indian/sandstone-serenity-kurta-set-front.jpg",
      "/images/products/indian/sandstone-serenity-kurta-set-view-02.jpg",
      "/images/products/indian/sandstone-serenity-kurta-set-view-03.jpg",
      "/images/products/indian/sandstone-serenity-kurta-set-view-04.jpg",
      "/images/products/indian/sandstone-serenity-kurta-set-view-05.jpg",
    ],
    description:
      "Understated luxury, beautifully defined. This sleeveless kurta pairs a crisp mandarin collar with a clean button placket, falling into a softly flared silhouette over matching palazzo trousers. Breathable and wonderfully fluid, it carries you from morning meetings to evening gatherings with effortless poise. A timeless everyday classic for the woman who prefers quiet elegance over embellishment.",
    colors: ["Beige", "Blue"],
    availability: "Available",
    featured: true,
  },
  {
    id: "peacock-mirror-pleated-kurta-set",
    slug: "peacock-mirror-pleated-kurta-set",
    name: "Peacock Mirror Pleated Kurta Set",
    category: "cocktail-dress",
    price: 2500,
    images: [
      "/images/products/indian/peacock-mirror-pleated-kurta-set-front.jpg",
      "/images/products/indian/peacock-mirror-pleated-kurta-set-view-02.jpg",
      "/images/products/indian/peacock-mirror-pleated-kurta-set-view-03.jpg",
      "/images/products/indian/peacock-mirror-pleated-kurta-set-view-04.jpg",
    ],
    description:
      "Fine pleating runs the length of this striking kurta, catching light against intricate mirror-work at the neckline and placket. Paired with matching trousers, the set delivers festive richness while remaining wonderfully light to wear. A refined pick for pujas, sangeet evenings and family celebrations where you want tradition finished with a modern polish.",
    colors: ["Teal"],
    availability: "Available",
    featured: true,
  },
  {
    id: "marigold-grace-kurta-set",
    slug: "marigold-grace-kurta-set",
    name: "Marigold Grace Kurta Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/marigold-grace-kurta-set-front.jpg",
      "/images/products/indian/marigold-grace-kurta-set-view-02.jpg",
      "/images/products/indian/marigold-grace-kurta-set-view-03.jpg",
      "/images/products/indian/marigold-grace-kurta-set-view-04.jpg",
      "/images/products/indian/marigold-grace-kurta-set-view-05.jpg",
      "/images/products/indian/marigold-grace-kurta-set-view-06.jpg",
    ],
    description:
      "Warm marigold hues meet a luminous gold border in this floor-length kurta. Worn with matching trousers and a softly falling dupatta, it creates a silhouette that is both regal and easy. The fluid fabric drapes gracefully with every step, making it a joyful choice for festive mornings, haldi ceremonies and daytime celebrations.",
    colors: ["Orange"],
    availability: "Available",
  },
  {
    id: "ivory-lace-kurta-set",
    slug: "ivory-lace-kurta-set",
    name: "Ivory Lace Kurta Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/ivory-lace-kurta-set-front.jpg",
      "/images/products/indian/ivory-lace-kurta-set-view-02.jpg",
      "/images/products/indian/ivory-lace-kurta-set-view-03.jpg",
    ],
    description:
      "Timeless ivory, beautifully done. Lace-trimmed sleeves and a gently gathered waist bring softness to this classic kurta, while matching palazzo trousers complete the look. Cool, breathable and endlessly flattering, it works as effortlessly for daytime prayers as it does for summer gatherings. A wardrobe essential that never dates.",
    colors: ["White"],
    availability: "Available",
  },
  {
    id: "fern-bandhani-kurta-set",
    slug: "fern-bandhani-kurta-set",
    name: "Fern Bandhani Kurta Set",
    category: "ethnic-suit",
    price: 2700,
    images: [
      "/images/products/indian/fern-bandhani-kurta-set-front.jpg",
      "/images/products/indian/fern-bandhani-kurta-set-view-02.jpg",
      "/images/products/indian/fern-bandhani-kurta-set-view-03.jpg",
      "/images/products/indian/fern-bandhani-kurta-set-view-04.jpg",
      "/images/products/indian/fern-bandhani-kurta-set-view-05.jpg",
    ],
    description:
      "Traditional bandhani print meets a contemporary front-open cut in this refreshing kurta. A crisp contrast border defines the edges while matching trousers keep the look clean and considered. Light, airy and easy to move in, it brings heritage craft into everyday dressing with relaxed, modern confidence.",
    colors: ["Green"],
    availability: "Available",
  },
  {
    id: "emerald-shimmer-lehenga",
    slug: "emerald-shimmer-lehenga",
    name: "Emerald Shimmer Lehenga",
    category: "cocktail-dress",
    price: 2500,
    images: [
      "/images/products/indian/emerald-shimmer-lehenga-front.jpg",
      "/images/products/indian/emerald-shimmer-lehenga-view-02.jpg",
    ],
    description:
      "Sequinned leaf motifs shimmer across the blouse and flared skirt of this showstopping set, finished with a sheer embroidered dupatta. Rich emerald depth and light-catching detail make it an unforgettable celebration piece. Designed to move beautifully on the dance floor, it is made for weddings, receptions and the nights you want remembered.",
    colors: ["Emerald"],
    availability: "Available",
    featured: true,
  },
  {
    id: "blush-petal-drape-set",
    slug: "blush-petal-drape-set",
    name: "Blush Petal Drape Set",
    category: "cocktail-dress",
    price: 2500,
    images: [
      "/images/products/indian/blush-petal-drape-set-front.jpg",
      "/images/products/indian/blush-petal-drape-set-view-02.jpg",
      "/images/products/indian/blush-petal-drape-set-view-03.jpg",
      "/images/products/indian/blush-petal-drape-set-view-04.jpg",
    ],
    description:
      "Soft blush tones and delicate embellishment give this sleeveless blouse a jewel-like finish, paired with a gracefully draped skirt and matching dupatta. The pre-styled drape offers all the elegance of traditional wear with none of the fuss. A romantic choice for engagements, mehendi mornings and celebrations that call for softness.",
    colors: ["Blush Pink"],
    availability: "Available",
  },
  {
    id: "amethyst-leheriya-lehenga",
    slug: "amethyst-leheriya-lehenga",
    name: "Amethyst Leheriya Lehenga",
    category: "cocktail-dress",
    price: 1800,
    images: [
      "/images/products/indian/amethyst-leheriya-lehenga-front.jpg",
      "/images/products/indian/amethyst-leheriya-lehenga-view-02.jpg",
      "/images/products/indian/amethyst-leheriya-lehenga-view-03.jpg",
      "/images/products/indian/amethyst-leheriya-lehenga-view-04.jpg",
      "/images/products/indian/amethyst-leheriya-lehenga-view-05.jpg",
    ],
    description:
      "Classic leheriya stripes sweep across this flowing set, from the flared-sleeve blouse to the twirl-worthy skirt. Deep amethyst tones catch the light with a subtle metallic sheen, while the matching dupatta completes the picture. Beautifully lightweight for long evenings, it is made for sangeets, festive dinners and dancing until late.",
    colors: ["Purple"],
    availability: "Available",
  },
  {
    id: "wine-pearl-chiffon-saree",
    slug: "wine-pearl-chiffon-saree",
    name: "Wine Pearl Chiffon Saree",
    category: "ethnic-suit",
    price: 2700,
    images: [
      "/images/products/indian/wine-pearl-chiffon-saree-front.jpg",
      "/images/products/indian/wine-pearl-chiffon-saree-view-02.jpg",
      "/images/products/indian/wine-pearl-chiffon-saree-view-03.jpg",
      "/images/products/indian/wine-pearl-chiffon-saree-view-04.jpg",
    ],
    description:
      "Featherlight chiffon in a deep wine tone, scattered with delicate pearl detailing that catches the light as you move. The fluid drape falls beautifully and stays comfortable through the longest evenings. Elegant, understated and quietly luxurious, this is a graceful choice for receptions, festive dinners and occasions that call for timeless charm.",
    colors: ["Wine"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "rosewood-satin-saree",
    slug: "rosewood-satin-saree",
    name: "Rosewood Satin Saree",
    category: "ethnic-suit",
    price: 2700,
    images: [
      "/images/products/indian/rosewood-satin-saree-front.jpg",
      "/images/products/indian/rosewood-satin-saree-view-02.jpg",
      "/images/products/indian/rosewood-satin-saree-view-03.jpg",
      "/images/products/indian/rosewood-satin-saree-view-04.jpg",
    ],
    description:
      "Rich rosewood satin with a luminous finish, paired with a contrasting gold-toned blouse for beautiful depth. The smooth fabric drapes cleanly and holds its fall gracefully throughout the evening. Simple, striking and endlessly flattering, this is the saree you reach for when you want understated glamour without a single unnecessary detail.",
    colors: ["Maroon"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "ivory-mirror-anarkali-set",
    slug: "ivory-mirror-anarkali-set",
    name: "Ivory Mirror Anarkali Set",
    category: "ethnic-suit",
    price: 2000,
    images: [
      "/images/products/indian/ivory-mirror-anarkali-set-front.jpg",
      "/images/products/indian/ivory-mirror-anarkali-set-view-02.jpg",
      "/images/products/indian/ivory-mirror-anarkali-set-view-03.jpg",
      "/images/products/indian/ivory-mirror-anarkali-set-view-04.jpg",
    ],
    description:
      "A flowing ivory anarkali meets a mirror-worked jacket edged with golden tassels, creating beautiful layers of light and texture. The generous flare sweeps gracefully as you move while staying wonderfully light to wear. Regal yet refreshingly wearable, it is a graceful pick for festive mornings, mehendi celebrations and daytime weddings.",
    colors: ["Ivory", "Gold"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "orchid-tie-dye-kurta-set",
    slug: "orchid-tie-dye-kurta-set",
    name: "Orchid Tie-Dye Kurta Set",
    category: "ethnic-suit",
    price: 1400,
    images: [
      "/images/products/indian/orchid-tie-dye-kurta-set-front.jpg",
      "/images/products/indian/orchid-tie-dye-kurta-set-detail.jpg",
    ],
    description:
      "Hand-styled tie-dye in soft orchid tones flows across this kurta, accented with delicate white floral motifs. Paired with matching palazzo trousers and a coordinating dupatta, the set feels artisanal and fresh. Light, breathable and easy to wear all day, it is lovely for festive mornings and relaxed family gatherings.",
    colors: ["Purple", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "crimson-tie-dye-kurta-set",
    slug: "crimson-tie-dye-kurta-set",
    name: "Crimson Tie-Dye Kurta Set",
    category: "ethnic-suit",
    price: 1400,
    images: [
      "/images/products/indian/crimson-tie-dye-kurta-set-front.jpg",
      "/images/products/indian/crimson-tie-dye-kurta-set-view-02.jpg",
    ],
    description:
      "Bold crimson blends into soft ivory in this beautifully hand-styled tie-dye kurta, finished with fine white detailing. Worn with matching trousers and a light dupatta, it brings artisanal character to festive dressing. Comfortable, airy and full of personality, it is perfect for daytime celebrations and joyful family occasions.",
    colors: ["Red", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "saffron-mirror-sharara-set",
    slug: "saffron-mirror-sharara-set",
    name: "Saffron Mirror Sharara Set",
    category: "ethnic-suit",
    price: 2700,
    images: [
      "/images/products/indian/saffron-mirror-sharara-set-front.jpg",
      "/images/products/indian/saffron-mirror-sharara-set-view-02.jpg",
      "/images/products/indian/saffron-mirror-sharara-set-view-03.jpg",
    ],
    description:
      "Vivid saffron meets lavish mirror and gold embroidery across the yoke of this festive kurta, paired with a flowing sharara. The rich border detailing catches light with every turn while the fabric stays beautifully light. A radiant choice for sangeet nights, haldi mornings and celebrations that call for colour and shine.",
    colors: ["Orange"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "heritage-thread-kurti-set",
    slug: "heritage-thread-kurti-set",
    name: "Heritage Thread Kurti Set",
    category: "ethnic-suit",
    price: 2000,
    images: [
      "/images/products/indian/heritage-thread-kurti-set-front.jpg",
      "/images/products/indian/heritage-thread-kurti-set-view-02.jpg",
      "/images/products/indian/heritage-thread-kurti-set-view-03.jpg",
    ],
    description:
      "Vibrant multicoloured threadwork blooms across the yoke of this ivory kurti, a beautiful nod to traditional hand embroidery. Paired with slim matching trousers, the shorter silhouette keeps it fresh and easy to wear. Light, breathable and full of character, it is perfect for festive brunches and gatherings with family.",
    colors: ["Ivory"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "terracotta-muse-drape-dress",
    slug: "terracotta-muse-drape-dress",
    name: "Terracotta Muse Drape Dress",
    category: "bodycon-dress",
    price: 1500,
    images: [
      "/images/products/indo-western/terracotta-muse-drape-dress-front.jpg",
      "/images/products/indo-western/terracotta-muse-drape-dress-view-02.jpg",
      "/images/products/indo-western/terracotta-muse-drape-dress-view-03.jpg",
    ],
    description:
      "A sleeveless column dress in a rich earthen print, finished with a matching stole that drapes with quiet drama. The streamlined cut skims the figure while the fluid fabric keeps it wonderfully easy to wear. Modern yet rooted in tradition, this fusion piece is made for gallery evenings, festive brunches and everything between.",
    colors: ["Brown"],
    availability: "Available",
  },
  {
    id: "aqua-breeze-co-ord-set",
    slug: "aqua-breeze-co-ord-set",
    name: "Aqua Breeze Co-Ord Set",
    category: "cord-set",
    price: 1700,
    images: [
      "/images/products/indo-western/aqua-breeze-co-ord-set-front.jpg",
      "/images/products/indo-western/aqua-breeze-co-ord-set-view-02.jpg",
      "/images/products/indo-western/aqua-breeze-co-ord-set-view-03.jpg",
    ],
    description:
      "Cool aqua print with an effortless attitude. A bell-sleeved crop top pairs with a full flared skirt for a co-ord that feels equal parts traditional and thoroughly modern. The airy fabric moves beautifully with you, making it a natural choice for destination celebrations, daytime festivities and holidays where comfort matters as much as style.",
    colors: ["Aqua"],
    availability: "Available",
  },
  {
    id: "golden-paisley-co-ord-set",
    slug: "golden-paisley-co-ord-set",
    name: "Golden Paisley Co-Ord Set",
    category: "cord-set",
    price: 1000,
    images: [
      "/images/products/indo-western/golden-paisley-co-ord-set-front.jpg",
      "/images/products/indo-western/golden-paisley-co-ord-set-view-02.jpg",
      "/images/products/indo-western/golden-paisley-co-ord-set-view-03.jpg",
      "/images/products/indo-western/golden-paisley-co-ord-set-view-04.jpg",
      "/images/products/indo-western/golden-paisley-co-ord-set-view-05.jpg",
    ],
    description:
      "Intricate paisley motifs wander across this warm golden co-ord, pairing a bell-sleeved crop top with a sweeping flared skirt. The fusion silhouette flatters beautifully while staying wonderfully easy to wear. Lightweight and full of movement, it is made for festive brunches, pre-wedding shoots and long evenings under open skies.",
    colors: ["Beige"],
    availability: "Available",
    featured: true,
  },
  {
    id: "peacock-nazakat-fusion-set",
    slug: "peacock-nazakat-fusion-set",
    name: "Peacock Nazakat Fusion Set",
    category: "cord-set",
    price: 1000,
    images: [
      "/images/products/indo-western/peacock-nazakat-fusion-set-front.jpg",
      "/images/products/indo-western/peacock-nazakat-fusion-set-view-02.jpg",
      "/images/products/indo-western/peacock-nazakat-fusion-set-view-03.jpg",
      "/images/products/indo-western/peacock-nazakat-fusion-set-detail.jpg",
      "/images/products/indo-western/peacock-nazakat-fusion-set-detail.jpg",
      "/images/products/indo-western/peacock-nazakat-fusion-set-detail.jpg",
    ],
    description:
      "An intricate peacock and paisley print flows across the bell-sleeved top before falling into a dramatic tulle-layered skirt. Ivory and turquoise play beautifully together, creating a silhouette that feels regal yet refreshingly modern. A striking fusion statement for receptions, engagement evenings and celebrations where you want every eye to follow.",
    colors: ["Teal", "Ivory"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "turquoise-rose-drape-gown",
    slug: "turquoise-rose-drape-gown",
    name: "Turquoise Rose Drape Gown",
    category: "gown",
    price: 2700,
    images: [
      "/images/products/indo-western/turquoise-rose-drape-gown-front.jpg",
      "/images/products/indo-western/turquoise-rose-drape-gown-view-02.jpg",
      "/images/products/indo-western/turquoise-rose-drape-gown-view-03.jpg",
      "/images/products/indo-western/turquoise-rose-drape-gown-view-04.jpg",
      "/images/products/indo-western/turquoise-rose-drape-gown-detail.jpg",
    ],
    description:
      "Oversized roses bloom across this sweeping gown, finished with a sculpted shoulder drape for a couture-inspired result. The full skirt creates beautiful volume and movement while the fitted bodice keeps the shape refined. A dramatic fusion statement for receptions, cocktail evenings and celebrations that deserve something truly extraordinary.",
    colors: ["Turquoise"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "ruby-cascade-ruffle-gown",
    slug: "ruby-cascade-ruffle-gown",
    name: "Ruby Cascade Ruffle Gown",
    category: "gown",
    price: 3200,
    images: [
      "/images/products/indo-western/ruby-cascade-ruffle-gown-front.jpg",
      "/images/products/indo-western/ruby-cascade-ruffle-gown-view-02.jpg",
      "/images/products/indo-western/ruby-cascade-ruffle-gown-view-03.jpg",
    ],
    description:
      "Cascading ruffles spill across the bodice of this deep ruby gown, creating movement and drama from every angle. The sculpted waist and sweeping skirt build a silhouette that feels both romantic and commanding. A breathtaking fusion piece for receptions, cocktail evenings and celebrations where you want to make an entrance.",
    colors: ["Red"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "ivory-bloom-kurti-palazzo",
    slug: "ivory-bloom-kurti-palazzo",
    name: "Ivory Bloom Kurti & Palazzo",
    category: "cord-set",
    price: 1000,
    images: [
      "/images/products/indo-western/ivory-bloom-kurti-palazzo-front.jpg",
      "/images/products/indo-western/ivory-bloom-kurti-palazzo-view-02.jpg",
      "/images/products/indo-western/ivory-bloom-kurti-palazzo-detail.jpg",
      "/images/products/indo-western/ivory-bloom-kurti-palazzo-view-04.jpg",
    ],
    description:
      "Delicate blue embroidery and playful tassels lift this ivory kurti, paired with boldly striped palazzo trousers for a fresh fusion finish. The shorter cut and wide leg create a flattering, contemporary line. Breathable and easy to style, it is ideal for office days, casual outings and relaxed festive afternoons.",
    colors: ["Ivory", "Navy"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "cocoa-stripe-kurti-set",
    slug: "cocoa-stripe-kurti-set",
    name: "Cocoa Stripe Kurti Set",
    category: "cord-set",
    price: 1700,
    images: [
      "/images/products/indo-western/cocoa-stripe-kurti-set-front.jpg",
      "/images/products/indo-western/cocoa-stripe-kurti-set-view-02.jpg",
    ],
    description:
      "Warm cocoa stripes meet a softly embroidered ivory kurti in this beautifully balanced fusion set. The front-slit cut and wide-leg palazzo create an easy, elongating silhouette. Comfortable enough for everyday wear yet polished enough for lunches and gatherings, it is a quietly stylish addition to any wardrobe.",
    colors: ["Cream", "Brown"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "rose-quartz-halter-set",
    slug: "rose-quartz-halter-set",
    name: "Rose Quartz Halter Set",
    category:"cocktail-dress",
    price: 1000,
    images: [
      "/images/products/indo-western/rose-quartz-halter-set-front.jpg",
      "/images/products/indo-western/rose-quartz-halter-set-view-02.jpg",
    ],
    description:
      "A softly embellished halter bodice meets a layered organza drape in this romantic blush set. Sheer texture and delicate shimmer create a dreamy, weightless finish that moves beautifully. Feminine and quietly glamorous, it is a lovely choice for engagement parties, cocktail evenings and celebrations with a soft, modern mood.",
    colors: ["Blush Pink"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "noir-mesh-crop-top",
    slug: "noir-mesh-crop-top",
    name: "Noir Mesh Crop Top",
    category: "gym-fitness-outfits",
    price: 800,
    images: [
      "/images/products/western/noir-mesh-crop-top-front.jpg",
      "/images/products/western/noir-mesh-crop-top-view-02.jpg",
      "/images/products/western/noir-mesh-crop-top-view-03.jpg",
    ],
    description:
      "Sheer mesh sleeves lend this fitted crop top a confident, contemporary edge. Cut close through the body with a high neckline, it layers beautifully over cargo trousers or high-waisted denim. Lightweight, stretchy and endlessly versatile, it is the piece you reach for whenever an outfit needs a modern finishing touch.",
    colors: ["Brown", "Black"],
    availability: "Available",
  },
  {
    id: "varsity-stripe-jersey-tee",
    slug: "varsity-stripe-jersey-tee",
    name: "Varsity Stripe Jersey Tee",
    category: "gym-fitness-outfits",
    price: 800,
    images: [
      "/images/products/western/varsity-stripe-jersey-tee-view-02.jpg",
      "/images/products/western/varsity-stripe-jersey-tee-view-03.jpg",
    ],
    description:
      "Relaxed sporty charm in a crisp pinstripe jersey. The V-neckline and dropped shoulders give it an easy, borrowed-from-the-boys attitude, while bold varsity lettering keeps things playful. Soft, breathable and beautifully casual, it pairs effortlessly with cargo pants or denim for weekend outings, coffee runs and laid-back city days.",
    colors: ["Blue", "Cream"],
    availability: "Available",
  },
  {
    id: "meadow-bloom-maxi-dress",
    slug: "meadow-bloom-maxi-dress",
    name: "Meadow Bloom Maxi Dress",
    category: "gown",
    price: 1999,
    images: [
      "/images/products/western/meadow-bloom-maxi-dress-front.jpg",
      "/images/products/western/meadow-bloom-maxi-dress-view-02.jpg",
      "/images/products/western/meadow-bloom-maxi-dress-view-03.jpg",
      "/images/products/western/meadow-bloom-maxi-dress-view-04.jpg",
    ],
    description:
      "Floral appliqué blossoms across the bodice of this two-tone maxi, while dramatic bell sleeves add romance to every gesture. The flowing skirt moves beautifully as you walk, creating a silhouette that feels both graceful and quietly grand. A lovely choice for garden parties, engagement celebrations and memorable summer evenings.",
    colors: ["Green"],
    availability: "Available",
    featured: true,
  },
  {
    id: "ivory-petal-off-shoulder-gown",
    slug: "ivory-petal-off-shoulder-gown",
    name: "Ivory Petal Off-Shoulder Gown",
    category: "bodycon-dress",
    price: 1999,
    images: [
      "/images/products/western/ivory-petal-off-shoulder-gown-front.jpg",
      "/images/products/western/ivory-petal-off-shoulder-gown-view-02.jpg",
      "/images/products/western/ivory-petal-off-shoulder-gown-view-03.jpg",
    ],
    description:
      "Pure and impossibly graceful. Delicate floral trim frames the off-shoulder neckline while soft ruffled sleeves add a whisper of romance. The column silhouette falls cleanly to the floor for a look that is elegant without ever feeling heavy. Perfect for cocktail evenings, receptions and milestone celebrations where you want to feel radiant.",
    colors: ["White"],
    availability: "Available",
  },
  {
    id: "coral-stripe-tiered-maxi",
    slug: "coral-stripe-tiered-maxi",
    name: "Coral Stripe Tiered Maxi",
    category: "gown",
    price: 1500,
    images: [
      "/images/products/western/coral-stripe-tiered-maxi-front.jpg",
      "/images/products/western/coral-stripe-tiered-maxi-view-02.jpg",
      "/images/products/western/coral-stripe-tiered-maxi-view-03.jpg",
    ],
    description:
      "Sunlit stripes and generous puff sleeves make this off-shoulder maxi an instant mood-lifter. The tiered skirt sweeps into an easy, breezy silhouette that flatters every frame. Lightweight and comfortable in warm weather, it is made for beach holidays, brunch dates and long golden evenings spent laughing with friends.",
    colors: ["Red", "White"],
    availability: "Available",
  },
  {
    id: "sunlit-colourblock-knit",
    slug: "sunlit-colourblock-knit",
    name: "Sunlit Colourblock Knit",
    category: "gym-fitness-outfits",
    price: 1000,
    images: [
      "/images/products/western/sunlit-colourblock-knit-front.jpg",
      "/images/products/western/sunlit-colourblock-knit-view-02.jpg",
      "/images/products/western/sunlit-colourblock-knit-view-03.jpg",
    ],
    description:
      "Cosy meets cheerful in this colour-block knit. Dropped shoulders give it a relaxed, oversized ease while sunny tones lift even the greyest morning. Soft against the skin and endlessly layerable, it pairs naturally with denim or tailored trousers for weekend errands, campus days and cool-weather coffee runs.",
    colors: ["Yellow", "White"],
    availability: "Available",
  },
  {
    id: "pearl-motif-shirt-trouser-set",
    slug: "pearl-motif-shirt-trouser-set",
    name: "Pearl Motif Shirt & Trouser Set",
    category: "cord-set",
    price: 1500,
    images: [
      "/images/products/western/pearl-motif-shirt-trouser-set-front.jpg",
      "/images/products/western/pearl-motif-shirt-trouser-set-view-02.jpg",
      "/images/products/western/pearl-motif-shirt-trouser-set-view-03.jpg",
      "/images/products/western/pearl-motif-shirt-trouser-set-view-04.jpg",
      "/images/products/western/pearl-motif-shirt-trouser-set-view-05.jpg",
    ],
    description:
      "Quiet sophistication in a beautifully considered set. A softly printed full-sleeve shirt with a wrap-front waist meets fluid wide-leg trousers for a silhouette that elongates and flatters. Polished enough for the office and relaxed enough for dinner afterwards, this is modern workwear with a distinctly feminine finish.",
    colors: ["Cream", "Grey"],
    availability: "Available",
  },
  {
    id: "lilac-bloom-co-ord-set",
    slug: "lilac-bloom-co-ord-set",
    name: "Lilac Bloom Co-Ord Set",
    category: "cord-set",
    price: 1200,
    images: [
      "/images/products/western/lilac-bloom-co-ord-set-front.jpg",
      "/images/products/western/lilac-bloom-co-ord-set-view-02.jpg",
      "/images/products/western/lilac-bloom-co-ord-set-view-03.jpg",
      "/images/products/western/lilac-bloom-co-ord-set-view-04.jpg",
    ],
    description:
      "Delicate blooms scatter across this crisp collared co-ord, pairing a relaxed shirt with matching wide-leg trousers. The result is fresh, coordinated and effortlessly put together. Breathable and easy to move in, it carries you gracefully through brunches, travel days and warm afternoons that call for something light and lovely.",
    colors: ["White"],
    availability: "Available",
  },
  {
    id: "sapphire-shimmer-bodycon-dress",
    slug: "sapphire-shimmer-bodycon-dress",
    name: "Sapphire Shimmer Bodycon Dress",
    category: "bodycon-dress",
    price: 2700,
    images: [
      "/images/products/western/sapphire-shimmer-bodycon-dress-front.jpg",
      "/images/products/western/sapphire-shimmer-bodycon-dress-view-02.jpg",
      "/images/products/western/sapphire-shimmer-bodycon-dress-view-03.jpg",
      "/images/products/western/sapphire-shimmer-bodycon-dress-view-04.jpg",
      "/images/products/western/sapphire-shimmer-bodycon-dress-view-05.jpg",
    ],
    description:
      "Deep sapphire sequins shimmer across this figure-skimming mini, while an embellished yoke and sleeves add jewel-like brilliance. The body-hugging cut celebrates your shape with confidence and the shorter hemline keeps it playful. Made for cocktail evenings, birthday celebrations and every night you want to arrive sparkling.",
    colors: ["Blue"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "starlit-noir-tulle-gown",
    slug: "starlit-noir-tulle-gown",
    name: "Starlit Noir Tulle Gown",
    category: "bodycon-dress",
    price: 2000,
    images: [
      "/images/products/western/starlit-noir-tulle-gown-front.jpg",
      "/images/products/western/starlit-noir-tulle-gown-view-02.jpg",
      "/images/products/western/starlit-noir-tulle-gown-view-03.jpg",
      "/images/products/western/starlit-noir-tulle-gown-view-04.jpg",
      "/images/products/western/starlit-noir-tulle-gown-detail.jpg",
      "/images/products/western/starlit-noir-tulle-gown-detail.jpg",
    ],
    description:
      "Layers of soft black tulle scattered with golden flecks give this gown its quiet magic. A structured bodice meets a full, floating skirt that moves like starlight with every step. Dramatic yet weightless, it is made for cocktail evenings, milestone birthdays and nights when you want to feel unforgettable.",
    colors: ["Black"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "scarlet-charm-midi-dress",
    slug: "scarlet-charm-midi-dress",
    name: "Scarlet Charm Midi Dress",
    category: "cocktail-dress",
    price: 1400,
    images: [
      "/images/products/western/scarlet-charm-midi-dress-front.jpg",
      "/images/products/western/scarlet-charm-midi-dress-view-02.jpg",
    ],
    description:
      "A button-through bodice and softly ruffled sleeves give this scarlet midi its easy charm, finished with a printed flared hem for a playful twist. Comfortable, breathable and beautifully uncomplicated, it moves from daytime outings to evening dinners with a quick change of accessories. Everyday elegance in the most joyful shade.",
    colors: ["Red"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "silver-mist-peplum-co-ord",
    slug: "silver-mist-peplum-co-ord",
    name: "Silver Mist Peplum Co-Ord",
    category: "cord-set",
    price: 2700,
    images: [
      "/images/products/western/silver-mist-peplum-co-ord-front.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-02.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-03.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-04.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-05.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-06.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-07.jpg",
      "/images/products/western/silver-mist-peplum-co-ord-view-08.jpg",
    ],
    description:
      "Liquid-soft velvet in a misty silver tone, cut into a peplum top with dramatic flared cuffs and a sleek pencil skirt. The set catches light with a subtle sheen and skims the body for a polished, contemporary shape. Effortlessly glamorous for evening parties, anniversary dinners and celebrations after dark.",
    colors: ["Silver", "Grey"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "onyx-shimmer-peplum-co-ord",
    slug: "onyx-shimmer-peplum-co-ord",
    name: "Onyx Shimmer Peplum Co-Ord",
    category: "cord-set",
    price: 1000,
    images: [
      "/images/products/western/onyx-shimmer-peplum-co-ord-front.jpg",
      "/images/products/western/onyx-shimmer-peplum-co-ord-view-02.jpg",
      "/images/products/western/onyx-shimmer-peplum-co-ord-view-03.jpg",
      "/images/products/western/onyx-shimmer-peplum-co-ord-view-04.jpg",
      "/images/products/western/onyx-shimmer-peplum-co-ord-view-05.jpg",
      "/images/products/western/onyx-shimmer-peplum-co-ord-view-06.jpg",
    ],
    description:
      "Midnight shimmer runs through this striking co-ord, pairing a tie-waist peplum top with a sleek high-slit skirt. Flared sleeves add movement while the fine speckled finish catches light from every angle. Bold, modern and beautifully cut, it is made for parties, celebrations and nights you want to own the room.",
    colors: ["Black"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "aqua-blossom-bodycon-dress",
    slug: "aqua-blossom-bodycon-dress",
    name: "Aqua Blossom Bodycon Dress",
    category: "bodycon-dress",
    price: 1000,
    images: [
      "/images/products/western/aqua-blossom-bodycon-dress-front.jpg",
      "/images/products/western/aqua-blossom-bodycon-dress-view-02.jpg",
      "/images/products/western/aqua-blossom-bodycon-dress-view-03.jpg",
      "/images/products/western/aqua-blossom-bodycon-dress-view-04.jpg",
      "/images/products/western/aqua-blossom-bodycon-dress-view-05.jpg",
    ],
    description:
      "Watercolour blossoms drift across this softly fitted maxi, finished with a matching stole for an elegant final touch. The body-skimming silhouette flatters beautifully while the light fabric keeps it comfortable from afternoon into evening. Fresh, feminine and quietly striking, it is lovely for brunches, garden events and summer celebrations.",
    colors: ["Aqua", "Blue"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "fern-floral-top-palazzo",
    slug: "fern-floral-top-palazzo",
    name: "Fern Floral Top & Palazzo",
    category: "cord-set",
    price: 1000,
    images: [
      "/images/products/western/fern-floral-top-palazzo-front.jpg",
      "/images/products/western/fern-floral-top-palazzo-view-02.jpg",
      "/images/products/western/fern-floral-top-palazzo-view-03.jpg",
    ],
    description:
      "Lush fern-green florals bring life to this relaxed dropped-shoulder top, styled with fluid ivory palazzo trousers. The easy cut skims comfortably while the print keeps things fresh and expressive. Light, breezy and beautifully versatile, it works for brunches, holidays and warm afternoons that call for effortless style.",
    colors: ["Green", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "cloud-ribbed-co-ord-set",
    slug: "cloud-ribbed-co-ord-set",
    name: "Cloud Ribbed Co-Ord Set",
    category: "cord-set",
    price: 2000,
    images: [
      "/images/products/western/cloud-ribbed-co-ord-set-front.jpg",
      "/images/products/western/cloud-ribbed-co-ord-set-view-02.jpg",
      "/images/products/western/cloud-ribbed-co-ord-set-view-03.jpg",
    ],
    description:
      "Soft ribbed knit in a clean cloud white, cut into a long-sleeved crop top and matching high-waisted skirt. The set hugs gently and moves with you, creating a sleek, contemporary line. Understated and endlessly stylish, it is made for city days, brunch dates and evenings that call for quiet confidence.",
    colors: ["White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "midnight-bloom-embroidered-suit-set",
    slug: "midnight-bloom-embroidered-suit-set",
    name: "Midnight Bloom Embroidered Suit Set",
    category: "ethnic-suit",
    price: 1800,
    images: [
      "/images/products/indian/midnight-bloom-embroidered-suit-set-front.jpg",
      "/images/products/indian/midnight-bloom-embroidered-suit-set-view-02.jpg",
      "/images/products/indian/midnight-bloom-embroidered-suit-set-view-03.jpg",
      "/images/products/indian/midnight-bloom-embroidered-suit-set-view-04.jpg",
      "/images/products/indian/midnight-bloom-embroidered-suit-set-view-05.jpg",
      "/images/products/indian/midnight-bloom-embroidered-suit-set-view-06.jpg",
    ],
    description:
      "Deep black sets the stage for a cascade of pink and ivory floral embroidery, running from the yoke down to the hem. A matching embroidered dupatta with a bordered finish completes the look. Striking yet graceful, this suit set is a beautiful pick for festive evenings and family celebrations.",
    colors: ["Black", "Pink"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "pearl-blossom-embroidered-suit-set",
    slug: "pearl-blossom-embroidered-suit-set",
    name: "Pearl Blossom Embroidered Suit Set",
    category: "ethnic-suit",
    price: 1800,
    images: [
      "/images/products/indian/pearl-blossom-embroidered-suit-set-front.jpg",
      "/images/products/indian/pearl-blossom-embroidered-suit-set-view-02.jpg",
      "/images/products/indian/pearl-blossom-embroidered-suit-set-view-03.jpg",
      "/images/products/indian/pearl-blossom-embroidered-suit-set-view-04.jpg",
    ],
    description:
      "Soft ivory brought to life with delicate pink floral embroidery scattered across the kurta and dupatta. The straight silhouette falls cleanly over matching wide-leg trousers for a look that feels fresh and quietly elegant. A lovely choice for daytime gatherings, festive mornings and occasions that call for understated charm.",
    colors: ["White", "Pink"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "vermilion-chevron-sharara-set",
    slug: "vermilion-chevron-sharara-set",
    name: "Vermilion Chevron Sharara Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/vermilion-chevron-sharara-set-front.jpg",
      "/images/products/indian/vermilion-chevron-sharara-set-view-02.jpg",
      "/images/products/indian/vermilion-chevron-sharara-set-view-03.jpg",
      "/images/products/indian/vermilion-chevron-sharara-set-view-04.jpg",
    ],
    description:
      "A bold chevron print in vermilion and ivory defines this striking kurta, paired with a flowing sharara and a soft matching dupatta. The graphic pattern brings a modern edge to a classic festive silhouette. A confident choice for celebrations, family functions and daytime festivities.",
    colors: ["Red", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "sunset-bandhani-sharara-set",
    slug: "sunset-bandhani-sharara-set",
    name: "Sunset Bandhani Sharara Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/sunset-bandhani-sharara-set-front.jpg",
    ],
    description:
      "Warm sunset orange runs through this bandhani-print kurta and its matching sharara, creating a look that glows from every angle. The relaxed silhouette moves easily while the traditional print keeps it rooted in festive charm. Perfect for daytime celebrations, poojas and joyful family gatherings.",
    colors: ["Orange"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "emerald-rose-bandhani-suit-set",
    slug: "emerald-rose-bandhani-suit-set",
    name: "Emerald Rose Bandhani Suit Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/emerald-rose-bandhani-suit-set-front.jpg",
      "/images/products/indian/emerald-rose-bandhani-suit-set-view-02.jpg",
      "/images/products/indian/emerald-rose-bandhani-suit-set-view-03.jpg",
    ],
    description:
      "Emerald green meets vivid rose-pink bandhani in this beautifully contrasted suit set. The printed dupatta and coordinating bottoms bring bold colour play to a classic festive silhouette. Eye-catching and full of character, it is a striking pick for celebrations, festive outings and occasions that call for colour.",
    colors: ["Green", "Pink"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "amber-rose-bandhani-suit-set",
    slug: "amber-rose-bandhani-suit-set",
    name: "Amber Rose Bandhani Suit Set",
    category: "ethnic-suit",
    price: 1200,
    images: [
      "/images/products/indian/amber-rose-bandhani-suit-set-front.jpg",
      "/images/products/indian/amber-rose-bandhani-suit-set-view-02.jpg",
      "/images/products/indian/amber-rose-bandhani-suit-set-view-03.jpg",
    ],
    description:
      "Rose pink pairs with sunlit amber bandhani in this joyful suit set, finished with a richly toned dupatta. The bright colour blocking and traditional print create a look that feels festive and full of life. A radiant choice for daytime functions, poojas and celebrations with family.",
    colors: ["Pink", "Yellow"],
    availability: "Available",
    newArrival: true,
  },

  // ---- Independence Day collection -----------------------------------------
  {
    id: "tricolour-organza-saree",
    slug: "tricolour-organza-saree",
    name: "Tricolour Organza Saree",
    category: "ethnic-suit",
    price: 1000,
    images: [
      "/images/products/indian/tricolour-organza-saree-front.jpg",
      "/images/products/indian/tricolour-organza-saree-view-02.jpg",
    ],
    description:
      "A sheer organza saree that moves through saffron, ivory and green, scattered with golden woven motifs and finished with a rich green border. Styled here with a white blouse, it drapes softly and catches the light beautifully. A radiant choice for Independence Day gatherings and festive mornings.",
    colors: ["Saffron", "White", "Green"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "mother-daughter-tricolour-twinning-set",
    slug: "mother-daughter-tricolour-twinning-set",
    name: "Mother & Daughter Tricolour Twinning Set",
    category: "mom-daughter",
    price: 1000,
    images: [
      "/images/products/mom-kid/mother-daughter-tricolour-twinning-set-front.jpg",
      "/images/products/mom-kid/mother-daughter-tricolour-twinning-set-view-02.jpg",
      "/images/products/mom-kid/mother-daughter-tricolour-twinning-set-view-03.jpg",
    ],
    description:
      "Celebrate together in matching tricolour drapes. A flowing organza saree for her is echoed in a coordinated little saree-style set for your daughter, both in saffron, ivory and green. A picture-perfect pairing for Independence Day functions, school celebrations and family photographs.",
    colors: ["Saffron", "White", "Green"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "tricolour-white-anarkali-suit-set",
    slug: "tricolour-white-anarkali-suit-set",
    name: "Tricolour White Anarkali Suit Set",
    category: "ethnic-suit",
    price: 1000,
    images: [
      "/images/products/indian/tricolour-white-anarkali-suit-set-front.jpg",
      "/images/products/indian/tricolour-white-anarkali-suit-set-view-02.jpg",
      "/images/products/indian/tricolour-white-anarkali-suit-set-view-03.jpg",
      "/images/products/indian/tricolour-white-anarkali-suit-set-view-04.jpg",
    ],
    description:
      "A flowing ivory anarkali paired with a striking saffron and green dupatta. The generous flare sweeps beautifully with every step while the tricolour drape brings instant festive spirit. Style it with the coordinating churidar for Independence Day events and cultural programmes.",
    colors: ["White", "Saffron", "Green"],
    availability: "Available",
    featured: true,
    newArrival: true,
  },
  {
    id: "indigo-bloom-embroidered-anarkali-set",
    slug: "indigo-bloom-embroidered-anarkali-set",
    name: "Indigo Bloom Embroidered Anarkali Set",
    category: "ethnic-suit",
    price: 1000,
    images: [
      "/images/products/indian/indigo-bloom-embroidered-anarkali-set-front.jpg",
      "/images/products/indian/indigo-bloom-embroidered-anarkali-set-view-02.jpg",
      "/images/products/indian/indigo-bloom-embroidered-anarkali-set-view-03.jpg",
      "/images/products/indian/indigo-bloom-embroidered-anarkali-set-view-04.jpg",
    ],
    description:
      "A deep indigo anarkali covered in delicate white floral embroidery, finished with flared sleeves and a soft sheer overlay. Worn with ivory palazzo trousers, it brings quiet elegance to festive dressing. A graceful pick for celebrations, family functions and festive evenings.",
    colors: ["Indigo", "White"],
    availability: "Available",
    newArrival: true,
  },
  {
    id: "tiranga-motif-straight-kurta",
    slug: "tiranga-motif-straight-kurta",
    name: "Tiranga Motif Straight Kurta",
    category: "ethnic-suit",
    price: 1000,
    images: [
      "/images/products/indian/tiranga-motif-straight-kurta-front.jpg",
    ],
    description:
      "A crisp white straight kurta with a sequinned yoke and small tricolour flag motifs, finished with a soft green dupatta. Easy to wear over jeans or trousers, it brings understated patriotic charm to daytime celebrations and Independence Day outings.",
    colors: ["White", "Green"],
    availability: "Available",
    newArrival: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}
