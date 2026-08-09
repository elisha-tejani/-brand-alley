import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <h1 className="font-sans font-extrabold text-[24px] mb-8">Add Product</h1>
      <ProductForm />
    </div>
  );
}
