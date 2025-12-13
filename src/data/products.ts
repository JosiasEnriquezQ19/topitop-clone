// Base de datos mock de productos
// En producción esto vendría de tu API de Spring Boot

import productosHombreData from "./productos_hombre.json";
import productosMujerData from "./productos_mujer.json";
import productosInfantilData from "./productos_infantil.json";

export interface Product {
  id: number;
  brand: string;
  name: string;
  code: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  sizes: string[];
  description?: string;
  modelInfo?: string;
  category?: string;
}

export const productsDatabase: { [key: string]: Product } = {
  // Productos Navidad - Xiomi
  "1": {
    id: 1,
    brand: "Xiomi",
    name: "Vestido Mujer Nina Celeste",
    code: "3154367",
    price: 59.94,
    originalPrice: 99.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/397049/3154367_1.jpg?v=638999529135800000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/397049/3154367_1.jpg?v=638999529135800000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido elegante para mujer con diseño celeste, perfecto para la temporada navideña.",
    modelInfo: "Modelo usa talla S. Altura: 1.70m",
    category: "mujer",
  },
  "2": {
    id: 2,
    brand: "Xiomi",
    name: "Vestido Mujer Nina Coco",
    code: "3154352",
    price: 59.94,
    originalPrice: 99.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/397053/3154353_1.jpg?v=638999529611800000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/397053/3154353_1.jpg?v=638999529611800000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido elegante en tono coco, ideal para ocasiones especiales.",
    modelInfo: "Modelo usa talla S. Altura: 1.70m",
    category: "mujer",
  },

  // Productos Tpt Mujer
  "3": {
    id: 3,
    brand: "Topitop mujer",
    name: "Vestido Mujer Leonor Solid Azul Lava",
    code: "3142948",
    price: 59.90,
    originalPrice: 109.90,
    discount: 45,
    image: "https://topitop.vtexassets.com/arquivos/ids/394933/3142948_1.jpg?v=638987585670900000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/394933/3142948_1.jpg?v=638987585670900000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido solid en azul lava, diseño moderno y elegante.",
    modelInfo: "Modelo usa talla M. Altura: 1.68m",
    category: "mujer",
  },
  "4": {
    id: 4,
    brand: "Topitop mujer",
    name: "Vestido Mujer Leonor Solid Rojo Tomate",
    code: "3142934",
    price: 59.90,
    originalPrice: 109.90,
    discount: 45,
    image: "https://topitop.vtexassets.com/arquivos/ids/394937/3142934_1.jpg?v=638987586129400000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/394937/3142934_1.jpg?v=638987586129400000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido solid en rojo tomate vibrante.",
    modelInfo: "Modelo usa talla M. Altura: 1.68m",
    category: "mujer",
  },
  "5": {
    id: 5,
    brand: "Topitop mujer",
    name: "Vestido Mujer Leonor Solid Beige Oscuro",
    code: "3142927",
    price: 60.45,
    originalPrice: 109.90,
    discount: 45,
    image: "https://topitop.vtexassets.com/arquivos/ids/394941/3142927_1.jpg?v=638987586626700000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/394941/3142927_1.jpg?v=638987586626700000"],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido solid en beige oscuro, elegante y versátil.",
    modelInfo: "Modelo usa talla M. Altura: 1.68m",
    category: "mujer",
  },

  // Productos Hawk
  "6": {
    id: 6,
    brand: "Hawk",
    name: "Bermuda Hombre Freddys Azul Pageant",
    code: "3142581",
    price: 64.95,
    originalPrice: 129.90,
    discount: 50,
    image: "https://topitop.vtexassets.com/arquivos/ids/393547/3142582_1.jpg?v=638975724068130000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/393547/3142582_1.jpg?v=638975724068130000"],
    sizes: ["28", "30", "32", "34"],
    description: "Bermuda para hombre en azul pageant, diseño casual y cómodo.",
    modelInfo: "Modelo usa talla 30. Altura: 1.80m",
    category: "hombre",
  },
  "7": {
    id: 7,
    brand: "Hawk",
    name: "Camisa Hombre Tulum Rosado Vintage",
    code: "3138131",
    price: 49.95,
    originalPrice: 99.90,
    discount: 50,
    image: "https://topitop.vtexassets.com/arquivos/ids/390553/3138133_1.jpg?v=638949374353270000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/390553/3138133_1.jpg?v=638949374353270000"],
    sizes: ["S", "M", "L", "XL"],
    description: "Camisa para hombre en rosado vintage, estilo moderno y fresco.",
    modelInfo: "Modelo usa talla M. Altura: 1.80m",
    category: "hombre",
  },

  // Productos Polos y Shorts
  "101": {
    id: 101,
    brand: "Topitop mujer",
    name: "Polo Mujer Zully Beige Arena",
    code: "3153339",
    price: 59.94,
    originalPrice: 99.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/396481-500-auto?v=638993564878000000&width=500&height=auto&aspect=true",
    images: ["https://topitop.vtexassets.com/arquivos/ids/396481-500-auto?v=638993564878000000&width=500&height=auto&aspect=true"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Polo para mujer en beige arena, perfecto para el día a día.",
    modelInfo: "Modelo usa talla S. Altura: 1.70m",
    category: "mujer",
  },
  "102": {
    id: 102,
    brand: "Xiomi",
    name: "Short Mujer Anahi Morado Olive",
    code: "3145181",
    price: 35.96,
    originalPrice: 89.90,
    discount: 60,
    image: "https://topitop.vtexassets.com/arquivos/ids/395736/3145182_1.jpg?v=638992597906830000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/395736/3145182_1.jpg?v=638992597906830000"],
    sizes: ["26", "28", "30", "32"],
    description: "Short para mujer en morado olive, cómodo y con estilo.",
    modelInfo: "Modelo usa talla 28. Altura: 1.68m",
    category: "mujer",
  },
  "103": {
    id: 103,
    brand: "Topitop mujer",
    name: "Short Mujer Madeleine Azul Náutico",
    code: "3144821",
    price: 49.45,
    originalPrice: 89.90,
    discount: 45,
    image: "https://topitop.vtexassets.com/arquivos/ids/395178/3144821_1.jpg?v=638987612959200000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/395178/3144821_1.jpg?v=638987612959200000"],
    sizes: ["26", "28", "30", "32"],
    description: "Short para mujer en azul náutico, ideal para el verano.",
    modelInfo: "Modelo usa talla 28. Altura: 1.68m",
    category: "mujer",
  },

  // Productos Hawk Collection
  "201": {
    id: 201,
    brand: "Hawk",
    name: "Bermuda Denim Hombre Zurich Total Dark Grey",
    code: "3172802",
    price: 83.94,
    originalPrice: 139.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/395234/3172804_1.jpg?v=638987618987230000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/395234/3172804_1.jpg?v=638987618987230000"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Bermuda denim para hombre en gris oscuro total, estilo urbano.",
    modelInfo: "Modelo usa talla 32. Altura: 1.82m",
    category: "hombre",
  },
  "202": {
    id: 202,
    brand: "Hawk",
    name: "Camisa Hombre Lucca Total Dirty Green",
    code: "3184605",
    price: 77.94,
    originalPrice: 129.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/395226/3184606_1.jpg?v=638987618154970000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/395226/3184606_1.jpg?v=638987618154970000"],
    sizes: ["S", "M", "L", "XL"],
    description: "Camisa para hombre en verde dirty, diseño casual moderno.",
    modelInfo: "Modelo usa talla L. Altura: 1.82m",
    category: "hombre",
  },
  "203": {
    id: 203,
    brand: "Hawk",
    name: "Camisa Hombre Hardin Total Light Bleach",
    code: "3172470",
    price: 101.94,
    originalPrice: 169.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/396596/3172471_1.jpg?v=638993578783400000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/396596/3172471_1.jpg?v=638993578783400000"],
    sizes: ["S", "M", "L", "XL"],
    description: "Camisa para hombre en light bleach, estilo denim moderno.",
    modelInfo: "Modelo usa talla L. Altura: 1.82m",
    category: "hombre",
  },

  // Vestidos Infantil
  "301": {
    id: 301,
    brand: "Topitop Kids",
    name: "Vestido Niña Bertha Fucsia Floral",
    code: "3130478",
    price: 34.95,
    originalPrice: 69.90,
    discount: 50,
    image: "https://topitop.vtexassets.com/arquivos/ids/391647/3130480_1.jpg?v=638951015633370000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/391647/3130480_1.jpg?v=638951015633370000"],
    sizes: ["02", "04", "06", "08", "10", "12", "14"],
    description: "Vestido para niña en fucsia con estampado floral.",
    modelInfo: "Modelo usa talla 06.",
    category: "infantil",
  },
  "302": {
    id: 302,
    brand: "Topitop Kids",
    name: "Vestido Niña Cleopatra Blanco",
    code: "3139332",
    price: 53.94,
    originalPrice: 89.90,
    discount: 40,
    image: "https://topitop.vtexassets.com/arquivos/ids/396628/3139334_1.jpg?v=638993582775470000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/396628/3139334_1.jpg?v=638993582775470000"],
    sizes: ["02", "04", "06", "08", "10", "12", "14"],
    description: "Vestido para niña en blanco con diseño Cleopatra.",
    modelInfo: "Modelo usa talla 08.",
    category: "infantil",
  },
  "303": {
    id: 303,
    brand: "Topitop Kids",
    name: "Vestido Niña Lolita Rojo America",
    code: "3145921",
    price: 89.90,
    image: "https://topitop.vtexassets.com/arquivos/ids/396612/3145923_1.jpg?v=638993580559400000",
    images: ["https://topitop.vtexassets.com/arquivos/ids/396612/3145923_1.jpg?v=638993580559400000"],
    sizes: ["02", "04", "06", "08", "10", "12", "14"],
    description: "Vestido para niña en rojo america, diseño Lolita elegante.",
    modelInfo: "Modelo usa talla 06.",
    category: "infantil",
  },
};

// Combine JSON products into a searchable array
const allJsonProducts = [
  ...productosHombreData.map((p: any, i: number) => ({ ...p, id: `hombre-${i}`, category: "hombre" })),
  ...productosMujerData.map((p: any, i: number) => ({ ...p, id: `mujer-${i}`, category: "mujer" })),
  ...productosInfantilData.map((p: any, i: number) => ({ ...p, id: `infantil-${i}`, category: "infantil" })),
];

// Función helper para obtener un producto por ID
export const getProductById = (id: string | number): Product | undefined => {
  // First check in the main database
  const fromDatabase = productsDatabase[id.toString()];
  if (fromDatabase) return fromDatabase;
  
  // If not found and ID is numeric, check JSON products by code
  const searchId = id.toString();
  const fromJson = allJsonProducts.find(p => 
    p.code === searchId || p.id === searchId || p.id === parseInt(searchId)
  );
  
  if (fromJson) {
    return {
      id: typeof fromJson.id === 'number' ? fromJson.id : parseInt(fromJson.code) || 0,
      brand: fromJson.brand,
      name: fromJson.name,
      code: fromJson.code,
      price: fromJson.price,
      originalPrice: fromJson.originalPrice,
      discount: fromJson.discount,
      image: fromJson.image,
      images: [fromJson.image],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: `${fromJson.name} de la marca ${fromJson.brand}.`,
      modelInfo: "Modelo usa talla M.",
      category: fromJson.category,
    };
  }
  
  return undefined;
};

// Función helper para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return Object.values(productsDatabase).filter(
    (product) => product.category === category
  );
};

// Función helper para obtener todos los productos
export const getAllProducts = (): Product[] => {
  return Object.values(productsDatabase);
};
