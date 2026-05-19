import React from 'react'
import BlogsCard from '../components/BlogsCard'
import Navbar from '../components/Navbar'
import useBlogs from '../Hooks'
import { Link } from 'react-router-dom'
import { Skeleton } from 'boneyard-js/react'

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (<>
    <Navbar />
    <Skeleton name='blog-page' loading={false}>
      <div className='mt-2'>
        {blogs.map(blog => <BlogsCard
          id={blog.id}
          title={blog.title}
          author={blog.author.email}
          content={blog.content}
          publishedDate='24th feb 2026'
        />)}
      </div>
    </Skeleton>
  </>
  )
}

export default Blogs