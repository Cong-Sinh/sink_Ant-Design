import { Button, Table, Upload } from "antd";

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
        <Upload.Dragger
          multiple
          listType="picture"
          action={"http:/localhost:3000/"}
          showUploadList={{ showRemoveIcon: true }}
          accept=".png,.jpeg,.doc"
          defaultFileList={[
            {
              uid: "abc",
              name: "sinhdz_file.png",
              status: "loading",
              percent: 50,
              url: "https://source.unsplash.com/featured",
            },
          ]}
        >
          <Button>Upload</Button>
        </Upload.Dragger>
      </header>
    </div>
  );
}

export default App;
