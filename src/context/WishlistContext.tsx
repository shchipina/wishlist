import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { WishlistContext } from "./context";

type Props = { children: React.ReactNode };

export const WishlistProvider: React.FC<Props> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

    useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (item: Product) => {
    setWishlist((prev) =>
      prev.some((i) => i.productId === item.productId) ? prev : [...prev, item]
    );
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== id));
  };

  return (
    <WishlistContext.Provider value={{
      wishlist, addToWishlist, removeFromWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
