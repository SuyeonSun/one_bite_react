import { useState } from "react";

function useForm() {
  const [formValue, setFormValue] = useState({});

  const onFormChange = (e) => {
    const newValue = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newValue);

    // 이벤트 루프, callstack, callbackqueue
    console.log(e.target.value);
    console.log("안바뀜", formValue);
    console.log("바뀜", newValue);
  };

  return [formValue, onFormChange];
}

export default useForm;
