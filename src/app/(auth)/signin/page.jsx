"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../..//components/ui/input";
import { Button } from "../../..//components/ui/button";
import { Label } from "../../..//components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { useUser } from "../../../context/UserContext";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function SignInPage() {
  const { login } = useUser();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const { visible, toggle, inputType } = usePasswordToggle();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !selectedRole) {
      alert("Please fill all fields");
      return;
    }
    login(username, selectedRole);
    router.push(selectedRole === "manager" ? "/manager" : "/planner");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2 md:p-4">
      <Card className="w-full max-w-md border-none md:border shadow-none md:shadow-lg md:bg-white ">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent className={cn("px-2 md:px-6")}>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <Label className={cn("my-2")} htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Label className={cn("my-2")} htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={inputType}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={toggle}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {visible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <Label className={cn("my-2")}>Select Role</Label>
              <Select onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planner">Event Planner</SelectItem>
                  <SelectItem value="manager">Artist Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full mt-4">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
