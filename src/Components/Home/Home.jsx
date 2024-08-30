

import React, {  useEffect, useState ,useContext} from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import RecentProducts from "../RecentProducts/RecentProducts";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      console.log(data.data[0].subcategory[0].category);

      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="mt-8 ">
        <MainSlider />
      </div>
      <div className="mt-4 py-3">
        <CategoriesSlider />
      </div>

      <div className="py-3">
        {products.length ? (
          <div className="flex py-14  flex-wrap ">
            {products.map((product) => (
              <RecentProducts key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex py-14 justify-center ">
            <LoadingScreen />
          </div>
        )}
      </div>
    </>
  );
}
