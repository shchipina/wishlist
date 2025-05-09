import { Link } from "react-router";
import ProductCard from "./components/ProductCard";
import productsData from "./json/products.json";

function App() {
  return (
    <main className="max-w-[1200px] mx-auto my-[100px]">
      <Link to="/wishlist" className="py-2 px-3 rounded-[4px] inline-block bg-amber-50 text-[#333] font-medium mb-10">
        Wishlist
      </Link>

      <section className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {productsData.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </section>
    </main>
  )
}

export default App;
