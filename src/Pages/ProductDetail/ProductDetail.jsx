import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { productUrl as ProductUrl } from "/src/Api/endPoints.js";


import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
import LayOut from "../../components/LayOut/LayOut";
//

function ProductDetail() {
  const { productId } = useParams();
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("poduct detail page called", useParams());

  console.log("eshi ezi dersual");
  useEffect(() => {
    //https://fakestoreapi.com/products/1
    //${ProductUrl}/products/${productId}
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        let request = res.data.filter((product) => {
          return product.id == productId;
        });
        setProduct(request);
        setIsLoading(false);
        console.log("the fetched one", request);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log("this is products", products);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              flex={true}
              renderAdd={true}
            />
          );
        })
      )}
    </LayOut>
  );
}

export default ProductDetail;
