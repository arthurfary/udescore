import { useState } from "react";

const useLogin = () => {
  const [activeForm, setActiveForm] = useState<"login" | "newUser" | null>(
    null
  );

  // Add your business logic here
  return { activeForm, setActiveForm };
};

export default useLogin;
