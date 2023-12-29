'use client'

import React, { useState } from 'react'
import OnboardingLink from '../component/OnboardingLink'
import Inputs from '../component/Inputs'
import Title from '../component/Title'
import Button from '../component/Button'
import { useRouter } from 'next/navigation'
import { ToastContainer , toast} from 'react-toastify';
import useLocalStorage from 'use-local-storage'
import 'react-toastify/dist/ReactToastify.css';


function SignupPage() {

    const router = useRouter();
    const [signupdata , setSignupdata] = useState({
        name:"",
        email:"",
        password:""
    })
    

    
    async function handleSignup(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try{

               let signupResponse = await fetch("http://localhost:3000/api/signupController",
               {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Add any additional headers if needed
                },
                body: JSON.stringify({name:signupdata.name,email:signupdata.email , password:signupdata.password}),
               }
               )
               
               let resp = await signupResponse.json()

             if(resp.response.id != undefined){
                 router.push("/onBoarding")
                 toast(resp.message)
             }else{
                console.log("log okay")
                toast("user already exist")
             }
        //     const signupStatus = await prisma?.author.create({
        //         data:{
        //             name:signupdata?.name,
        //                email:signupdata?.email,
        //                password:signupdata?.password,
        //            }
        //         })
                
        //                 if(signupStatus){
        //                     console.log("Signup successfully")
        //                     router.push("/onBoarding")
        //                 }else{
        //                     console.log("failed to Signup")
        //                 }
        }catch(err){
          toast("An Error occured")
        }
    
    }
    


  return (
    <form onSubmit={(e)=>handleSignup(e)} className='w-full lg:w-[500px] space-y-3 px-5 py-4 my-10 md:mx-auto  border border-1 outline-sm  flex flex-col ' >
    <Title  formtitle='Signup Page'  />
    <Inputs type='text'  onChange={(e)=>setSignupdata((data)=>({...data , name:e.target.value}))}   className='w-full font-sm text-black px-2 lg:w-full border outline-0 border-1 border-slate-100 h-[35px]' placeholder='Enter Fullname' />
    <Inputs type='email' pattern='[a-zA-Z0-9.]{5,30}@(gmail|hotmail|yahoo).(com|co.uk)'  onChange={(e)=>setSignupdata((data)=>({...data , email:e.target.value}))}   className='w-full font-sm text-black px-2 lg:w-full border outline-0 border-1 border-slate-100 h-[35px]' placeholder='Enter Email' />
    <Inputs type='password'  onChange={(e)=>setSignupdata((data)=>({...data , password:e.target.value}))}  className='w-full  font-sm text-black px-2 lg:w-full border border-1 outline-0 border-slate-100 h-[35px]' placeholder='Enter Password' />
     <OnboardingLink   link="/onBoarding" mainTitle={"registered already "} linkTitle='Login'/>
    <Button buttonTitle='Signup' className='w-full lg:w-full  text-black rounded-sm  h-[38px] hover:bg-orange-400 hover:text-white transition-all border border-1 border-orange-200'  />     
    <ToastContainer /> 
</form>
  )
}

export default SignupPage