import React from 'react'
import { Avatar } from './BlogsCard'
import Navbar from './Navbar'

interface BlogcardProps {
  publishedDate: string,
  author: string,
  content: string,
  title: string
}

const BlogView = ({
  publishedDate,
  author,
  content,
  title
}: BlogcardProps) => {
  return (<>
    <Navbar />
    <div className='grid grid-cols-12 px-4'>
      <div className='col-span-8 p-2'>
        <div>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <h3 className='text-slate-700 text-sm'>Posted on : Date</h3>
        </div>
        <div>
          <p className='text-slate-800 tracking-tight'>{content}</p>
        </div>
      </div>
      <div className='col-span-4 p-4 flex flex-col  gap-2 items-start'>
        <h6 className='justify-self-start font-bold'>Author</h6>
        <div className='flex gap-2 justify-center items-center'>
          <Avatar name='rohit' />
          <p>{author}</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default BlogView