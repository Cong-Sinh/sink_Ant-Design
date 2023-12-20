import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Space direction="vertical">
          <Avatar style={{ backgroundColor: "green", color: "white" }}>
            Aamir
          </Avatar>

          <Avatar
            shape="square"
            style={{ backgroundColor: "black", color: "white" }}
          >
            A
          </Avatar>
          <Avatar src={"...."}></Avatar>
          <Avatar icon={<UserOutlined />}></Avatar>
          <Avatar.Group maxCount={2} maxPopoverPlacement="top">
            <Avatar style={{ backgroundColor: "green", color: "white" }}>
              Aamir
            </Avatar>
            <Avatar
              shape="square"
              style={{ backgroundColor: "black", color: "white" }}
            >
              A
            </Avatar>
            <Avatar style={{ backgroundColor: "pink", color: "white" }}>
              Sinh dz
            </Avatar>
          </Avatar.Group>
        </Space>
      </header>
    </div>
  );
}

export default App;
