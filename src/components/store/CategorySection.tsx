import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
  icon: string;
  products: Product[];
  gradientClass: string;
}

export default function CategorySection({ title, icon, products, gradientClass }: Props) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? products : products.slice(0, 10);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradientClass} text-xl`}>
            {icon}
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {products.length} items
          </span>
        </motion.div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {showAll ? "Show Less" : "View All"}
          <ChevronRight className={`h-4 w-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {displayed.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
