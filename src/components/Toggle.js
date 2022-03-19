import React, { useState } from "react";

function Toggle() {

  const [toggle, setToggle] = useState('OFF')

  function swap() {
    setToggle(toggle === 'OFF' ? 'ON' : 'OFF')
  }

  return <button style={{ background: `${toggle === 'OFF' ? 'white' : 'red'}`}} onClick={swap}>{toggle}</button>;
}

export default Toggle;
