'use client';

import { useState, useEffect, Suspense } from 'react';
import SeoDescription from '@/components/SeoDescription';
import { createClient } from '@/utils/supabase/client';
import ProductGrid from '@/components/ProductGrid';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Search, Filter } from 'lucide-react';
import { Product } from '../page';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const supabase = createClient();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'sockets')
          .order('createdat', { ascending: false });

        if (fetchError) throw fetchError;

        if (data) {
          const mappedProducts: Product[] = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.imageurl || item.imageUrl || item.image_url || item.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
            category: item.category,
            subcategory: item.subcategory,
            description: item.description,
            features: item.features || [],
            inStock: item.instock ?? item.inStock ?? item.in_stock ?? true
          }));
          
          let finalProducts = mappedProducts;
          if (categoryFilter) {
            finalProducts = mappedProducts.filter(p => 
              p.category.toLowerCase() === categoryFilter.toLowerCase() || 
              p.subcategory?.toLowerCase() === categoryFilter.toLowerCase()
            );
          }

          setProducts(finalProducts);
        }
      } catch (err: any) {
        console.error('Error fetching products:', err.message);
        setError(`Database Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [supabase, categoryFilter]);

  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black/30 hover:text-black transition">
                 <ChevronLeft size={16} />
                 Back to Home
              </Link>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase">
                {categoryFilter ? `${categoryFilter} Sockets.` : 'All Sockets.'}
              </h1>
           </div>
           
           <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                 <input 
                    type="text" 
                    placeholder="Search Sockets..." 
                    className="w-full bg-[#f5f5f7] border-none rounded-full py-4 pl-12 pr-6 text-sm font-bold outline-none focus:ring-2 focus:ring-black/5 transition"
                 />
              </div>
              <button className="bg-black text-white p-4 rounded-full hover:scale-105 transition active:scale-95 shadow-xl shadow-black/10">
                 <Filter size={20} />
              </button>
           </div>
        </div>

        {/* Filters Row */}
        <div className="flex gap-4 mb-20 overflow-x-auto no-scrollbar pb-4">
            {[
              { label: 'All Sockets', value: null },
              { label: 'Indoor', value: 'indoor' },
              { label: 'Outdoor', value: 'outdoor' },
              { label: 'Smart Home', value: 'smart home' },
              { label: 'Power', value: 'power' }
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.value ? `/shop?category=${cat.value}` : '/shop'}
                className={`px-8 py-3 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
                  (categoryFilter === cat.value) || (!categoryFilter && cat.value === null)
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-[#f5f5f7] text-black/40 hover:text-black'
                }`}
              >
                {cat.label}
              </Link>
            ))}
        </div>

        {/* Content */}
        <div className="w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-8">
              <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-black/20">Loading Products</p>
            </div>
          ) : error ? (
            <div className="py-40 text-center text-red-500 font-bold tracking-tight">
               {error}
            </div>
          ) : products.length === 0 ? (
            <div className="py-40 text-center text-black/20 font-bold uppercase tracking-widest">
              No products found
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
      <SeoDescription />
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="h-screen bg-white flex flex-col items-center justify-center gap-6">
       <div className="w-12 h-12 border-4 border-black/5 border-t-black rounded-full animate-spin" />
       <p className="text-[11px] font-black tracking-[0.5em] text-black/20 uppercase">Loading Store</p>
    </div>}>
      <ShopContent />
    </Suspense>
  );
}
