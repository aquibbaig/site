'use client';

import { useState } from 'react';
import type { InventoryItem } from './data';
import { getRelativeDate } from './data';
import Image from 'next/image';
import { cn } from '@repo/ui/cn';

interface InventoryCardProps {
  item: InventoryItem;
}

export function InventoryCard({ item }: InventoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        'cursor-default transition-colors bg-accent overflow-hidden rounded border border-transparent hover:border-accent-foreground/10'
      )}
      onClick={toggleExpanded}
    >
      <div className="p-2 space-y-1">
        <div className="text-sm font-medium">
          <span>{item.brand}</span>
        </div>
        <span className='text-sm'>{item.product}</span>
      </div>

      <div className="h-64 relative cursor-default dark:opacity-90">
        {!isExpanded && (
          <Image
            src={item.image}
            alt={`${item.brand} ${item.product}`}
            fill
            className="object-contain bg-accent"
          />
        )}

        {isExpanded && (
          <div className="absolute bottom-4 left-4 space-y-1 text-xs text-muted-foreground">
            <div className="text-xs text-muted-foreground capitalize">
              Purchased: {getRelativeDate(item.date)}
            </div>
            {item.reason && <div className="text-xs">Reason: {item.reason}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
