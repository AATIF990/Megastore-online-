import { useState, useMemo } from "react";
import { CartProvider } from "@/context/CartContext";
import StoreHeader from "@/components/store/StoreHeader";
import HeroBanner from "@/components/store/HeroBanner";
import DealsCarousel from "@/components/store/DealsCarousel";
import CategorySection from "@/components/store/CategorySection";
import CartDrawer from "@/components/store/CartDrawer";
import Footer from "@/components/store/Footer";
import {
  categories,
  clothingProducts,
  kitchenProducts,
  toyProducts,
  fruitVegProducts,
  animalFoodProducts,
} from "@/data/products";

const categoryData = [
  { ...categories[0], products: clothingProducts },
  { ...categories[1], products: kitchenProducts },
  { ...categories[2], products: toyProducts },
  { ...categories[3], products: fruitVegProducts },
  { ...categories[4], products: animalFoodProducts },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let data = categoryData;
    if (activeCategory) {
      data = data.filter((c) => c.id === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data
        .map((c) => ({
          ...c,
          products: c.products.filter((p) => p.name.toLowerCase().includes(q)),
        }))
        .filter((c) => c.products.length > 0);
    }
    return data;
  }, [searchQuery, activeCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <StoreHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <HeroBanner />
        <main className="container mx-auto px-4">
          {!activeCategory && !searchQuery && <DealsCarousel />}
          {filtered.map((cat) => (
            <CategorySection
              key={cat.id}
              title={cat.name}
              icon={cat.icon}
              products={cat.products}
              gradientClass={cat.color}
            />
          ))}
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-muted-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground/70">Try a different search term</p>
            </div>
          )}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
