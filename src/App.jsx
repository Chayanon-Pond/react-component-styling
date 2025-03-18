import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section ">
        <Button type="Primary"/>
        <Button type="Secondary"/>
        <Button type="Error"/>
        <Button type="Success"/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="AlertError" />
        <Alert type="AlertWarning"/>
        <Alert type="AlertInfo"/>
        <Alert type="AlertSuccess"/>
      </div>
    </div>
  );
}

export default App;
