import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useDebouncedStateCallback<StateType>(
  defaultState: StateType,
  delay: number,
  callback: () => void
) {
  const [state, setState] = useState(defaultState);

  const debouncedCallback = useDebouncedCallback(callback, delay);

  return { state, setState, debouncedCallback };
}
