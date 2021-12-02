import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Carousel,
  Space,
  Checkbox,
} from "@arco-design/web-react";
import { IconUser, IconLock, IconEmail } from "@arco-design/web-react/icon";
import "./Register.scss";
const FormItem = Form.Item;

const Register = () => {
  const [form] = Form.useForm();
  const imageSrc = [
    "https://z3.ax1x.com/2021/12/02/oYDkff.png",
    "https://z3.ax1x.com/2021/12/02/oYDZ6g.png",
    "https://z3.ax1x.com/2021/12/02/oYDUB9.png",
  ];
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="registerContainer">
      <Carousel
        style={{
          width: 600,
          height: "100%",

          background:
            "linear-gradient(to top, #0A2A88, #59CDE9)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
        // autoPlay={true}
        animation="fade"
        indicatorType="line"
        showArrow="hover"
      >
        {imageSrc.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              style={{
                width: "100%",
              }}
            />
          </div>
        ))}
      </Carousel>
      <div className="formContainer">
        <div className="register-form-wrapper">
          <div className="register-form-title">注册</div>
          {/* <div className="register-form-sub-title">登录 地下水数据管理平台</div> */}
          <div className="register-form-error-msg">{errorMessage}</div>
          <Form
            className="register-form"
            layout="vertical"
            // ref={formRef}
          >
            <Form.Item
              field="userName"
              rules={[{ required: true, message: "用户名不能为空" }]}
            >
              <Input
                prefix={<IconUser />}
                placeholder="用户名："
                // onPressEnter={onSubmitClick}
              />
            </Form.Item>
            <Form.Item
              field="email"
              rules={[{ required: true, message: "邮箱不能为空" }]}
            >
              <Input
                prefix={<IconEmail />}
                placeholder="邮箱："
                // onPressEnter={onSubmitClick}
              />
            </Form.Item>
            <Form.Item
              field="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                prefix={<IconLock />}
                placeholder="密码："
                // onPressEnter={onSubmitClick}
              />
            </Form.Item>
            <Space size={16} direction="vertical">
              <Button
                type="primary"
                long
                className="register-form-register-btn"
              >
                注册账号
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
