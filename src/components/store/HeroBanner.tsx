import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Truck, Shield, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
              <Sparkles className="h-4 w-4" /> Spring Collection 2026
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-tight text-secondary-foreground md:text-6xl"
          >
            Everything You Need,{" "}
            <span className="text-primary">Delivered Fast</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-secondary-foreground/70"
          >
            Shop thousands of products across fashion, kitchen, toys, fresh produce and pet supplies — all in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-8 py-3 font-semibold text-secondary-foreground"
            >
              View Deals
            </motion.button>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute right-10 top-10 text-6xl opacity-20 md:opacity-40"
        >
          🛍️
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-32 bottom-10 text-5xl opacity-20 md:opacity-40"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
          className="absolute right-1/4 top-1/3 text-4xl opacity-20 md:opacity-30"
        >
          🎁
        </motion.div>
      </div>

      {/* Features strip */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-4 md:grid-cols-4">
          {[
            { icon: Truck, text: "Free Shipping $50+" },
            { icon: Shield, text: "Secure Payment" },
            { icon: Clock, text: "24/7 Support" },
            { icon: Sparkles, text: "Premium Quality" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <Icon className="h-4 w-4 text-primary" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
