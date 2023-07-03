import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { store as newSrcStore } from "./profile/redux/store";
import ThemeProvider from "./components/Theme/ThemeProvider";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("exnode") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Provider store={newSrcStore}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
