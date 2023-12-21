import { Loading3QuartersOutlined, OneToOneOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Menu, Space, Switch } from "antd";
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
        <Space size={12} direction="vertical">
          <Button
            onClick={() => {
              setVisible(true);
            }}
          >
            Open Drawer
          </Button>
          <Drawer
            visible={visible}
            title="Drawer title"
            footer="footer"
            onClose={() => {
              setVisible(false);
            }}
            placement="left"
          >
            <p>content</p>
            <Button
              onClick={() => {
                setVisible(false);
              }}
            >
              close
            </Button>
          </Drawer>
        </Space>
      </header>
    </div>
  );
}

export default App;
