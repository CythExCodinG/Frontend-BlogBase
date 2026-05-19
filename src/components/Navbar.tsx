import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f172a] border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none">

          {/* Logo Icon */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-xl"></div>

            {/* Open Book / Chat Bubble */}
            <div className="relative flex z-10">
              <div className="w-3 h-5 bg-teal-400 rounded-l-md"></div>
              <div className="w-3 h-5 border border-white border-l-0 rounded-r-md"></div>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">Blog</span>
            <span className="text-teal-400">Base</span>
          </h1>
        </div>

      </div>
    </nav>
  )
}

export default Navbar