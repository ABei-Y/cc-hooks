import React from 'react';
import {useBoolean} from 'cassie-hooks';


export default () => {
  const [flag, {toggle, setTrue, setFalse}] = useBoolean();

  return (
    <div>
      <p>flag值为：{flag + ''}</p>

      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </div>
  )
}