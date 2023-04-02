import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-transparent">
      <ul className="flex justify-between text-light-grey">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user">Profile</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
      </ul>
    </nav>
  );
}
