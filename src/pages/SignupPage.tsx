import { FunctionComponent } from "react";
import Shape from "../components/login/ShapeComponent";
import "../components/login/LoginComponent.css"
import Signup from "../components/signup/SignupComponent";

interface SignupPageProps {}

const SignupPage: FunctionComponent<SignupPageProps> = () => {
  return (
    <>
      <Shape></Shape>
      <Signup></Signup>
    </>
  );
};

export default SignupPage;
