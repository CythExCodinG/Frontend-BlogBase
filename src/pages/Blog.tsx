import BlogView from '../components/BlogView'
import { useBlog } from '../Hooks'
import { useParams } from 'react-router-dom'


const Blog = () => {
  const { id } = useParams<{ id: string }>()

  const { loading, blog } = useBlog({ id: id || "" });
  if (loading || !blog) {
    return <div>
      Loding..
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