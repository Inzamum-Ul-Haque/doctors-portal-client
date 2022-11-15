import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8 border border-gray-300 shadow-xl">
        <h1 className="text-2xl text-center">Sign In</h1>
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
                  message: "Password should be strong",
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
