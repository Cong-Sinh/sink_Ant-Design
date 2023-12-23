import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory, getOrders } from "../API/Index";

const Oders = () => {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
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
              title: "Id",
              dataIndex: "id",
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
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

export default Oders;
