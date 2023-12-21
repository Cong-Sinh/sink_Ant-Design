import { Loading3QuartersOutlined, OneToOneOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Switch } from "antd";
function App() {
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
          <Switch />
          <Switch defaultChecked={true} />
          <Switch
            defaultChecked={true}
            checkedChildren="On"
            unCheckedChildren="Off"
          />
          <Switch
            defaultChecked={true}
            checkedChildren={<OneToOneOutlined />}
            unCheckedChildren={<Loading3QuartersOutlined />}
          />
          <Switch
            defaultChecked={true}
            checkedChildren={<OneToOneOutlined />}
            unCheckedChildren={<Loading3QuartersOutlined />}
            disabled={true}
          />
          <Switch
            defaultChecked={true}
            checkedChildren="sfdgsdfgsdffgd"
            unCheckedChildren="sdfsdfadssdfgsdfgsdgdf"
          />
        </Space>
      </header>
    </div>
  );
}

export default App;
