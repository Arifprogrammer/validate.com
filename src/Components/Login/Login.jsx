import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showText, setShowText] = useState(true);
  const emailRef = useRef();
  const auth = getAuth(app);
  const handleOldUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        setSuccess("You've logged in successfully");
        setShowText(!showText);
      })
      .catch((error) => setError(error.message));
  };
  const handleResetPassword = () => {
    const refEmail = emailRef.current.value;
    if (refEmail.length > 0) {
      sendPasswordResetEmail(auth, refEmail)
        .then(() => alert("Password reset email send to your email"))
        .catch((error) => setError(error.message));
    } else {
      alert("Please type your email first");
      return;
    }
  };

  return (
    <div className="min-h-[calc(100vh-110px)] flex justify-center items-center flex-col">
      {showText ? (
        <>
          <h1 className="text-2xl font-bold text-blue-600 mb-12">
            Please Login!!!
          </h1>
          <form className="flex flex-col gap-4 w-1/4" onSubmit={handleOldUser}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                name="email"
                type="email"
                ref={emailRef}
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                name="password"
                type="password"
                required={true}
              />
              <p className="font-semibold mt-2">
                Forgot password?{" "}
                <span
                  className="text-slate-800 underline cursor-pointer"
                  onClick={handleResetPassword}
                >
                  Reset password
                </span>
              </p>
              <p className="text-red-800 font-semibold mt-2">{error}</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Login</Button>
            <p className="font-semibold">
              Do you Have an account? Please{" "}
              <Link to="/register" className="underline text-blue-600">
                Register
              </Link>
            </p>
          </form>
        </>
      ) : (
        <p className="text-green-800 font-semibold mt-2 text-4xl">{success}</p>
      )}
    </div>
  );
};

export default Login;
