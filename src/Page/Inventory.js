import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../API/Index";

const Inventory = () => {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Space size={20} direction="horizontal">
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },

            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
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

export default Inventory;
