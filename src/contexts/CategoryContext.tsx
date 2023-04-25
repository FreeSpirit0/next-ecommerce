import React, { createContext, useContext, useState } from "react";

interface CategoryContextType {
  category: string;
  setCategory: (value: string) => void;
}

const CategoryContext = createContext<CategoryContextType>({
  category: "",
  setCategory: () => {},
});

interface ProviderProps {
    children: React.ReactNode
}

const CategoryProvider: React.FC<ProviderProps> = ({children}) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext)

export default CategoryProvider;
