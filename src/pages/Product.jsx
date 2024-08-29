import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Product() {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index + 1} product={product}/>
            ))
          ) : (
            <p className="text-center text-2xl text-gray-600 py-16">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;