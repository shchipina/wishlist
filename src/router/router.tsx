import { createHashRouter } from "react-router";
import App from "../App";
import WishlistPage from "../pages/Wishlist";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/wishlist",
    element: <WishlistPage />
  }
])