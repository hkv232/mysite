import React from 'react'
import Link from 'next/link'


const Logo = () => {
 return (
    <div className='flex items-center justify-center mt-2'>

      <Link href='/' className='w-14 h-14 flex items-center justify-center'>
        <img src='/images/profile/peacock-logo.png'/>
      </Link>
    </div>
 )
}

export default Logo