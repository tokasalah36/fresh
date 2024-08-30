
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import { Formik, useFormik, validateYupSchema } from 'formik'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const [errorApi, setErrorApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUserLogin } = useContext(UserContext)

  let validationSchema = Yup.object().shape({
    name: Yup.string().min(3, ' min is 3').max(10, ' max is 10').required(' NAME IS REQUIRED '),
    email: Yup.string().email('not vaild').required('EMAIL IS REQUIRED '),
    password: Yup.string().matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{3,})/, 'password must contain alphabetical character and  numeric character').required("PASSWORD IS REQUIRED"),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'repassword must match password').required('repassword is requierd'),
    phone: Yup.string().matches(/^(002|\+2)?01[0125][0-9]{8}$/, 'phone number must be in egypt').required('PHONE IS REQUIRED ')
  })

  let navigate = useNavigate()
  async function register(values) {

    setLoading(true)

    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)

      localStorage.setItem('userToken', data.token)

      setUserLogin(data.token)

      navigate('/');
      console.log(data);

    } catch (error) {
      console.log(error.response.data.message);
      setErrorApi(error.response.data.message);
      setLoading(false)
    }

  }

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''

    }, validationSchema: validationSchema
    , onSubmit: register
  })


  return <>

<h2 className="font-bold text-center text-4xl py-9 text-fa-bold text-main underline">register</h2>




    <form className="md:w-2/2 w-[80%] mx-auto mb-5 " onSubmit={formik.handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="name" id="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-700 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-500 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">NAME ADDRESS</label>
      </div>
      {formik.errors.name && formik.touched.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.name}
      </div>}

      <div className="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-700 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-500 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">EMAIL ADDRESS </label>
      </div>
      {formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.email}
      </div>}

      <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="password" id="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-700 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " />
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-500 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> PASSWORD ADDRESS</label>
      </div>
      {formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.password}
      </div>}

      <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="rePassword" id="repassword" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-700 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " />
        <label htmlFor="repassword" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-500 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">REPASSWORD ADDRESS </label>
      </div>
      {formik.errors.rePassword && formik.touched.rePassword && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.rePassword}
      </div>}

      <div className="relative z-0 w-full mb-5 group">
        <input type="tel" name="phone" id="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-500 appearance-none  dark:border-gray-700 dark:focus:border-green-700 focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-focus:dark:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">PHONE ADDRESS </label>
      </div>
      {formik.errors.phone && formik.touched.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.phone}
      </div>}

      {errorApi && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {errorApi}
      </div>}


      {loading ? <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <i className='fas fa-spinner fa-spin-pulse'></i>
      </button> : <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
      }
    </form>


  </>
}
//*************************************register end********************************************* */