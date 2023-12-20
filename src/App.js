import {
  AppleFilled,
  DashboardOutlined,
  HomeFilled,
  RedEnvelopeOutlined,
} from "@ant-design/icons";
import { Input, Menu, Space, Tabs, Typography } from "antd";
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
          <Tabs>
            <Tabs.TabPane
              tab={
                <span>
                  <AppleFilled /> tab 1
                </span>
              }
              key="tab1"
            >
              <div> This is a content of Tab1</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="tab2">
              <div> This is a content of Tab1</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="tab3">
              <div> sfsdf</div>
            </Tabs.TabPane>
          </Tabs>

          <Tabs defaultActiveKey="tab1" tabPosition="left">
            <Tabs.TabPane tab="Tab 1" key="tab1">
              <div> This is a content of Tab1</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="tab2">
              <div> This is a content of Tab1</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="tab3">
              <div> sfsdf</div>
            </Tabs.TabPane>
          </Tabs>
        </Space>
      </header>
    </div>
  );
}

export default App;
