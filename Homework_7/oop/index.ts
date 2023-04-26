import App from "./components/App/App";
import "./css/main.css"

const root = document.getElementById('root') as HTMLElement

root.append(new App().render());