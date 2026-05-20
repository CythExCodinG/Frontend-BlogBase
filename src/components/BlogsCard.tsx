import { Link } from 'react-router-dom'

interface BlogcardProps {
  id: string,
  publishedDate: string,
  author: string,
  content: string,
  title: string
}

const BlogsCard = ({
  id,
  publishedDate,
  author,
  content,
  title
}: BlogcardProps) => {

  return (<>
    <Link to={`http://localhost:5173/blogs/${id}`}>
      <div className="px-3 mx-auto py-2 border-b-slate-600  border-b w-[75%]">
        <div className='w-full gap-2 flex justify-start items-center'>
          <Avatar name={author} /><p>{author}</p>•<p>{publishedDate}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">{title}</h2>
        </div>
        <div className='text-10xs text-slate-800'>
          {content.slice(0, 100) + "....."}
        </div>
        <div className='text-2xs text-slate-700 bg-slate-200 w-fit m-1 px-2 my-2 rounded-4xl'>
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>

      </div>
    </Link>
  </>
  )
}

export function Avatar({ name }: { name: string }) {
  return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-600 rounded-full">
    <span className="font-light text-emerald-400">{name.slice(0, 2).toUpperCase()}</span>
  </div>
}
export default BlogsCard