'use client'
import React from 'react'
import { motion } from 'framer-motion'


const marquee = () => {
  return (
    <>
        <div className='w-full h-[50vh] bg-[#004D43] py-10 rounded-t-3xl'>
            <div className='border-t-[1px] border-b-[1px] border-zinc-400 flex gap-10 whitespace-nowrap overflow-hidden mt-16 tracking-tighter leading-none text-white uppercase font-gilroy font-semibold'>
            <motion.div
        className="flex gap-10"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear"
        }}
      >
  
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1> 
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1>
        <h1 className='text-[35vh]'>we are ochi</h1>
      </motion.div>
    </div>
            </div>
        
    </>
  )
}

export default marquee