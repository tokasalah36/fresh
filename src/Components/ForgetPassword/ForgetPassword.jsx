import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
export default function ForgetPassword() {

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    
    let navigate = useNavigate()

    async function sendCode(values) {
        setLoading(true)
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values)
            console.log(data);

            setMessage(data.message)
            navigate('/VerifyCode')
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }
    let formik = useFormik({
        initialValues: {
            email: ``
        }, onSubmit: sendCode
    })



    return (<>
        <h1 className='py-8 text-center text-3xl font-bold text-main'>please enter your Email</h1>

        <form onSubmit={formik.handleSubmit} className="md:w-2/2 w-[80%] mx-auto">
            <div className="relative z-0 w-full mb-4 group">
                <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-800 dark:focus:border-green-600 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-800 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email address</label>
            </div>

            <div className='flex items-center '>
                {loading ? <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <i className='fas fa-spinner fa-spin-pulse'></i>
                </button> :
                    <>
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
                    </>
                }
  </div>   
  </form>
    </>
    )
}
