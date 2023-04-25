import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FirstScreen } from "../screens/FirstScreen/FirstScreen";
import { ProjectsScreen } from "../screens/ProjectsScreen/ProjectsScreen";
export const Navigation = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location}>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/projectScreen" element={<ProjectsScreen />} />
      </Routes>
    </div>
  );
};
