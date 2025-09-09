'use client';

import { useState } from 'react';
import { InventoryItem } from './data';
import Image from 'next/image';

interface InventoryCardProps {
  item: InventoryItem;
}

export function InventoryCard({ item }: InventoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-border/20 cursor-default transition-colors hover:bg-muted/50 overflow-hidden">
      <div className="p-4 space-y-1">
        <div className="text-sm font-medium">
          {item.brandUrl ? (
            <a 
              href={item.brandUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              {item.brand}
            </a>
          ) : (
            <span>{item.brand}</span>
          )}
        </div>
        <div className="text-sm">
          {item.productUrl ? (
            <a 
              href={item.productUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              {item.product}
            </a>
          ) : (
            <span>{item.product}</span>
          )}
        </div>
      </div>
      
      <div className="h-64 relative cursor-pointer" onClick={toggleExpanded}>
        {!isExpanded && (
          <Image
            src={item.image}
            alt={`${item.brand} ${item.product}`}
            fill
            className="object-cover"
          />
        )}
        
        {isExpanded && (
          <div className="absolute bottom-4 left-4 space-y-1 text-xs text-muted-foreground">
            <div>Purchased: {item.date}</div>
            {item.reason && (
              <div>Reason: {item.reason}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}