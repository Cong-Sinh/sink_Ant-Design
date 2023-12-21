import {
  CopyOutlined,
  DeleteOutlined,
  FacebookOutlined,
  InstagramOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
function App() {
  const menu = (
    <Menu
      onClick={({ key }) => {
        console.log("you click on ", key);
      }}
      items={[
        {
          label: "Coppy",
          key: "coppy",
          icon: <CopyOutlined />,
        },
        {
          label: "Share",
          key: "share",
          children: [
            {
              label: "Facebook",
              key: "facebook",
              icon: <FacebookOutlined />,
            },
            {
              label: "Instagram",
              key: "instagram",
              icon: <InstagramOutlined />,
            },
          ],
        },
        {
          label: "Reload",
          key: "reload",
          icon: <ReloadOutlined />,
        },
        {
          label: "Delete",
          key: "delete",
          icon: <DeleteOutlined />,
        },
      ]}
    ></Menu>
  );
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
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "lightgray",
              border: "1px solid red",
            }}
          >
            Click Me
          </div>
        </Dropdown>
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <div>Click Me</div>
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
