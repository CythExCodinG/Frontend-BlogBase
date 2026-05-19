import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import '../src/bones/registry'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App