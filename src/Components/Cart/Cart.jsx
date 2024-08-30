

import React, { useContext,useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Cart() {
  const {  deleteProduct, updateCart,cartProduct,  isLoading ,  getProductCart } = useContext(CartContext);
  useEffect(() => {
    getProductCart()
  }, [])


  return <>
  <h1 className="font-bold text-center text-4xl py-9 text-fa-bold text-main underline">Cart</h1>

    {isLoading ? <div className="flex justify-center text-center py-14 ">
      <LoadingScreen />
    </div> : <div className="py-9 w-3/4 mx-auto">
      <div className="relative shadow-md sm:rounded-lg  overflow-x-auto ">
        <table className=" rtl:text-right text-gray-700 w-full text-sm text-left dark:text-gray-600">
          <thead className="bg-gray-50 dark:bg-gray-600 text-xs text-gray-800 uppercase  dark:text-gray-600">
            <tr>
              <th scope="col" className="px-16 py-4">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3 font-bold text-main text-xl">Product</th>
              <th scope="col" className="px-6 py-3 font-bold text-main text-xl">number</th>
              <th scope="col" className="px-6 py-3 font-bold text-main text-xl">Price</th>
              <th scope="col" className="px-6 py-3 font-bold text-main text-xl">Action</th>
            </tr>
          </thead>


          <tbody>
            {cartProduct !== null ? (
              <>
                {cartProduct.map((product) => (
                  <tr
                    key={product.product.id}
                    className="bg-white border-b dark:bg-gray-1000 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="p-4">
                      <img
                        src={product.product.imageCover}
                        className="w-20 md:w-40 max-w-full max-h-full"
                        alt="Product"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.category.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          className=" p-1 me-3 text-sm font-medium h-6 w-6 text-gray-550 bg-white border border-gray-400 inline-flex items-center justify-center  rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-240 dark:bg-gray-860 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                          onClick={() => updateCart(product.product.id, product.count - 1)}

                        >
                          <span className="sr-only">QUANTITY button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <span>{product.count}</span>
                        </div>
                        <button
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                          onClick={() => updateCart(product.product.id, product.count + 1)}
                        >
                          <span className="sr-only">Quantity BUTTON</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      ${product.price * product.count}
                    </td>
                    <td className="px-6 py-4" >
                      <button onClick={() => deleteProduct(product.product.id)} className="font-medium text-red-700 dark:text-red-600 hover:underline">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : <h2 className='text-green-700 py-6 text-center text-3xl'>CART Is Empty</h2>}
          </tbody>

          {cartProduct !== null ? <Link to={'/checkout'}><button className='bg-main text-white p-4 m-5 rounded-lg'> CHECK OUT</button></Link>
            : ''}
        </table>
      </div>
    </div>
    }
  </>
}
