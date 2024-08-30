

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";
import { CartContext } from "../../Context/CartContext";
export default function RecentProducts({ product }) {
  const { addProduct } = useContext(CartContext);
  const { addWishList } = useContext(WishListContext);
  const [seccolor, setSecColor] = useState(false);
  function changeColor() {
    setSecColor(true);
  }



  return (
    <>
      <div className="md:w-1/4 lg:w-1/6 py-2 ">
        <div className="product cursor-pointer px-2 py-3">
          <Link
            to={`/productdetailes/${product.id}/${product.subcategory[0].category}`}
          >

            <div className="product-img ">
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-full"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-main px-2 ">{product.category.name}</h3>
                <p className="text-lg font-normal text-gray-800 px-2">
                  {product.title.split(" ").slice(0, 2).join(" ")}{" "}
                </p>
              </div>

              <Link className="me-1 " onClick={() => { addWishList(product._id); changeColor() }}>
                <i className={`${seccolor ? 'danger-color' : ''} fa-solid fa-2x fa-heart`}></i>

              </Link>
            </div>
            <div className="flex justify-between mt-3 mb-2 px-2">
              <p>{product.price} EGP</p>
              <p>
                <i className="rating-color fa-solid fa-star"></i>
                {product.ratingsAverage}{" "}
              </p>
            </div>
          </Link>
          <button className="bg-main w-full btn p-2 text-white rounded-lg" onClick={() => addProduct(product.id)}>
            {" "}
            ADD to Cart
          </button>
        </div>
      </div>
    </>
  );
}

