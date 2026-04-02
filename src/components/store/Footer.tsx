import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hero-bg mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold text-secondary-foreground">
              <Package className="h-6 w-6 text-primary" />
              Mega<span className="text-primary">Store</span>
            </div>
            <p className="mt-3 text-sm text-secondary-foreground/60">
              Your one-stop shop for everything. Quality products at unbeatable prices.
            </p>
          </div>
          {[
            { title: "Shop", links: ["All Products", "Deals", "New Arrivals", "Best Sellers"] },
            { title: "Support", links: ["Help Center", "Returns", "Shipping Info", "Contact Us"] },
            { title: "Company", links: ["About Us", "Careers", "Press", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-secondary-foreground">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/40">
          © 2026 MegaStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
