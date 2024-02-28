/*
  this is the login page
  - includes navbar with a left hand side link called RentWheelz and a right hand side link called Register. 
  - Rentwheelz link should navigate to the root page /
  - Register link should navigate to the register page /register
  - content is centered on the page
  - uses the LoginForm component to render the login form
*/
import React from "react";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  const handleLoginSubmit = async (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="login-page">
      <nav>
        <Link href="/">RentWheelz</Link>
        <Link href="/register">Register</Link>
      </nav>
      <div className="content">
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
