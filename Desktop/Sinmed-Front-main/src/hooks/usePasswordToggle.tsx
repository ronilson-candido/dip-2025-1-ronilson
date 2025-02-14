"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;
  const toggleVisibility = () =>
    setVisible((prevVisibility) => !prevVisibility);
  const InputType = visible ? "text" : "password";

  return { InputType, Icon, toggleVisibility };
};

export default usePasswordToggle;
