
interface QuotesProps {
  quotes: string
  author: string
}

const Quotes = ({ quotes, author }: QuotesProps) => {
  return (
    <div className='p-4 lg:w-3/4  mx-auto'>
      <div className='font-bold lg:text-4xl md:text-3xl sm:text-xl'>{quotes}</div>
      <div className='text-gray-800 text-xl font-bold'>{author}</div>
      <span className='text-gray-700 text-sm'>Ceo</span>
    </div>
  )
}

export default Quotes