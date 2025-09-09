export interface InventoryItem {
  brand: string;
  brandUrl?: string;
  product: string;
  productUrl?: string;
  date: string;
  reason?: string;
  image: string;
}

export const inventoryData: InventoryItem[] = [
  {
    brand: 'Apple',
    brandUrl: 'https://apple.com',
    product: 'MacBook Pro 14" M3',
    productUrl: 'https://apple.com/macbook-pro-14-and-16/',
    date: '2 months ago',
    reason: 'Upgrade for development work',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop'
  },
  {
    brand: 'Aesop',
    brandUrl: 'https://aesop.com',
    product: 'Parsley Seed Facial Cleanser',
    productUrl: 'https://aesop.com/us/p/skin/cleanse/parsley-seed-facial-cleanser/',
    date: '3 months ago',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop'
  },
  {
    brand: 'Uniqlo',
    brandUrl: 'https://uniqlo.com',
    product: 'Heattech Crew Neck Long Sleeve T-Shirt',
    productUrl: 'https://uniqlo.com/us/en/products/E423257-000',
    date: '4 months ago',
    reason: 'Winter layering',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'
  },
  {
    brand: 'Sony',
    brandUrl: 'https://sony.com',
    product: 'WH-1000XM5 Headphones',
    productUrl: 'https://sony.com/us/electronics/headband-headphones/wh-1000xm5',
    date: '6 months ago',
    reason: 'Better noise cancellation for focus',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
  },
  {
    brand: 'Notion',
    brandUrl: 'https://notion.so',
    product: 'Personal Pro Plan',
    productUrl: 'https://notion.so/pricing',
    date: '8 months ago',
    reason: 'Unlimited file uploads',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
  },
  {
    brand: 'Patagonia',
    brandUrl: 'https://patagonia.com',
    product: 'Better Sweater Fleece Jacket',
    productUrl: 'https://patagonia.com/product/mens-better-sweater-fleece-jacket/25527.html',
    date: '1 year ago',
    reason: 'Sustainable outdoor wear',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
  },
  {
    brand: 'IKEA',
    brandUrl: 'https://ikea.com',
    product: 'BEKANT Desk',
    productUrl: 'https://ikea.com/us/en/p/bekant-desk-white-s59006423/',
    date: '1 year ago',
    reason: 'Home office setup',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    brand: 'Allbirds',
    brandUrl: 'https://allbirds.com',
    product: 'Tree Runners',
    productUrl: 'https://allbirds.com/products/mens-tree-runners',
    date: '1.5 years ago',
    reason: 'Comfortable daily shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop'
  },
  {
    brand: 'Kindle',
    brandUrl: 'https://amazon.com/kindle',
    product: 'Paperwhite 11th Generation',
    productUrl: 'https://amazon.com/dp/B08KTZ8249',
    date: '2 years ago',
    reason: 'More reading, less screen time',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
  },
  {
    brand: 'Herman Miller',
    brandUrl: 'https://hermanmiller.com',
    product: 'Aeron Chair',
    productUrl: 'https://hermanmiller.com/products/seating/office-chairs/aeron-chairs/',
    date: '3 years ago',
    reason: 'Long-term back health investment',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  }
];