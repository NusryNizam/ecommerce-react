import { useContext, createContext, useState, useMemo } from "react";

const ProductContext = createContext();

function useDetails() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(`useCount must be used within a ProductProvider`)
  }
  return context
}

function ProductProvider(props) {
  const [details, setDetails] = useState(0)
  const value = useMemo(() => [details, setDetails], [details])
  return <ProductContext.Provider value={value} {...props} />
}

export { ProductProvider, useDetails }