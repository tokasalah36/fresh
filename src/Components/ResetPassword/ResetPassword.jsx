import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { UserContext } from '../../Context/UserContext'

export default function ResetPassword() {

    const { setUserLogin } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState(null)
    let navigate = useNavigate()
    async function resetPassword(values) {
        try {
            setLoading(true)
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword
`, values)
            console.log(data);
            localStorage.setItem('userToken', data.token)
            setUserLogin(data.token)
            navigate('/')

        } catch (error) {
            setLoading(false)
            console.log(error);

        }

    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('not vaild').required('email is required'),
        newPassword: Yup.string().matches(/^[A-Z]\w{5,10}$/, 'password not vaild').required("password is required"),
    })





    let formik = useFormik({
        initialValues: {
            email: '',
            newPassword: '',

        }, validationSchema: validationSchema

        , onSubmit: resetPassword
    })


    return <>

        <h1 className="text-3xl text-center py-6 text-fa-bold text-green-700">RESET PASSWORD</h1>


        <form className="md:w-2/2 w-[80%] my-8 mx-auto" onSubmit={formik.handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">ENTER YOUR EMAIL ADDRESS </label>
            </div>


            <div className="relative z-0 w-full mb-5 group">
                <input type="password" value={formik.values.newPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} name="newPassword" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">ENTER YOUR EMAIL PASSWORD</label>
            </div>
            {formik.errors.newPassword && formik.touched.newPassword && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {formik.errors.newPassword}
            </div>}




            {loginError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {loginError}
            </div>}




            <div className='flex items-center '>
                {loading ? <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <i className='fas fa-spinner fa-spin-pulse'></i>
                </button> : <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
                }
            </div>


        </form>

    </>
}
