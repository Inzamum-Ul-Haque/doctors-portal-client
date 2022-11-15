import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div>
        <h1 className="text-xl">Sign In</h1>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <label className="label-text">Email</label>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full max-w-xl"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <label className="label-text">Password</label>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full max-w-xl"
            />
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
