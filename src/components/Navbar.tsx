import { CirclePlus } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = ({ page }: { page: string }) => {
  const navigator = useNavigate();
  return (
    <nav className="w-full bg-[#0f172a] border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to={"http://localhost:5173/blogs"}>
          <div className="flex items-center gap-3 cursor-pointer select-none">

            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-xl"></div>

              <div className="relative flex z-10">
                <div className="w-3 h-5 bg-teal-400 rounded-l-md"></div>
                <div className="w-3 h-5 border border-white border-l-0 rounded-r-md"></div>
              </div>
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-white">Blog</span>
              <span className="text-teal-400">Base</span>
            </h1>
          </div>
        </Link>

        {/*Left side nfor nav */}
        {page === "editor" ? "" : (<div className='w-[25%] flex justify-evenly'>
          <Link to={"/edit"}>
            <button className='cursor-pointer inline-flex gap-1 bg-emerald-500 px-2 py-1 rounded-3xl font-light'>Add <CirclePlus strokeWidth={1} /></button>

          </Link>

          <button onClick={() => {
            localStorage.clear()
            navigator('/signup')
          }} className='cursor-pointer inline-flex gap-1 bg-red-500 px-2 py-1 rounded-3xl font-light'>Logout</button>


        </div>)}

      </div>
    </nav>
  )
}

export default Navbar