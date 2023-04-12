import { FunctionComponent } from "react";
import Shape from "../components/login/ShapeComponent";
import Login from "../components/login/LoginComponent";
import "../components/login/LoginComponent.css"

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <>
      <Shape></Shape>
      <Login></Login>
    </>
  );
};

export default LoginPage;
