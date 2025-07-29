import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  return (
    <div className="h-screen w-screen bg-primary text-textColor bg-bgColor">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
