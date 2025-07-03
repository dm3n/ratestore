
import { Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";

export const ProtectedRoutes = () => (
  <Route element={<ProtectedRoute />}>
    <Route path="/profile" element={<Profile />} />
    <Route path="/admin" element={<Admin />} />
  </Route>
);
