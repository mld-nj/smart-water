import { useState, useRef, useCallback, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Carousel,
  Space,
  Checkbox,
  Alert,
} from "@arco-design/web-react";
import { IconUser, IconLock, IconEmail } from "@arco-design/web-react/icon";
import debounce from "../../utils/debounce";
import { register } from "../../api/user";
import "./Register.scss";

const Register = () => {
  const imageSrc = [
    "https://z3.ax1x.com/2021/12/02/oYDkff.png",
    "https://z3.ax1x.com/2021/12/02/oYDZ6g.png",
    "https://z3.ax1x.com/2021/12/02/oYDUB9.png",
  ];
  const [user, setUser] = useState({ userName: "", password: "", email: "" });
  const [errorMessage, setErrorMessage] = useState();
  const [showTip, setShowTip] = useState(false);
  const handleFormChange = (target: Object, value: any) => {
    // console.log(target, value);
    setUser(value);
  };
  const hanleSumbit = () => {
    const { userName, password, email } = user;
    register(userName, password, email).then((res) => {
      setShowTip(true);
      window.location.href = "/";
    });
  };

  return (
    <div className="registerContainer">
      {showTip ? (
        <Alert
          style={{ width: 200, position: "absolute", top: 20 }}
          type="success"
          content="注册成功"
        ></Alert>
      ) : null}
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
        <div className="register-form-wrapper">
          <div className="register-form-title">注册</div>
          <div className="register-form-error-msg">{errorMessage}</div>
          <Form
            className="register-form"
            layout="vertical"
            onValuesChange={(target, value) => {
              debounce(handleFormChange, 500)(target, value);
            }}
          >
            <Form.Item
              field="userName"
              rules={[{ required: true, message: "用户名不能为空" }]}
            >
              <Input prefix={<IconUser />} placeholder="用户名：" />
            </Form.Item>
            <Form.Item
              field="email"
              rules={[{ required: true, message: "邮箱不能为空" }]}
            >
              <Input prefix={<IconEmail />} placeholder="邮箱：" />
            </Form.Item>
            <Form.Item
              field="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password prefix={<IconLock />} placeholder="密码：" />
            </Form.Item>
            <Space size={16} direction="vertical">
              <Button
                type="primary"
                long
                className="register-form-register-btn"
                onClick={hanleSumbit}
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
