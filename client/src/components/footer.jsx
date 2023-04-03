import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  const isUserOrGroups = path === "/user" || path === "/groups";

  return (
    <footer
      className={`${
        isUserOrGroups ? "relative" : "fixed"
      } inset-x-1 bottom-2 mt-10 text-center text-xs text-light-grey`}
    >
      <p>© {new Date().getFullYear()} - All Rights Reserved</p>
    </footer>
  );
}
