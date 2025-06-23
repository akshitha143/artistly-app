"use client";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleGuard({ allowedRoles, children }) {
  const { role,loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if(!loading){
        if (!role) {
        router.push("/signin");
        } else if (!allowedRoles.includes(role)) {
        router.push("/unauthorized");
        }
    }
  }, [role, allowedRoles, router,loading]);

  if (!role || !allowedRoles.includes(role)) {
    return null; 
  }

  return children;
}
