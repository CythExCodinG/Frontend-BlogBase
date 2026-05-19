import React from 'react'
import BlogView from '../components/BlogView'
import { useBlog } from '../Hooks'
import { useParams } from 'react-router-dom'


const Blog = () => {
  const param = useParams();
  const id = param.id
  const { loading, blog } = useBlog({ id: id });
  if (loading) {
    return <div>
      Loding.....
    </div>
  }
  return (
    <div className='w-full'>
      <BlogView
        publishedDate='12 feb'
        author={blog.author.email}
        title={blog.title}
        content={blog.content}
      />
    </div>
  )
}

export default Blog