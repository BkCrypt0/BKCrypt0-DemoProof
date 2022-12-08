import "./App.css";
import WineCollection from "./components/WineCollection";
import { useState } from "react";
import VerificationBackdrop from "./components/VerificationBackdrop";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const [open, setOpen] = useState(true);
  return (
    <Provider store={store}>
      <>
        {open === true && <VerificationBackdrop setOpen={setOpen} />}
        <div>
          <div
            style={{
              background: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white" }}>Rượu ngon - Uy tín số 1 Việt Nam</h1>
          </div>
          <WineCollection />
        </div>
      </>
    </Provider>
  );
}

export default App;
