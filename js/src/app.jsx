// render von preact statt von react-dom importieren
import { render } from "preact";
import Shop from "./components/Shop";

render(<Shop />, document.querySelector("#app"));
