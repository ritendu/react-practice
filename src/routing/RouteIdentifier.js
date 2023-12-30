import { route } from "../routes/route";
import ProtectedRoute from "./Protected.route";
import { Routes, Route } from "react-router-dom";
const RouteIdentifier = () => {
  return (
    <Routes>
      {route.map((item) => {
        return item.protected ? (
          <Route path={item.path} element={<ProtectedRoute children={item.component}/>} />
        ) : (
          <Route path={item.path} element={item.component} />
        );
      })}
    </Routes>
  );
};

export default RouteIdentifier;
