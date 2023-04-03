import { Link } from "react-router-dom";

export default function Navigation() {
  const token = window.localStorage.getItem("token");

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-transparent">
      <ul className="flex justify-between text-light-grey">
        {token ? (
          <>
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/user">Profile</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/Login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
