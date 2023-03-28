import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-700">
      <ul className="flex justify-center gap-x-8 p-4 text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/habit">Habits</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
