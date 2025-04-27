//global custom 404 page
import React from 'react'
import Image from 'next/image'
import notfoundimg from "./notfound.png"

const page = () => {
  return (
<>
    <div className="flex flex-col items-center justify-center h-screen">
        <Image src={notfoundimg} width={0} height={0} className='h-full w-full' alt="Not Found" />
    </div>
</>
  )
}

export default page