import { useEffect, useCallback, useState } from "react";
import Login from "../Login/Login";
import { isLogin } from "../../api/user";
const Index = () => {
  // const token = localStorage.getItem("token");
  const [validToken, setValidToken] = useState(false);
  useEffect(() => {
    isLogin().then((res) => {
      setValidToken(true);
    });
  }, []);
  return validToken ? (
    <div className="indexContainer">
      <p>index</p>
    </div>
  ) : (
    <Login></Login>
  );
};
export default Index;
