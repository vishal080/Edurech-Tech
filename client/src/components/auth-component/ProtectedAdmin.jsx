import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service/api";

const ProtectedAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await api.get("/api/admin/me");
        setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) return <Navigate to="/admin-login" replace />;

  return <Outlet />;
};

export default ProtectedAdmin;