'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group flex flex-col bg-white rounded-[2.5rem] p-2 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-transparent hover:border-black/5">
      <div className="relative aspect-[4/5] bg-[#f5f5f7] rounded-[2rem] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {!product.inStock && (
           <div className="absolute top-6 left-6 bg-black text-white px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-black">
              Sold Out
           </div>
        )}
      </div>

      <div className="py-8 px-4 flex flex-col items-center text-center space-y-3">
        <h3 className="text-lg font-bold text-black tracking-tight group-hover:text-black/70 transition-colors">
          {product.name}
        </h3>
        <p className="text-[13px] font-medium text-black/40">
          KES {product.price.toLocaleString()}
        </p>
        
        <div className="pt-4 flex gap-2">
            {[1,2,3].map(i => (
                <div key={i} className={`w-3 h-3 rounded-full border border-black/5 ${i === 1 ? 'bg-black' : i === 2 ? 'bg-gray-300' : 'bg-red-400'}`} />
            ))}
        </div>
      </div>
    </Link>
  );
}
