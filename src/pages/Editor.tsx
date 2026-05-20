import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
const Editor = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <Navbar page="editor" />
      <div className='flex gap-6 flex-col justify-center items-center mx-auto mt-10'>
        <div className='w-[80%]'>
          <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading rounded-base focus:ring-slate-700 focus:border-slate-700  block w-full px-3.5 py-3 font-light shadow-xs placeholder:text-slate-900 text-2xl tracking-tight" placeholder="Title" required onChange={(e) => {
            setTitle(e.target.value)
            console.log(title)
          }} />
        </div>

        <div className='w-[80%]'>
          <form>
            <div className="w-full mb-4 border border-default-medium rounded-base bg-neutral-secondary-medium shadow-xs">
              <div className="px-4 py-2 bg-neutral-secondary-medium rounded-t-base">
                <textarea id="comment" rows={10} className=" tracking-tight text-sn block w-full px-0 text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body" placeholder="Write your content...." required onChange={(e) => {
                  setContent(e.target.value)
                  console.log(content)

                }}></textarea>
              </div>
              <div className="flex items-center px-3 py-2 border-t border-default-medium">
                <button onClick={async (e) => {
                  e.preventDefault()
                  const response = await axios.post(`${BACKEND_URL}api/v1/blog`, {
                    title: title,
                    content: content
                  }, {
                    headers: {
                      Authorization: localStorage.getItem("token")
                    }
                  })
                  console.log(response)
                  navigate(`/blogs/${response.data.id}`)
                }} type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Publish</button>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Editor

