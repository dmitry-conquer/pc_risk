import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/tabs.js";
import "./modules/website-scanner.js";
import "./modules/header.js";

function app() {
  useDynamicAdapt("max");
}
document.addEventListener("DOMContentLoaded", app);
