import {
  DashboardOutlined,
  HomeFilled,
  RedEnvelopeOutlined,
} from "@ant-design/icons";
import { Input, Menu, Space, Typography } from "antd";
const { Text, Link, Paragraph } = Typography;
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
          <Menu
            mode="inline"
            defaultOpenKeys={["dashboard"]}
            items={[
              {
                label: (
                  <Input.Search placeholder="Search here..."></Input.Search>
                ),
                key: "search",
              },
              {
                label: "Home",
                key: "home",
                icon: <HomeFilled />,
              },
              {
                label: "Dashboard",
                key: "dashboard",
                icon: <DashboardOutlined />,
                children: [
                  {
                    label: "Revenue",
                    key: "rev",
                    icon: <RedEnvelopeOutlined />,
                  },
                  { label: "Expenses", key: "exp" },
                ],
              },
              {
                label: "User Management",
                key: "um",
                children: [
                  { label: "Edit Profile", key: "ep" },
                  { label: "Switch Account", key: "sa" },
                ],
              },
              {
                label: "Signout",
                key: "signout",
                danger: true,
              },
            ]}
          ></Menu>
        </Space>
      </header>
    </div>
  );
}

export default App;
