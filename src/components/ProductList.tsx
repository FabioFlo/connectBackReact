import { useEffect, useState } from "react";

export const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching products", category);
    setProduct(["Clothing", "HouseHold"]);
  }, [category]);
  // All'interno delle quadre [] finali di useEffect, definiamo quando deve aggiornare la console
  // in questo caso gli diciamo che ogni volta che riceve una modifica di 'category' dovrà rieseguire.
  // E' anche possibile lasciarlo vuoto, in questo caso verrà eseguito solo la prima volta.
  // Si possono anche indicare più variabili.
  return <div>ProductList</div>;
};
