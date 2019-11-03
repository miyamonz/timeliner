import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./store";
import { TimerProvider } from "./useTimer";
import App from "./App";

ReactDOM.render(
  <Provider>
    <TimerProvider>
      <App />
    </TimerProvider>
  </Provider>,
  document.querySelector("#app")
);
