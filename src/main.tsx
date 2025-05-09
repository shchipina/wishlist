import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WishlistProvider } from './context/WishlistContext.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import WishlistPage from './pages/Wishlist.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WishlistProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </HashRouter>
    </WishlistProvider>
  </StrictMode>,
)
