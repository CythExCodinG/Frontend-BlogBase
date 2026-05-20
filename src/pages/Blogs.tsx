import BlogsCard from '../components/BlogsCard'
import Navbar from '../components/Navbar'
import useBlogs from '../Hooks'

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (

      <div role="status" className="w-full flex flex-col justify-center items-center animate-pulse">

        <div className="px-3 mx-auto py-2 border-b-slate-600  border-b w-[75%]">
          <div className='w-full gap-2 flex justify-start items-center'>
            <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
          </div>
          <div>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
          </div>
          <div className='text-10xs text-slate-800'>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>

          </div>
          <div className='text-2xs text-slate-700 bg-slate-200 w-fit m-1 px-2 my-2 rounded-4xl'>
            <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
          </div>

        </div>
        <div className="px-3 mx-auto py-2 border-b-slate-600  border-b w-[75%]">
          <div className='w-full gap-2 flex justify-start items-center'>
            <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
          </div>
          <div>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
          </div>
          <div className='text-10xs text-slate-800'>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>

          </div>
          <div className='text-2xs text-slate-700 bg-slate-200 w-fit m-1 px-2 my-2 rounded-4xl'>
            <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
          </div>

        </div>
        <div className="px-3 mx-auto py-2 border-b-slate-600  border-b w-[75%]">
          <div className='w-full gap-2 flex justify-start items-center'>
            <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
          </div>
          <div>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
          </div>
          <div className='text-10xs text-slate-800'>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>

          </div>
          <div className='text-2xs text-slate-700 bg-slate-200 w-fit m-1 px-2 my-2 rounded-4xl'>
            <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
          </div>

        </div>
        <div className="px-3 mx-auto py-2 border-b-slate-600  border-b w-[75%]">
          <div className='w-full gap-2 flex justify-start items-center'>
            <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
          </div>
          <div>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
          </div>
          <div className='text-10xs text-slate-800'>
            <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>

          </div>
          <div className='text-2xs text-slate-700 bg-slate-200 w-fit m-1 px-2 my-2 rounded-4xl'>
            <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
          </div>

        </div>

      </div>


    )
  }
  return (<>
    <Navbar page='blog' />

    <div className='mt-2'>
      {blogs.map(blog => <BlogsCard
        title={blog.title}
        id={blog.id}
        author={blog.author.email}
        content={blog.content}
        publishedDate='24th feb 2026'
      />)}
    </div>

  </>
  )
}

export default Blogs