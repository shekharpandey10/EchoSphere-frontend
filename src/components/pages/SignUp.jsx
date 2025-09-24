import React from 'react'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
function SignUp() {
  return (
    <div
      className={`w-[35%] bg-gradient-to-r from-blue-500 to-purple-500 h-[600px] flex-col flex justify-center items-center rounded-xl select-none`}
    >
      <div className='flex flex-col gap-8'>
        <div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='firstname' className='text-white text-2xl'>
              FirstName:
            </Label>
            <Input id='firstname' placeholder='Enter your firstname' />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='lastname' className='text-white text-2xl'>
              lastName:
            </Label>
            <Input id='lastname' placeholder='Enter your lastname' />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='username' className='text-white text-2xl'>
              Username:
            </Label>
            <Input id='username' placeholder='Enter your username' />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='email' className='text-white text-2xl'>
              Email:
            </Label>
            <Input id='email' placeholder='Enter your email' type='email' />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='password' className='text-white text-2xl'>
              password:
            </Label>
            <Input
              id='password'
              placeholder='Enter your password'
              type='password'
            />
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <Button variant={'secondary'} label={'SignUp'} size={'large'} />
        </div>
      </div>
    </div>
  )
}

export default SignUp
