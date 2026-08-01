import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGrid from "@/components/ProductGrid";
import { products, getProductBySlug } from "@/data/products";
import { getCategory } from "@/data/categories";
import { getProductOrderUrl, getProductEnquiryUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

const availabilityStyles: Record<string, string> = {
  Available: "text-green-700 bg-green-50",
  "Limited Stock": "text-amber-700 bg-amber-50",
  "Out of Stock": "text-red-700 bg-red-50",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const canOrder = product.availability !== "Out of Stock";

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <nav className="text-xs text-ink/50 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-purple-700">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-purple-700">Shop</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/${category.slug}`} className="hover:text-purple-700">
              {category.title}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <ProductGallery images={product.images} alt={product.name} />

        <div className="flex flex-col">
          {category && (
            <Link
              href={`/${category.slug}`}
              className="text-xs tracking-widest uppercase text-purple-500 font-medium mb-3 hover:underline w-fit"
            >
              {category.title}
            </Link>
          )}
          <h1 className="font-serif-display text-3xl sm:text-4xl text-purple-800 mb-3">
            {product.name}
          </h1>
          <p className="text-2xl text-purple-700 mb-5">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <span
            className={`inline-flex w-fit items-center px-3 py-1 text-xs font-medium tracking-wide uppercase mb-6 ${availabilityStyles[product.availability]}`}
          >
            {product.availability}
          </span>

          <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-6">
            {product.description}
          </p>

          <dl className="grid grid-cols-2 gap-y-3 text-sm mb-8 border-y border-purple-100 py-6">
            {product.fabric && (
              <>
                <dt className="text-ink/50">Fabric</dt>
                <dd className="text-ink/80">{product.fabric}</dd>
              </>
            )}
            {product.colors && product.colors.length > 0 && (
              <>
                <dt className="text-ink/50">
                  {product.colors.length > 1 ? "Colors" : "Color"}
                </dt>
                <dd className="text-ink/80">{product.colors.join(", ")}</dd>
              </>
            )}
            {product.sizes && product.sizes.length > 0 && (
              <>
                <dt className="text-ink/50">
                  {product.sizes.length > 1 ? "Sizes" : "Size"}
                </dt>
                <dd className="text-ink/80 flex flex-wrap gap-1.5">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="border border-purple-200 px-2 py-0.5 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </>
            )}
          </dl>

          <div className="flex flex-col sm:flex-row gap-3">
            {canOrder ? (
              <WhatsAppButton href={getProductOrderUrl(product)} className="flex-1">
                Order On WhatsApp
              </WhatsAppButton>
            ) : (
              <WhatsAppButton
                href={getProductEnquiryUrl(product)}
                variant="outline"
                className="flex-1"
              >
                Enquire On WhatsApp
              </WhatsAppButton>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-purple-800 mb-8">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
