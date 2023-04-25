import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

interface ProviderProps {
    children: React.ReactNode
}

interface CartContextType {
    items: Product[],
    checkout: () => void,
    addItem: (value: Product) => void
}

const CartContext = createContext<CartContextType>({
    items: [],
    checkout: () => {},
    addItem: () => {}
})

const CartProvider: React.FC<ProviderProps> = ({ children }) => {
    const [items, setItems] = useState<Product[]>([])

    const router = useRouter()

    const checkout = () => {
        router.push('/checkout')
    }

    const addItem = (item: Product) => {
        setItems([...items, item])
    }

    return (
        <CartContext.Provider value={{ items, checkout, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartProvider