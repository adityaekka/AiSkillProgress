import { Header } from "../components/components";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
