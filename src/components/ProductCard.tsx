import { useWishlist } from "../hooks/useWishlist"
import type { Product } from "../types/product"

type Props = {
  product: Product,
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isInWishlist = wishlist.some(item => (
    item.productId === product.productId
  ));

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <article className="bg-amber-50 p-2 text-[#333] rounded-[4px]">
      <div className="w-full h-[150px] bg-gray-200 flex items-center justify-center">Image</div>
      <h2 className="mt-3 font-bold text-[18px]">{product.title}</h2>
      <p className="line-clamp-2 text-black/40" title={product.details}>
        {product.details}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-[#333] text-white py-2 px-4 rounded-[4px]">Details</button>
        <button className="border rounded-[4px] p-2 cursor-pointer hover:bg-black/10 hover:border-transparent transition-colors duration-500 active:scale-90" onClick={handleClick}>
          {isInWishlist ? "Remove ❌" : "Add ➕"}
        </button>
      </div>
    </article>
  )
}

export default ProductCard