import { Routes, Route } from "react-router-dom";
import {
  Home,
  HomeWithProjects,
  SkillPage,
  ProgressPage,
  NotFound,
} from "../pages/pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<HomeWithProjects />} />
      <Route path="/skills/:id" element={<SkillPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
