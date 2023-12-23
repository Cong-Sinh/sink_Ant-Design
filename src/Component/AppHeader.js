import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";
import React from "react";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/387135993_1975776042821715_7449377221917839909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=VmaqBHFGqfsAX93X_d7&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAVmOo_J7UhSeUyZTmwtUxAvJdzje-9PXgy0-jQz-ZAFQ&oe=658B0C3C"
      />
      <Typography.Title>Sinh dz</Typography.Title>
      <Space>
        <Badge count={20} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
