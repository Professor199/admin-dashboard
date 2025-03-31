import { useContext } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await login(values.email, values.password);
      message.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      message.error(error)
    }
  };

  return (
    <div style={{marginLeft:"800px",marginTop:"0px"}}>
    <Card title="Admin Login" style={{ width: 400 }}>
      <Form onFinish={handleSubmit}>
        <Form.Item name="email" rules={[{ required: true, message: "Enter email" }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Enter password" }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
      </Form>
    </Card>
    </div>
  );
};

export default Login;
