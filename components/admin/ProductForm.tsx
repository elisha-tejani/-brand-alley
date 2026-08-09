"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Product } from "@prisma/client";
import { CATEGORY_NAMES, subcategoriesFor } from "@/lib/categories";

export default function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const isEdit = !!product;

  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price?.toString() ?? "");
  const [category, setCategory] = useState(product?.category ?? CATEGORY_NAMES[0]);
  const [subcategory, setSubcategory] = useState(product?.subcategory ?? "");
  const [stock, setStock] = useState(product?.stock?.toString() ?? "0");
  const [featured, setFeatured] = useState(product?.featured ?? false);
  const [isNew, setIsNew] = useState(product?.isNew ?? false);
  const [images, setImages] = useState<string[]>(product?.images ?? []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const availableSubcategories = subcategoriesFor(category);

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory);
    setSubcategory(""); // reset — the old subcategory may not apply to the new category
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError("");

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        setImages((prev) => [...prev, data.url]);
      } else {
        setError(data.error || "Upload failed");
      }
    }

    setUploading(false);
    e.target.value = "";
  }

  function removeImage(url: string) {
    setImages((prev) => prev.filter((u) => u !== url));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      name,
      description: description || null,
      price: Number(price),
      category,
      subcategory: subcategory || null,
      stock: Number(stock),
      featured,
      isNew,
      images,
    };

    const res = await fetch(isEdit ? `/api/products/${product!.id}` : "/api/products", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[560px] flex flex-col gap-5">
      <div>
        <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
          Product Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
        />
      </div>

      <div>
        <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
          Description
        </label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
            Price (Rs.)
          </label>
          <input
            required
            type="number"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
          />
        </div>
        <div>
          <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
            Stock
          </label>
          <input
            required
            type="number"
            min={0}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm bg-paper"
          >
            {CATEGORY_NAMES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
            Subcategory
          </label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            disabled={availableSubcategories.length === 0}
            className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm bg-paper disabled:opacity-50"
          >
            <option value="">
              {availableSubcategories.length === 0 ? "— None —" : "Select…"}
            </option>
            {availableSubcategories.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-[13.5px]">
          <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          Featured (shows on homepage)
        </label>
        <label className="flex items-center gap-2 text-[13.5px]">
          <input type="checkbox" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />
          New Arrival
        </label>
      </div>

      <div>
        <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
          Photos
        </label>
        <input type="file" accept="image/*" multiple onChange={handleFileChange} disabled={uploading} className="text-[13px]" />
        {uploading && <p className="text-clay text-[12.5px] mt-2">Uploading…</p>}

        {images.length > 0 && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            {images.map((url) => (
              <div key={url} className="relative aspect-square rounded-sm overflow-hidden bg-stone group">
                <Image src={url} alt="" fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-ink text-paper text-[12px] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-600 text-[13px]">{error}</p>}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={saving || uploading}
          className="bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 hover:bg-orange hover:text-ink transition-colors disabled:opacity-50"
        >
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Add Product"}
        </button>
        <button type="button" onClick={() => router.push("/admin")} className="text-[13px] underline text-clay">
          Cancel
        </button>
      </div>
    </form>
  );
}
