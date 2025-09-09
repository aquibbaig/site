import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export interface InventoryItem {
  brand: string;
  brandUrl?: string;
  product: string;
  productUrl?: string;
  date: string;
  reason?: string;
  image: string;
}

export const getRelativeDate = (dateString: string): string => {
  const parsed = dayjs(dateString, 'DD-MM-YYYY');
  console.log('Original:', dateString, 'Parsed:', parsed.format('YYYY-MM-DD'), 'FromNow:', parsed.fromNow());
  return parsed.fromNow();
};

export const inventoryData: InventoryItem[] = [
  {
    brand: 'Apple',
    product: 'MacBook Air 13" M3',
    productUrl: 'https://www.apple.com/macbook-air/specs/',
    date: `15-02-2024`,
    reason: 'Lightweight personal computer',
    image: '/inventory/mba13-spacegray-select-202402_2.png'
  },
  {
    brand: 'Google',
    product: 'Pixel 9',
    productUrl: 'https://store.google.com/product/pixel_9',
    date: `20-02-2025`,
    image: '/inventory/pixel-9.png'
  },
  {
    brand: 'Sony',
    product: 'WH-1000XM5 Headphones',
    productUrl: 'https://www.sony.com/electronics/headband-headphones/wh-1000xm5',
    date: '15-10-2022',
    image: '/inventory/sony-100xm5.png'
  },
  {
    brand: 'Fujifilm',
    product: 'X100V Camera',
    productUrl: 'https://fujifilm-x.com/global/products/cameras/x100v/',
    date: '10-08-2024',
    reason: 'Street photography and film simulation',
    image: '/inventory/fujifilm-x100v.png'
  },
  {
    brand: 'Marshall',
    product: 'Kilburn II Portable Speaker',
    productUrl: 'https://www.marshallheadphones.com/us/en/kilburn-ii.html',
    date: '08-07-2025',
    reason: 'Vintage aesthetics with modern sound',
    image: '/inventory/marshall-killburn-2.png'
  },
  {
    brand: 'TID Watches',
    product: 'No.1 Watch',
    productUrl: 'https://tidwatches.com/collections/no-1-collection',
    date: '27-08-2025',
    reason: 'Minimalist Scandinavian design',
    image: '/inventory/tid-no1-watch.png'
  },
  {
    brand: 'MUJI',
    product: 'Less Tiring Backpack',
    productUrl: 'https://www.muji.com/jp/en/store/cmdty/detail/4550182842448',
    date: '18-02-2024',
    reason: 'Daily carry',
    image: '/inventory/muji-less-tiring_bagpack.png'
  },
  {
    brand: 'Steelseries',
    product: 'Dragon Lore Mousepad',
    date: '04-08-2025',
    reason: 'Gaming setup aesthetic',
    image: '/inventory/dragon-lore-mousepad.png'
  }
];