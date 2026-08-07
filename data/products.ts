export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  icon: number; // index into the placeholder icon set used by ProductCard
  tone: "ink" | "orange" | "clay" | "blush" | "sage";
};

// TODO: replace this static array with data fetched from your database
// once the admin dashboard / CMS is connected. `icon` and `tone` are only
// used to vary the placeholder art — drop both once you have real photos.
export const products: Product[] = [
  { id: 1, name: "Alley Overcoat", price: 8900, category: "Outerwear", icon: 0, tone: "ink" },
  { id: 2, name: "Sable Midi Dress", price: 5200, category: "Dresses", icon: 1, tone: "blush" },
  { id: 3, name: "Ribbed Turtleneck", price: 2600, category: "Essentials", icon: 2, tone: "clay" },
  { id: 4, name: "Pleated Trouser", price: 4100, category: "Essentials", icon: 3, tone: "sage" },
  { id: 5, name: "Wrap Wool Coat", price: 9800, category: "Outerwear", icon: 4, tone: "orange" },
  { id: 6, name: "Slip Satin Dress", price: 6400, category: "Dresses", icon: 5, tone: "blush" },
];

export const formatPrice = (price: number) => `Rs. ${price.toLocaleString("en-PK")}`;
