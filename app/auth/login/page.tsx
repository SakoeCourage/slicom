import React from 'react'
import Image from 'next/image'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'
function page() {
  return (
    <div className='login-page isolate flex items-center relative'>
      {/* <div className='gradient-bg z-[0] absolute top-[50%] bottom-[-5%] aspect-square overflow-hidden right-[-10%] w-[calc(min(30rem,60vh))]  rounded-full '></div> */}
      <div className=' z-10 p-2 lg:p-0 max-w-5xl flex flex-col  w-full mx-auto h-[calc(min(85vh,700px))]'>
        <Image className=" basis-11 object-contain" priority src="/images/slicomlogo.png" alt="slico-icon" width={150} height={100} quality={100} />
        <div className='flex grow '>
          <div className='basis-[60%] hidden md:block my-auto rounded-l-md overflow-hidden max-h-[90%] h-full isolate relative '>
            <div className='absolute inset-0 z-20 flex items-center justify-center h-full w-full'>
              <div className=' text-4xl font-bold add-ts text-[#FFFFF0] max-w-lg text-center mx-auto'>
                Welcome to the Motor Insurance Database Portal!
              </div>
            </div>
            <div className="absolute z-10 inset-0  bg-gradient-to-tr from-black via-orange-500 to-black opacity-[0.55]"></div>
            <Image className='absolute inset-0 h-full w-full object-cover' priority alt='' width={500} height={500} quality={100} src="/images/loginvehicle.jpg" />
          </div>
          <div className=' basis-full md:basis-[40%] h-full  items-center justify-center bg-white rounded-md '>
            <nav className='flex flex-col gap-4 items-center justify-center max-w-[20rem] mx-auto my-auto  h-full'>
              <nav className=' text-xl text-orange-700 mb-3 font-medium'>
                Sign In To Motor Insurance Database
              </nav>
              <Input className=' w-full' placeholder='example@email.com' label='Email' required />
              <Input className=' w-full' placeholder='password' label='Password' required />
              <Button className=' !bg-orange-400' size="full" >
                Sign In
              </Button >

              <nav className=' mt-3 text-sm text-gray-600'>
                Forgot Password?
              </nav>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page