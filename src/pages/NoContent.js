import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const NoContentPage = () => {
    console.log("hello")
  const navigate = useNavigate();
  useEffect(() => {
    const signedIn = true;
    if (!signedIn) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []);
  return <></>;
};

export default NoContentPage;
