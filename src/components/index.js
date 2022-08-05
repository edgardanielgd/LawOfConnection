import React from "react";
import App from "./UI/App";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App/>
);