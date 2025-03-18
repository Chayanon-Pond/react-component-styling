import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div
        className="button-components-section"
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          gap: "4px",
        }}
      >
        {/* Render ตัว Button 2 แบบ */}
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {/* Render ตัว Alert 4 แบบ */}
        <Alert severity="error" content="This is error alert box" />
        <Alert severity="warning" content="This is a warning alert box" />
        <Alert severity="info" content="This is an info alert box" />
        <Alert severity="success" content="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
