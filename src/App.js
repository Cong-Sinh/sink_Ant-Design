import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag, Upload } from "antd";
function App() {
  const existingTags = ["code", "code with amir", "reactjs"];
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
        <Tag>Custom Tag</Tag>
        <Tag closeIcon>Custom Tag</Tag>
        <Tag
          closable
          style={{
            backgroundColor: "red",
            color: "yellow",
            borderColor: "green",
            borderRadius: 10,
          }}
          closeIcon={<DeleteOutlined />}
        >
          Custom Tag
        </Tag>
        <Space>
          {existingTags.map((tag) => {
            return (
              <Tag key={tag} closable>
                {tag}
              </Tag>
            );
          })}
        </Space>
      </header>
    </div>
  );
}

export default App;
