import Quotes from '../components/Quotes'
import Auth from '../components/Auth'



const Signup = () => {
  return (
    <div className='bg-red-500 flex h-screen'>
      <div className='md:w-1/2 w-full flex bg-blue-50 items-center justify-center'>
        <Auth type='signup' />
      </div>
      <div className='hidden md:flex lg:w-1/2 justify-center items-center bg-gray-400 p-4 mx-auto'>
        <Quotes quotes='"The customer service we recieved was exceptionally well and out of this world"'
          author="Jmorgan"
        />
      </div>
    </div>
  )
}

export default Signup