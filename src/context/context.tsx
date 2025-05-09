import { createContext } from "react";
import type { Product } from "../types/product";

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);
