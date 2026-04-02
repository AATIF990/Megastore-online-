export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
}

const clothingImages = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  "https://images.unsplash.com/photo-1434389677669-e08b4cda3a09?w=400",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
  "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
];

const kitchenImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
  "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
  "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400",
  "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
  "https://images.unsplash.com/photo-1495461199391-8c39ab674295?w=400",
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
  "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=400",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400",
  "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400",
];

const toyImages = [
  "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400",
  "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=400",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400",
  "https://images.unsplash.com/photo-1560859251-d563a49c37e3?w=400",
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400",
  "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=400",
  "https://images.unsplash.com/photo-1599623560574-39d485900c95?w=400",
  "https://images.unsplash.com/photo-1536846511313-4b07b637bff9?w=400",
  "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400",
];

const fruitVegImages = [
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
  "https://images.unsplash.com/photo-1518977676601-b53f82ber5f7?w=400",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
  "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
  "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=400",
  "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
  "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400",
  "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400",
  "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
];

const animalFoodImages = [
  "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400",
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
  "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?w=400",
  "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400",
  "https://images.unsplash.com/photo-1450778869180-e77d1c251f68?w=400",
  "https://images.unsplash.com/photo-1583337130417-13104dec14a8?w=400",
  "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=400",
  "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400",
  "https://images.unsplash.com/photo-1425082661507-6af0db74f382?w=400",
  "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400",
];

const clothingNames = [
  "Classic White T-Shirt", "Slim Fit Denim Jeans", "Premium Polo Shirt", "Formal Dress Shirt",
  "Casual Hoodie", "Winter Puffer Jacket", "Striped Linen Shirt", "Cotton Crew Neck Tee",
  "Graphic Print Sweatshirt", "Tailored Chino Pants", "Silk Blouse", "Knit Cardigan",
  "Leather Belt", "Wool Scarf", "Baseball Cap", "Running Shorts", "Yoga Pants",
  "Denim Jacket", "Flannel Shirt", "Trench Coat", "Maxi Dress", "Cocktail Dress",
  "Cargo Pants", "Bermuda Shorts", "Turtleneck Sweater", "V-Neck Cashmere", "Sport Jersey",
  "Rain Jacket", "Blazer", "Swim Trunks", "Pajama Set", "Thermal Underwear",
  "Corduroy Pants", "Pleated Skirt", "Wrap Dress", "Bomber Jacket", "Peacoat",
  "Overalls", "Tank Top", "Henley Shirt", "Oxford Shoes", "Sneakers",
  "Boot Cut Jeans", "High-Waisted Jeans", "Crop Top", "Midi Skirt", "Linen Pants",
  "Windbreaker", "Parka", "Down Vest",
];

const kitchenNames = [
  "Non-Stick Frying Pan", "Chef's Knife Set", "Stainless Steel Pot", "Silicone Spatula Set",
  "Cutting Board Bamboo", "Mixing Bowl Set", "Electric Blender", "Coffee Maker Deluxe",
  "Toaster 4-Slice", "Air Fryer XL", "Instant Pot", "Food Processor",
  "Stand Mixer", "Spice Rack Organizer", "Glass Storage Containers", "Measuring Cup Set",
  "Cast Iron Skillet", "Wok Pan", "Baking Sheet Set", "Muffin Tin",
  "Rolling Pin", "Whisk Set", "Tongs Set", "Colander",
  "Grater Set", "Peeler Set", "Can Opener", "Corkscrew",
  "Ice Cream Scoop", "Ladle", "Serving Spoon Set", "Salad Spinner",
  "Bread Maker", "Waffle Iron", "Griddle Pan", "Pressure Cooker",
  "Rice Cooker", "Slow Cooker", "Juicer", "Mandoline Slicer",
  "Mortar and Pestle", "Thermometer", "Timer Digital", "Apron Set",
  "Oven Mitts", "Dish Rack", "Sponge Holder", "Trash Can Sensor",
  "Paper Towel Holder", "Napkin Rings Set",
];

const toyNames = [
  "Building Blocks 500pc", "Remote Control Car", "Teddy Bear Giant", "Board Game Classic",
  "Puzzle 1000 Pieces", "Action Figure Set", "Doll House Deluxe", "LEGO City Set",
  "Nerf Blaster Pro", "Play-Doh Kit", "Hot Wheels Track", "Barbie Dream Set",
  "Toy Train Set", "Science Kit", "Art Supplies Set", "Musical Instrument Kids",
  "Water Gun Super", "Kite Rainbow", "Jump Rope LED", "Skateboard Mini",
  "Basketball Junior", "Soccer Ball Kids", "Telescope Kids", "Microscope Set",
  "Robot Programmable", "Drone Mini", "RC Helicopter", "Yo-Yo Pro",
  "Magic Set", "Card Game Pack", "Chess Set Wood", "Rubik's Cube",
  "Slinky Classic", "Etch A Sketch", "Bubble Machine", "Kaleidoscope",
  "Finger Paint Set", "Modeling Clay", "Sticker Book 500", "Coloring Book Set",
  "Toy Kitchen Set", "Tool Kit Kids", "Doctor Kit", "Firefighter Set",
  "Dinosaur Figures", "Animal Figures Farm", "Space Shuttle Model", "Pirate Ship",
  "Castle Playset", "Trampoline Mini",
];

const fruitVegNames = [
  "Organic Apples 1kg", "Fresh Bananas Bunch", "Strawberries Box", "Blueberries Pack",
  "Avocados 3-Pack", "Mangoes Alphonso", "Oranges Navel 2kg", "Grapes Red Seedless",
  "Watermelon Whole", "Pineapple Fresh", "Kiwi 6-Pack", "Pomegranate",
  "Lemons Organic", "Limes Fresh", "Peaches Ripe", "Cherries Sweet",
  "Raspberries Punnet", "Blackberries Box", "Dragon Fruit", "Passion Fruit",
  "Tomatoes Vine", "Cucumbers English", "Bell Peppers Mixed", "Broccoli Crown",
  "Cauliflower Head", "Spinach Baby 200g", "Kale Organic", "Lettuce Romaine",
  "Carrots Organic 1kg", "Potatoes Russet 2kg", "Sweet Potatoes", "Onions Yellow 1kg",
  "Garlic Bulbs 3-Pack", "Ginger Root Fresh", "Mushrooms Button", "Zucchini Green",
  "Eggplant Fresh", "Celery Bunch", "Corn on the Cob", "Asparagus Bundle",
  "Green Beans Fresh", "Peas Sugar Snap", "Radishes Red", "Beets Golden",
  "Artichokes", "Brussels Sprouts", "Cabbage Green", "Turnips Fresh",
  "Parsnips Organic", "Squash Butternut",
];

const animalFoodNames = [
  "Premium Dog Kibble 5kg", "Cat Wet Food Variety", "Fish Flakes Tropical", "Reptile Pellets",
  "Hamster Mix Seed", "Dog Treats Dental", "Cat Treats Salmon", "Fish Food Goldfish",
  "Reptile Calcium Dust", "Hamster Treat Sticks", "Dog Wet Food Chicken", "Cat Dry Food Indoor",
  "Betta Fish Pellets", "Iguana Food Mix", "Guinea Pig Pellets", "Dog Puppy Formula",
  "Cat Kitten Food", "Cichlid Flakes", "Turtle Food Sticks", "Rabbit Hay Premium",
  "Dog Senior Formula", "Cat Hairball Control", "Koi Fish Food", "Bearded Dragon Diet",
  "Chinchilla Pellets", "Dog Grain-Free", "Cat Grain-Free", "Shrimp Wafers",
  "Snake Food Frozen", "Ferret Food Premium", "Dog Joint Support", "Cat Urinary Care",
  "Pond Fish Food", "Gecko Diet", "Hamster Yogurt Drops", "Dog Weight Control",
  "Cat Sensitive Stomach", "Marine Fish Flakes", "Chameleon Food", "Bird Seed Mix",
  "Dog Raw Diet Patties", "Cat Pate Selection", "Algae Wafers", "Tortoise Food",
  "Gerbil Food Mix", "Dog Freeze-Dried", "Cat Freeze-Dried", "Pleco Tablets",
  "Hermit Crab Food", "Parrot Pellets",
];

const badges = ["Best Seller", "New", "Sale", "Limited", "Top Rated", "Prime", ""];

function generateProducts(
  names: string[],
  images: string[],
  category: string,
  subcategories: string[],
  priceRange: [number, number]
): Product[] {
  return names.map((name, i) => {
    const price = +(priceRange[0] + Math.random() * (priceRange[1] - priceRange[0])).toFixed(2);
    const hasDiscount = Math.random() > 0.6;
    return {
      id: `${category}-${i}`,
      name,
      price,
      originalPrice: hasDiscount ? +(price * (1.2 + Math.random() * 0.5)).toFixed(2) : undefined,
      image: images[i % images.length],
      category,
      subcategory: subcategories[i % subcategories.length],
      rating: +(3.5 + Math.random() * 1.5).toFixed(1),
      reviews: Math.floor(50 + Math.random() * 5000),
      badge: Math.random() > 0.5 ? badges[Math.floor(Math.random() * badges.length)] : undefined,
      description: `High quality ${name.toLowerCase()} - perfect for everyday use.`,
    };
  });
}

export const clothingProducts = generateProducts(
  clothingNames, clothingImages, "Clothing", ["Men", "Women", "Kids", "Accessories"], [9.99, 149.99]
);

export const kitchenProducts = generateProducts(
  kitchenNames, kitchenImages, "Kitchen", ["Cookware", "Appliances", "Utensils", "Storage"], [4.99, 299.99]
);

export const toyProducts = generateProducts(
  toyNames, toyImages, "Toys", ["Educational", "Outdoor", "Action", "Creative"], [5.99, 89.99]
);

export const fruitVegProducts = generateProducts(
  fruitVegNames, fruitVegImages, "Fruits & Vegetables", ["Fruits", "Vegetables", "Organic", "Exotic"], [1.49, 12.99]
);

export const animalFoodProducts = generateProducts(
  animalFoodNames, animalFoodImages, "Animal Food", ["Dog", "Cat", "Fish", "Reptile", "Small Pets"], [3.99, 49.99]
);

export const allProducts = [
  ...clothingProducts,
  ...kitchenProducts,
  ...toyProducts,
  ...fruitVegProducts,
  ...animalFoodProducts,
];

export const categories = [
  { id: "Clothing", name: "Clothing & Fashion", icon: "👗", color: "from-pink-500 to-rose-500" },
  { id: "Kitchen", name: "Kitchen Accessories", icon: "🍳", color: "from-amber-500 to-orange-500" },
  { id: "Toys", name: "Toys & Games", icon: "🧸", color: "from-blue-500 to-cyan-500" },
  { id: "Fruits & Vegetables", name: "Fruits & Vegetables", icon: "🥦", color: "from-green-500 to-emerald-500" },
  { id: "Animal Food", name: "Animal Food", icon: "🐾", color: "from-purple-500 to-violet-500" },
];
