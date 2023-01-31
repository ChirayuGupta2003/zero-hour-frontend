import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

const Root = () => {
  return (
    <AuthContextProvider>
      <div className="bg-[#f0f1f4] text-[#475569] min-h-screen pb-36">
        <Outlet />
      </div>
    </AuthContextProvider>
  );
};

export default Root;
