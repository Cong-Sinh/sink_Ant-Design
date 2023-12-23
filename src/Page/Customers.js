import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../API/Index";

const Customers = () => {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Space size={20} direction="horizontal">
        <Table
          columns={[
            {
              title: "First Name",
              dataIndex: "firstName",
            },
            {
              title: "Last Name",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
            {
              title: "Address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
          loading={loading}
        ></Table>
      </Space>
    </div>
  );
};

export default Customers;
