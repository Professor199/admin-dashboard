import UserList from "../Components/Dashboard/Users";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Button type="primary" onClick={() => { logout(); navigate("/"); }}>Logout</Button>
      <UserList />
    </div>
  );
};

export default Dashboard;
