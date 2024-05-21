import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (user?.email) return children;

  return <Navigate state={location.pathname} to="/login" replace={true} />;
};
ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
