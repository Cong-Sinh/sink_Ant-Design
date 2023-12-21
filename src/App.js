import {
  CheckCircleFilled,
  HeartOutlined,
  LoginOutlined,
  MenuOutlined,
  ProfileFilled,
} from "@ant-design/icons";
import { Button, Drawer, Form, Input, Menu, Rate, Steps } from "antd";
import { useState } from "react";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: "blue",
          height: "100vh",
        }}
      >
        <div>
          <MenuOutlined
            style={{
              color: "white",
              marginBottom: "10px",
            }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>
        <AppMenu />
        <Drawer
          open={openMenu}
          closable={false}
          onClose={() => {
            setOpenMenu(false);
          }}
          bodyStyle={{ backgroundColor: "darkorange" }}
        >
          <AppMenu isInline />
        </Drawer>
      </header>
    </div>
  );
}

function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{ backgroundColor: "orange", display: "flex" }}
      mode={isInline ? "inline" : "horizontal"}
      closable="closable"
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Context Us",
          key: "context",
        },
        {
          label: "About Us",
          key: "About",
        },
      ]}
    ></Menu>
  );
}

export default App;
