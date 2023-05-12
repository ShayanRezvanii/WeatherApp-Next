import React from 'react'
import Image from 'next/image'
import spinner from '../public/spinner.gif'
const Spinner = () => {
  return (
    <>
        <Image src={spinner} alt='spinner' className='w-[200px] m-auto block' />
    </>
  )
}

export default Spinner