// import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Input, Select, DatePicker, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { color } from "@mui/system";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
          <Form.Item
            autoComplete="off"
            name="fullname"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 10 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="confirm Password" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="dob" label="Date of Birth">
            <DatePicker picker="date" placeholder="chose" />
          </Form.Item>

          <Form.Item name="website" label="website">
            <Input placeholder="add your url website" />
          </Form.Item>

          <Form.Item name="agreement" wrapperCol={{ span: 24 }}>
            <Checkbox>
              Agree to our <a href="/">Term add</a>{" "}
            </Checkbox>
          </Form.Item>

          <Form.Item name="website" label="website">
            <Input placeholder="add your url website" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
