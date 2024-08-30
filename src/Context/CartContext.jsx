import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext(0);

export default function CartContextProvider({ children }) {

  useEffect(() => {
    getProductCart()


  }, [])

  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(null);
  const [cartProduct, setCartProduct] = useState(null)

  if (localStorage.getItem(`userToken`)) {
    let headers = {
      token: localStorage.getItem(`userToken`),
    };
  }

  async function addProduct(productId) {



    try {
      setIsLoading(true)
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        {
          headers: {
            token: localStorage.getItem(`userToken`),
          },
        }
      );


      setCart(data)
      toast.success(data.message, {})
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }



  async function getProductCart() {
    try {
      setIsLoading(true)
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem(`userToken`)
          }
        })


      setCartProduct(data.data.products)
      setCart(data)
      setIsLoading(false)

    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }
  }



  async function deleteProduct(productId) {

    try {
      setIsLoading(true)
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: {
          token: localStorage.getItem(`userToken`)
        }
      })

      setCartProduct(data.data.products);
      setCart(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }

  }



  async function updateCart(productId, count) {
    if (count > 0) {
      try {
        setIsLoading(true)
        let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,

          {
            count
          },
          {
            headers: {
              token: localStorage.getItem(`userToken`),
            }
          }
        )


        setCartProduct(data.data.products);
        setCart(data)
        setIsLoading(false)

      } catch (error) {
        console.log(error);
        setIsLoading(false)

      }
    } else {
      deleteProduct(productId)
    }



  }

  async function checkOut(shippingAddress) {

    try {
      setIsLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,
        {

          shippingAddress

        },
        {
          headers: {
            token: localStorage.getItem(`userToken`)
          }
        })

      console.log(data);
      setIsLoading(false)
      window.location.href = data.session.url

    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }
  }


  async function clearCart() {

    try {
      setIsLoading(true)
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`, {
        headers: {
          token: localStorage.getItem(`userToken`)
        }
      })


      setCart(null)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }

  }





  return (
    <CartContext.Provider value={{ clearCart, checkOut, cart, addProduct, getProductCart, cartProduct, deleteProduct, updateCart, isLoading }}>
      {children}
    </CartContext.Provider>
  );
}
