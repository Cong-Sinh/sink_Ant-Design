import { Loading3QuartersOutlined, OneToOneOutlined } from "@ant-design/icons";
import { width } from "@mui/system";
import { Button, Drawer, Dropdown, Menu, Skeleton, Space, Switch } from "antd";
import { useState } from "react";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Skeleton
          loading={true}
          active
          avatar={{ shape: "square" }}
          title={{ width: 300 }}
          paragraph={{ rows: 3, width: [200, 300, 100] }}
        >
          <div>hello</div>
        </Skeleton>
        <Skeleton.Avatar active shape="circle"></Skeleton.Avatar>
        <Skeleton.Button
          style={{ width: 200 }}
          active
          shape="round"
        ></Skeleton.Button>
        <Skeleton.Image active shape="circle"></Skeleton.Image>
        <Skeleton.Node active shape="circle">
          Loading...
        </Skeleton.Node>
      </header>
    </div>
  );
}

export default App;
