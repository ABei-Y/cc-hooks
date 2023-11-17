import { useMemo } from 'react';
import useToggle from '../useToggle'  // 这里不能写cassie-hooks

export default function useBoolean(defaultValue = false) {

  const [boolean, {toggle, set}] = useToggle(!!defaultValue)

  const actions = useMemo(() => {
    
    const setTrue = () => set(true);
    const setFalse = () => set(false);

    return {
      toggle,
      set: v => set(v),
      setTrue,
      setFalse
    }
  }, [])

  return [boolean, actions]

}