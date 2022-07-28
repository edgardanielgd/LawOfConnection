import React from "react";
import App from "./UI/App";

import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App/>
);