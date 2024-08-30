import { CartContext } from '../../Context/CartContext'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import React, { useContext } from 'react'
import { useFormik } from 'formik'
export default function Checkout() {
    const { checkOut } = useContext(CartContext)
    let formik = useFormik({
        initialValues: {
            details: "",
            phone: "",
            city: "",
        }, onSubmit: checkOut
    })

    return (
        <>
            <div className='py-9 '>
                <h1 className='text-center font-bold text-main text-3xl'>CHECK OUT</h1>



                {checkOut ? <form onSubmit={formik.handleSubmit} className="w-3/2 mx-auto my-10">
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-1000 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder="  " required />
                        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">DETAILS :</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-1000 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">ENTER YOUR PHONE :</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-1000 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">CITY :</label>
                    </div>


                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </form> : <LoadingScreen />}
            </div>
        </>
    )
}
