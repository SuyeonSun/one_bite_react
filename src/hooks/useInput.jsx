import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  const state = useState();

  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
