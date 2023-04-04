import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet context="" />
      <Footer />
    </>
  );
}
