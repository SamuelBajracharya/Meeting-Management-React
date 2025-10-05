import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SignUp = () => {
  const [form] = Form.useForm();

  const handleSignUp = (values) => {
    console.log("Sign Up Data:", values);
    // TODO: Add signup logic here (API call)
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Title */}
      <div className="text-center">
        <Title level={2} className="!text-blue-950 !mb-2 !text-3xl font-bold">
          Create an Account
        </Title>
        <Text type="secondary" className="!text-gray-500 tracking-wide !text-lg !pb-8">
          Sign up with your work account!
        </Text>
      </div>

      {/* Form */}
      <Form
        form={form}
        name="signup"
        layout="vertical"
        onFinish={handleSignUp}
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

        {/* Name */}
        <Form.Item
          label={<span className="text-blue-950 font-medium !text-lg">Name</span>}
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            placeholder="Enter your name"
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

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full !h-[48px] rounded-lg bg-blue-950 hover:bg-blue-800 font-medium mt-6"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      {/* Login Link */}
      <div className="text-center mt-4">
        <Text className="text-gray-900 !text-lg">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-950 font-medium hover:underline">
            Log In
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default SignUp;
