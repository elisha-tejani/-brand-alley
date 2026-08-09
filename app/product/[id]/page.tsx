import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";
import GarmentIcon from "@/components/GarmentIcon";
import Backdrop from "@/components/Backdrop";
import AddToCartButton from "@/components/AddToCartButton";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) notFound();

  const hasPhoto = product.images.length > 0;

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-stone">
          {hasPhoto ? (
            <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 860px) 100vw, 50vw" className="object-cover" />
          ) : (
            <Backdrop tone="stone" className="w-full h-full">
              <div className="w-full h-full flex items-center justify-center">
                <GarmentIcon index={0} tone="ink" className="w-2/5 h-2/5" />
              </div>
            </Backdrop>
          )}
        </div>

        <div>
          <span className="font-sans font-medium text-[11px] tracking-[0.18em] uppercase text-clay">
            {product.category}
          </span>
          <h1 className="font-sans font-extrabold text-[28px] md:text-[34px] mt-2">{product.name}</h1>
          <p className="font-sans font-bold text-[20px] text-orange-deep mt-3">{formatPrice(product.price)}</p>

          {product.description && (
            <p className="text-[14.5px] text-ink/80 leading-relaxed mt-6 max-w-[440px]">{product.description}</p>
          )}

          <div className="mt-8 flex items-center gap-3 text-[13px] text-clay">
            <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-green-600" : "bg-red-500"}`} />
            {product.stock > 0 ? `In stock (${product.stock} left)` : "Out of stock"}
          </div>

          <AddToCartButton
            productId={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0] ?? null}
            stock={product.stock}
          />
        </div>
      </div>
    </div>
  );
}
