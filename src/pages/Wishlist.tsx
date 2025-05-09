import { useWishlist } from "../hooks/useWishlist";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="max-w-[1200px] mx-auto my-[80px]">
      <Link to="/" className="py-2 px-3 rounded-[4px] inline-block bg-amber-50 text-[#333] font-medium mb-10">
        🔙
      </Link>
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">You don't have any products in your wishlist yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {wishlist.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
