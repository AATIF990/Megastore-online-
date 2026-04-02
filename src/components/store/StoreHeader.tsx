import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Menu, X, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

interface Props {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
}

export default function StoreHeader({ searchQuery, onSearchChange, activeCategory, onCategoryChange }: Props) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      {/* Top banner */}
      <div className="hero-bg overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-8 text-xs font-medium text-secondary-foreground/80">
              🔥 Free Shipping on Orders $50+ &nbsp;|&nbsp; ⚡ Flash Deals Up to 70% Off &nbsp;|&nbsp; 🎁 New Arrivals Daily &nbsp;|&nbsp; ✨ Premium Quality Guaranteed
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main nav */}
        <div className="flex h-16 items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-display text-xl font-bold text-foreground"
          >
            <Package className="h-7 w-7 text-primary" />
            <span>Mega<span className="text-primary">Store</span></span>
          </motion.div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search thousands of products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-full border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-primary p-2.5 text-primary-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Categories bar */}
        <nav className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onCategoryChange(null)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="container mx-auto space-y-2 p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full rounded-full border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button onClick={() => { onCategoryChange(null); setMobileMenuOpen(false); }} className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-muted">
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { onCategoryChange(cat.id); setMobileMenuOpen(false); }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-muted"
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
