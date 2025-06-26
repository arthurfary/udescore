import { useState } from 'react';

const useInput = () => {
  const [state, setState] = useState(null);
  // Add your business logic here
  return { state, setState };
};

export default useInput;
