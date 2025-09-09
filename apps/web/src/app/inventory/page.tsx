import { type Metadata } from 'next';
import { inventoryData } from './data';
import { InventoryCard } from './InventoryCard';

export const metadata: Metadata = {
  title: 'Inventory | Aquib Baig',
  description: 'Personal inventory of purchases and acquisitions',
};

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <blockquote className="text-muted-foreground italic">
          "What you own ends up owning you"
        </blockquote>
        <div className="text-xs text-muted-foreground">
          — Marshall McLuhan, <em>The Medium is the Massage</em>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {inventoryData.map((item, index) => (
          <InventoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}