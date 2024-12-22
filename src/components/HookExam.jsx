import useInput from "./../hooks/useInput";
import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. Custom Hook 직접 만들 수 있다.

const HookExam = () => {
  const [formValue, onFormChange] = useForm();

  //   useEffect(() => {
  //     // console.log("effect", formValue);
  //   }, [formValue]);

  return (
    <div>
      <input name="name" value={formValue.name} onChange={onFormChange} />
      <input name="age" value={formValue.age} onChange={onFormChange} />
    </div>
  );
};

export default HookExam;
