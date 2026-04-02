import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-lg bg-card card-shadow overflow-hidden hover:card-hover-shadow transition-shadow duration-300"
    >
      {product.badge && (
        <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
          {product.badge}
        </span>
      )}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
          className="absolute bottom-3 right-3 rounded-full bg-primary p-2.5 text-primary-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
        >
          <ShoppingCart className="h-4 w-4" />
        </motion.button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-sm font-semibold leading-tight text-card-foreground line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="mt-2 w-full rounded-md bg-secondary py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
