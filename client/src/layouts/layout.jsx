import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";

export default function Layout() {
  // TODO: Use `useQuery` to fetch the user's data

  return (
    <>
      {/* TODO: Pass the user info directly to Navigation as a prop. All children Outlet components can access it via `useOutletContext` 👇🏾 */}
      <Navigation />
      <Header />

      {/* TODO: Add a value using Apollo Client's useQuery hook ☝️ 
        - use {} for INTERPOLATION
        - use CONDITIONAL CHAINING to make sure that there is `data` (i.e. `data?.user`)
      
      Use `useOutletContext()` in any Outlet  🧒🏾 component to access the user  ℹ️ info.
      https://reactrouter.com/en/main/hooks/use-outlet-context#useoutletcontext
       */}
      <Outlet context="" />
      <Footer />
    </>
  );
}
