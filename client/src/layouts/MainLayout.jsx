import { Header } from "../components/components";
import { Outlet } from "react-router-dom";
import { chatbot } from "../assets/icons/icons";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="h-[10%]">
        <Header />
      </div>

      <main className="h-[90%] px-10 pb-10">
        <Outlet />
      </main>

      <div className="fixed bottom-4 left-4 z-40">
        <img className="w-14" src={chatbot} alt="chatbot.png" />
      </div>
    </div>
  );
};

export default MainLayout;
