import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
function SignUp() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, isLoading] = useState(true)
  const [repassword, setRepassword] = useState('')
  const [apiResponse, setApiResponse] = useState()
  const createUser = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    console.log(BASE_URL, '/user/register')
    const res = fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        firstname,
        lastname,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'hello sir')
        if (data.error) {
          toast.error(data.error)
        } else {
          toast.success('User registred successfull')
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('Something went wrong')
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== '' && password !== repassword) {
      toast.error('Password do not match ')
      return
    }

    if (
      firstname === '' ||
      lastname === '' ||
      username === '' ||
      password === '' ||
      email === ''
    ) {
      toast.error('Enter all details')
      return
    }
    createUser()
  }
  // console.log(username)
  // console.log(password)
  // console.log(firstname)
  // console.log(lastname)
  // console.log(email)

  // if(loading) return <div>Loading...</div>
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[35%] bg-gradient-to-r from-blue-500 to-purple-500 h-[600px] flex-col flex justify-center items-center rounded-xl select-none`}
    >
      <div className='flex flex-col gap-8'>
        <div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='firstname' className='text-white text-2xl'>
              FirstName:
            </Label>
            <Input
              id='firstname'
              placeholder='Enter your firstname'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='lastname' className='text-white text-2xl'>
              lastName:
            </Label>
            <Input
              id='lastname'
              placeholder='Enter your lastname'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='username' className='text-white text-2xl'>
              Username:
            </Label>
            <Input
              id='username'
              placeholder='Enter your username'
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='email' className='text-white text-2xl'>
              Email:
            </Label>
            <Input
              id='email'
              placeholder='Enter your email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='password' className='text-white text-2xl'>
              password:
            </Label>
            <Input
              id='password'
              placeholder='Enter your password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='w-full mb-4 flex justify-center items-center gap-1.5'>
            <Label htmlFor='re-password' className='text-white text-2xl'>
              Re-password:
            </Label>
            <Input
              id='re-password'
              placeholder='Enter your password'
              type='password'
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <Button
            variant={'secondary'}
            label={'SignUp'}
            size={'large'}
            type={'submit'}
          />
        </div>
      </div>
    </form>
  )
}

export default SignUp
