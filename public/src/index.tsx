import * as React from "react";
import * as ReactDOM from "react-dom";
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { index } from "./pages/index";

ReactDOM.render(
    <Index compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);