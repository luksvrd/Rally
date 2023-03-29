import { useState } from "react";
import { Input } from "../components/form";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <main className=" mx-9 my-20 rounded-md bg-white bg-opacity-25 py-2">
      <h2 className="py-5 text-center text-lg font-bold">
        {isRegistering ? "Register a New Account" : "Log in to your Account"}
      </h2>
      <form className="flex flex-col items-center gap-y-3 px-4">
        <Input
          type="text"
          label="Username"
          id="username"
          placeholder="Enter your username"
          required
        />
        {isRegistering ? (
          <Input
            type="text"
            label="Email"
            id="email"
            placeholder="Enter your email"
            required
          />
        ) : (
          <></>
        )}
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          className="my-2 rounded-lg border-2 border-black bg-white px-6"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsRegistering((prev) => !prev);
          }}
          className="text-center text-sm font-bold text-light-grey hover:scale-110"
        >
          {isRegistering ? "Already have an account?" : "Need to register?"}
        </button>
      </form>
    </main>
  );
}
