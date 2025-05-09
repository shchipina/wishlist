import { useContext } from "react"
import { WishlistContext } from "../context/context";

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("some error")
  };

  return context;
};
