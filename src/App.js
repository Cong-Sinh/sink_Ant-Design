import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Menu, Space } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // height: "100vh",
          }
        }
      >
        <div>
          <Header />
          <div style={{ display: "flex" }}>
            <SideMenu />
            <Content />
          </div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "white",
      }}
    >
      Header
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            navigate(key);
          }
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          { label: "Dashboard", key: "/dashboard" },
          {
            label: "Users List",
            key: "/usersList",
            children: [
              { label: "Signout", key: "/signout" },
              { label: "signup", key: "/signup" },
            ],
          },
          { label: "Profile", key: "/profile" },
          {
            label: "Signout",
            key: "/signout",
            icon: <PoweroffOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "white",
      }}
    >
      Footer
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/Dashboard" element={<div>Dashboard</div>}></Route>
        <Route path="/UsersList" element={<div>UsersList</div>}></Route>
        <Route path="/Profile" element={<div>Profile dsfsdf</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
