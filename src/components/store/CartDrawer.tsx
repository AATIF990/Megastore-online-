import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-bold text-card-foreground">Your Cart</h2>
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">{items.length}</span>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="rounded-full p-1.5 hover:bg-muted">
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
                  </motion.div>
                  <p className="mt-4 font-medium text-muted-foreground">Your cart is empty</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Add some products to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-3 rounded-lg border border-border p-3"
                    >
                      <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-md object-cover" />
                      <div className="flex flex-1 flex-col">
                        <h4 className="text-sm font-semibold text-card-foreground line-clamp-1">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.product.category}</p>
                        <p className="mt-1 text-sm font-bold text-primary">${item.product.price.toFixed(2)}</p>
                        <div className="mt-auto flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="rounded-md border border-border p-1 hover:bg-muted">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[20px] text-center text-sm font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="rounded-md border border-border p-1 hover:bg-muted">
                            <Plus className="h-3 w-3" />
                          </button>
                          <button onClick={() => removeFromCart(item.product.id)} className="ml-auto rounded-md p-1 text-destructive hover:bg-destructive/10">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-card-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-accent">Free</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-lg">
                  <span className="font-bold text-card-foreground">Total</span>
                  <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground shadow-lg transition-colors hover:opacity-90"
                >
                  Proceed to Checkout
                </motion.button>
                <button onClick={clearCart} className="w-full text-center text-sm text-muted-foreground hover:text-destructive">
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
