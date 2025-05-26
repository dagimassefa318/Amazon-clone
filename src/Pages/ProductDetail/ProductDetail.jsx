import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
// 
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios
      .get(`${productUrl}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product");
      });
  }, [productId]);

  return (
    <LayOut>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </LayOut>
  );
};

export default ProductDetail;
