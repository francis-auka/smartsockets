'use client';

import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Shield, RefreshCw, Truck, ChevronLeft } from 'lucide-react';
import { useState, useEffect, use } from 'react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
}

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const supabase = createClient();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const { data: prodData, error: prodError } = await supabase
          .from('products')
          .select('*')
          .eq('id', parseInt(id))
          .single();

        if (prodError) throw prodError;

        const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop';

        if (prodData) {
          setProduct({
            id: prodData.id,
            name: prodData.name,
            price: prodData.price,
            image: prodData.imageurl || prodData.imageUrl || prodData.image_url || prodData.image || DEFAULT_IMAGE,
            category: prodData.category,
            description: prodData.description,
            features: prodData.features || [],
            inStock: prodData.instock ?? prodData.inStock ?? prodData.in_stock ?? true
          });

          const { data: relatedData } = await supabase
            .from('products')
            .select('*')
            .eq('category', prodData.category)
            .neq('id', prodData.id)
            .limit(4);

          if (relatedData) {
            setRelatedProducts(relatedData.map((item: any) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.imageurl || item.imageUrl || item.image_url || item.image || DEFAULT_IMAGE,
              category: item.category,
              description: item.description,
              features: item.features || [],
              inStock: item.instock ?? item.inStock ?? item.in_stock ?? true
            })));
          }
        }
      } catch (err: any) {
        console.error('Error fetching product:', err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id, supabase]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
          <p className="text-[11px] uppercase tracking-[0.5em] text-black/20 font-bold">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase">Product Not Found</h1>
          <Link href="/" className="inline-flex items-center gap-3 text-[12px] font-bold text-black border-2 border-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition">
            <ChevronLeft size={16} />
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs - Responsive */}
        <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-24 text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
          <Link href="/" className="text-black/30 hover:text-black transition">Home</Link>
          <span className="text-black/10">—</span>
          <span className="text-black truncate">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 xl:gap-40 items-start">
          {/* Main Image - Responsive Aspect Ratio */}
          <div className="w-full">
            <div className="relative aspect-square md:aspect-[4/5] bg-[#f5f5f7] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-black/5 group shadow-2xl shadow-black/[0.03]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 md:group-hover:scale-105"
                priority
              />
              {!product.inStock && (
                 <div className="absolute top-6 left-6 bg-black text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black">
                    Out of Stock
                 </div>
              )}
            </div>
          </div>

          {/* Product Info - Better spacing and mobile font sizes */}
          <div className="flex flex-col pt-4 md:pt-0">
            <div className="mb-12 md:mb-16 border-b border-black/5 pb-12 md:pb-16">
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.3em] text-red-500 mb-4 md:mb-6 block">
                 Ref #{product.id.toString().padStart(3, '0')}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black mb-8 md:mb-10 leading-tight">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-black">
                  KES {product.price.toLocaleString()}
                </span>
                {product.inStock && (
                   <span className="bg-green-500/10 text-green-600 text-[9px] md:text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-full">In Stock</span>
                ) }
              </div>
            </div>

            <div className="mb-12 md:mb-16">
               <h3 className="text-[11px] md:text-[12px] uppercase tracking-widest text-black/30 mb-6 md:mb-8 font-black">Description</h3>
               <p className="text-black/60 font-medium leading-[1.8] md:leading-[2] text-base md:text-lg tracking-tight">
                  {product.description || 'Premium engineering meets home automation. Designed for efficiency and ease of use, this smart socket allows you to control your power usage with extreme precision.'}
               </p>
            </div>

            <div className="mb-12 md:mb-20">
               <h3 className="text-[11px] md:text-[12px] uppercase tracking-widest text-black/30 mb-8 md:mb-10 font-black">Key Features</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 md:gap-x-16 md:gap-y-6">
                  {(product.features.length ? product.features : ['Heart Rate Monitor', 'AMOLED Display', 'Waterproof', 'Sleep Tracking']).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[11px] md:text-[12px] font-bold text-black/40 uppercase tracking-tight">
                      <div className="w-2 h-2 bg-black/10 rounded-full flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Actions - Sticky mobile drawer style or full width */}
            <div className="space-y-8 md:space-y-10">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="flex items-center justify-between sm:justify-start border-2 border-black/5 rounded-full px-8 py-5 bg-[#f5f5f7]">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-black/30 hover:text-black transition px-4 font-bold">-</button>
                  <span className="w-14 text-center text-[15px] md:text-[13px] font-black text-black">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-black/30 hover:text-black transition px-4 font-bold">+</button>
                </div>
                
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-black text-white text-[13px] md:text-[14px] uppercase tracking-widest font-black py-5 px-10 rounded-full hover:scale-[1.02] active:scale-95 transition duration-500 shadow-2xl shadow-black/20"
                >
                   Add to Cart
                </button>

                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`hidden sm:flex w-20 border-2 rounded-full items-center justify-center transition duration-500 ${isWishlisted ? 'bg-red-50 text-red-500 border-red-500' : 'border-black/5 text-black hover:border-black'}`}
                >
                  <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} strokeWidth={2.5} />
                </button>
              </div>

              {/* Service Grid - Compact on Mobile */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 md:pt-20 border-t border-black/5 mt-12 md:mt-20">
                 {[
                   { icon: Truck, label: 'Fast Shipping' },
                   { icon: RefreshCw, label: 'Easy Returns' },
                   { icon: Shield, label: 'Warranty' }
                 ].map((s, i) => (
                   <div key={i} className="text-center space-y-3 md:space-y-4 group">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-[#f5f5f7] flex items-center justify-center mx-auto transition-transform group-active:scale-90">
                         <s.icon size={20} strokeWidth={2.5} className="text-black md:w-6 md:h-6" />
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/40 block leading-tight">{s.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related - Responsive Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-40 md:mt-60 pb-20">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-24 gap-6 border-b border-black/5 pb-10 md:pb-12">
                <div className="space-y-3">
                  <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Recommended</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black leading-none">You May Also Like.</h2>
                </div>
                <Link href="/shop" className="w-full sm:w-auto text-center text-[12px] font-bold text-black border-2 border-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition">
                  Shop All Products
                </Link>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mobile-slider no-scrollbar">
               {relatedProducts.map(rel => (
                 <div key={rel.id} className="w-[85vw] md:w-auto">
                    <Link href={`/products/${rel.id}`} className="group flex flex-col bg-white rounded-[2.5rem] p-3 md:p-4 transition-all duration-700 hover:shadow-2xl border border-transparent hover:border-black/5">
                        <div className="relative aspect-square md:aspect-[4/5] bg-[#f5f5f7] rounded-[2rem] overflow-hidden">
                          <Image
                            src={rel.image}
                            alt={rel.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                          />
                        </div>
                        <div className="py-6 md:py-8 px-4 flex flex-col items-center text-center space-y-2 md:space-y-3">
                          <h4 className="text-base md:text-lg font-black tracking-tight text-black">{rel.name}</h4>
                          <p className="text-[12px] md:text-[13px] font-bold text-black/40 uppercase">KES {rel.price.toLocaleString()}</p>
                        </div>
                    </Link>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
