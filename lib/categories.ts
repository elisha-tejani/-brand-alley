export const CATEGORIES = {
  "Tops": ["T-Shirts", "Crop Tops", "Button-Down Shirts", "Shimmer Tops", "Tank Tops & Camisoles"],
  "Dresses": ["Short Dresses", "Long Dresses"],
  "Pants & Trousers": ["Jeans", "Cargo Pants", "Dress Pants", "Stockings", "Tights"],
  "Skirts": ["Pleated Skirts", "Denim Skirts", "A-Line Skirts", "Pencil Skirts"],
  "Waistcoats": [] as string[],
  "Blazer Sets": [] as string[],
  "Co-Ord Sets": [] as string[],
  "Activewear": ["Gym Wear", "Athleisure"],
  "Accessories": ["Belts", "Jewellery", "Sunglasses", "Scarves"],
  "Intimates": ["Invisible Bras", "Bra Straps", "Corsets", "Lingerie"],
  "Winter Wear": ["Hoodies", "Sweaters", "Jackets"],
  "Home": ["Bedsheets"],
} as const;

export type CategoryName = keyof typeof CATEGORIES;

export const CATEGORY_NAMES = Object.keys(CATEGORIES) as CategoryName[];

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const SLUG_TO_NAME: Record<string, CategoryName> = Object.fromEntries(
  CATEGORY_NAMES.map((name) => [slugify(name), name])
) as Record<string, CategoryName>;

export function categoryFromSlug(slug: string): CategoryName | undefined {
  return SLUG_TO_NAME[slug];
}

export function subcategoriesFor(category: string): readonly string[] {
  return CATEGORIES[category as CategoryName] ?? [];
}
