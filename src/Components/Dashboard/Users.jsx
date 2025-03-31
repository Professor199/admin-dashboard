import { Table, Button } from "antd";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Action",
      render: (_, record) => (
        <Button danger onClick={() => deleteUser(record.id)}>Delete</Button>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserList;
