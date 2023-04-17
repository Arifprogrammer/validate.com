import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showText, setShowText] = useState(true);

  //! send verification email process
  const sentVerification = (user) => {
    sendEmailVerification(user).then(() => {
      alert("Verification email sent to your email");
    });
  };

  //! register process
  const handleNewUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(password);
    setError("");
    setSuccess("");
    if (!/^(?=.*[A-Z])/.test(password)) {
      setError("Please type atleast one uppercase letter");
      return;
    } else if (!/^(?=.*\d)/.test(password)) {
      setError("Please type atleast one number");
      return;
    } else if (!/^(?=.*[@$!%*#?&])/.test(password)) {
      setError("Please type atleast one special character");
      return;
    } else if (password.length < 6) {
      setError("Password shoule be at least 6 character");
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        sentVerification(user);
        setShowText(!showText);
        e.target.reset();
        setSuccess("You've created your account successfully");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="min-h-[calc(100vh-110px)] flex justify-center items-center flex-col">
      {showText ? (
        <>
          <h1 className="text-2xl font-bold text-blue-600 mb-12">
            Please Register!!!
          </h1>
          <form className="flex flex-col gap-4 w-1/4" onSubmit={handleNewUser}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                name="name"
                type="text"
                placeholder="Your name..."
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                name="email"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                name="password"
                type="password"
                required={true}
              />
              <p className="text-red-800 font-semibold mt-4">{error}</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Register</Button>
            <p className="font-semibold">
              Already have an account? Please{" "}
              <Link to="/login" className="underline text-blue-600">
                Sign in
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

export default Register;
