"use client";

import { useState } from 'react'
import Blogs from "../../Components/Blogs"
import Pagination from '@/Components/Pagination'

function Blogs() {
  const [startIndex,setStartIndex] = useState(1)
  const [finalPage,setFinalPage] = useState(Infinity)

  return (
    <div className='bg-slate-800 p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6'>
        <Blogs startIndex={startIndex} setFinalPage={setFinalPage} />
      </div>
      <Pagination startIndex={startIndex} setStartIndex={setStartIndex} finalPage={finalPage} />
    </div>
  )
}

export default Blogs