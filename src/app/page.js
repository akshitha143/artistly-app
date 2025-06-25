"use client";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const {role,loading} = useUser();

  useEffect(() => {
    if(!loading){
      if(role=="manager"){
        router.replace("/manager");
      }
      else if(role=="planner"){
        router.replace("/planner");
      }
      else{
        router.replace("/signin");
      }
    }
  }, [router,role,loading]);

  return (
    <>
      <head>
        <title>Artistly</title>
        <meta name="description" content="Welcome to Artistly, your platform for managing artists and events." />
        <meta name="keywords" content="artists, management, events, planner, manager" />
      </head>
      {null}
    </>
  );

}
