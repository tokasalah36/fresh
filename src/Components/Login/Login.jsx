import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../Context/UserContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const { setUserLogin } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState(null)
  let navigate = useNavigate()
  async function login(values) {
    try {
      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      console.log(data);
      localStorage.setItem('userToken', data.token)
      setUserLogin(data.token)
      navigate('/')

    } catch (error) {
      setLoading(false)
      console.log(error.response.data.message);
      setLoginError(error.response.data.message);
    }
  }
  let validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  })

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''

    }, validationSchema: validationSchema

    , onSubmit: login
  })



  return <>

<h1 className="font-bold text-center text-4xl py-9 text-fa-bold text-main underline">Login Now</h1>


    <form className="md:w-2/2 w-[80%] mx-auto my-10  " onSubmit={formik.handleSubmit}>
      <div className="relative z-0 w-full mb-7 group">
        <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-800 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-800 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Enter Your Email :</label>
      </div>


      <div className="relative z-0 w-full mb-5 group">
        <input type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-800 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-800 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-800 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Enter Your Password</label>
      </div>




      {loginError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-700" role="alert">
        {loginError}
      </div>}


      <div className="md:flex items-center justify-between">
  {loading ? (
    <button
      type="submit"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 order-2 md:order-1"
    >
      <i className="fas fa-spinner fa-spin-pulse"></i>
    </button>
  ) : (
    <button
      type="submit"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 order-2 md:order-1"
    >
      Login
    </button>
  )}
  <Link to="/forgetpassword" className="order-1 md:order-2 md:mr-auto">
    <p className="py-2 md:py-0 text-2xl font-bold text-main">forget your password?</p>
  </Link>
</div>


    </form>
  </>
}
