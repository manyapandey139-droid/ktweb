import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({
  products,
  emptyMessage = "No products found. Please check back soon.",
}: {
  products: Product[];
  emptyMessage?: string;
}) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-ink/50 border border-dashed border-purple-200">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
