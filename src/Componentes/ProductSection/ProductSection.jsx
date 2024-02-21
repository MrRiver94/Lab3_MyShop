import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/Card";
import data from "../../fakeapi/data.json";
import "../ProductSection/ProductSection.css"

function ProductSection({ filtro }) {
  const products = data.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="product-section">
      {products.map((product) => (
        
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductSection.propTypes = {
  filtro: PropTypes.string.isRequired,
};

export default ProductSection;
