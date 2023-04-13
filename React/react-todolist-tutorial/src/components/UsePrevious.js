import { useRef, useEffect } from 'react';

// Getting previous state
const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

export default usePrevious;
