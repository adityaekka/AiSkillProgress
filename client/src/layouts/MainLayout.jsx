import { Header } from "../components/components";
import { Outlet } from "react-router-dom";
import { chatbot } from "../assets/icons/icons";

const MainLayout = () => {
  return (
    <div className="min-h-screen relative bg-[#242423] text-[#f4f3ee]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <div className="fixed bottom-4 left-4 z-40">
        <img className="w-14" src={chatbot} alt="chatbot.png" />
      </div>
    </div>
  );
};

export default MainLayout;
