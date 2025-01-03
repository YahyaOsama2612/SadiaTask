import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
)
