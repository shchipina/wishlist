import { createBrowserRouter } from "react-router";
import App from "../App";
import WishlistPage from "../pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/wishlist",
    element: <WishlistPage />
  }
])