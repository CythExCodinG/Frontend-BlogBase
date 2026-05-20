import React, { useState } from 'react'
import { SignupInput } from 'common-medium'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    password: "",

  })

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}api/v1/user/${type === "signin" ? "signin" : "signup"
        }`, postInputs)

      const { jwt } = response.data
      console.log(jwt)
      localStorage.setItem("token", jwt)

      navigate("/blogs")
    } catch (error) {
      toast.error("Invalid output")
    }
  }


  return (

    <div className=' p-4 lg:w-1/2 m-5 rounded-2xl'>
      <div><Toaster /></div>
      <div className='title flex justify-center text-4xl font-bold'>
        {type === "signup" ? <>Create <pre className='title-playful'> Blog It </pre> Account</> : <>Login to <pre className='title-playful'> Blog It </pre> Account</>}
      </div>
      <div className='w-full mt-2'>
        {type === "signin" ? <><div className='w-fit mx-auto'>Don't have an account? <a className='underline' href="/signup">Sign Up</a></div></> : <><div className='w-fit mx-auto'>Already have an account? <a className='underline' href="/signin">Log In</a></div></>}
      </div>

      <div className='mt-2'>
        <label className='mt-4' htmlFor="email">Username</label>
        <input className=' email rounded-sm focus:border-blue-600   w-full p-2' type="text" placeholder='Enter username' onChange={(e) => {
          setPostInputs({
            ...postInputs,
            username: e.target.value
          })
        }} />
      </div>

      <div className='mt-2'>
        <label htmlFor="email">Password</label>
        <input className='email rounded-sm focus:border-blue-600 w-full p-2' type="password" placeholder='Enter password' onChange={(e) => {
          setPostInputs({
            ...postInputs,
            password: e.target.value
          })
        }} />
      </div>

      <input type="submit" className='submit-btn mx-auto block p-2 bg-gray-950 w-full text-white mt-3 hover:bg-gray-800 rounded-xl' onClick={sendRequest}></input>
    </div>
  )

}

export default Auth