/*
    This is the Register page
    - includes navbar with a left hand side link called RentWheelz and a right hand side link called Login.
    - Rentwheelz link should navigate to the root page /
    - Login link should navigate to the login page /login
    - content is centered on the page
    - uses the RegisterForm component to render the register form
*/
import React from "react";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

const Register: React.FC = () => {
  const handleRegisterSubmit = async (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <nav>
        <Link href="/">RentWheelz</Link>
        <Link href="/">Login</Link>
      </nav>
      <div style={{ textAlign: "center" }}>
        <RegisterForm onSubmit={handleRegisterSubmit} />
      </div>
    </div>
  );
};

export default Register;
