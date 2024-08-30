
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import axios from "axios";
export default function Categories() {
  const [subCategory, setSubCategory] = useState([]);
  const [categorys, setCategorys] = useState([]);


  async function getSubCategory(id) {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      console.log(data);
      setSubCategory(data.data)

    } catch (error) {
      console.log(error);

    }
  }

  async function getCategory() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      setCategorys(data.data)
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getCategory()
  }, [])
  return <>


    {categorys.length ? <div className="md:flex flex-wrap  w-[80%] mx-auto  ">
      {categorys.map((category) =>
        <div key={category._id} className="p-8 my-4  md:w-1/4">
          <Link>
            <div onClick={() => getSubCategory(category._id)} className=" transition-all duration-400 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-800">

              <img className=" border-b-2 rounded-t-lg w-full h-[250px]  " src={category.image} alt={category.name} />

              <div className="p-4">

                <h5 className="tracking-tight text-main dark:text-white text-xl text-center font-bold ">{category.name}</h5>
              </div>
            </div>
          </Link>
        </div>)}

    </div> : <div className="flex  Py-14 justify-center ">
      <LoadingScreen />
    </div>}



    {subCategory.length ? <div className="my-11">

      <div className="text-main text-center font-bold text-3xl my-5 ">*HOME CATEGORIES*</div>


      {subCategory.length ? <div className="  w-[80%] mx-auto  md:flex md:flex-wrap   ">
        {subCategory.map((category) =>
          <div key={category._id} className=" md:w-1/2  py-2 px-8 my-3 ">
            <Link>
              <div className=" transition-all duration-400 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
                <div className="p-5">
                  <h5 className="tracking-tight text-black mb-2 text-2xl text-center font-bold  dark:text-white">{category.name}</h5>
                </div>
              </div>
            </Link>
          </div>)}
      </div> : <div className="py-14 flex justify-center ">
        <LoadingScreen />
      </div>}
    </div> : ''}
  </>;
}

