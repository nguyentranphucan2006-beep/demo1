// products.js
const ntpa_products = [
  {
    id: 1,
    name: 'Radiant Hoodie',
    price: 699000,
    category: 'apparel',
    images: ['../img/hoodie.png', '../img/hoodie1.jpg'],
    description: 'Hoodie official-style, ấm áp, in họa tiết Radiant.',
    variants: { color: ['Black', 'White'], size: ['S', 'M', 'L'] },
    stock: 12,
    featured: true
  },
  {
    id: 2,
    name: 'Phoenix Tee',
    price: 349000,
    category: 'apparel',
    images: ['../img/phoenix.jpg', '../img/phoenix1.jpg'],
    description: 'T-shirt Phoenix cotton 100%.',
    variants: { color: ['White', 'Blue'], size: ['S', 'M', 'L', 'XL'] },
    stock: 30,
    featured: false
  },
  {
    id: 3,
    name: 'Valorant Keycap Set',
    price: 249000,
    category: 'accessory',
    images: ['../img/keyCap.webp','../img/R.jpg','../img/keycap.avif'],
    description: 'Set keycap thiết kế Agent.',
    variants: { color: [], size: [] },
    stock: 24,
    featured: true
  },
  {
    id: 4,
    name: 'Valorant Bag',
    price: 499000,
    category: 'accessory',
    images: ['../img/bag.jpg'],
    description: 'Balô đa dụng, chống nước.',
    variants: { color: ['Black'], size: [] },
    stock: 8,
    featured: false
  },
  {
    id: 5,
    name: 'Agent Pin Pack',
    price: 100000,
    category: 'collectible',
    images: ['../img/agentPin.webp'],
    description: 'Pack 4 pin Agents.',
    variants: { color: [], size: [] },
    stock: 50,
    featured: false
  },
  {
    id: 6,
    name: 'Collector Patch',
    price: 99000,
    category: 'collectible',
    images: ['../img/patch.jpg'],
    description: 'Patch limited edition.',
    variants: { color: [], size: [] },
    stock: 100,
    featured: true
  },
  {
    id: 7,
    name: 'Valorant Cap',
    price: 89000,
    category: 'apparel',
    images: ['../img/mu.jpg'],
    description: 'Mũ lưỡi trai in logo Valorant.',
    variants: { color: ['Black'], size: [] },
    stock: 40,
    featured: false
  },
  {
    id: 8,
    name: 'Operator Poster',
    price: 129000,
    category: 'collectible',
    images: ['../img/Op.webp'],
    description: 'Poster A2 Operator art.',
    variants: { color: [], size: [] },
    stock: 60,
    featured: false
  },
  {
    id: 9,
    name: 'Chamber shoes',
    price: 500000,
    category: 'apparel',
    images: ['../img/shoes.jpg'],
    description: 'Vớ Sova 2 đôi/pack.',
    variants: { color: ['White'], size: ['M', 'L'] },
    stock: 70,
    featured: false
  },
  {
    id: 10,
    name: 'Knife Keychain',
    price: 29000,
    category: 'accessory',
    images: ['../img/mocKhoa.webp'],
    description: 'Móc khóa Knife replica.',
    variants: { color: [], size: [] },
    stock: 150,
    featured: false
  },
  {
    id: 11,
    name: 'Agent Hoodie - V2',
    price: 749000,
    category: 'apparel',
    images: ['../img/valor-hoodie.jpg'],
    description: 'Hoodie phiên bản Agent V2.',
    variants: { color: ['Black'], size: ['M', 'L', 'XL'] },
    stock: 5,
    featured: true
  },
  {
    id: 12,
    name: 'Spray Sticker Pack',
    price: 59000,
    category: 'collectible',
    images: ['../img/spray.jpg'],
    description: 'Gói sticker 10 mẫu.',
    variants: { color: [], size: [] },
    stock: 200,
    featured: false
  }
];
