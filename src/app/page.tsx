import Image from 'next/image'
import MailPage from "@/app/mailPage/page"
import Login from './onBoarding/page'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         {/* <MailPage />     */}
          <Login /> 
         
    </main>
  )
}
