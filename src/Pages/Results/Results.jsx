
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Results.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { productUrl as ProductUrl } from "/src/Api/endPoints.js";

import Loader from "../../components/Loader/Loader";
import LayOut from "../../components/LayOut/LayOut";


function Results() {
  const [results, seResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        seResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results </h1>
        <p>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;