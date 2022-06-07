import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const data = useContext(DataContext);
  const [text, setText] = useState("");

  const navgator = useNavigate();

  //input 값을 받아오기
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 받아온 값을 버튼을 눌렀을때 data를 통해서 값 할당
  const loginUser = (e) => {
    e.preventDefault();
    data.action.setUser(text);
    // '/'페이지로이동
    navgator("/");
  };

  return (
    <Form onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default LoginForm;
