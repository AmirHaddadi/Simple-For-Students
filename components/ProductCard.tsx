"use client";

import { useState } from "react";
import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  icon: string;
  image?: string;
  tag?: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 group">
      {/* Product Image */}
      <div className="relative w-full aspect-4/3 bg-slate-100 dark:bg-slate-900/80 flex items-center justify-center border-b border-slate-100 dark:border-slate-700/50 overflow-hidden">
        {product.tag && (
          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-blue-600/90 text-white text-[11px] font-semibold flex items-center gap-1 backdrop-blur-xs shadow-xs">
            <i className="fa-solid fa-tag text-[9px]"></i>
            <span>{product.tag}</span>
          </span>
        )}
        
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all">
            <i className={product.icon}></i>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-layer-group text-[11px] text-blue-500"></i>
              <span>{product.category}</span>
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <i className="fa-solid fa-star text-[11px]"></i>
              <span>{product.rating}</span>
            </span>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block">قیمت:</span>
            <div className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
              <span>{product.price}</span>
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400">تومان</span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs shadow-blue-500/20"
            }`}
          >
            {added ? (
              <>
                <i className="fa-solid fa-check"></i>
                <span>افزوده شد</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-cart-plus"></i>
                <span>خرید سریع</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
