import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { allProducts, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const deals = allProducts.filter((p) => p.originalPrice).slice(0, 15);

export default function DealsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-primary animate-pulse" />
          <h2 className="font-display text-2xl font-bold text-foreground">Flash Deals</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="rounded-full border border-border p-2 hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll(1)} className="rounded-full border border-border p-2 hover:bg-muted">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {deals.map((product, i) => (
          <DealCard key={product.id} product={product} index={i} onAdd={addToCart} />
        ))}
      </div>
    </section>
  );
}

function DealCard({ product, index, onAdd }: { product: Product; index: number; onAdd: (p: Product) => void }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="min-w-[200px] max-w-[200px] flex-shrink-0 rounded-lg bg-card card-shadow overflow-hidden"
    >
      <div className="relative aspect-square bg-muted">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute top-2 left-2 rounded-md bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground">
          -{discount}%
        </span>
      </div>
      <div className="p-3">
        <h4 className="text-sm font-semibold text-card-foreground line-clamp-1">{product.name}</h4>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground line-through">${product.originalPrice?.toFixed(2)}</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onAdd(product)}
          className="mt-2 w-full rounded-md bg-primary py-1.5 text-xs font-semibold text-primary-foreground"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
