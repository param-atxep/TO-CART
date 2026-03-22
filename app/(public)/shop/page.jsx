'use client'
import { Suspense, useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"


function ShopContent() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const router = useRouter();
    const products = useSelector(state => state.product.list);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        // Simulate fast network/render delay (max 800ms)
        const timeout = setTimeout(() => {
            setFilteredProducts(
                search
                    ? products.filter(product =>
                        product.name.toLowerCase().includes(search.toLowerCase())
                    )
                    : products
            );
            setLoading(false);
        }, 200 + Math.random() * 400); // 200-600ms
        return () => clearTimeout(timeout);
    }, [search, products]);

    return (
        <div className="min-h-[70vh] mx-6">
            <div className=" max-w-7xl mx-auto">
                <h1 onClick={() => router.push('/shop')} className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer"> {search && <MoveLeftIcon size={20} />}  All <span className="text-slate-700 font-medium">Products</span></h1>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="animate-pulse bg-slate-100 rounded-lg h-40 sm:w-60 sm:h-68" />
                        ))
                    ) : filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <div className="text-slate-400 text-lg py-12 w-full text-center">No products found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}