"use client";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";

export default function SelectRolePage() {
  const { selectRole } = useUser();
  const router = useRouter();

  const handleSelect = (r) => {
    selectRole(r);
    router.push(`/${r}`);
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl mb-4">Select Your Role</h1>
      <button
        onClick={() => handleSelect("planner")}
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
      >
        Event Planner
      </button>
      <button
        onClick={() => handleSelect("manager")}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        Artist Manager
      </button>
    </div>
  );
}
