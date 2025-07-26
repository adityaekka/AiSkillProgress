import { Routes, Route } from "react-router-dom";
import {
  Home,
  HomeWithProjects,
  SkillPage,
  ProgressPage,
  NotFound,
} from "../pages/pages";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<HomeWithProjects />} />
        <Route path="/skills/:id" element={<SkillPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
