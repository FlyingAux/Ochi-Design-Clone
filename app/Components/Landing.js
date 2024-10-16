'use client'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  return (
    <>
        <div className='h-screen w-full pt-1'>
            <div className='textStructure mt-52 px-20 flex flex-col'>
                <div className='masker_1'>
                    <h1 className='uppercase font-gilroy font-semibold text-[14.6vh] leading-[6.2vw] tracking-tighter'>We create</h1>
                </div>
                <div className='masker_2 flex justify-center items-center w-fit'>
                    <div className='ochi_card h-24 w-40 bg-zinc-400 rounded-md'></div>
                    <h1 className='uppercase font-gilroy font-semibold text-[14.6vh] leading-[6.2vw] tracking-tighter'>eye-opening</h1>
                </div>
                <div className='masker_3'>
                    <h1 className='uppercase font-gilroy font-semibold text-[14.6vh] leading-[6.2vw] tracking-tighter'>presentations</h1>
                </div>
            </div>
            <div className='border-t-[1px] border-zinc-400 mt-32 flex justify-between px-8'>
              <h1 className='text-xl font-gilroy mt-8'>For public and private companies</h1>
              <h1 className='text-xl font-gilroy mt-8'>From the first pitch to IPO</h1>
              <div className='flex items-center justify-center gap-4 mt-8'>
                <h1 className='text-xl font-gilroy border-[1px] py-3 px-8 border-zinc-800 rounded-full'>start the project</h1>
                <h1 className='text-xl font-gilroy font-semibold border-[1px] p-3 rounded-full border-zinc-800 h-10 w-10 flex items-center justify-center'><MdArrowOutward /></h1>
              </div>
            </div>
        </div>
    </>
  )
}

export default Landing