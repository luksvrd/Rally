import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Input } from "../components/form";
import { LOGIN, REGISTER } from "../schema/mutations";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);

  const [register] = useMutation(REGISTER);

  const [login] = useMutation(LOGIN);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const submission = Object.fromEntries(fd);
    if (isRegistering) {
      register({ variables: { user: submission } });
    } else {
      login({ variables: { user: submission } });
    }
  };

  return (
    <main>
      <h2 className="text-center">
        {isRegistering ? "Register a New Account" : "Login Account"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-2 px-4"
      >
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
          className="button mt-4 bg-green-500 hover:bg-green-300"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsRegistering((prev) => !prev);
          }}
          className="text-center text-sm text-gray-500 hover:text-gray-300"
        >
          {isRegistering ? "Already have an account?" : "Need to register?"}
        </button>
      </form>
    </main>
  );
}
