import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
// 자식 컴포넌트는 부모로부터 받는 props의 값이 바뀌게 되면 리렌더링 된다.
import HookExam from "./components/HookExam";

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  // };

  return (
    <>
      <HookExam></HookExam>
      {/* <Register></Register> */}
      {/* <Bulb></Bulb>
      <Counter /> */}

      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button> */}
    </>
  );
}

export default App;
