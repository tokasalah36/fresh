
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Brands() {
  const [brands, setBrands] = useState([]);
  async function getBrands() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
      console.log(data.data);
      setBrands(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBrands()

  }, [])
  return <>
    <div className='my-9'>
    <h1 className="font-bold text-center text-4xl py-9 text-fa-bold text-main underline">Brand</h1>


      {brands.length ? <div className="md:flex mx-auto flex-wrap   w-[85%] ">
        {brands.map((brand) =>
          <div key={brand._id} className="md:w-1/2 lg:w-1/3 xl:w-1/4  p-8 my-3  ">
            <Link>
              <div className=" transition-all duration-400 hover:shadow-md hover:shadow-[#0aad0a] bg-white border border-gray-450 rounded-lg shadow dark:bg-gray-1000 dark:border-gray-800">

                <img className="rounded-t-lg  " src={brand.image} alt={brand.name} />

                <div className="p-5">

                  <h5 className="text-center font-bold tracking-tight text-black mb-2 text-5xl md:text-2xl dark:text-white">{brand.name}</h5>
                </div>
              </div>
            </Link>
          </div>)}
      </div> : <div className="flex justify-center py-14">
        <LoadingScreen />
      </div>}
    </div>
  </>
}
