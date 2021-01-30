import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../components";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  const { id } = useParams();

  const findProduct = products.find((product) => Number(id) === product.id);

  return <div>{<Product product={findProduct} />}</div>;
};

export default ProductDetail;
