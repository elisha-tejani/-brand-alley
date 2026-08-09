import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedProducts = [
  { name: "Alley Wool Jacket", price: 8900, category: "Winter Wear", subcategory: "Jackets", stock: 12, featured: true, isNew: false },
  { name: "Sable Midi Dress", price: 5200, category: "Dresses", subcategory: "Short Dresses", stock: 20, featured: true, isNew: true },
  { name: "Ribbed Turtleneck Sweater", price: 2600, category: "Winter Wear", subcategory: "Sweaters", stock: 30, featured: true, isNew: false },
  { name: "Pleated Dress Trouser", price: 4100, category: "Pants & Trousers", subcategory: "Dress Pants", stock: 18, featured: true, isNew: true },
  { name: "Wrap Wool Coat", price: 9800, category: "Winter Wear", subcategory: "Jackets", stock: 8, featured: true, isNew: true },
  { name: "Slip Satin Long Dress", price: 6400, category: "Dresses", subcategory: "Long Dresses", stock: 15, featured: true, isNew: false },
];

async function main() {
  for (const p of seedProducts) {
    await prisma.product.create({ data: p });
  }
  console.log(`Seeded ${seedProducts.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
