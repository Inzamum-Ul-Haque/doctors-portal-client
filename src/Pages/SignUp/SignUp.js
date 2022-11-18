import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError("");

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully!");

        const userInfo = {
          displayName: data.name,
        };

        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8 border border-gray-300 shadow-xl">
        <h1 className="text-2xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Please provide an email!" })}
              placeholder="Email"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Please provide a password!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long!",
                },
                pattern: {
                  value:
                    /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                  message:
                    "Password must have 2 uppercase, 1 special, 1 digit and 2 lowercase characters!",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full max-w-xl"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-3"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-sm text-center mt-1">
          Already have an account?{" "}
          <Link className="text-secondary" to="/sign-in">
            Please Sign In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline uppercase w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
