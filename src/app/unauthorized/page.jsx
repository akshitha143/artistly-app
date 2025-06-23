"use client";
import { useRouter } from "next/navigation";
export default function UnauthorizedPage() {
  const route = useRouter();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-red-50 p-8 text-center">
      <h1 className="text-5xl text-red-500 font-semibold mb-4">Unauthorized</h1>
      <p className="text-base text-black">You don't have permission to view this page.</p>
      <button onClick={()=>{route.push("/signin")}} className="w-auto h-auto text-white font-semibold px-8 py-2 bg-red-500 rounded-full mt-4 hover:cursor-pointer">Signin</button>
    </div>
  );
}
