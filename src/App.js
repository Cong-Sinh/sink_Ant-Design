import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Rate />
        <Rate defaultValue={3} />
        <Rate defaultValue={3} allowHalf />
        <Rate defaultValue={2} allowClear={false} />
        <Rate defaultValue={2} count={3} style={{ color: "green" }} />
        <Rate
          defaultValue={2}
          count={3}
          style={{ color: "red" }}
          character={<HeartOutlined />}
          onChange={(value) => {
            console.log("onChange as ", value);
          }}
        />
      </header>
    </div>
  );
}

export default App;
