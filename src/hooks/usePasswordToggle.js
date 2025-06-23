"use client";
import { useState } from "react";

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  const inputType = visible ? "text" : "password";

  return { visible, toggle, inputType };
}