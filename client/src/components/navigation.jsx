import { Link } from "react-router-dom";

export default function Navigation() {
  const token = window.localStorage.getItem("token");

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-transparent">
      <ul className="mt-5 flex justify-evenly text-light-grey">
        {token ? (
          <>
            <li
              className="rounded-md border-2 
            border-violet-400 p-1 px-2
            font-semibold text-white focus:bg-indigo-600
            focus:text-white focus:ring focus:ring-violet-300 active:bg-purple-200"
            >
              <Link to="/about">Home</Link>
            </li>
            <li
              className="rounded-md border-2 
            border-violet-400 p-1 px-2
            font-semibold text-white focus:bg-indigo-600
            focus:text-white focus:ring focus:ring-violet-300 active:bg-purple-200"
            >
              <Link to="/user">Profile</Link>
            </li>
            <li
              className="rounded-md border-2 
            border-violet-400 p-1 px-2
            font-semibold text-white focus:bg-indigo-600
            focus:text-white focus:ring focus:ring-violet-300 active:bg-purple-200"
            >
              <Link to="/groups">Groups</Link>
            </li>
            <li
              className="rounded-md border-2 
            border-violet-400 p-1 px-2
            font-semibold text-white focus:bg-indigo-600
            focus:text-white focus:ring focus:ring-violet-300 active:bg-purple-200"
            >
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li
            className="rounded-md border-2 
          border-violet-400 p-1 px-2
          font-semibold text-white focus:bg-indigo-600
          focus:text-white focus:ring focus:ring-violet-300 active:bg-purple-200"
          >
            <Link to="/Login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
