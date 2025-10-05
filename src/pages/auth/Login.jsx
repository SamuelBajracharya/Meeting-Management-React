import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Title */}
      <div className="text-center">
        <Title level={2} className="!text-blue-950 !mb-2 !text-3xl font-bold">
          Welcome Back!
        </Title>
        <Text type="secondary" className="!text-gray-500 tracking-wide !text-lg !pb-8">
          Enter your office email below to Login
        </Text>
      </div>

      {/* Form */}
      <Form
        form={form}
        name="login"
        layout="vertical"
        onFinish={handleLogin}
        className="w-full !mt-6"
      >
        {/* Email */}
        <Form.Item
          label={<span className="text-blue-950 font-medium !text-lg">Email</span>}
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            placeholder="m@swifttech.com"
            size="large"
            className="rounded-2xl !h-[48px] !bg-white !text-black"
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label={<span className="text-blue-950 font-medium !text-lg">Password</span>}
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            placeholder="Enter your password"
            size="large"
            className="rounded-2xl !h-[48px] !bg-white !text-black"
          />
        </Form.Item>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <Link to="/auth/forgot-password" className="text-blue-900 text-md hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full !h-[48px] rounded-lg bg-blue-950 hover:bg-blue-700 font-medium mt-6"
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Sign up */}
      <div className="text-center mt-4">
        <Text className="text-gray-900 !text-lg">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-blue-950 font-medium hover:underline">
            Sign up
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default Login;
