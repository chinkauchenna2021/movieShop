'use client'

import React, { useState, useEffect } from 'react'
import Inputs from '../component/Inputs'
import Title from '../component/Title'
import Button from '../component/Button'
import OnboardingLink from '../component/OnboardingLink'
import prisma from '@/app/mailPage/lib/prismaGlobal'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import useLocalStorage from "use-local-storage";
import 'react-toastify/dist/ReactToastify.css';

function FormLayout() {
    const GET_USER_LOGIN = "get_users_Login"

    const router = useRouter();

    const [userLogin, setUserLogin] = useLocalStorage(GET_USER_LOGIN,"");


    useEffect(() => {
        if (JSON.parse(userLogin) == "") {
            router.push("/onBoarding");
        }

    }, [userLogin])

    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    })

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {

            let loginStatus = await fetch("http://localhost:3000/api/signinController",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any additional headers if needed
                    },
                    body: JSON.stringify({ email: logindata.email, password: logindata.password }),
                }
            )

            let resp = await loginStatus.json()

            if (resp) {
                console.log("login successfully")
                setUserLogin(JSON.stringify(resp))
                router.push("/mailPage")
            } else {
                console.log("failed to login, user not found ")
            }


        } catch (err) {
            console.log("An Error occured")
        }

    }


    return (
        <form onSubmit={(e) => handleLogin(e)} className='w-full lg:w-[500px] space-y-3 px-5 py-4  my-10  md:mx-auto   border border-1 outline-sm  flex flex-col ' >
            <Title formtitle='Login Page' />
            <Inputs required pattern='[a-zA-Z0-9.]{5,30}@(gmail|hotmail|yahoo).(com|co.uk)' type='email' onChange={(e) => setLogindata((data) => ({ ...data, email: e.target.value }))} className='w-full font-md text-black px-2 lg:w-full border outline-0 border-1 border-slate-100 h-[35px]' placeholder='Enter Email' />
            <Inputs required type='password' onChange={(e) => setLogindata((data) => ({ ...data, password: e.target.value }))} className='w-full  font-md text-black px-2 lg:w-full border border-1 outline-0 border-slate-100 h-[35px]' placeholder='Enter Password' />
            <OnboardingLink link="/onBoarding/signup" mainTitle={"Not registered"} linkTitle='Signup' />
            <Button buttonTitle='Login' className='w-full lg:w-full bg-orange-400 text-white rounded-sm  h-[38px]' />
            <ToastContainer />
        </form>
    )
}

export default FormLayout