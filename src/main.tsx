import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WishlistProvider } from './context/WishlistContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  </StrictMode>,
)
