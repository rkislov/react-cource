import { createRoot } from "react-dom/client";
import { restaurants } from '../mock.js'
import { App } from './components/App/App.jsx'
const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(<App restaurants={restaurants}/>)