/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Carousel,
  Space,
} from "@arco-design/web-react";
import { IconUser, IconLock } from "@arco-design/web-react/icon";
import "./Login.scss";
const FormItem = Form.Item;
const Login = () => {
  const imageSrc = [
    "https://z3.ax1x.com/2021/12/01/oYCABT.png",
    "https://z3.ax1x.com/2021/12/01/oYCuC9.png",
    "https://z3.ax1x.com/2021/12/01/oYC1u6.png",
  ];
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="loginContainer">
      <div className="carouselContainer">
        <Carousel
          style={{
            width: 600,
            height: 600,
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
      </div>
      <div className="formContainer">
        <div className="login-form-wrapper">
          <div className="login-form-title">登录 数据管理平台</div>
          {/* <div className="login-form-sub-title">登录 地下水数据管理平台</div> */}
          <div className="login-form-error-msg">{errorMessage}</div>
          <Form
            className="login-form"
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
              <div className="login-form-password-actions">
                <Checkbox
                // checked={rememberPassword}
                // onChange={setRememberPassword}
                >
                  记住密码
                </Checkbox>
                {/* <Link>忘记密码？</Link> */}
                <span>忘记密码？</span>
              </div>
              <Button
                type="primary"
                long
                // onClick={onSubmitClick}
                // loading={loading}
              >
                登录
              </Button>
              <Button type="text" long className="login-form-register-btn">
                注册账号
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
