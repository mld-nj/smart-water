import { useEffect, useCallback, useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Index = () => {
  const token = localStorage.getItem("token");
  const [validToken, setValidToken] = useState(false);
  useEffect(() => {
    //校验token
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
