/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../components/HBOProvider"
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { Router } from "next/dist/client/router";
import { useRouter } from "next/router";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()
useEffect(() =>{
  const loggedIn = false;
  if(loggedIn === false) {
    router.push('/create')
  }
}, [])
  return (
   <div>
     <Login/>
    </div>
     
  
  )
}
