import { useState } from 'react';

const useCriarTurma = () => {
  const [state, setState] = useState(null);
  // Add your business logic here
  return { state, setState };
};

export default useCriarTurma;
