import { useState } from 'react';

const useWelcome = () => {
  const [state, setState] = useState(null);
  // Add your business logic here
  return { state, setState };
};

export default useWelcome;
