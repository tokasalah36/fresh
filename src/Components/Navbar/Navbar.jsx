
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
export default function Navbar() {
  const { cart } = useContext(CartContext);
  useEffect(() => {
    cart
  }, [])
  const [toggle, setToggle] = useState(true);
  const { userLogin, setUserLogin } = useContext(UserContext);



  function logout() {
    setUserLogin(null);
    localStorage.removeItem("userToken");
  }

  function toggleNav() {
    setToggle(!toggle);
  }



  return (
    <>
      <nav className="bg-gray-100  z-50 fixed top-0 inset-x-0 py-1 text-center capitalize">
        <div className="container   flex flex-col md:flex-row justify-around  w-full  items-center text-gray-900">


          <div className="flex  md:justify-around justify-evenly items-center flex-row  w-full md:w-fit md:block py-2">
            <img src={logo} width={160} alt="" />
            <div
              onClick={() => {
                toggleNav();
              }}
              className="cursor-pointer md:hidden">
            
              <i className=" fa-solid fa-bars"></i>
            </div>
          </div>


          <div>
            <ul
              className={`${toggle ? "hidden" : ""
                }  md:flex  space-x-8 flex-col items-center  md:flex-row `}
            >
              {userLogin !== null ? (
                <>
                  <li className="py-3 pe-3 font-bold ">
                    <NavLink to="">Home</NavLink>
                  </li>

                  <li className="py-3 pe-3 font-bold ">
                    <NavLink to="wishlist">wishList</NavLink>
                  </li>

                  <li className="py-3 pe-3 font-bold ">
                    <NavLink to="products">products</NavLink>
                  </li>
                  <li className="py-3 pe-3 font-bold ">
                    <NavLink to="categories">categories</NavLink>
                  </li>
                  <li className="py-3 pe-3  font-bold ">
                    <NavLink to="brands">brands</NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>



          <div >
            <ul
              className={`${toggle ? "hidden " : ""
                } md:flex items-center flex-col md:flex-row space-x-3`}
            >



              {userLogin ? (
                <>
                  <li className="py-2 relative ">
                    <NavLink to="cart"><i className="fa-solid fa-cart-shopping text-main py-2"></i>
                      <span className="text-dark pe-3 py-1 absolute left-1/5 top-[3px] -translate-x-1/5 ">{cart ? cart.numOfCartItems : 0}</span>
                    </NavLink>
                  </li>
                  <li className="py-3 pe-3  font-bold ">
                    <Link
                      to="login"
                      onClick={() => {
                        logout();
                      }}
                    >
                      LOGOUT
                    </Link>
                  </li>
                </>


              ) : (
                <>
                  <li className="ps-6 me-5 font-bold ">
                    <NavLink to="login">LOGIN</NavLink>
                  </li>
                  <li className="ps-6 me-5 font-bold  ">
                    <NavLink to="register">REGISTER</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
