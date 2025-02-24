import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    let product = products.filter((product) => product._id === productId);
    setProductData(product);
    // products.map((item) => {
    //   if (item._id === productId) {
    //     setProductData(item);
    //     console.log(item);
    //     return null;
    //   }
    // });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  console.log(productData);
  return <div>Product</div>;
};
export default Product;
