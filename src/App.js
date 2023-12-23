import { Space } from "antd";
import AppHeader from "./Component/AppHeader";
import SideMenu from "./Component/SideMenu";
import PageContent from "./Component/PageContent";
import AppFooter from "./Component/AppFooter";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
