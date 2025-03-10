import { useState, useEffect } from 'react';

// A hook that persists state to localStorage
function usePersistedState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Create state based on the persisted value or initial value
  const [state, setState] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update local storage when the state changes
  useEffect(() => {
    try {
      // Save state to localStorage
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState; 