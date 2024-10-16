import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <>
        <div className='Navbar_cont h-20 w-full font-gilroy flex items-center justify-between px-8 fixed z-[999]'>
            <div className='logo'>
                <h1 className="text-4xl font-semibold">Ochi</h1>
            </div>
            <div className='links flex gap-10'>
                {['Services','Our work','About us','Insights','Contact us'].map((item,index)=>(
                    <Link href='' key={index} className={`capitalize text-[1.8vh] font-medium tracking-wide ${index === 4 && "ml-32" }`}>{item}</Link> 
                ))}
            </div>
        </div>
    </>
  )
}

export default navbar