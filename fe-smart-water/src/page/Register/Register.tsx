import { Form, Input, Button, Message } from "@arco-design/web-react";

const FormItem = Form.Item;

const Register = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      style={{ width: 320 }}
      wrapperCol={{
        span: 24,
      }}
      onValuesChange={(v, vs) => {
        console.log(v, vs);
      }}
      onSubmit={(v) => {
        console.log(v);
        Message.success("success");
      }}
    >
      <FormItem
        field="name"
        rules={[{ required: true, message: "username is required" }]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem
        field="password"
        rules={[{ required: true, message: "password is required" }]}
      >
        <Input placeholder="please enter your password" />
      </FormItem>
      <FormItem
        field="email"
        rules={[{ required: true, message: "email is required" }]}
      >
        <Input placeholder="please enter your email" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" long>
          Register
        </Button>
      </FormItem>
    </Form>
  );
};
export default Register;
