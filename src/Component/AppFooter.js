import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456768">123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Privacy{" "}
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Tems of Use
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
