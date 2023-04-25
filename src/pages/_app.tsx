import Layout from "@/components/Layout";
import CartProvider from "@/contexts/CartContext";
import CategoryProvider from "@/contexts/CategoryContext";
import UserProvider from "@/contexts/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <CategoryProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CategoryProvider>
      </CartProvider>
    </UserProvider>
  );
}
