import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { LocaleProvider } from "antd";
import arEG from "antd/lib/locale-provider/ar_EG";

import frFR from "antd/lib/locale-provider/fr_FR";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
